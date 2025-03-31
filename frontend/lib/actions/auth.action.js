import { redirect } from "next/navigation";

export const getOnboardedUser = async ({ id }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/authenticate`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
        credentials: "include",
      }
    );
    const authSuccess = await response.json();
    if (!authSuccess?.onboarded) return null;
    return authSuccess.onboarded;
  } catch (err) {
    console.log(err);
    redirect("/login");
  }
};
