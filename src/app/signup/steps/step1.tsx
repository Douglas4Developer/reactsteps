"use client";
import { SetStateAction, useState } from "react";
import Stepper from "@/components/Stepper";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Lottie from "lottie-react";
import userInfoAnimation from "@/assets/lotties/user-info.json";
import styles from "@/app/styles/signup.module.css";
import { useRouter } from 'next/navigation';

export default function StudentStep1({ next }: { next: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();


  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className={styles.signupWrapper}>
      {/* Lado esquerdo — Texto + Lottie */}
      <div className={styles.leftContainer}>
      <button className={styles.backButton} onClick={handleGoBack}>
          ← Go back
        </button>
        <h1 className={styles.title}>
          Welcome to our <br />
          <strong>Educational Website</strong>
        </h1>

        <p className={styles.subtitle}>
          By signing up, you will gain access to a wealth of resources, 
          including engaging video lectures, interactive quizzes, 
          and personalized feedback from expert instructors.
        </p>

        <Lottie 
          animationData={userInfoAnimation} 
          className={styles.animation} 
        />
      </div>

      {/* Lado direito — Card com o Step1 */}
      <div className={styles.rightContainer}>
        <div className={styles.stepCard}>
          <div className={styles.stepperContainer}>
            <Stepper step={1} />
          </div>

          <h2 className={styles.formTitle}>Create an Account</h2>
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

          <Button
            onClick={next}
            disabled={!name || !email || !phone || !password}
          >
            Sign Up
          </Button>

         
<p className={styles.socialTitle}>Or sign up with:</p>
<div className={styles.socialButtons}>
  <Button className={styles.facebookButton}>Facebook</Button>
  <Button className={styles.googleButton}>Google</Button>
</div>

<p className={styles.loginLink}>
  Already have an account? <a href="#">Log In</a>
</p>


       
        </div>
      </div>
    </div>
  );
}
