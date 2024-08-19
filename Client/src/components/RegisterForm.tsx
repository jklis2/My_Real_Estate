import React, { useState } from 'react';
import P from 'components/shared/P.tsx';
import Input from 'components/shared/Input.tsx';
import Select from 'components/shared/Select.tsx';

export default function RegisterForm() {
  const inputClasses = 'text-lg pl-5 h-10 sm:min-w-96 w-full bg-gray-200 rounded-md border-b border-gray-300 text-gray-500 placeholder-gray-500 focus:ring-2 focus:ring-blue-200 focus:outline-none';
  const selectClasses = 'text-lg pl-5 h-10 w-full bg-gray-200 rounded-md border-b border-gray-300 text-gray-500 focus:ring-2 focus:ring-blue-200 focus:outline-none';
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <form>
      <div className="flex flex-col mb-3">
        <Input type="text" id="firstName" label="First Name" placeholder="First Name" required={true} className={inputClasses} />
      </div>

      <div className="flex flex-col mb-3">
        <Input type="text" id="LastName" label="Last Name" placeholder="Last Name" required={true} className={inputClasses} />
      </div>

      <div className="flex flex-col mb-3">
        <Input type="text" id="Email" label="E-mail" placeholder="E-mail" required={true} className={inputClasses} />
      </div>

      <div className="flex flex-col mb-3">
        <Input type="text" id="pesel" label="PESEL" placeholder="PESEL" required={true} className={inputClasses} />
      </div>

      <Select
        label="Gender"
        id="gender"
        placeholder="Select Gender"
        options={['Male', 'Female', "I don't wish to answer"]}
        selectedOption={selectedOption}
        className={selectClasses}
        onChange={handleChange}
      />

      <div className="flex flex-col ">
        <Input type="text" id="password" label="Password" placeholder="Password" required={true} className={inputClasses} />
      </div>

      <P className="text-xs mb-3">It must be a combination of minimum 8 letters, numbers, and symbols.</P>
      <div className="flex flex-col mb-3">
        <Input type="text" id="confirmPassword" label="Confirm your password" placeholder="Confirm your password" required={true} className={inputClasses} />
      </div>
    </form>
  );
}
