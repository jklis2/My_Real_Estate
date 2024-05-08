export interface Address {
  id: string;
  country: string;
  region: string;
  zipCode: string;
  city: string;
  streetName: string;
  streetNumber: string;
  state: number;
  propertyId?: string;
  userId?: string;
}
