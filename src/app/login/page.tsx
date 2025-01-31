"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation"; // <-- Import useRouter do Next.js
import Lottie from "lottie-react";
import loginAnimation from "@/assets/lotties/login-animation.json";
import styles from "../styles/login.module.css";
import Image from "next/image";
import faceIcon from "@/assets/face.png";
import googleIcon from "@/assets/google.png";
 
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = () => {
    router.push("/dashboard");
  };

  return (
    <div className={styles.loginContainer}>
      {/* Esquerda */}
      <div className={styles.leftContainer}>
        <button className={styles.backButton} onClick={() => history.back()}>
          ← Go back
        </button>
        <h1 className={styles.title}>
          Welcome to our <br />
          <strong>Educational Website</strong>
        </h1>
        <p className={styles.subtitle}>
          By signing up, you will gain access to a wealth of resources, including
          engaging video lectures, interactive quizzes, and personalized feedback.
        </p>
        <Lottie animationData={loginAnimation} className={styles.animation} />
      </div>

      {/* Direita */}
      <div className={styles.rightContainer}>
        <h2 className={styles.welcomeText}>Hi, Welcome Back!</h2>
        <p className={styles.description}>
          Log into your account to continue from where you stopped.
        </p>

        <input
          type="email"
          placeholder="Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputField}
        />

        <input
          type="password"
          placeholder="Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputField}
        />

        {/* Opções extras */}
        <div className={styles.options}>
          <label className={styles.rememberMe}>
            <input type="checkbox" /> Remember me
          </label>
          <Link href="/forgot-password" className={styles.forgotPassword}>
            Forgot password?
          </Link>
        </div>

        {/* Botão de login corrigido */}
        <button className={styles.loginButton} onClick={handleLogin}>
          Log in
        </button>

        <p className={styles.orText}>Or continue with</p>

        {/* Botões sociais corrigidos */}
        <div className={styles.socialButtons}>
      <button className={styles.socialButton}>
        <Image src={faceIcon} alt="Facebook" width={20} height={20} />
        Facebook
      </button>

      <button className={styles.socialButton}>
        <Image src={googleIcon} alt="Google" width={20} height={20} />
        Google
      </button>
    </div>
        <p className={styles.signupText}>
          Don't have an account?{" "}
          <Link href="/signup" className={styles.signupLink}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
