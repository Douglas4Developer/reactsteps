"use client";
import { useState } from "react";
import Stepper from "@/components/Stepper";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Lottie from "lottie-react";
import educationAnimation from "@/assets/lotties/education.json";

import styles from "@/app/styles/signup.module.css";

interface EducationItem {
  institution: string;
  degree: string;
  year: string;
}

interface ExperienceItem {
  institution: string;
  from: string;
  to: string;
  position: string;
}

export default function StudentStep2({
  next,
  back,
}: {
  next: () => void;
  back: () => void;
}) {
  const [cv, setCv] = useState<File | null>(null);

  // Arrays para Education e Experience
  const [educationList, setEducationList] = useState<EducationItem[]>([
    { institution: "", degree: "", year: "" },
  ]);
  const [experienceList, setExperienceList] = useState<ExperienceItem[]>([
    { institution: "", from: "", to: "", position: "" },
  ]);

  // Upload de CV
  const handleCvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCv(e.target.files[0]);
    }
  };

  // Função para adicionar um novo bloco de Education
  const addEducation = () => {
    setEducationList((prev) => [
      ...prev,
      { institution: "", degree: "", year: "" },
    ]);
  };

  // Função para adicionar um novo bloco de Experience
  const addExperience = () => {
    setExperienceList((prev) => [
      ...prev,
      { institution: "", from: "", to: "", position: "" },
    ]);
  };

  // poderia ir a lógica de “Save” (enviando para backend, etc.)
  const handleSaveEducation = () => {
    console.log("Saving education list:", educationList);
  };

  const handleSaveExperience = () => {
    console.log("Saving experience list:", experienceList);
  };

  return (
    <div className={styles.s}>
      {/* Lado esquerdo (mini hero) */}
      <div className={styles.leftContainer}>
        <h1 className={styles.title}>Experience and Education</h1>
        <p className={styles.subtitle}>
          Kindly provide us with information from your school and work experience.
        </p>
        <Lottie 
          animationData={educationAnimation} 
          className={styles.animation} 
        />
      </div>

      {/* Lado direito (card do step) */}
      <div className={styles.rightContainer}>
        <div className={styles.stepCard}>
          {/* Stepper no topo */}
          <div className={styles.stepperContainer}>
            <Stepper step={2} />
          </div>

          {/* Upload CV */}
          <p style={{ marginBottom: "5px" }}>Please upload your CV</p>
          <label className={styles.uploadButton} style={{ marginBottom: "20px" }}>
            {cv ? cv.name : "Upload CV"}
            <input type="file" hidden onChange={handleCvUpload} />
          </label>

          {/* Seção Education */}
          <h2 className={styles.formTitle} style={{ marginTop: "10px" }}>Education</h2>
          <p className={styles.formSubtitle}>Name of Institution, Degree, and Year of Graduation</p>
          {educationList.map((edu, index) => (
            <div key={index} className={styles.inputGroup}>
              <Input 
                placeholder="Name of Institution" 
                value={edu.institution} 
                onChange={(e: { target: { value: string; }; }) => {
                  const newList = [...educationList];
                  newList[index].institution = e.target.value;
                  setEducationList(newList);
                }}
              />
              <Input 
                placeholder="Degree graduated with" 
                value={edu.degree} 
                onChange={(e: { target: { value: string; }; }) => {
                  const newList = [...educationList];
                  newList[index].degree = e.target.value;
                  setEducationList(newList);
                }}
              />
              <Input 
                placeholder="Year of Graduation" 
                type="number"
                value={edu.year}
                onChange={(e: { target: { value: string; }; }) => {
                  const newList = [...educationList];
                  newList[index].year = e.target.value;
                  setEducationList(newList);
                }}
              />
            </div>
          ))}
          <div className={styles.buttonRow}>
            <Button className={styles.addButton} onClick={addEducation}>
              Add Institution +
            </Button>
            <Button className={styles.saveButton} onClick={handleSaveEducation}>
              Save
            </Button>
          </div>

          {/* Seção Experience */}
          <h2 className={styles.formTitle}>Experience</h2>
          <p className={styles.formSubtitle}>Name of Institution, from, to, position held</p>
          {experienceList.map((exp, index) => (
            <div key={index} className={styles.inputGroup}>
              <Input 
                placeholder="Name of Institution"
                value={exp.institution}
                onChange={(e: { target: { value: string; }; }) => {
                  const newList = [...experienceList];
                  newList[index].institution = e.target.value;
                  setExperienceList(newList);
                }}
              />
              <Input
                type="date"
                placeholder="From"
                value={exp.from}
                onChange={(e: { target: { value: string; }; }) => {
                  const newList = [...experienceList];
                  newList[index].from = e.target.value;
                  setExperienceList(newList);
                }}
              />
              <Input
                type="date"
                placeholder="To"
                value={exp.to}
                onChange={(e: { target: { value: string; }; }) => {
                  const newList = [...experienceList];
                  newList[index].to = e.target.value;
                  setExperienceList(newList);
                }}
              />
              <Input
                placeholder="Position held"
                value={exp.position}
                onChange={(e: { target: { value: string; }; }) => {
                  const newList = [...experienceList];
                  newList[index].position = e.target.value;
                  setExperienceList(newList);
                }}
              />
            </div>
          ))}
          <div className={styles.buttonRow}>
            <Button className={styles.addButton} onClick={addExperience}>
              Add Experience +
            </Button>
            <Button className={styles.saveButton} onClick={handleSaveExperience}>
              Save
            </Button>
          </div>

          {/* Botão final de navegação */}
          <Button onClick={next} style={{ width: "100%", marginTop: "10px" }}>
            Proceed
          </Button>

          {/* Botão para voltar */}
          <Button 
            onClick={back} 
            variant="secondary" 
            style={{ marginTop: "10px", width: "100%" }}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}
