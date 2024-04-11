import { useEffect } from "react";
import { useLazyGetPropertyQuery } from "../services/propertyApi";
import { useLazyGetPropertyTypeQuery } from "../services/propertyTypeApi";
import { useLazyGetAddressQuery } from "../services/addressApi";
import { Address } from "../interfaces/Address";
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
      getAddress("");
    }
  }, [getAddress, propertyData]);

  propertyError && console.log(propertyError);
  typeError && console.log(typeError);
  addressError && console.log(addressError);
  featuresError && console.log(featuresError);

  const selectedAddress =
    addressData &&
    addressData.result.filter(
      (addr: Address) => addr.propertyId === propertyId
    )[0];

  return {
    ...propertyData?.result[0],
    ...typeData?.result[0],
    ...selectedAddress,
    featuresList: featuresData?.result,
  };
};
