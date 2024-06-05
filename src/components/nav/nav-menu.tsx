'use client'

import { BookOpenText, Folders, Home, Mail } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

import { Small } from '../typography/small'

const menuItens = [
  {
    name: 'Home',
    description: 'About me',
    slug: '/',
    icon: <Home height={20} width={20} />,
  },
  {
    name: 'Portfolio',
    description: 'My projects',
    slug: '/portfolio',
    icon: <Folders height={20} width={20} />,
  },
  {
    name: 'Blog',
    description: 'My posts',
    slug: '/blog',
    icon: <BookOpenText height={20} width={20} />,
  },
  {
    name: 'Contact',
    description: "Let's talk",
    slug: '/contact',
    icon: <Mail height={20} width={20} />,
  },
]

export function NavMenu() {
  const pathname = usePathname()

  return (
    <NavigationMenu className="nav-menu flex flex-1 items-start justify-normal">
      <NavigationMenuList className="flex w-full flex-col items-start gap-2">
        {menuItens.map((item) => {
          const { name, description, slug, icon } = item

          /**
           * Avoids multiple active items due to home having a '/' slug, which is a character also present in all other slugs.
           * The "startsWith" method does a complete comparison of a string, while "includes" verifies each character of a string, causing the issue described above.
           */
          const isActive =
            slug === '/' ? pathname === slug : pathname.startsWith(slug)

          return (
            <NavigationMenuItem
              key={crypto.randomUUID()}
              className={`!mx-0 block w-full rounded transition-colors hover:bg-white ${isActive ? 'bg-white text-black-200' : ''}`}
            >
              <Link
                className="flex flex-1 flex-col items-start justify-start p-2 transition-colors hover:text-black-200"
                href={slug}
              >
                <div className="flex gap-2">
                  {icon}

                  <span className={`${pathname === slug && 'font-medium'}`}>
                    {name}
                  </span>
                </div>

                {pathname === slug && (
                  <Small className="h-auto pl-7">{description}</Small>
                )}
              </Link>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
