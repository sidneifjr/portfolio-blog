import { allDocs } from 'contentlayer/generated'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { Mdx } from '@/components/Mdx'
import { Large } from '@/components/typography/large'

type PageProps = {
  params: {
    slug: string
  }
}

async function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams.substring(1) === slug) // substring(1) is meant to remove the '/' from the 'slugAsParams' property and allow a match with the slug.

  if (!doc) {
    notFound()
  }

  return doc
}

export default async function Page({ params }: PageProps) {
  const { title, date, body, image } = await getDocFromParams(params.slug)
  const newDate = new Date(date).toLocaleDateString('en-US')

  return (
    <section className="col-span-7 flex flex-col gap-6 px-8 py-6">
      <div className="flex flex-col gap-2 border-b-2 border-black pb-4">
        <Large>{title}</Large>
        <time className="text-muted-foreground">{newDate}</time>
      </div>

      {image && (
        <Image
          src={image.trimEnd()}
          alt={title}
          width={750}
          height={367}
          quality={100}
        />
      )}

      <div className="max-w-[700px]">
        <Mdx code={body.code} />
      </div>
    </section>
  )
}
