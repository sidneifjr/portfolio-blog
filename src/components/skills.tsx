import Image from 'next/image'

import cypress from '@/assets/skills/cypress.svg'
import next from '@/assets/skills/nextjs.svg'
import node from '@/assets/skills/node.svg'
import react from '@/assets/skills/react.svg'
import typescript from '@/assets/skills/typescript.svg'

export function Skills() {
  const skills = [
    {
      image: react,
      name: 'React',
    },
    {
      image: next,
      name: 'Next.js',
    },
    {
      image: typescript,
      name: 'TypeScript',
    },
    {
      image: node,
      name: 'Node.js',
    },
    {
      image: cypress,
      name: 'Cypress',
    },
  ]

  return (
    <ul className="grid w-full grid-cols-12 flex-wrap gap-y-6 pt-2 sm:gap-4 sm:gap-y-0">
      {skills.map((skill) => (
        <li
          key={crypto.randomUUID()}
          className="font-secondary col-span-1 flex flex-col items-center justify-center gap-3 rounded bg-slate-600 p-4 text-white"
        >
          <Image
            width={56}
            height={56}
            className="h-10 w-10 sm:h-14 sm:w-14"
            src={skill.image}
            alt={skill.name}
            quality={90}
          />

          <span className="font-medium text-white">{skill.name}</span>
        </li>
      ))}
    </ul>
  )
}
