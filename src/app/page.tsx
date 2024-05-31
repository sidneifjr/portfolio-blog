import { Large } from '@/components/typography/large'
import { Paragraph } from '@/components/typography/paragraph'
import { env } from '@/env'
import { api } from '@/services/api'

export default async function Home() {
  const { name, location, repos_url: reposURL } = await api(env.PUBLIC_USER_API)
  console.log(name, location, reposURL)

  return (
    <section className="col-span-7 grid px-8 py-6">
      <div className="flex flex-col gap-4">
        <div className="border-b-2 border-black pb-2">
          <Large>Home</Large>
        </div>

        <Paragraph>
          <strong>Olá!</strong> Eu sou o <strong>{name}</strong>, engenheiro de
          front-end.
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
        </div>
      </div>
    </section>
  )
}
