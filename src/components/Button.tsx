import styled from "styled-components";

// Estilização do botão
const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px 20px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

// Definição da tipagem correta
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary"; // Definir variantes suportadas
}

// Aplicando a tipagem
export default function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
