import { ReactNode } from 'react'

type LeadProps = {
  children: ReactNode
}

export function Lead({ children }: LeadProps) {
  return <p className="text-xl text-muted-foreground">{children}</p>
}
