import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './style.css'
import Header from './components/header'
import { FooterComponent } from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Money Mongers',
  description: 'This is the chama group bound by friendship'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} page-container`}>
        <Header />
        <main className='content'>{children}</main>
        <FooterComponent />
      </body>
    </html>
  )
}
