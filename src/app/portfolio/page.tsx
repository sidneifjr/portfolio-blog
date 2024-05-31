import type { Metadata } from 'next'

import { RepoList } from '@/components/portfolio/repo-list'
import { Large } from '@/components/typography/large'

export const metadata: Metadata = {
  title: 'Portfolio',
}

export default async function Portfolio() {
  return (
    <section className="col-span-7 grid px-8 py-6">
      <div className="flex flex-col gap-4">
        <div className="border-b-2 border-black pb-2">
          <Large>Portfolio</Large>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <RepoList />
        </div>
      </div>
    </section>
  )
}
