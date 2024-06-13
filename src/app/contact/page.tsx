import type { Metadata } from 'next'

import { Large } from '@/components/typography/large'
import { Paragraph } from '@/components/typography/paragraph'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export const metadata: Metadata = {
  title: 'Contact',
}

export default async function Contact() {
  return (
    <section className="col-span-7 grid px-8 py-6">
      <div className="flex flex-col gap-4">
        <div className="border-b-2 border-black pb-2">
          <Large>Contact</Large>
        </div>

        <div className="flex animate-fadeIn flex-col gap-8 transition-all">
          <Paragraph className="max-w-[600px]">
            Atualmente, estou à procura de novos desafios e aberto à novas
            oportunidades, sejam fixas ou propostas de freelancer.
          </Paragraph>

          <form className="flex max-w-[600px] flex-col gap-6">
            <div className="flex w-full gap-6">
              <fieldset className="flex flex-1 flex-col gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input name="name" />
              </fieldset>

              <fieldset className="flex flex-1 flex-col gap-2">
                <Label htmlFor="email">Email address</Label>
                <Input name="email" />
              </fieldset>
            </div>

            <fieldset className="flex flex-1 flex-col gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input name="subject" />
            </fieldset>

            <fieldset className="flex flex-1 flex-col gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea name="message" />
            </fieldset>

            <Button
              type="submit"
              className="max-w-max self-end bg-blue hover:bg-blue/80"
            >
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
