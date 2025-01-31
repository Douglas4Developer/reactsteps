"use client";
import { useState } from "react";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import Step4 from "./steps/finish";
import styles from "@/app/styles/signup.module.css";

export default function TutorSignup() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className={styles.container}>
      {step === 1 && <Step1 next={nextStep} />}
      {step === 2 && <Step2 next={nextStep} back={prevStep} />}
      {step === 3 && <Step3 next={nextStep} back={prevStep} />}
      {step === 4 && <Step4 back={prevStep} />}
    </div>
  );
}
