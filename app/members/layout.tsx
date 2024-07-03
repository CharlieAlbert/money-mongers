import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Money Mongers',
  description: 'This is the chama group bound by friendship'
}

export default function MtiLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>
}
