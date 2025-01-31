"use client";
import { useState } from "react";
import Stepper from "@/components/Stepper";
import Button from "@/components/Button";
import Lottie from "lottie-react";
import animationData from "@/assets/lotties/skills.json";
import styles from "@/app/styles/signup.module.css";

export default function Step3({ next, back }: { next: () => void; back: () => void }) {
  const [skills, setSkills] = useState<string[]>([]);
  const availableSkills = [
    "Communication skill",
    "Reading",
    "Speaking skill",
    "Problem-solving",
    "Leadership",
    "Teamwork",
    "Coding",
  ];

  const addSkill = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSkill = event.target.value;
    if (selectedSkill && !skills.includes(selectedSkill) && skills.length < 10) {
      setSkills([...skills, selectedSkill]);
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div className={styles.s}>
      {/* Lado esquerdo (Hero / Lottie) */}
      <div className={styles.leftContainer}>
        <h1 className={styles.title}>Your Skills</h1>
        <p className={styles.subtitle}>Select up to 10 skills that define your expertise.</p>
        {/* <Lottie animationData={animationData} className={styles.animation} /> */}
      </div>

      {/* Lado direito: Card do Step */}
      <div className={styles.rightContainer}>
        <div className={styles.stepCard}>
          <div className={styles.stepperContainer}>
            <Stepper step={3} />
          </div>

          <h2 className={styles.formTitle}>Select Your Skills</h2>
          <p className={styles.formSubtitle}>
            Choose up to 10 skills that highlight your strengths.
          </p>

          {/* Dropdown para adicionar skills */}
          <select className={styles.inputField} onChange={addSkill} defaultValue="">
            <option value="" disabled>
              Select a Skill
            </option>
            {availableSkills.map((skill) => (
              <option key={skill} value={skill}>
                {skill}
              </option>
            ))}
          </select>

          {/* Skills selecionadas */}
          <div className={styles.skillContainer}>
            {skills.map((skill) => (
              <div key={skill} className={styles.skillTag}>
                {skill}
                <button onClick={() => removeSkill(skill)}>✕</button>
              </div>
            ))}
          </div>

          {/* Botões de Navegação */}
          <div className={styles.buttonGroup}>
            <Button onClick={back} variant="secondary">
              Back
            </Button>
            <Button onClick={next} disabled={skills.length === 0}>
              Proceed
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
