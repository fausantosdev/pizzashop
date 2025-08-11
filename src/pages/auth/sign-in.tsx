import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'
import { Link, useSearchParams } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { useMutation } from '@tanstack/react-query'

import { Button } from '@/components/ui/button'
import { signIn } from '@/api/sign-in'

const signInFormSchema = z.object({
  email: z.string().email()
})

type SignInFormTypes = z.infer<typeof signInFormSchema>

export function SignIn() {
  const [ searchParams ] = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: {
      isSubmitting
    }
  } = useForm<SignInFormTypes>({
      defaultValues: {
        email: searchParams.get('email') ?? ''
      }
    })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn
  })

  async function handleSignIn({ email }: SignInFormTypes) {
    if (!email) {
      toast.warning('Por favor, informe um e-mail válido.')
      return
    }

    try {
      await authenticate({ email })

      toast.success('Enviamos um link de autenticação para seu e-mail', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSignIn({ email })
        }
      })
    } catch (error) {
      toast.error('Erro ao autenticar, tente novamente', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSignIn({ email })
        }
      })
      return
    }
  }

  return (
    <>
      <Helmet title='Login'/>
      <div className='p-8'>
        <Button
          asChild
          className='absolute right-8 top-8'
          variant='ghost'>
          <Link to='/sign-up'>
            Novo estabelecimento
          </Link>
        </Button>
        <div className='w-[350px] flex flex-col justify-center gap-6'>
          <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tighter'>Acessar painel</h1>
            <p className='text-sm text-muted-foreground'>Acompanhe suas vendas pelo painel do parceiro</p>
          </div>
          <form
            className='space-y-4'
            onSubmit={handleSubmit(handleSignIn)}>
            <div className='space-y-2'>
              <label htmlFor='email'>Seu e-mail</label>
              <Input
                id='email'
                type='email'
                {...register('email')}/>
            </div>
            <Button disabled={isSubmitting} type='submit' className='w-full'>Acessar painel</Button>
          </form>
        </div>
      </div>
    </>
  )
}
