import { ReactNode } from 'react'

type H3Props = {
  children: ReactNode
}

export function H3({ children }: H3Props) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  )
}
