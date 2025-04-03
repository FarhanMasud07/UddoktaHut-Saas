"use server";

export const VerifyStore = async ({ storeName }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/store/verified-store`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ storeName }),
        credentials: "include",
      }
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
