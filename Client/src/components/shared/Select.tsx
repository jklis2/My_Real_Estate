import { ChangeEvent, ForwardedRef, forwardRef } from 'react';

interface SelectProps {
  label?: string;
  value?: string | number;
  name?: string;
  id?: string;
  error?: boolean;
  disabled?: boolean;
  placeholder: string;
  className?: string;
  options: string[];
  selectedOption?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select = forwardRef(function Select(props: SelectProps, ref: ForwardedRef<HTMLSelectElement>) {
  return (
    <div className="flex flex-col my-2 w-full">
      {props.label && (
        <label className="mb-3" htmlFor={props.id}>
          {props.label}
        </label>
      )}
      <select className={props.className} value={props.selectedOption} id={props.id} onChange={props.onChange} ref={ref} {...props}>
        <option value="" disabled hidden>
          {props.placeholder}
        </option>
        {props.options.map(function (option, index) {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
});

export default Select;
