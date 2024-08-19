import { useEffect } from 'react';
import { useLazyGetAddressQuery } from 'services/addressApi.ts';
import { useGetUserQuery } from 'services/userApi.ts';
import H2 from 'components/shared/H2.tsx';
import AccountForm from 'components/profile/AccountForm.tsx';
import AddressForm from 'components/profile/AddressForm.tsx';

export default function ProfileForms() {
  const [getAddress, { data }] = useLazyGetAddressQuery();
  const { data: userData } = useGetUserQuery(null);

  useEffect(() => {
    if (userData?.result[0]) getAddress({ propertyId: null, userId: userData?.result[0].id });
  }, [getAddress, userData]);

  const userDetails = userData?.result[0];

  return (
    <section>
      <AccountForm id={userDetails?.id} firstName={userDetails?.firstName} lastName={userDetails?.lastName} email={userDetails?.email} />
      <H2 className="my-4">Address Details</H2>
      {data && <AddressForm {...data?.result[0]} />}
    </section>
  );
}
