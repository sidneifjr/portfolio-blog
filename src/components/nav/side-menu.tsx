import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

import { H1 } from '../typography/h1'
import { NavMenu } from './nav-menu'

export function SideMenu() {
  return (
    <aside className="flex flex-col items-start gap-8 bg-black-200 p-6 text-white">
      <Link href="/">
        <H1>Sidnei Farias</H1>
      </Link>

      <NavMenu />

      <footer className="flex w-full flex-col items-center justify-center gap-3">
        <div className="flex gap-4">
          <a
            href="https://github.com/sidneifjr"
            title="Github"
            target="blank"
            className="text-white"
          >
            <span className="absolute block -indent-[9999px]">Github</span>

            <Github />
          </a>

          <a
            href="https://www.linkedin.com/in/sidnei-farias/"
            title="Linkedin"
            target="blank"
            className="text-white"
          >
            <span className="absolute block -indent-[9999px]">Linkedin</span>

            <Linkedin />
          </a>
        </div>

        <p className="font-secondary text-white">
          © Sidnei Farias, {new Date().getFullYear()}.
        </p>
      </footer>
    </aside>
  )
}
