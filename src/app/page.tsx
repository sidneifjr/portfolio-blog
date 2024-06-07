import { getUserData } from '@/api/getUserData'
import { Skills } from '@/components/skills'
import { Large } from '@/components/typography/large'
import { Paragraph } from '@/components/typography/paragraph'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default async function Home() {
  const { name, location, avatarURL } = await getUserData()

  return (
    <section className="col-span-7 grid px-8 py-6">
      <div className="flex flex-col gap-4">
        <div className="border-b-2 border-black pb-2">
          <Large>Home</Large>
        </div>

        <div className="h-32 w-32 rounded-full bg-black-200/90 p-2">
          <Avatar className="flex h-full w-full rounded-full">
            <AvatarImage src={avatarURL} width={120} height={120} />
            <AvatarFallback className="text-lg">SF</AvatarFallback>
          </Avatar>
        </div>

        <Paragraph>
          <mark className="rounded bg-black-200 px-0.5 font-medium text-white">
            Olá!
          </mark>{' '}
          Eu sou o <strong>{name}</strong>, engenheiro de front-end.
        </Paragraph>

        <Paragraph>
          Trabalho há mais de cinco anos na criação de interfaces agradáveis e
          modernas. Sou apaixonado pela área, à procura de novos desafios e
          soluções eficientes.
        </Paragraph>

        <Paragraph>
          Eu gosto de <strong>automatizar processos</strong>.
        </Paragraph>

        <Paragraph>Atualmente, resido em {location}.</Paragraph>

        <div>
          <Paragraph>
            Algumas tecnologias com as quais trabalho incluem:{' '}
          </Paragraph>

          <Skills />
        </div>
      </div>
    </section>
  )
}
