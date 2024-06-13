import { FileText } from 'lucide-react'

import { getUserData } from '@/api/getUserData'
import { Skills } from '@/components/skills'
import { H3 } from '@/components/typography/h3'
import { Large } from '@/components/typography/large'
import { Paragraph } from '@/components/typography/paragraph'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export default async function Home() {
  const { name, location, avatarURL } = await getUserData()

  return (
    <section className="col-span-7 grid px-8 py-6">
      <div className="flex flex-col gap-4">
        <div className="border-b-2 border-black pb-2">
          <Large>Home</Large>
        </div>

        <div className="flex animate-fadeIn gap-4 transition-all">
          <div className="h-48 w-48 rounded-full bg-black-200/90 p-2">
            <Avatar className="flex h-full w-full rounded-full">
              <AvatarImage src={avatarURL} width={160} height={160} />
              <AvatarFallback className="text-lg">SF</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex max-w-[520px] flex-col gap-2">
            <Paragraph>
              Olá! Eu sou o{' '}
              <mark className="rounded bg-black-200 px-0.5 font-medium text-white">
                {name}
              </mark>
              , engenheiro de front-end.
            </Paragraph>

            <Paragraph>
              Trabalho há mais de cinco anos na criação de interfaces agradáveis
              e modernas. Sou apaixonado pela área, à procura de novos desafios
              e soluções eficientes. Também gosto de{' '}
              <strong>automatizar processos</strong> e atualmente resido em{' '}
              {location}.
            </Paragraph>

            <Paragraph>
              Nas horas vagas, pratico natação, musculação e atletismo. Outros
              interesses incluem games, cinema clássico.
            </Paragraph>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <H3>Stack</H3>

          <Skills />

          <Button variant="cta" className="flex max-w-max gap-2 bg-blue">
            <FileText />
            Currículo
          </Button>
        </div>
      </div>
    </section>
  )
}
