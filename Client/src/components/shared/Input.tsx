import { ChangeEvent, ForwardedRef, forwardRef } from 'react';
import deleteIcon from 'assets/icons/delete.svg';

interface InputProps {
  type: 'text' | 'number' | 'email' | 'password' | 'file' | 'date';
  label?: string;
  value?: string | number;
  name?: string;
  id?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  autoComplete?: string;
  className?: string;
  labelClassName?: string;
  multiple?: boolean;
  size?: 'big' | 'small';
  required?: boolean;
  onRemove?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Input = forwardRef(function Input(props: InputProps, ref: ForwardedRef<HTMLInputElement> | undefined) {
  return props.size === 'big' ? (
    <>
      {props.label && (
        <div className="flex justify-between">
          <label className="mb-3" htmlFor={props.id}>
            {props.label}
            {props.required && <span className="text-red-700">*</span>}
          </label>
          {props.onRemove && (
            <button type="button" onClick={props.onRemove} className="text-red-500 ml-2">
              <img src={deleteIcon} alt="Delete" className="w-4 h-4 mb-6" />
            </button>
          )}
        </div>
      )}
      <textarea
        id={props.id}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete ? props.autoComplete : 'off'}
        rows={5}
        className={props.className}
        disabled={props.disabled}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        ref={ref as ForwardedRef<HTMLTextAreaElement>}></textarea>
      {props.error && <span className="text-red-700">This field is required</span>}
    </>
  ) : (
    <>
      {props.label && (
        <div className="flex justify-between">
          <label className={`mb-3 ${props.labelClassName}`} htmlFor={props.id}>
            {props.label}
            {props.required && <span className="text-red-700">*</span>}
          </label>
          {props.onRemove && (
            <button type="button" onClick={props.onRemove} className="text-red-500 ml-2">
              <img src={deleteIcon} alt="Delete" className="w-4 h-4 mb-4" />
            </button>
          )}
        </div>
      )}
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete ? props.autoComplete : 'off'}
        className={props.className}
        disabled={props.disabled}
        name={props.name}
        value={props.value}
        multiple={props.multiple}
        onChange={props.onChange}
        ref={ref}
      />
      {props.error && <span className="text-red-700">This field is required</span>}
    </>
  );
});

export default Input;
