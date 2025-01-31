"use client";

import { useState } from "react";
import styles from "../styles/dashboard.module.css";

// Importações para o Chart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadarController,
  Filler,
} from "chart.js";
import { Bar, Line, Pie, Radar } from "react-chartjs-2";
import { ChartOptions } from 'chart.js';

// Registro dos componentes necessários do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  RadarController,
  Filler
);

export default function DashboardPage() {
  const [activeMenu, setActiveMenu] = useState("home");

  // Dados fictícios para o gráfico de barras
  const barData = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    datasets: [
      {
        label: "Vendas (em R$)",
        data: [1200, 2100, 1800, 2500, 3000, 4200],
        backgroundColor: "#4fd1c590",
        borderColor: "#4fd1c5",
        borderWidth: 1,
      },
    ],
  };

  const barOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Vendas Mensais",
        color: "#2d3748",
        font: {
          size: 18,
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "#e2e8f0",
        },
        ticks: {
          color: "#4a5568",
        },
      },
      x: {
        grid: {
          color: "#e2e8f0",
        },
        ticks: {
          color: "#4a5568",
        },
      },
    },
  };

  // Dados fictícios para o gráfico de linha
  const lineData = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    datasets: [
      {
        label: "Novos Usuários",
        data: [50, 100, 80, 150, 190, 220],
        fill: false,
        borderColor: "#f56565", // Vermelho
        backgroundColor: "#f5656550",
        tension: 0.3,
      },
    ],
  };

  const lineOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Crescimento de Usuários",
        color: "#2d3748",
        font: {
          size: 18,
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "#e2e8f0",
        },
        ticks: {
          color: "#4a5568",
        },
      },
      x: {
        grid: {
          color: "#e2e8f0",
        },
        ticks: {
          color: "#4a5568",
        },
      },
    },
  };

  // Dados fictícios para o gráfico de pizza
  const pieData = {
    labels: ["Marketing", "Vendas", "Desenvolvimento", "Suporte"],
    datasets: [
      {
        label: "Distribuição de Usuários",
        data: [300, 50, 100, 80],
        backgroundColor: [
          "#f6ad55",
          "#63b3ed",
          "#9f7aea",
          "#68d391",
        ],
        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  };

  const pieOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Distribuição de Usuários por Departamento",
        color: "#2d3748",
        font: {
          size: 18,
        },
      },
      legend: {
        position: "bottom", // Valor válido
        labels: {
          color: "#4a5568",
        },
      },
    },
  };

  // Dados fictícios para o gráfico de Radar
  const radarData = {
    labels: ["Design", "Desenvolvimento", "Marketing", "Vendas", "Suporte"],
    datasets: [
      {
        label: "Avaliação de Desempenho",
        data: [65, 59, 90, 81, 56],
        backgroundColor: "rgba(99, 179, 237, 0.2)",
        borderColor: "#63b3ed",
        borderWidth: 2,
        pointBackgroundColor: "#63b3ed",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#63b3ed",
      },
    ],
  };

  const radarOptions: ChartOptions<'radar'> = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Avaliação de Desempenho por Departamento",
        color: "#2d3748",
        font: {
          size: 18,
        },
      },
      legend: {
        position: "top",
        labels: {
          color: "#4a5568",
        },
      },
    },
    scales: {
      r: {
        angleLines: {
          color: "#e2e8f0",
        },
        grid: {
          color: "#e2e8f0",
        },
        ticks: {
          color: "#4a5568",
        },
        pointLabels: {
          color: "#4a5568",
        },
      },
    },
  };

  return (
    <div className={styles.dashboardContainer}>
      {/* Sidebar lateral */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>My CRM</div>
        <nav className={styles.navMenu}>
          <button
            className={activeMenu === "home" ? styles.active : ""}
            onClick={() => setActiveMenu("home")}
          >
            🏠 Home
          </button>
          <button
            className={activeMenu === "analytics" ? styles.active : ""}
            onClick={() => setActiveMenu("analytics")}
          >
            📊 Analytics
          </button>
          <button
            className={activeMenu === "settings" ? styles.active : ""}
            onClick={() => setActiveMenu("settings")}
          >
            ⚙️ Settings
          </button>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className={styles.mainContent}>
        {activeMenu === "home" && (
          <div>
            <h1>Bem-vindo(a) ao Seu CRM</h1>
            <p>
              Aqui é apenas um exemplo fictício de um dashboard. Utilize este
              espaço para apresentar suas métricas e dados importantes.
            </p>

            {/* Cards de estatísticas fictícias */}
            <div className={styles.cardsContainer}>
              <div className={styles.card}>
                <h2>Usuários Totais</h2>
                <p>1.234</p>
              </div>
              <div className={styles.card}>
                <h2>Faturamento Mensal</h2>
                <p>R$ 4.567</p>
              </div>
              <div className={styles.card}>
                <h2>Sessões Ativas</h2>
                <p>89</p>
              </div>
              <div className={styles.card}>
                <h2>Taxa de Conversão</h2>
                <p>12%</p>
              </div>
              <div className={styles.card}>
                <h2>Clientes Novos</h2>
                <p>45</p>
              </div>
              <div className={styles.card}>
                <h2>Tickets Resolvidos</h2>
                <p>320</p>
              </div>
            </div>
          </div>
        )}

        {activeMenu === "analytics" && (
          <div>
            <h1>Analytics</h1>
            <p>
              Abaixo você encontra dados fictícios representados em gráficos
              para melhor visualização.
            </p>
            <div className={styles.chartsContainer}>
              <div className={styles.chartWrapper}>
                <div className={styles.chartTitle}>Vendas Mensais</div>
                <Bar data={barData} options={barOptions} />
              </div>
              <div className={styles.chartWrapper}>
                <div className={styles.chartTitle}>Novos Usuários</div>
                <Line data={lineData} options={lineOptions} />
              </div>
              <div className={styles.chartWrapper}>
                <div className={styles.chartTitle}>Distribuição de Usuários</div>
                <Pie data={pieData} options={pieOptions} />
              </div>
              <div className={styles.chartWrapper}>
                <div className={styles.chartTitle}>Avaliação de Desempenho</div>
                <Radar data={radarData} options={radarOptions} />
              </div>
            </div>
          </div>
        )}

        {activeMenu === "settings" && (
          <div>
            <h1>Settings</h1>
            <p>Aqui você pode gerenciar suas preferências, perfil, etc.</p>
            {/* Adicione mais configurações conforme necessário */}
          </div>
        )}
      </main>
    </div>
  );
}
