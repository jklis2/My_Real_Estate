const FEATURES = [
  { id: 1, name: "All analytics features" },
  { id: 2, name: "Basic tracking of payments and bills" },
  { id: 3, name: "Management of individual properties" },
  { id: 4, name: "Automatic generation of financial reports" },
  { id: 5, name: "Normal support" },
];

export const PLANS = [
  {
    id: 0,
    plan: "Free",
    variant: "light",
    price: 0,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    features: FEATURES,
  },
  {
    id: 1,
    plan: "Premium",
    variant: "dark",
    price: 50,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    features: FEATURES,
  },
  {
    id: 2,
    plan: "Enterprise",
    variant: "light",
    price: 100,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    features: FEATURES,
  },
];
