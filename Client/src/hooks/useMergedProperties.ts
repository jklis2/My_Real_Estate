import { useLazyGetPropertiesQuery } from "../services/propertyApi";
import { useLazyGetPropertyTypesQuery } from "../services/propertyTypeApi";
import { useLazyGetFeaturesQuery } from "../services/featuresApi";
import { useLazyGetAddressesQuery } from "../services/addressApi";
import { useEffect } from "react";

export const useMergedProperties = () => {
  const [getProperties, { data: propertiesData, error: propertiesError }] =
    useLazyGetPropertiesQuery();
  const [getPropertyTypes, { data: typesData, error: typesError }] =
    useLazyGetPropertyTypesQuery();
  const [getFeatures, { data: featuresData, error: featuresError }] =
    useLazyGetFeaturesQuery();
  const [getAddresses, { data: addressesData, error: addresessError }] =
    useLazyGetAddressesQuery();

  useEffect(() => {
    getProperties("");
    getPropertyTypes("");
    getFeatures("");
    getAddresses("");
  }, [getProperties, getPropertyTypes, getFeatures, getAddresses]);

  propertiesError && console.log(propertiesError);
  typesError && console.log(typesError);
  featuresError && console.log(featuresError);
  addresessError && console.log(addresessError);

  return {
    properties: propertiesData?.result,
    types: typesData?.result,
    features: featuresData?.result,
    addresses: addressesData?.result,
  };
};
