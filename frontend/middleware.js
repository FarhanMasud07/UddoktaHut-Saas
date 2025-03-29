import { NextResponse } from "next/server";
import { CONFIG } from "./lib/config";
import { protectedRoutes } from "./constants/rootConstant";
import jwt from "jsonwebtoken";

export function middleware(req) {
  const host = req.headers.get("host") || "";

  if (!host) return NextResponse.next();

  if (req.nextUrl.pathname.startsWith("/_next/")) return NextResponse.next();

  if (req.nextUrl.pathname.startsWith("/api/")) return NextResponse.next();

  const isProtectedRoute = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );
  if (isProtectedRoute) {
    const accessToken = req.cookies.get("accessToken")?.value;
    if (!accessToken) return NextResponse.redirect(new URL("/login", req.url));

    try {
      const decode = jwt.decode(accessToken, process.env.JWT_SECRET);
      if (decode) {
        const requestHeaders = new Headers(req.headers);
        requestHeaders.set("x-user-roles", decode.roles);
        requestHeaders.set("x-user-id", decode.id);
        return NextResponse.next({
          request: {
            headers: requestHeaders,
          },
        });
      } else {
        return NextResponse.redirect(new URL("/login", req.url));
      }
    } catch (err) {
      console.log(err);
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return CONFIG.isProd
    ? productionMiddleware(host, req)
    : developmentMiddleware(host, req);
}

function productionMiddleware(host, req) {
  if (host === "uddoktahut.com" || host === "www.uddoktahut.com") {
    return NextResponse.next();
  }

  if (host.endsWith(".uddoktahut.com")) {
    const subdomain = host.split(".")[0];

    if (subdomain) {
      const url = req.nextUrl.clone();
      url.pathname = `/store/${subdomain}${req.nextUrl.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

function developmentMiddleware(host, req) {
  host = host.split(":")[0];

  if (host === "uddoktahut.local" || host === "www.uddoktahut.local") {
    return NextResponse.next();
  }

  if (host.endsWith(".uddoktahut.local")) {
    const subdomain = host.split(".")[0];

    if (subdomain) {
      const url = req.nextUrl.clone();
      url.pathname = `/store/${subdomain}${req.nextUrl.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}
