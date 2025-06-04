export const THEME_COLORS = {
  background: '#F4EED8',
  sidebar: '#FBBA00',
  primary: '#5A3D2B',
  accent: '#E5781E',
  warning: '#FBBA00',
  card: {
    background: 'rgba(251, 186, 0, 0.2)',
    border: 'rgba(251, 186, 0, 0.4)',
  }
} as const

export const MOCK_DATA = {
  species: {
    labels: ['Jataí', 'Uruçu', 'Mandaçaia', 'Iraí', 'Guaraipo'],
    data: [12, 8, 6, 4, 3],
  },
  status: {
    labels: ['Jataí', 'Uruçu', 'Mandaçaia', 'Iraí', 'Guaraipo'],
    active: [8, 5, 4, 2, 1],
    observation: [3, 2, 1, 1, 1],
    inactive: [1, 1, 1, 1, 1],
  },
  todos: [
    { id: 1, task: "Verificar temperatura da colmeia #12", status: "pending" },
    { id: 2, task: "Alimentar colmeia #05", status: "pending" },
    { id: 3, task: "Limpar entrada da colmeia #08", status: "completed" },
    { id: 4, task: "Coletar mel da colmeia #03", status: "pending" },
    { id: 5, task: "Inspecionar colmeia #15", status: "completed" }
  ],
} as const 