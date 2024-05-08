import { useEffect } from "react";
import { useLazyGetPropertyQuery } from "../services/propertyApi";
import { useLazyGetPropertyTypeQuery } from "../services/propertyTypeApi";
import { useLazyGetAddressQuery } from "../services/addressApi";

export const useMergedProperty = (propertyId: string) => {
  const [getProperty, { data: propertyData, error: propertyError }] =
    useLazyGetPropertyQuery();
  const [getPropertyType, { data: typeData, error: typeError }] =
    useLazyGetPropertyTypeQuery();
  const [getAddress, { data: addressData, error: addressError }] =
    useLazyGetAddressQuery();

  useEffect(() => {
    getProperty(propertyId);
    getPropertyType(propertyId);
  }, [getProperty, getPropertyType, propertyId]);

  useEffect(() => {
    if (propertyData) {
      getAddress({ propertyId });
    }
  }, [getAddress, propertyData, propertyId]);

  propertyError && console.log(propertyError);
  typeError && console.log(typeError);
  addressError && console.log(addressError);

  return {
    ...propertyData?.result[0],
    ...typeData?.result[0],
    ...addressData?.result[0],
  };
};
