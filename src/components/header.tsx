import { Home, Pizza, UtensilsCrossed } from 'lucide-react'
import { Separator } from './ui/separator'
import { NavLink } from './nav-link'

import { ThemeToggle } from './theme/theme-toggle'
import { AccountMenu } from './account-menu'

export function Header() { //flex  items-center gap-6
  return (
    <div className='border-b'>
      <div className="flex flex-col items-center gap-6 py-6 px-6 md:flex-row">
        <div className='flex items-center justify-center
                        md:w-auto md:justify-normal'>
          <Pizza className='w-6 h-6 mr-5'/>
          <Separator orientation='vertical' className='h-6 hidden md:block' />
        </div>

        <nav className='flex items-center space-x-4 lg:space-x-6'>
          <NavLink to='/'>
            <Home className='h-4 w-4' />
            Início
          </NavLink>
          <NavLink to='/orders'>
            <UtensilsCrossed className='h-4 w-4' />
            Pedidos
          </NavLink>
        </nav>
        <div className='ml-auto flex items-center gap-2'>
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
