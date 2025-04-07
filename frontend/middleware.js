import { NextResponse } from "next/server";
import { CONFIG } from "./lib/config";
import { allRoles, protectedRoutes } from "./constants/rootConstant";
import { jwtVerify } from "jose";

export async function middleware(req) {
  const host = req.headers.get("host") || "";

  if (!host) return NextResponse.next();

  if (req.nextUrl.pathname.startsWith("/_next/")) return NextResponse.next();

  if (req.nextUrl.pathname.startsWith("/api/")) return NextResponse.next();

  const isProtectedRoute = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );
  const path = req.nextUrl.pathname;
  if (isProtectedRoute) {
    const accessToken = req.cookies.get("accessToken")?.value;
    if (!accessToken) return NextResponse.redirect(new URL("/login", req.url));

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);

      const { payload } = await jwtVerify(accessToken, secret);

      const requestHeaders = new Headers(req.headers);

      if (!payload?.id)
        return NextResponse.redirect(new URL("/login", req.url));

      requestHeaders.set("x-user-id", payload.id);

      if (payload.storeUrl) requestHeaders.set("x-store-url", payload.storeUrl);

      const onboarded = payload.onboarded || false;
      const roles = payload.roles || [];
      const isAdmin = roles.includes(allRoles.admin);
      const isEmployee = roles.includes(allRoles.employee);

      if (!onboarded && path !== "/onboarding") {
        return NextResponse.redirect(new URL("/onboarding", req.url));
      }

      if ((isAdmin || isEmployee) && onboarded && path === "/onboarding") {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
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
      const response = NextResponse.rewrite(url);
      response.cookies.set("subdomain", subdomain);
      return response;
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
      const response = NextResponse.rewrite(url);
      response.cookies.set("subdomain", subdomain);
      return response;
    }
  }

  return NextResponse.next();
}
