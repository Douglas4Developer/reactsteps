"use client";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

// Carregar imagens corretamente
import studentImg from "@/assets/student.png"; 
import tutorImg from "@/assets/tutor.png"; 

// ---------------------
// Styled Components
// ---------------------
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f9f9fb;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
`;

/* Top bar (Login button no canto superior esquerdo) */
const TopBar = styled.div`
  display: flex;
  justify-content: flex-start; /* Alinha à esquerda */
  padding: 10px 20px;
`;

/* Botão de login */
const LoginButton = styled.a`
  background-color: transparent;
  color: #333;
  padding: 8px 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.3s, border-color 0.3s;
  
  &:hover {
    background-color: #eee;
    border-color: #bbb;
  }
`;

/* Container central do conteúdo */
const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

/* Título principal */
const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: 700;
  color: #333;
`;

/* Subtítulo */
const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 40px;
`;

/* Cards em linha */
const CardsContainer = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;

/* Cada Card */
const Card = styled.div`
  background: #fff;
  width: 280px;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.06);
  text-align: center;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-4px);
  }
`;

/* Imagem ou ícone no topo do Card */
const CardImage = styled.div`
  margin-bottom: 20px;
`;

/* Título do Card */
const CardTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 10px;
  color: #333;
`;

/* Texto do Card */
const CardText = styled.p`
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 20px;
`;

/* Botão no Card */
const CardButton = styled.a`
  display: inline-block;
  background-color: transparent;
  color: #333;
  padding: 12px 20px;
  border-radius: 8px;
  border: 1px solid #ccc;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.3s, border-color 0.3s;

  &:hover {
    background-color: #eee;
    border-color: #bbb;
  }
`;

/* Rodapé com a assinatura */
const Footer = styled.footer`
  text-align: center;
  font-size: 12px;
  color: #777;
  margin-top: 30px;
  padding: 10px;
`;

export default function Home() {
  return (
    <PageContainer>
      {/* Top Bar (Login no canto esquerdo) */}
      <TopBar>
        <Link href="/login" passHref>
          <LoginButton>Log in to account</LoginButton>
        </Link>
      </TopBar>

      {/* Conteúdo central */}
      <ContentWrapper>
        <Title>Welcome to our Educational Website</Title>
        <Subtitle>
          Select how you want to proceed with the platform.
          <br />
          Choose between Tutor and Student.
        </Subtitle>

        <CardsContainer>
          {/* Card para Student */}
          <Card>
            <CardImage>
              <Image 
                src={studentImg} 
                alt="Student illustration" 
                width={100} 
                height={100}
              />
            </CardImage>
            <CardTitle>Sign up as a Student</CardTitle>
            <CardText>
              Join our talent pool of over 10,000 students 
              learning and growing their skills, with 
              over 5,000 tutors ready to guide you.
            </CardText>
            <Link href="/signup?role=student" passHref>
              <CardButton>Sign up as a Student</CardButton>
            </Link>

          </Card>

          {/* Card para Tutor */}
          <Card>
            <CardImage>
              <Image 
                src={tutorImg} 
                alt="Tutor illustration"
                width={100} 
                height={100}
              />
            </CardImage>
            <CardTitle>Sign up as a Tutor</CardTitle>
            <CardText>
              Share your expertise and mentor 
              thousands of eager learners. 
              Earn while shaping the future.
            </CardText>
            <Link href="/signup?role=tutor" passHref>
              <CardButton>Sign up as a Tutor</CardButton>
            </Link>
          </Card>
        </CardsContainer>
      </ContentWrapper>

      {/* Rodapé com assinatura */}
      <Footer>Desenvolvido por Douglas Soares de Souza Ferreira</Footer>
    </PageContainer>
  );
}
