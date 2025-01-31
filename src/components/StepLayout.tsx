"use client";
import { ReactNode } from "react";
import Stepper from "@/components/Stepper";
import Lottie from "lottie-react";
import styles from "@/styles/stepper.module.css";

interface StepLayoutProps {
  step: number;
  title: string;
  description?: string;
  animationData: object; // ✅ Corrigindo `any`
  children: ReactNode;
}

export default function StepLayout({ step, title, description, animationData, children }: StepLayoutProps) {
  return (
    <div className={styles.stepContainer}>
      {/* Lado esquerdo - Stepper e animação */}
      <div className={styles.leftSection}>
        <Stepper step={step} />
        <Lottie animationData={animationData} className={styles.animation} />
      </div>

      {/* Lado direito - Conteúdo do step */}
      <div className={styles.rightSection}>
        <h2>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
        {children}
      </div>
    </div>
  );
}
