import { useEffect } from "react";
import { useLazyGetPropertyQuery } from "../services/propertyApi";
import { useLazyGetPropertyTypeQuery } from "../services/propertyTypeApi";
import { useLazyGetAddressQuery } from "../services/addressApi";
import { useLazyGetFeaturesQuery } from "../services/featuresApi";

export const useMergedProperty = (propertyId: string) => {
  const [getProperty, { data: propertyData, error: propertyError }] =
    useLazyGetPropertyQuery();
  const [getPropertyType, { data: typeData, error: typeError }] =
    useLazyGetPropertyTypeQuery();
  const [getAddress, { data: addressData, error: addressError }] =
    useLazyGetAddressQuery();
  const [getFeatures, { data: featuresData, error: featuresError }] =
    useLazyGetFeaturesQuery();

  useEffect(() => {
    getProperty(propertyId);
    getPropertyType(propertyId);
    getFeatures(propertyId);
  }, [getProperty, getPropertyType, getFeatures, propertyId]);

  useEffect(() => {
    if (propertyData) {
      getAddress(propertyId);
    }
  }, [getAddress, propertyData, propertyId]);

  propertyError && console.log(propertyError);
  typeError && console.log(typeError);
  addressError && console.log(addressError);
  featuresError && console.log(featuresError);

  return {
    ...propertyData?.result[0],
    ...typeData?.result[0],
    ...addressData?.result[0],
    featuresList: featuresData?.result,
  };
};
