import styles from "../styles/login.module.css"; // Verifique o caminho correto do CSS


type InputProps = {
    label: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  
  export default function Input({ label, type, placeholder, value, onChange }: InputProps) {
    return (
      <div className={styles.inputContainer}>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={styles.input} />
      </div>
    );
  }