import { THEME_COLORS, MOCK_DATA } from './constants'
import type { ChartData, ChartOptions } from 'chart.js'

export const speciesChartData: ChartData<'pie'> = {
  labels: [...MOCK_DATA.species.labels],
  datasets: [
    {
      label: 'Quantidade de Colmeias',
      data: [...MOCK_DATA.species.data],
      backgroundColor: [
        THEME_COLORS.accent,
        THEME_COLORS.warning,
        THEME_COLORS.primary,
        THEME_COLORS.accent,
        THEME_COLORS.warning,
      ],
      borderWidth: 0,
    },
  ],
}

export const statusChartData: ChartData<'bar'> = {
  labels: [...MOCK_DATA.status.labels],
  datasets: [
    {
      label: 'Ativa',
      data: [...MOCK_DATA.status.active],
      backgroundColor: THEME_COLORS.accent,
      borderWidth: 0,
    },
    {
      label: 'Em Observação',
      data: [...MOCK_DATA.status.observation],
      backgroundColor: THEME_COLORS.warning,
      borderWidth: 0,
    },
    {
      label: 'Inativa',
      data: [...MOCK_DATA.status.inactive],
      backgroundColor: THEME_COLORS.primary,
      borderWidth: 0,
    },
  ],
}

export const pieChartOptions: ChartOptions<'pie'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      enabled: true,
      callbacks: {
        label: function(context) {
          return `${context.label}: ${context.raw}`;
        }
      }
    },
    legend: {
      display: false
    },
  },
}

export const barChartOptions: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right',
      align: 'start',
      labels: {
        boxWidth: 15,
        padding: 15,
        usePointStyle: true,
        pointStyle: 'rectRounded',
        font: {
          size: 12,
          family: "'Inter', sans-serif",
        },
        color: THEME_COLORS.primary,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: THEME_COLORS.primary,
        font: {
          size: 11,
          family: "'Inter', sans-serif",
        },
      },
    },
    y: {
      grid: {
        color: `${THEME_COLORS.primary}1A`, // 10% opacity
      },
      ticks: {
        color: THEME_COLORS.primary,
        font: {
          size: 11,
          family: "'Inter', sans-serif",
        },
      },
    },
  },
} 