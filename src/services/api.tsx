import { env } from '@/env'

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

/**
 * A fetch API wrapper.
 *
 * Example of use:
 *
 * async function getProducts(): Promise<Product[]> {
 *  const products = await api('/products')
 *
 *  return products
 * }
 **/
export async function api(path: string, init?: RequestInit) {
  const baseUrl = env.PUBLIC_USER_API
  const url = new URL(path, baseUrl)

  try {
    const response = await fetch(url, init)
    const data = (await response.json()) as DataTypes

    if (!response.ok) {
      throw new Error('Fetch was unsuccessfull. Is the query parameter valid?')
    }

    return data
  } catch (error) {
    console.error(error)

    throw error
  }
}
