export interface Address {
  _id: string;
  country: string;
  region: string;
  zip_code: string;
  city: string;
  street_name: string;
  street_number: string;
  state: number;
  propertyId?: string;
  userId?: string;
}
