import { useState, useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import { formatDateTime } from "@/lib/utils"
import { THEME_COLORS } from '@/lib/constants'
import { Sidebar } from '@/components/Sidebar'
import { SpeciesChart } from '@/components/SpeciesChart'
import { StatusChart } from '@/components/StatusChart'
import { TodoList } from '@/components/TodoList'

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

function App() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed inset-0 flex" style={{ backgroundColor: THEME_COLORS.background }}>
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 flex flex-col h-full overflow-auto">
          {/* Header */}
          <header className="flex-none flex justify-between items-center p-4 lg:px-6">
            <h1 className="text-2xl lg:text-3xl font-bold" style={{ color: THEME_COLORS.primary }}>
              Meu meliponário
            </h1>
            <div className="text-lg lg:text-xl font-medium" style={{ color: THEME_COLORS.primary }}>
              {formatDateTime(currentDateTime)}
            </div>
          </header>

          {/* Content Grid */}
          <div className="flex-1 flex flex-col gap-4 lg:gap-6 p-4 lg:px-6 min-h-0">
            {/* Top Section with Species and Todo */}
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 flex-1 min-h-0">
              <section className="flex-1 min-h-0 w-full lg:w-2/3">
                <SpeciesChart />
              </section>

              <section className="w-full lg:w-1/3">
                <TodoList />
              </section>
            </div>

            {/* Status Section */}
            <section className="flex-none w-full h-[300px]">
              <StatusChart />
            </section>
          </div>

          {/* Footer */}
          <footer className="flex-none p-4 lg:px-6 text-center text-xs" style={{ color: THEME_COLORS.primary }}>
            <p>© 2024 Meu meliponário</p>
          </footer>
        </div>
      </main>
    </div>
  )
}

export default App
