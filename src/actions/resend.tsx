'use server'

import { Resend } from 'resend'

import Mail from '@/components/mail/template'
import { env } from '@/env'
import { ContactFormInputs } from '@/hooks/use-form'

/**
 * Server Actions: a new paradigm in Next.js that allows you to run server code without having a separate API endpoint that you call from your client.
 * That way, you can have both your server code and your client code in the same place.
 */
export default async function send(data: ContactFormInputs) {
  'use server'

  const resend = new Resend(env.SECRET_RESEND_API_KEY)

  await resend.emails.send({
    from: 'Speech.me Team <onboarding@resend.dev>',
    to: 'sfarias.dev@gmail.com',
    reply_to: 'sfarias.dev@gmail.com',
    subject: 'Hello world',
    react: (
      <Mail
        name={data.name}
        email={data.email}
        message={data.message}
        subject={data.subject}
      />
    ),
  })
}
