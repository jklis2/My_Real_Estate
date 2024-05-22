export interface InputField {
  id: string;
  label: string;
  placeholder: string;
}

export const FLAT_CHARGES: InputField[] = [
  {
    id: "administrativeRent",
    label: "Administrative Rent",
    placeholder: "Enter the amount for administrative rent",
  },
  { id: "water", label: "Water", placeholder: "Enter the amount for water" },
  {
    id: "electricity",
    label: "Electricity",
    placeholder: "Enter the amount for electricity",
  },

  {
    id: "internet",
    label: "Internet",
    placeholder: "Enter the amount for internet",
  },
];
