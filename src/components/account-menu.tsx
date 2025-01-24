import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { Building, ChevronDown, LogOut } from 'lucide-react'

export function AccountMenu() {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant='outline' className='flex items-center gap-2 select-none'>
        Pizaz Shop
        <ChevronDown className='h-4 w-4'/>
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent align='end' className='w-56'>
      <DropdownMenuLabel className='flex flex-col'>
        <span>Flávio Santos</span>
        <span className='text-xm font-normal text-muted-foreground'>
          fausantosdev@gmail.com
        </span>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Building className='w-4 h-4 mr-2'/>
        <span>Perfil da loja</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <LogOut className='text-rose-500 dark:text-rose-400'/>
        <span>Sair</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}
