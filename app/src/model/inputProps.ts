interface InputProps {
  label: string;
  type: string;
  value?: string;
  onChange: (_: string) => void;
}

export default InputProps;
