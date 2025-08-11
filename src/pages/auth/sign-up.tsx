import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { registerRestaurant } from '@/api/register-restaurant'

const signUpFormSchema = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email()
})

type SignInFormTypes = z.infer<typeof signUpFormSchema>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: {
      isSubmitting
    }
  } = useForm<SignInFormTypes>()

  const { mutateAsync: authRegister } = useMutation({
    mutationFn: registerRestaurant
  })

  async function handleSignUp(data: SignInFormTypes) {
    await authRegister({
      restaurantName: data.restaurantName,
      managerName: data.managerName,
      email: data.email,
      phone: data.phone
    })

    try {

      toast.success('Restaurante cadastrado com sucesso', {
        action: {
          label: 'Login',
          onClick: () => navigate(`/sign-in?email=${data.email}`)
        }
      })
    } catch (error) {
      toast.error('Erro ao se cadastrar, por favor tente novamente')
      return
    }
  }

  return (
    <>
      <Helmet title='Cadastro'/>
      <div className='p-8'>
      <Button
          asChild
          className='absolute right-8 top-8'
          variant='ghost'>
          <Link to='/sign-in'>
            Fazer login
          </Link>
        </Button>
        <div className='w-[350px] flex flex-col justify-center gap-6'>
          <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tighter'>Criar conta grátis</h1>
            <p className='text-sm text-muted-foreground'>Seja um parceiro e comece suas vendas!</p>
          </div>
          <form
            className='space-y-4'
            onSubmit={handleSubmit(handleSignUp)}>
            <div className='space-y-2'>
              <label htmlFor='restaurantName'>Nome do estabelecimento</label>
              <Input
                id='restaurantName'
                type='text'
                {...register('restaurantName')}/>
            </div>
            <div className='space-y-2'>
              <label htmlFor='managerName'>Seu nome</label>
              <Input
                id='managerName'
                type='text'
                {...register('managerName')}/>
            </div>
            <div className='space-y-2'>
              <label htmlFor='email'>Seu e-mail</label>
              <Input
                id='email'
                type='email'
                {...register('email')}/>
            </div>
            <div className='space-y-2'>
              <label htmlFor='phone'>Seu celular</label>
              <Input
                id='phone'
                type='tel'
                {...register('phone')}/>
            </div>
            <Button disabled={isSubmitting} type='submit' className='w-full'>Finalizar cadastro</Button>

            <p className='px-6 text-center text-sm leading-relaxed text-muted-foreground'>
              Ao continuar você concorda com nossos <a className='underline underline-offset-4' href="#">termos de serviço</a> e <a className='underline underline-offset-4' href="#">políticas de privacidade</a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
