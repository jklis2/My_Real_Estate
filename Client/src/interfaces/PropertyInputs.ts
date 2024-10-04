import { Property } from 'interfaces/Property.ts';
import { Address } from 'interfaces/Address.ts';
import { PropertyType } from 'interfaces/PropertyType.ts';

export interface PropertyInputs {
  property: Property;
  address: Address;
  propertyType: PropertyType;
}
