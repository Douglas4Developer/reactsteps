 
"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from 'next/dynamic';
import styles from "@/app/styles/signup.module.css";

// Importações dinâmicas dos componentes do Tutor
const TutorStep1 = dynamic(() => import("@/app/signup/steps/step1"), { ssr: false });
const TutorStep2 = dynamic(() => import("@/app/signup/steps/step2"), { ssr: false });
const TutorStep3 = dynamic(() => import("@/app/signup/steps/step3"), { ssr: false });
const TutorStep4 = dynamic(() => import("@/app/signup/steps/finish"), { ssr: false });

// Importação dinâmica do StudentSignup
const StudentSignup = dynamic(() => import('./studentSignup'), { ssr: false });

export default function SignupContent() {
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
    <>
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

      {/* Suspense Boundary para os steps */}
      <Suspense fallback={<div className={styles.loading}>Carregando...</div>}>
        {renderStep()}
      </Suspense>
    </>
  );
}
