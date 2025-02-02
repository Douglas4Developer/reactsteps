"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: #f5f7fa;
    color: #333;
  }
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Educational Platform</title>
      </head>
      <body>
        <GlobalStyle />
        {children}
      </body>
    </html>
  );
}
