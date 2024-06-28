import Link from 'next/link'

export default function Header() {
  interface headerItem {
    label: string
    href?: string
    onClick?: () => void
  }

  const headerItems: headerItem[] = [
    { label: 'Members', href: '/members' },
    { label: 'Docs', href: '/docs' },
    { label: 'Accounts', href: '/accounts' }
  ]
  return (
    <header className='w-full bg-orange-900 p-4 capitalize text-white'>
      <div className='flex items-center justify-between'>
        <div>
          <Link href='/'>Home</Link>
        </div>
        <div>
          <ul className='flex items-center justify-between gap-6'>
            {headerItems.map(item => (
              <li key={item.label}>
                {item.href ? (
                  <Link href={item.href}>{item.label}</Link>
                ) : (
                  <a onClick={item.onClick}>{item.label}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
