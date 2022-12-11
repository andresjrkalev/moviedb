import { ChangeEvent } from "react";
import InputProps from "../model/inputProps";

const Input = ({ label, type, onChange, value }: InputProps) => {
  const handleOnChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => onChange(value);
  return (
    <>
      <label>{label}</label>
      <input type={type} onChange={handleOnChange} value={value} />
    </>
  );
}

export default Input;
