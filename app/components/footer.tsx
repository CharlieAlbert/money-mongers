import { Footer } from 'flowbite-react'
import '../style.css'

export function FooterComponent() {
  interface FooterItem {
    label: string
    href?: string
    onClick?: () => void
  }
  const footerItems: FooterItem[] = [
    { label: 'Members', href: '/members' },
    { label: 'Docs', href: '/docs' },
    { label: 'Accounts', href: '/accounts' }
  ]

  const CurrentYear = () => new Date().getFullYear()

  return (
    <Footer className='custom-footer'>
      <Footer.Copyright href='#' by='Money Mongers™' year={CurrentYear()} />
      <Footer.LinkGroup>
        {footerItems.map((item, index) =>
          item.href ? (
            <Footer.Link key={index} href={item.href}>
              {item.label}
            </Footer.Link>
          ) : null
        )}
      </Footer.LinkGroup>
    </Footer>
  )
}
