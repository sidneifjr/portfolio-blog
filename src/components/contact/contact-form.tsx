'use client'

import Image from 'next/image'

import loader from '@/assets/loader.svg'
import { useSignUp } from '@/hooks/use-form'

import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'

export function ContactForm() {
  const { register, isSubmitting, handleSubmit, onSubmit } = useSignUp()

  return (
    <form
      className="flex max-w-[600px] flex-col gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex w-full gap-6">
        <fieldset className="flex flex-1 flex-col gap-2">
          <Label htmlFor="name">Full Name</Label>
          <Input {...register('name')} />
        </fieldset>

        <fieldset className="flex flex-1 flex-col gap-2">
          <Label htmlFor="email">Email address</Label>
          <Input {...register('email')} />
        </fieldset>
      </div>

      <fieldset className="flex flex-1 flex-col gap-2">
        <Label htmlFor="subject">Subject</Label>
        <Input {...register('subject')} />
      </fieldset>

      <fieldset className="flex flex-1 flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea {...register('message')} />
      </fieldset>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="max-w-max self-end bg-blue hover:bg-blue/80"
      >
        {isSubmitting && (
          <Image src={loader} alt="loading" height={20} width={20} />
        )}
        Send message
      </Button>
    </form>
  )
}
