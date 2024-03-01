import { FC, InputHTMLAttributes } from "react";

interface CustomInputAttributes extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  placeholder?: string | undefined
  label?: string | null;
  error?: string | null;
  required?: boolean;
}

const CustomInput: FC<CustomInputAttributes> = ({
  name,
  type,
  label,
  error,
  required,
  placeholder,
  ...rest
}) => {
  return (
    <div>
      <label htmlFor={name} className={`text-sm text-slate-400 ${error ? 'text-error' : ''}`}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`input input-bordered input-primary w-full ${error ? 'input-error' : '' }`}
        {...rest}
        required={required}
      />
      <span className={`text-sm text-red-500`}>{error}</span>
    </div>
  );
};

export default CustomInput;
