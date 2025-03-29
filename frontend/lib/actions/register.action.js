"use client";

import { toast } from "sonner";

export const registerUser = async (selectedMethod, data) => {
  try {
    const response =
      selectedMethod === "email"
        ? await fetch("/api/user/mail/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: data.name,
              email: data.email,
              password: data.password,
            }),
          })
        : await fetch("/api/user/sms/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: data.name,
              phoneNumber: data.phoneNumber,
              password: data.password,
            }),
          });
    return await response.json();
  } catch (err) {
    toast("Something went wrong", {
      description: err.message,
    });
  }
};
