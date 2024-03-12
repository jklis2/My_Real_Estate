import { ChangeEvent } from "react";

interface InputProps {
  type: "text" | "number" | "email" | "password" | "upload";
  label?: string;
  value?: string | number;
  name?: string;
  id?: string;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
  autoComplete?: string;
  className?: string;
  size?: "big" | "small";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputProps) {
  return props.size === "big" ? (
    <>
      {props.label && <label className="mb-3">{props.label}</label>}
      <textarea
        id={props.id}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete ? props.autoComplete : "off"}
        rows={5}
        className={props.className}
      ></textarea>
    </>
  ) : (
    <>
      {props.label && <label className="mb-3">{props.label}</label>}
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete ? props.autoComplete : "off"}
        className={props.className}
      ></input>
    </>
  );
}
