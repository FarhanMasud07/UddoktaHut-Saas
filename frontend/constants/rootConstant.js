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

export const protectedRoutes = ["/onboarding", "/dashboard"];

export const allRoles = {
  admin: 1,
  employee: 2,
};

export const businessTypes = [
  { key: "clothing", name: "Clothing & Apparel" },
  { key: "shoes", name: "Shoes & Footwear" },
  { key: "accessories", name: "Accessories & Jewelry" },
  { key: "beauty", name: "Beauty & Cosmetics" },
  { key: "electronics", name: "Electronics & Gadgets" },
  { key: "home", name: "Home & Furniture" },
  { key: "books", name: "Books & Media" },
  { key: "toys", name: "Toys & Games" },
  { key: "sports", name: "Sports & Outdoors" },
  { key: "health", name: "Health & Wellness" },
  { key: "food", name: "Food & Beverage" },
  { key: "pets", name: "Pet Supplies" },
  { key: "grocery", name: "Grocery" },
  { key: "pharmacy", name: "Pharmaceuticals" },
  { key: "utilities", name: "Utilities" },
  { key: "others", name: "Others" },
];
