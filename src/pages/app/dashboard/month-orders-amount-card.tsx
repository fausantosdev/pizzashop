import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Utensils } from 'lucide-react'

export function MonthOrdersAmountCard() {
  return(
    <Card className='flex-1'>
      <CardHeader className='flex-row justify-between items-center space-y-0 pb-2'>
        <CardTitle className='text-base font-semibold'>Pedidos (mês)</CardTitle>
        <Utensils className='h-4 w-4 text-muted-foreground'/>
      </CardHeader>
      <CardContent className='space-y-1'>
        <span className='text-2xl font-bold'>874</span>
        <p className='text-xs text-muted-foreground'>
          <span className='text-emerald-500 dark:text-emerald-400'>+12%</span> em relação ao mês passado
        </p>
      </CardContent>
    </Card>
  )
}
