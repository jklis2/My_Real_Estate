import { useState } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  onAdd: (label: string, placeholder: string) => void;
}

export default function ChargesModal({
  isVisible,
  onClose,
  onAdd,
}: ModalProps) {
  const [label, setLabel] = useState<string>("");
  const [placeholder, setPlaceholder] = useState<string>("");

  if (!isVisible) return null;

  const handleAdd = () => {
    onAdd(label, placeholder);
    setLabel("");
    setPlaceholder("");
    onClose();
  };

  const modalContent = (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-1/2 max-w-3xl">
        <h3 className="text-xl mb-4">Add New Flat Charges</h3>
        <div className="mb-4">
          <label className="block mb-2">Label</label>
          <input
            type="text"
            className="p-2 border border-slate-300 rounded w-full"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Placeholder</label>
          <input
            type="text"
            className="p-2 border border-slate-300 rounded w-full"
            value={placeholder}
            onChange={(e) => setPlaceholder(e.target.value)}
          />
        </div>
        <div className="flex justify-end gap-x-4">
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
