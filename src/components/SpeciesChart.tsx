import { Pie } from 'react-chartjs-2'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MOCK_DATA } from '@/lib/constants'
import { speciesChartData, pieChartOptions } from '@/lib/chartConfig'

export function SpeciesChart() {
  return (
    <Card className="bg-[#FBBA00]/20 border-[#FBBA00]/40 h-full flex flex-col">
      <CardHeader className="flex-none pb-2">
        <CardTitle className="text-lg lg:text-xl text-[#5A3D2B]">
          Colmeias por espécie
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 min-h-0 pt-4">
        <div className="flex h-full gap-4 max-h-[400px]">
          <div className="flex-1 relative">
            <div className="absolute inset-0">
              <Pie data={speciesChartData} options={pieChartOptions} />
            </div>
          </div>
          <div className="w-48 flex flex-col justify-center">
            <div className="text-[#5A3D2B] text-right">
              <h3 className="font-semibold mb-1 text-sm">
                Total de colmeias: {MOCK_DATA.species.data.reduce((a, b) => a + b, 0)}
              </h3>
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr>
                    <th className="text-left pb-1 text-[#5A3D2B] border-b border-[#5A3D2B]/30">Espécie</th>
                    <th className="text-right pb-1 text-[#5A3D2B] border-b border-[#5A3D2B]/30">Qtd.</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_DATA.species.labels.map((label, index) => (
                    <tr key={label} className="text-[#5A3D2B] border-b border-[#5A3D2B]/20">
                      <td className="pr-3 py-1">{label}</td>
                      <td className="text-right py-1">{MOCK_DATA.species.data[index]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 