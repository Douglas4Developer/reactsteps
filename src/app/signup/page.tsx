// app/signup/page.jsx
"use client";
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';
import styles from "@/app/styles/signup.module.css";

// Importação dinâmica do componente SignupContent com fallback
const SignupContent = dynamic(() => import('./SignupContent'), { 
  ssr: false, 
  loading: () => <div className={styles.loading}>Carregando...</div> 
});

export default function SignupPage() {
  return (
    <div className={styles.mainContainer}>
      {/* Suspense Boundary para o conteúdo de cadastro */}
      <Suspense fallback={<div className={styles.loading}>Carregando...</div>}>
        <SignupContent />
      </Suspense>
    </div>
  );
}
