"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import styles from "@/app/styles/signup.module.css";

// Importa fluxo do STUDENT
import StudentSignup from "./studentSignup";

// Importa fluxo do TUTOR
import TutorStep1 from "@/app/signup/steps/step1";
import TutorStep2 from "@/app/signup/steps/step2";
import TutorStep3 from "@/app/signup/steps/step3";
import TutorStep4 from "@/app/signup/steps/finish";

export default function SignupPage() {
  const searchParams = useSearchParams();
  const roleParam = searchParams.get("role");

  const [isTutor, setIsTutor] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    if (roleParam === "tutor") {
      setIsTutor(true);
    }
  }, [roleParam]);

  const nextStep = () => setCurrentStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 1));

  // Renderiza os steps corretos
  const renderStep = () => {
    if (isTutor) {
      // Fluxo do Tutor (com múltiplos steps)
      switch (currentStep) {
        case 1:
          return <TutorStep1 next={nextStep} />;
        case 2:
          return <TutorStep2 next={nextStep} back={prevStep} />;
        case 3:
          return <TutorStep3 next={nextStep} back={prevStep} />;
        case 4:
          return <TutorStep4 back={prevStep} />;
        default:
          return <TutorStep1 next={nextStep} />;
      }
    } else {
      // Fluxo do estudante (form simples)
      return <StudentSignup />;
    }
  };

  return (
    <div className={styles.mainContainer}>
      {/* Toggle (Student / Tutor) */}
      <div className={styles.toggleContainer}>
        <button
          className={`${styles.toggleButton} ${!isTutor ? styles.active : ""}`}
          onClick={() => {
            setIsTutor(false);
            setCurrentStep(1);
          }}
        >
          🎓 Student
        </button>
        <button
          className={`${styles.toggleButton} ${isTutor ? styles.active : ""}`}
          onClick={() => {
            setIsTutor(true);
            setCurrentStep(1);
          }}
        >
          🧑‍🏫 Tutor
        </button>
      </div>

      {/* Renderiza a interface correta */}
      {renderStep()}
    </div>
  );
}
