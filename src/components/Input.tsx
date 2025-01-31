import styled from "styled-components";
import { InputHTMLAttributes } from "react";

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 16px;
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // Adicione propriedades personalizadas aqui
  customProp?: string;
}

export default function Input(props: InputProps) {
  return <StyledInput {...props} />;
}
