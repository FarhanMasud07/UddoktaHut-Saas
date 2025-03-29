export const ENV = process.env.NEXT_PUBLIC_ENV || "development";

export const CONFIG = {
  isDev: ENV === "development",
  isProd: ENV === "production",
};
