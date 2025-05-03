// InputComponent.tsx
import React from "react";
// import "./InputComponent.css";

interface InputComponentProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder?: string;
  Icon?: React.ElementType; 
}

const InputComponent: React.FC<InputComponentProps> = ({
  type,
  name,
  value,
  onChange,
  label,
  placeholder = "",
  Icon,
}) => {
  return (
    <div className="input-group-form">
      {Icon && <Icon className="input-icon" />}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
      />
      <label>{label}</label>
    </div>
  );
};

export default InputComponent;
