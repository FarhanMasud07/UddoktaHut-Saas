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
            credentials: "include",
          })
        : await fetch("/api/user/sms/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: data.name,
              phoneNumber: data.phoneNumber,
              password: data.password,
            }),
            credentials: "include",
          });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
