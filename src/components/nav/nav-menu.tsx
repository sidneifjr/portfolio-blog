'use client'

import { BookOpenText, Folders, Home, Mail } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

const menuItens = [
  {
    name: 'Home',
    slug: '/',
    icon: <Home height={20} width={20} />,
  },
  {
    name: 'Portfolio',
    slug: '/portfolio',
    icon: <Folders height={20} width={20} />,
  },
  {
    name: 'Blog',
    slug: '/blog',
    icon: <BookOpenText height={20} width={20} />,
  },
  {
    name: 'Contato',
    slug: '/contact',
    icon: <Mail height={20} width={20} />,
  },
]

export function NavMenu() {
  const pathname = usePathname()

  return (
    <NavigationMenu className="flex w-full max-w-full flex-1 items-start justify-normal">
      <NavigationMenuList className="flex w-full flex-col items-start gap-2">
        {menuItens.map((item) => {
          const { name, slug, icon } = item

          return (
            <NavigationMenuItem
              key={crypto.randomUUID()}
              className={`!mx-0 block w-full rounded transition-colors hover:bg-white ${pathname === slug ? 'bg-white text-black-200' : ''}`}
            >
              <Link
                className="flex flex-1 items-start justify-start gap-2 p-2 transition-colors hover:text-black-200"
                href={slug}
              >
                {icon}

                {name}
              </Link>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
