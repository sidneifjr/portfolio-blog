import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import battlebitArsenal from '@/assets/battlebit-arsenal.png'
import igniteShop from '@/assets/ignite-shop.png'
import marvelSuperHeroes from '@/assets/marvel-super-heroes.png'
import nationalPokedex from '@/assets/national-pokedex.png'
import progenitor from '@/assets/progenitor.png'
import { H2 } from '@/components/typography/h2'
import { Large } from '@/components/typography/large'
import { Paragraph } from '@/components/typography/paragraph'
import { Badge } from '@/components/ui/badge'
import { env } from '@/env'
import { api } from '@/services/api'

interface Owner {
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
}

type RepoTypes = {
  id: number
  node_id: string
  name: string
  full_name: string
  private: boolean
  owner: Owner
  html_url: string
  description: string | null
  fork: boolean
  url: string
  forks_url: string
  keys_url: string
  collaborators_url: string
  teams_url: string
  hooks_url: string
  issue_events_url: string
  events_url: string
  assignees_url: string
  branches_url: string
  tags_url: string
  blobs_url: string
  git_tags_url: string
  git_refs_url: string
  trees_url: string
  statuses_url: string
  languages_url: string
  stargazers_url: string
  contributors_url: string
  subscribers_url: string
  subscription_url: string
  commits_url: string
  git_commits_url: string
  comments_url: string
  issue_comment_url: string
  contents_url: string
  compare_url: string
  merges_url: string
  archive_url: string
  downloads_url: string
  issues_url: string
  pulls_url: string
  milestones_url: string
  notifications_url: string
  labels_url: string
  releases_url: string
  deployments_url: string
  created_at: string
  updated_at: string
  pushed_at: string
  git_url: string
  ssh_url: string
  clone_url: string
  svn_url: string
  homepage: string | null
  size: number
  stargazers_count: number
  watchers_count: number
  language: string | null
  has_issues: boolean
  has_projects: boolean
  has_downloads: boolean
  has_wiki: boolean
  has_pages: boolean
  has_discussions: boolean
  forks_count: number
  mirror_url: string | null
  archived: boolean
  disabled: boolean
  open_issues_count: number
  license: string | null
  allow_forking: boolean
  is_template: boolean
  web_commit_signoff_required: boolean
  topics: string[]
  visibility: string
  forks: number
  open_issues: number
  watchers: number
  default_branch: string
}

export const metadata: Metadata = {
  title: 'Portfolio',
}

const repoImages = [
  {
    name: 'Battlebit Arsenal',
    image: battlebitArsenal,
  },
  {
    name: 'Ignite Shop',
    image: igniteShop,
  },
  {
    name: 'Pontua Marvel Super Heroes',
    image: marvelSuperHeroes,
  },
  {
    name: 'National Pokedex',
    image: nationalPokedex,
  },
  {
    name: 'Progenitor',
    image: progenitor,
  },
]

export default async function Portfolio() {
  const repos: RepoTypes[] = await api(`${env.PUBLIC_USER_API}/repos`, {
    headers: {
      authorization: `token ${env.SECRET_GITHUB_PERSONAL_ACCESS_TOKEN}`,
    },

    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  return (
    <section className="col-span-7 grid px-8 py-6">
      <div className="flex flex-col gap-4">
        <div className="border-b-2 border-black pb-2">
          <Large>Portfolio</Large>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {repos.map((repo, index) => {
            const {
              name,
              id,
              topics,
              description,
              private: isRepoPrivate,
              html_url: htmlURL,
            } = repo

            if (isRepoPrivate === false) {
              return (
                <Link
                  href={htmlURL}
                  className="relative col-span-4 flex h-96 flex-col justify-end p-4 pr-8"
                  key={id}
                  target="_blank"
                >
                  {/* <Image
                    src={}
                    alt="name"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="absolute bottom-0 left-0 top-0 h-auto w-full"
                  /> */}

                  <H2>
                    <span className="capitalize">
                      {name.replaceAll('-', ' ')}
                    </span>
                  </H2>

                  <div className="flex-1">
                    <Paragraph>
                      <span className="block">{description}</span>
                    </Paragraph>
                  </div>

                  <span className="flex items-start gap-2 pt-2 capitalize">
                    <Badge>Stack</Badge>

                    {topics.join(', ').replaceAll('-', ' ')}
                  </span>
                </Link>
              )
            }

            return null
          })}
        </div>
      </div>
    </section>
  )
}
