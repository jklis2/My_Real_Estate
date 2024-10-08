import { ChargeField } from '../interfaces/ChargeField';

export const FLAT_CHARGES: ChargeField[] = [
  {
    id: 'administrativeRent',
    label: 'Administrative Rent',
    placeholder: 'Enter the amount for administrative rent',
  },
  { id: 'water', label: 'Water', placeholder: 'Enter the amount for water' },
  {
    id: 'electricity',
    label: 'Electricity',
    placeholder: 'Enter the amount for electricity',
  },

  {
    id: 'internet',
    label: 'Internet',
    placeholder: 'Enter the amount for internet',
  },
];
