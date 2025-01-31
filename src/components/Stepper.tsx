"use client";
import styles from "@/styles/stepper.module.css";

interface StepperProps {
  step: number;
}

export default function Stepper({ step }: StepperProps) {
  const steps = ["Personal Info", "Education", "Skills", "Payment"];

  return (
    <div className={styles.stepperContainer}>
      {steps.map((label, index) => (
        <div key={index} className={`${styles.step} ${index + 1 <= step ? styles.active : ""}`}>
          <div className={styles.circle}>{index + 1}</div>
          <span className={styles.label}>{label}</span>
        </div>
      ))}
    </div>
  );
}
