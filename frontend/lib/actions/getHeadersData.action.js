"use server";

import { headers } from "next/headers";

export async function getUserId() {
  const header = await headers();
  return header.get("x-user-id");
}
