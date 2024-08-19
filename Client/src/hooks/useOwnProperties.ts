import { useState, useEffect } from 'react';
import { useLazyGetOwnPropertiesQuery } from 'services/propertyApi';
import { useLazyGetAddressQuery } from 'services/addressApi';
import { useGetUserQuery } from 'services/userApi';
import { Property } from 'interfaces/Property';
import { Address } from 'interfaces/Address';

interface Addresses {
  [key: string]: {
    result: Address[];
  };
}
export const useOwnProperties = () => {
  const { data: userData } = useGetUserQuery(null);
  const [addresses, setAddresses] = useState<Addresses>({});
  const [getOwnProperty, { data: propertyData, error: propertyError }] = useLazyGetOwnPropertiesQuery();
  const [getAddress, { error: addressError }] = useLazyGetAddressQuery();

  useEffect(() => {
    if (userData) {
      getOwnProperty(userData?.result[0]?.id);
    }
  }, [getOwnProperty, userData]);

  useEffect(() => {
    if (propertyData && propertyData?.result.length > 0) {
      propertyData?.result?.map((prop: Property) => {
        getAddress(prop.id).then(response => {
          setAddresses(prevAddresses => ({
            ...prevAddresses,
            [prop.id]: response.data,
          }));
        });
      });
    }
  }, [propertyData, getAddress]);

  propertyError && console.log(propertyError);
  addressError && console.log(addressError);

  return {
    ...propertyData,
    addresses,
  };
};
