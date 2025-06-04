import { ChartBarIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'
import { Button } from "@/components/ui/button"
import { THEME_COLORS } from '@/lib/constants'

export function Sidebar() {
  return (
    <aside className="w-16 lg:w-20 flex-none bg-[#FBBA00] flex flex-col items-center py-4 shadow-lg z-10">
      <div className="flex-1">
        <Button
          variant="ghost"
          size="icon"
          className="w-10 h-10 lg:w-12 lg:h-12 text-[#E9A319] hover:text-[#C88B16] hover:bg-[#FBBA00]/80"
        >
          <ChartBarIcon className="w-6 h-6 lg:w-8 lg:h-8" />
        </Button>
      </div>
      
      <div>
        <Button
          variant="ghost"
          size="icon"
          className="w-10 h-10 lg:w-12 lg:h-12 text-[#E9A319] hover:text-[#C88B16] hover:bg-[#FBBA00]/80"
        >
          <Cog6ToothIcon className="w-6 h-6 lg:w-8 lg:h-8" />
        </Button>
      </div>
    </aside>
  )
} 