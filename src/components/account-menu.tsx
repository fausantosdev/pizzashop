import { useQuery } from '@tanstack/react-query'
import { Building, ChevronDown, LogOut } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator } from './ui/dropdown-menu'
import { Button } from './ui/button'

import { getProfile } from '@/api/get-profile'
import { getManagedRestaurant } from '@/api/get-managed-restaurant'
import { Skeleton } from './ui/skeleton'

export function AccountMenu() {
  const { data: profileData, isLoading: isLoading_ProfileData } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile
  })

  const { data: managedRestaurantData, isLoading: isLoading_ManagedRestaurant } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant
  })

  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant='outline' className='flex items-center gap-2 select-none'>
        {isLoading_ManagedRestaurant ? <Skeleton className='h-4 w-40'/> : managedRestaurantData?.name}
        <ChevronDown className='h-4 w-4'/>
      </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent align='end' className='w-56'>
      <DropdownMenuLabel className='flex flex-col'>
        {
          isLoading_ProfileData ?
          <div className='space-y-1.5'>
            <Skeleton className='h-4 w-40 mb-3'/>
            <Skeleton className='h-4 w-40'/>
          </div> :
          <>
            <span>{profileData?.name}</span>
            <span className='text-xm font-normal text-muted-foreground'>
              {profileData?.email}
            </span>
          </>
        }
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
