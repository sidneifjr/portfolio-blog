import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { H4 } from '../typography/h4'
import { Paragraph } from '../typography/paragraph'
import { Small } from '../typography/small'
import { Button } from '../ui/button'

type PostTypes = {
  slug: string
  title: string
  description: string
  date: Date
  image: string
}

export function Post({ slug, title, description, date, image }: PostTypes) {
  return (
    <div className="flex flex-1 gap-4 px-2 py-2 transition-shadow hover:shadow-md">
      <div className="flex items-center rounded bg-black-200">
        <Image
          src={image}
          alt={title}
          width={150}
          height={150}
          quality={100}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-1">
          <Small>{date.toLocaleDateString()}</Small>
          <H4>{title}</H4>
        </div>

        <Paragraph>{description}</Paragraph>

        <Link className="w-max" href={`/blog/${slug}`}>
          <Button variant="link" className="group flex gap-1.5">
            Leia mais{' '}
            <MoveRight
              width={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Button>
        </Link>
      </div>
    </div>
  )
}
