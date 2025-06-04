import { Bar } from 'react-chartjs-2'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { statusChartData, barChartOptions } from '@/lib/chartConfig'

export function StatusChart() {
  return (
    <Card className="bg-[#FBBA00]/20 border-[#FBBA00]/40 h-full flex flex-col">
      <CardHeader className="flex-none pb-2">
        <CardTitle className="text-lg lg:text-xl text-[#5A3D2B]">
          Situação por espécie
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 min-h-0 pt-0">
        <div className="h-full w-full">
          <Bar data={statusChartData} options={barChartOptions} />
        </div>
      </CardContent>
    </Card>
  )
} 