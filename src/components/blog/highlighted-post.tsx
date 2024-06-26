import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Large } from '../typography/large'
import { Paragraph } from '../typography/paragraph'
import { Small } from '../typography/small'
import { Button } from '../ui/button'

type HighlightedPostTypes = {
  slug: string
  title: string
  description: string
  date: Date
  image: string
}

export function HighlightedPost({
  slug,
  title,
  description,
  date,
  image,
}: HighlightedPostTypes) {
  return (
    <div className="col-span-6 flex flex-col rounded-md border transition-shadow hover:shadow-md">
      <div className="flex h-full flex-col justify-end gap-4 p-8">
        <Image
          src={image}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-full rounded bg-black-200 object-contain"
        />

        <div className="flex max-w-96 flex-col gap-1">
          <Small>{date.toLocaleDateString()}</Small>
          <Large>{title}</Large>
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
