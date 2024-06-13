import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import send from '@/actions/resend'

const ContactFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string(),
  message: z.string().min(1),
})

export type ContactFormInputs = z.infer<typeof ContactFormSchema>

export function useSignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
  })

  const onSubmit: SubmitHandler<ContactFormInputs> = (
    data: ContactFormInputs,
  ) => {
    toast.success('Email sent, see you soon!', {
      className: 'absolute',
    })

    send(data)
  }

  return { register, handleSubmit, errors, isSubmitting, onSubmit }
}
