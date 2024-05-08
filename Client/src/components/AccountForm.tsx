import { useForm, SubmitHandler } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import { useEffect } from "react";
import { useEditUserMutation } from "../services/userApi";
import { useState } from "react";
import Alert from "./Alert";

interface AccountInputs {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export default function AccountForm({
  id,
  firstName,
  lastName,
  email,
}: AccountInputs) {
  const [show, setShow] = useState(false);
  const { register, handleSubmit, reset } = useForm<AccountInputs>();
  const [editUser, { error }] = useEditUserMutation();

  const onSubmit: SubmitHandler<AccountInputs> = (data) => {
    try {
      editUser({ data, id });
      setShow(true);
    } catch {
      console.log(error);
      setShow(true)
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
            <Input
              type="text"
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="First Name"
              id="firstName"
              placeholder="Enter first name"
              {...register("firstName")}
            />
          </div>
          <div className="flex flex-col w-full">
            <Input
              type="text"
              className="w-full p-3 border border-slate-300 rounded-xl"
              label="Last Name"
              id="lastName"
              placeholder="Enter last Name"
              {...register("lastName")}
            />
          </div>
        </div>
        <div className="flex flex-col mt-3">
          <Input
            className="p-3 border border-slate-300 rounded-xl"
            type="text"
            label="E-mail"
            id="email"
            placeholder="Enter e-mail"
            autoComplete="email"
            {...register("email")}
          />
        </div>
        <Button className="my-5 px-16">Save changes</Button>
      </form>

      {error && show && (
        <Alert
          name="An error occured!"
          type="Error"
          isVisible={show}
          onClose={() => setShow(false)}
        />
      )}

      {!error && show && (
        <Alert
          name="Account updated successfully"
          type="Success"
          isVisible={show}
          onClose={() => setShow(false)}
        />
      )}
    </>
  );
}
