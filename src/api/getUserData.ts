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

export async function getUserData() {
  const {
    name,
    location,
    avatar_url: avatarURL,
  }: DataTypes = await api(env.PUBLIC_USER_API, {
    headers: {
      authorization: `token ${env.SECRET_GITHUB_PERSONAL_ACCESS_TOKEN}`,
    },
  })

  return { name, location, avatarURL }
}
