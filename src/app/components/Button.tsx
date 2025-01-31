import styles from "@/styles/login.module.css";

interface ButtonProps {
    text: string;
    fullWidth?: boolean;
  }
  
  export default function Button({ text, fullWidth = false }: ButtonProps) {
    return (
      <button
        className={fullWidth ? styles.fullWidthButton : styles.button}
      >
        {text}
      </button>
    );
  }
  