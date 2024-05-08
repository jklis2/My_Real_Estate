import { ChangeEvent, ForwardedRef, forwardRef } from "react";

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
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Input = forwardRef(function Input(
  props: InputProps,
  ref: ForwardedRef<HTMLInputElement> | undefined
) {
  return props.size === "big" ? (
    <>
      {props.label && (
        <label className="mb-3" htmlFor={props.id}>
          {props.label}
          {props.required && <span className="text-red-700">*</span>}
        </label>
      )}
      <textarea
        id={props.id}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete ? props.autoComplete : "off"}
        rows={5}
        className={props.className}
        disabled={props.disabled}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      ></textarea>
    </>
  ) : (
    <>
      {props.label && (
        <label className="mb-3" htmlFor={props.id}>
          {props.label}
          {props.required && <span className="text-red-700">*</span>}
        </label>
      )}
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete ? props.autoComplete : "off"}
        className={props.className}
        disabled={props.disabled}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        ref={ref}
      ></input>
    </>
  );
});

export default Input;
