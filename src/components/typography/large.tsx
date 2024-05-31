import { ReactNode } from 'react'

type LargeProps = {
  children: ReactNode
}

export function Large({ children }: LargeProps) {
  return (
    <p className="text-black-200 scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
      {children}
    </p>
  )
}
