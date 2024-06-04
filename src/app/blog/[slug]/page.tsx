import { allDocs } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
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
  const { title, date, body } = await getDocFromParams(params.slug)
  const newDate = format(parseISO(date), 'LLLL d, yyyy')

  return (
    <section className="col-span-7 px-8 py-6">
      <div className="flex flex-col gap-2 border-b-2 border-black pb-4">
        <Large>{title}</Large>
        <time className="text-muted-foreground">{newDate}</time>
      </div>

      <div className="max-w-[576px] py-4">
        <Mdx code={body.code} />
      </div>
    </section>
  )
}
