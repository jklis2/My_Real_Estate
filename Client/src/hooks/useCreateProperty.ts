import { useCreatePropertyMutation } from "../services/propertyApi";
import { useCreateAddressMutation } from "../services/addressApi";
import { Property } from "../interfaces/Property";
import { Address } from "../interfaces/Address";
import { PropertyType } from "../interfaces/PropertyType";
import { useGetUserQuery } from "../services/userApi";
import { useCreatePropertyTypeMutation } from "../services/propertyTypeApi";

interface CreatePropertyProps {
  property: Property;
  address: Address;
  propertyType: PropertyType;
}

export function useCreateProperty() {
  const [createPropertyMutation] = useCreatePropertyMutation();
  const [createAddressMutation] = useCreateAddressMutation();
  const [createPropertyTypeMutation] = useCreatePropertyTypeMutation();

  const { data: userData } = useGetUserQuery(null);

  const createProperty = async (propertyData: CreatePropertyProps) => {
    try {
      const { property, address, propertyType } = propertyData;
      const { photos, ...propertyWithoutPhoto } = property;

      //1 -> Send a request, with property creation
      const { id: userId } = userData.result[0];

      const propertyResponse = await createPropertyMutation({
        ...propertyWithoutPhoto,
        userId,
      }).unwrap();

      // 2 -> If it success It will return propertyId
      if (propertyResponse) {
        const { propertyId } = propertyResponse;
        // 2.1 -> Send a request with address
        await createAddressMutation({
          ...address,
          state: 1,
          propertyId,
        }).unwrap();
        // 2.2 -> Send a request with propertyType
        await createPropertyTypeMutation(propertyType).unwrap();
        // 2.3 -> Send a request with Photos
        console.log(propertyId);
      }
      //3 -> If it fails do not do sth more
    } catch (error) {
      console.error("Could not create property:", error);
      throw error;
    }
  };

  return { createProperty };
}
