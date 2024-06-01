import { ReactNode } from 'react'

type LargeProps = {
  children: ReactNode
}

export function Large({ children }: LargeProps) {
  return (
    <p className="scroll-m-20 text-4xl font-bold tracking-tight text-black-200 lg:text-5xl">
      {children}
    </p>
  )
}
