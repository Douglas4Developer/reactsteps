"use client";
import { createGlobalStyle } from "styled-components";
import Head from 'next/head';
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }

  body {
    background-color: #f8f9fa;
    color: #212529;
  }

  button {
    cursor: pointer;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    margin: 5px;
    font-size: 16px;
  }
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Educational Platform</title>
      </Head>
      <body>
        <GlobalStyle />
        {children}
      </body>
    </html>
  );
}
