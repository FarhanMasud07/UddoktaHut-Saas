export const passwordRules = [
  {
    label: "At least 6 characters",
    test: (val) => val.length >= 6,
  },
  // {
  //     label: "At most 12 characters",
  //     test: (val) => val.length <= 12,
  // },
  // {
  //     label: "At least one uppercase letter",
  //     test: (val) => /[A-Z]/.test(val),
  // },
  // {
  //     label: "At least one lowercase letter",
  //     test: (val) => /[a-z]/.test(val),
  // },
  // {
  //     label: "At least one number",
  //     test: (val) => /\d/.test(val),
  // },
  // {
  //     label: "At least one special character (@$!%*?&)",
  //     test: (val) => /[@$!%*?&]/.test(val),
  // },
];

export const protectedRoutes = ["/onboarding", "/dashboard", "/profile"];
