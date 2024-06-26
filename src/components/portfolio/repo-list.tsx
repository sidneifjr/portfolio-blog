import Image from 'next/image'
import Link from 'next/link'

import { getRepos } from '@/api/getRepos'
import battlebitArsenal from '@/assets/battlebit-arsenal.png'
import igniteShop from '@/assets/ignite-shop.png'
import marvelSuperHeroes from '@/assets/marvel-super-heroes.png'
import nationalPokedex from '@/assets/national-pokedex.png'
import progenitor from '@/assets/progenitor.png'
import { H2 } from '@/components/typography/h2'
import { Paragraph } from '@/components/typography/paragraph'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const repoImages = [
  {
    name: 'battlebit-arsenal',
    image: battlebitArsenal,
  },
  {
    name: 'ignite-shop',
    image: igniteShop,
  },
  {
    name: 'pontua-marvel-super-heroes',
    image: marvelSuperHeroes,
  },
  {
    name: 'national-pokedex',
    image: nationalPokedex,
  },
  {
    name: 'Progenitor',
    image: progenitor,
  },
]

export async function RepoList() {
  const repos = await getRepos()

  return repos.map((repo) => {
    const {
      name,
      id,
      topics,
      description,
      private: isPrivate,
      html_url: htmlURL,
      homepage,
    } = repo

    const repoImage = repoImages.find((item) => item.name === name)

    const repoImageSrc = repoImage?.image.src

    if (!isPrivate && repoImageSrc) {
      return (
        <div
          className="group relative col-span-4 flex h-96 animate-fadeIn flex-col justify-end rounded p-4 pr-8 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:rounded-md before:bg-black/55 before:transition-all hover:before:bg-black/0"
          key={id}
        >
          <div className="absolute bottom-0 left-0 top-0 -z-10 h-auto w-full rounded-md bg-black-200">
            <Image
              src={repoImageSrc}
              alt={name}
              width={0}
              height={0}
              sizes="100vw"
              className="h-full w-full rounded-md object-contain"
            />
          </div>

          <div className="flex flex-1 flex-col transition-opacity group-hover:opacity-0">
            <H2 className="capitalize text-white">
              {name.replaceAll('-', ' ')}
            </H2>

            <div className="flex-1">
              <Paragraph>
                <span className="block text-white">{description}</span>
              </Paragraph>
            </div>

            <span className="mb-4 flex items-start gap-2 pt-2 text-sm capitalize">
              <Badge className="px-1.5">Stack</Badge>

              <span className="text-white">
                {topics.join(', ').replaceAll('-', ' ')}
              </span>
            </span>
          </div>

          <div className="flex gap-2">
            {homepage && (
              <Link href={homepage} target="_blank">
                <Button variant="outline">Visit</Button>
              </Link>
            )}

            <Link href={htmlURL} target="_blank">
              <Button variant="cta">Github</Button>
            </Link>
          </div>
        </div>
      )
    }

    return null
  })
}
