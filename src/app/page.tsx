import Image from 'next/image'

import { Large } from '@/components/typography/large'
import { Paragraph } from '@/components/typography/paragraph'
import { env } from '@/env'
import { api } from '@/services/api'

type DataTypes = {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string
  company: null
  blog: string
  location: string
  email: null
  hireable: boolean
  bio: string
  twitter_username: null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: Date
  updated_at: Date
}

export default async function Home() {
  const {
    name,
    location,
    avatar_url: avatarURL,
  }: DataTypes = await api(env.PUBLIC_USER_API, {
    headers: {
      authorization: `token ${env.SECRET_GITHUB_PERSONAL_ACCESS_TOKEN}`,
    },
  })

  return (
    <section className="col-span-7 grid px-8 py-6">
      <div className="flex flex-col gap-4">
        <div className="border-b-2 border-black pb-2">
          <Large>Home</Large>
        </div>

        <Image
          width={120}
          height={120}
          src={avatarURL}
          alt={name}
          className="rounded-xl"
        />

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
        </div>
      </div>
    </section>
  )
}
