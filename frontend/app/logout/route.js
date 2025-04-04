import { CONFIG } from "@/lib/config";
import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.redirect(
    `${
      CONFIG.isProd
        ? process.env.NEXT_PUBLIC_BASE_URL
        : "http://uddoktahut.local:4000"
    }/login`
  );

  response.cookies.set("accessToken", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Lax",
    path: "/",
  });

  response.cookies.set("refreshToken", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Lax",
    path: "/",
  });

  response.cookies.delete("accessToken");
  response.cookies.delete("refreshToken");

  return response;
}
