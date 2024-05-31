import { ReactNode } from 'react'

type ParagraphProps = {
  children: ReactNode
}

export function Paragraph({ children }: ParagraphProps) {
  return (
    <p className="text-base tracking-tight text-muted-foreground">{children}</p>
  )
}
