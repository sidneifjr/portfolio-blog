import type { Metadata } from 'next'

import { ContactForm } from '@/components/contact/contact-form'
import { Large } from '@/components/typography/large'
import { Paragraph } from '@/components/typography/paragraph'

export const metadata: Metadata = {
  title: 'Contact',
}

export default function Contact() {
  return (
    <section className="col-span-7 grid px-8 py-6">
      <div className="flex flex-col gap-4">
        <div className="border-b-2 border-black pb-2">
          <Large>Contact</Large>
        </div>

        <div className="flex animate-fadeIn flex-col gap-8 transition-all">
          <Paragraph className="max-w-[600px]">
            Atualmente, estou à procura de novos desafios e aberto à novas
            oportunidades, sejam CLT, PJ ou propostas de freelancer.
          </Paragraph>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
