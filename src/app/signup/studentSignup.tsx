"use client";

import { SetStateAction, useState } from "react";
import { useRouter } from "next/navigation"; // <-- Import useRouter do Next.js
import Input from "@/components/Input";
import Button from "@/components/Button";
import Lottie from "lottie-react";
import animationData from "@/assets/lotties/education.json"; // Animação para estudantes
import styles from "@/app/styles/signup.module.css";
import Link from "next/link";

export default function StudentSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter(); // Inicializa o hook do router

  const handleSignup = () => {
    router.push("/dashboard");
  };

  return (
    <div className={styles.container}>
      {/* Layout lado a lado */}
      <button className={styles.backButton} onClick={() => history.back()}>
        ← Go back
      </button>
      <div className={styles.signupWrapper}>
        {/* Lado esquerdo - Texto + Animação */}
        <div className={styles.leftContainer}>
          <h1 className={styles.title}>📚 Join Our Learning Platform</h1>
          <p className={styles.subtitle}>
            Get access to expert-led courses, interactive learning experiences, 
            and personalized feedback.
          </p>
          <Lottie animationData={animationData} className={styles.animation} />
        </div>

        {/* Lado direito - Formulário */}
        <div className={styles.rightContainer}>
          <div className={styles.stepCard}>
            <h2 className={styles.formTitle}>👤 Create an Account</h2>
            <p className={styles.formSubtitle}>Fill in your details to continue.</p>

            <div className={styles.inputGroup}>
              <Input
                placeholder="Full Name"
                value={name}
                onChange={(e: { target: { value: SetStateAction<string>; }; }) => setName(e.target.value)}
              />
              <Input
                placeholder="Your Email Address"
                value={email}
                onChange={(e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value)}
              />
              <Input
                placeholder="Phone Number"
                value={phone}
                onChange={(e: { target: { value: SetStateAction<string>; }; }) => setPhone(e.target.value)}
              />
              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e: { target: { value: SetStateAction<string>; }; }) => setPassword(e.target.value)}
              />
            </div>
            
            <div className={styles.terms}>
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I hereby accept the <a href="#">T&C</a> of Liquid
            </label>
          </div>
            {/*
              Adicione a prop onClick ao seu botão para executar
              a função handleSignup ao ser clicado
            */}
            <Button
              className={styles.signUpButton}
              disabled={!name || !email || !phone || !password}
              onClick={handleSignup}
            >
              Sign Up
            </Button>

            <p className={styles.socialTitle}>Or sign up with:</p>
            <div className={styles.socialButtons}>
              <Button className={styles.facebookButton}>Facebook</Button>
              <Button className={styles.googleButton}>Google</Button>
            </div>

            <p className={styles.loginLink}>
              Already have an account? <Link href="/login">Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
