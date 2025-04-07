import { redirect } from "next/navigation";

export const getAuthenticUser = async ({ id }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/subscription/status`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: Number(id) }),
        credentials: "include",
      }
    );
    return await response.json();
  } catch (err) {
    console.log(err);
    redirect("/login");
  }
};

export const getAuthenticStore = async ({ storeName }) => {
  // console.log(storeName);
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/subscription/store/${storeName}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const registerUser = async (selectedMethod, data) => {
  try {
    const isEmail = selectedMethod === "email";
    const bodyData = isEmail
      ? JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        })
      : JSON.stringify({
          name: data.name,
          phoneNumber: data.phoneNumber,
          password: data.password,
        });

    const response = await fetch(`/api/user/${isEmail ? "mail" : "sms"}/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: bodyData,
      credentials: "include",
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = async (selectedMethod, data) => {
  try {
    const bodyData =
      selectedMethod === "email"
        ? JSON.stringify({
            email: data.email,
            password: data.password,
          })
        : JSON.stringify({
            phoneNumber: data.phoneNumber,
            password: data.password,
          });
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: bodyData,
      credentials: "include",
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
