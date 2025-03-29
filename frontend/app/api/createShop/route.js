import { CONFIG } from "@/lib/config";
import { NextResponse } from "next/server";
import { resolve } from "styled-jsx/css";

const mockDB = new Map(); // Temporary in-memory database

export async function POST(req) {
  const { shopName } = await req.json();

  if (!shopName) {
    return NextResponse.json(
      { error: "Shop name is required" },
      { status: 400 }
    );
  }

  const shopSlug = shopName.split(" ").join("-");

  if (mockDB.has(shopSlug)) {
    return NextResponse.json(
      { error: "Shop name already taken. Choose a different one." },
      { status: 409 }
    );
  }

  mockDB.set(shopSlug, { name: shopSlug, createdAt: new Date() });

  return NextResponse.json({
    shopSlug,
    shopURL: CONFIG.isProd
      ? `https://${shopSlug}.uddoktahut.com`
      : `http://${shopSlug}.uddoktahut.local:3000`,
  });
}
