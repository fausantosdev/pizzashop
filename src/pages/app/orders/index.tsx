import { Input } from '@/components/ui/input'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Helmet } from 'react-helmet-async'
import { OrderTableRow } from './order-table-row'

export function Orders() {
  return(
    <>
      <Helmet title='Pedidos'/>
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl font-bold tracking-tight'>Pedidos</h1>
      </div>
      <div className='space-y-2.5'>
        <form className='flex items-center gap-2' action=''>
          <span className='text-sm font-semibold'>Filtros</span>
          <Input placeholder='Nome do cliente' className='h-8 md:w-[320px]'/>
        </form>
        <div className='border rounded-md'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[64px]'></TableHead>
                <TableHead className='w-[148px]'>Identificador</TableHead>
                <TableHead className='w-[180px]'>Realizado há</TableHead>
                <TableHead className='w-[148px]'>Status</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className='w-[148px]'>Total</TableHead>
                <TableHead className='w-[164px]'></TableHead>
                <TableHead className='w-[132px]'></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, index) => (
                <OrderTableRow key={index}/>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
