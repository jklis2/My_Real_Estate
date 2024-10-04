import { Property } from 'interfaces/Property';
import { Address } from 'interfaces/Address';
import { PropertyType } from 'interfaces/PropertyType';
import { useGetUserQuery } from 'services/userApi';
import { useCreatePropertyTypeMutation } from 'services/propertyTypeApi';
import { useCreatePhotosMutation } from 'services/photoApi';
import { useCreatePropertyMutation } from 'services/propertyApi';
import { useCreateAddressMutation } from 'services/addressApi';

interface CreatePropertyProps {
  property: Property;
  address: Address;
  propertyType: PropertyType;
}

export function useCreateProperty() {
  const [createPropertyMutation] = useCreatePropertyMutation();
  const [createAddressMutation] = useCreateAddressMutation();
  const [createPropertyTypeMutation] = useCreatePropertyTypeMutation();
  const [createPhotosMutation] = useCreatePhotosMutation();

  const { data: userData } = useGetUserQuery(null);

  async function createProperty(propertyData: CreatePropertyProps) {
    try {
      const { property, address, propertyType } = propertyData;
      const { photos, ...propertyWithoutPhoto } = property;
      const { id: userId } = userData.result[0];

      const propertyResponse = await createPropertyMutation({
        ...propertyWithoutPhoto,
        userId,
      }).unwrap();

      if (propertyResponse) {
        const { propertyId } = propertyResponse;

        await createAddressMutation({
          address,
          state: 1,
          propertyId,
        }).unwrap();

        await createPropertyTypeMutation({ propertyType, propertyId }).unwrap(); // PropertyType { propertyTypeName: "Apartment" }

        if (photos && photos.length > 0) {
          await createPhotosMutation({
            propertyId,
            photos,
          }).unwrap();
        }
      }
    } catch (error) {
      console.error('Could not create property:', error);
      throw error;
    }
  }

  return { createProperty };
}
