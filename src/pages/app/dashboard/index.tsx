import { Helmet } from 'react-helmet-async'
import { MonthRevenueCard } from './month-revenue-card'
import { MonthOrdersAmountCard } from './month-orders-amount-card'
import { DayOrdersAmountCard } from './day-orders-amount-card'
import { MonthCanceledOrdersAmountCard } from './month-canceled-orders-amount-card'
import { RevenueChart } from '@/components/revenue-chart'
import { PopularProductsChart } from '@/components/popular-products-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title='Dashboard'/>
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>

        <div className='flex flex-col md:flex-row gap-4'>
          <div className='flex-1 gap-4 flex flex-col sm:flex-row'>
            <MonthRevenueCard />
            <MonthOrdersAmountCard />
          </div>
          <div className='flex-1 gap-4 flex flex-col sm:flex-row'>
            <DayOrdersAmountCard />
            <MonthCanceledOrdersAmountCard />
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-4 flex-1'>
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
