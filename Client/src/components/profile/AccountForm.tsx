import { useForm, SubmitHandler } from 'react-hook-form';
import Input from 'components/shared/Input.tsx';
import Button from 'components/shared/Button.tsx';
import { useEffect } from 'react';
import { useEditUserMutation } from 'services/userApi.ts';
import { useState } from 'react';
import Alert from 'components/shared/Alert.tsx';

interface AccountInputs {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export default function AccountForm({ id, firstName, lastName, email }: AccountInputs) {
  const [show, setShow] = useState(false);
  const { register, handleSubmit, reset } = useForm<AccountInputs>();
  const [editUser, { error, isLoading }] = useEditUserMutation();

  const onSubmit: SubmitHandler<AccountInputs> = async data => {
    try {
      editUser({ data, id }).unwrap();
      if (!isLoading) {
        setShow(true);
      }
    } catch {
      if (!isLoading) {
        setShow(true);
      }
    }
  };

  useEffect(() => {
    if (firstName || lastName || email) {
      reset({
        firstName,
        lastName,
        email,
      });
    }
  }, [firstName, lastName, email, reset]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between gap-3 lg:gap-6 mt-3 lg:flex-row flex-col">
          <div className="flex flex-col w-full">
            <Input type="text" className="w-full p-3 border border-slate-300 rounded-xl" label="First Name" id="firstName" placeholder="Enter first name" {...register('firstName')} />
          </div>
          <div className="flex flex-col w-full">
            <Input type="text" className="w-full p-3 border border-slate-300 rounded-xl" label="Last Name" id="lastName" placeholder="Enter last Name" {...register('lastName')} />
          </div>
        </div>
        <div className="flex flex-col mt-3">
          <Input className="p-3 border border-slate-300 rounded-xl" type="text" label="E-mail" id="email" placeholder="Enter e-mail" autoComplete="email" {...register('email')} />
        </div>
        <Button className="my-5 px-16">Save changes</Button>
      </form>

      {!isLoading && error && show && (
        <Alert
          name={typeof error === 'object' && true && 'data' in error ? (error.data as { message?: string }).message || 'An error occurred.' : 'An error occurred.'}
          type="Error"
          isVisible={show}
          onClose={() => setShow(false)}
        />
      )}

      {!isLoading && !error && show && <Alert name="Address updated successfully" type="Success" isVisible={show} onClose={() => setShow(false)} />}
    </>
  );
}
