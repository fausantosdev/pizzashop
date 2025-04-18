import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Utensils } from 'lucide-react'

export function DayOrdersAmountCard() {
  return(
    <Card className='flex-1'>
      <CardHeader className='flex-row justify-between items-center space-y-0 pb-2'>
        <CardTitle className='text-base font-semibold'>Pedidos (dia)</CardTitle>
        <Utensils className='h-4 w-4 text-muted-foreground'/>
      </CardHeader>
      <CardContent className='space-y-1'>
        <span className='text-2xl font-bold'>45</span>
        <p className='text-xs text-muted-foreground'>
          <span className='text-rose-500 dark:text-rose-400'>-24%</span> em relação a ontem
        </p>
      </CardContent>
    </Card>
  )
}
