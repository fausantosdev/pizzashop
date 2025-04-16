import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip } from 'recharts'
import colors from 'tailwindcss/colors'

const data = [
  {
    date: '10/12',
    revenue: 1200,
  },
  {
    date: '11/12',
    revenue: 200,
  },
  {
    date: '12/12',
    revenue: 1000,
  },
  {
    date: '13/12',
    revenue: 600,
  },
  {
    date: '14/12',
    revenue: 250,
  },
  {
    date: '15/12',
    revenue: 1840,
  },
  {
    date: '16/12',
    revenue: 1200,
  }
]

export function RevenueChart() {
  return (
    <Card className='flex-1'>
      <CardHeader className='flex-row items-center justify-between pb-8'>
        <div className='space-y-1'>
          <CardTitle className='text-base font-medium'>Receita no período</CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width='100%' height={240}>
          <LineChart
            style={{ fontSize: 12 }}
            data={data}>
            <YAxis
              stroke='#888888'
              //axisLine={false}
              //tickLine={false}
              width={80}
              tickFormatter={(value: number) => value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}/>
            <XAxis
              dataKey='date'
              //axisLine={false}
              //tickLine={false}
              dy={16}/>
            <CartesianGrid
              vertical={false}
              className='stroke-muted'/>
            <Line
              type='linear'
              dataKey='revenue'
              stroke={colors['violet'][500]}
              strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
