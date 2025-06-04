import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MOCK_DATA } from '@/lib/constants'
import { LockClosedIcon } from '@heroicons/react/24/solid'

export function TodoList() {
  return (
    <Card className="bg-[#FBBA00]/20 border-[#FBBA00]/40 h-full relative overflow-hidden backdrop-blur-sm">
      <div className="absolute inset-0 bg-white/30 backdrop-filter backdrop-blur-xl pointer-events-none" />
      <div className="relative z-10 h-full flex flex-col">
        <CardHeader>
          <CardTitle className="text-lg lg:text-xl text-[#5A3D2B]">
            Atividades do dia:
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col items-center justify-center">
          <LockClosedIcon className="w-12 h-12 text-[#5A3D2B]/60 mb-3" />
          <p className="text-[#5A3D2B]/80 text-lg font-medium">Não disponível</p>
        </CardContent>
      </div>
    </Card>
  )
} 