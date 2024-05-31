import { ReactNode } from 'react'

type H4Props = {
  children: ReactNode
}

export function H4({ children }: H4Props) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  )
}
