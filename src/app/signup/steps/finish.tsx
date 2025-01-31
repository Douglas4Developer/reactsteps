"use client";
import { SetStateAction,  useState } from "react";
import { useRouter } from "next/navigation"; // se estiver usando Next.js App Router
import Stepper from "@/components/Stepper";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Lottie from "lottie-react";
import animationData from "@/assets/lotties/payment.json";
import styles from "@/app/styles/signup.module.css";

export default function Step4({ back }: { back: () => void }) {
  const router = useRouter();
  
  const [fullNameBank, setFullNameBank] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  // Controla o loading ao clicar em "Finish & Submit"
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFinish = async () => {
    setIsSubmitting(true);

    // Simula um pequeno "loading" de 2 segundos antes de ir pro dashboard
    setTimeout(() => {
      // Aqui faria qualquer lógica de envio para backend, etc.
      // e depois redireciona ao dashboard:
      router.push("/dashboard"); 
    }, 2000);
  };

  return (
    <div className={styles.signupWrapper}>
      {/* Lado esquerdo (Hero / Lottie) */}
      <div className={styles.leftContainer}>
        <h1 className={styles.title}>Payment Information</h1>
        <p className={styles.subtitle}>
          Add your bank details to complete the setup.
        </p>
        <Lottie animationData={animationData} className={styles.animation} />
      </div>

      {/* Lado direito: Card do Step */}
      <div className={styles.rightContainer}>
        <div className={styles.stepCard}>
          <div className={styles.stepperContainer}>
            <Stepper step={4} />
          </div>

          <h2 className={styles.formTitle}>Bank Details</h2>
          <p className={styles.formSubtitle}>
            Enter your banking information.
          </p>

          <div className={styles.inputGroup}>
            <Input
              placeholder="Your Full name as displayed in your bank"
              value={fullNameBank}
              onChange={(e) => setFullNameBank(e.target.value)}
            />
            <Input
              placeholder="Name of Bank"
              value={bankName}
              onChange={(e: { target: { value: SetStateAction<string>; }; }) => setBankName(e.target.value)}
            />
            <Input
              placeholder="Account Number"
              value={accountNumber}
              onChange={(e: { target: { value: SetStateAction<string>; }; }) => setAccountNumber(e.target.value)}
            />
          </div>

          {/* Botões de Navegação */}
          <div className={styles.buttonGroup}>
            <Button onClick={back} variant="secondary">
              Back
            </Button>
            <Button 
              onClick={handleFinish} 
              disabled={!fullNameBank || !bankName || !accountNumber || isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Finish & Submit"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
