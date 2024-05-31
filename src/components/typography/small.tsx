import { ReactNode } from 'react'

type SmallProps = {
  children: ReactNode
}

export function Small({ children }: SmallProps) {
  return (
    <small className="text-sm leading-none text-muted-foreground">
      {children}
    </small>
  )
}
