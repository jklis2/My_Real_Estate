import { useCreatePropertyMutation } from "../services/propertyApi";
import { Property } from "../interfaces/Property";
import { Address } from "../interfaces/Address";
import { PropertyType } from "../interfaces/PropertyType";

interface CreatePropertyProps {
  property: Property;
  address: Address;
  propertyType: PropertyType;
}

export const useCreateProperty = () => {
  const [createPropertyMutation] = useCreatePropertyMutation();

  const createProperty = async (propertyData: CreatePropertyProps) => {
    try {
      const { property } = propertyData;
      console.log(property);
    } catch (error) {
      console.error("Could not create property:", error);
      throw error;
    }
  };

  return { createProperty };
};
