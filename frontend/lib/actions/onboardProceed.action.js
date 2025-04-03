import { CONFIG } from "../config";

export const OnboardProceed = async (data) => {
  const { userId, roles, storeName, storeType, storeAddress } = data;
  try {
    const shopSlug = storeName
      .split(" ")
      .join("-")
      .trim()
      .replace(/[^a-z0-9\s-]/g, "") // Remove special chars like &, %, @
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-")
      .toLowerCase();

    const response = await fetch("/api/user/assign-role", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        roles,
        storeName: shopSlug,
        storeType,
        storeAddress,
        storeUrl: CONFIG.isProd
          ? `https://${shopSlug}.uddoktahut.com`
          : `http://${shopSlug}.uddoktahut.local:4000`,
      }),
      credentials: "include",
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
