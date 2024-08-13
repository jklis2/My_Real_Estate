import { useState } from "react";
import Button from "../components/shared/Button.tsx";
import H2 from "../components/shared/H2.tsx";
import Input from "../components/shared/Input.tsx";
import ChargesModal from "../components/ChargesModal";
import { FLAT_CHARGES, InputField } from "../consts/flatCharges";

export default function FlatCharges() {
  const [inputs, setInputs] = useState<InputField[]>(FLAT_CHARGES);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const handleAddInput = (label: string, placeholder: string) => {
    const newInput: InputField = {
      id: label.toLowerCase(),
      label,
      placeholder,
    };
    setInputs([...inputs, newInput]);
  };

  const handleRemoveInput = (id: string) => {
    setInputs(inputs.filter((input) => input.id !== id));
  };

  const groupInputs = (inputs: InputField[]) => {
    const grouped = [];
    for (let i = 0; i < inputs.length; i += 2) {
      grouped.push(inputs.slice(i, i + 2));
    }
    return grouped;
  };

  return (
    <section className="mt-6">
      <H2>Flat Charges</H2>
      <div className="flex flex-wrap w-full gap-2 mt-3">
        {groupInputs(inputs).map((group, index) => (
          <div key={index} className="flex w-full gap-10">
            {group.map((input) => (
              <div key={input.id} className="w-full sm:w-1/2 flex flex-col">
                <Input
                  type="number"
                  className="p-3 border border-slate-300 rounded-xl"
                  label={input.label}
                  id={input.id}
                  placeholder={input.placeholder}
                  onRemove={() => handleRemoveInput(input.id)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <Button className="mt-6" onClick={() => setModalVisible(true)}>
        Add Flat Charges
      </Button>
      <ChargesModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onAdd={handleAddInput}
      />
    </section>
  );
}
