import { ReactNode } from 'react'

type SmallProps = {
  children: ReactNode
}

export function Small({ children }: SmallProps) {
  return (
    <span className="text-sm leading-none text-muted-foreground">
      {children}
    </span>
  )
}
