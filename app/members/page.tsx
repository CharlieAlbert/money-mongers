import Link from 'next/link'
import { Button } from 'flowbite-react'

export default function Mti() {
  const strings = [
    'Davis',
    'Charles',
    'Ryan',
    'Alvin',
    'Lebuluz',
    'Sheryl',
    'Shalon',
    'Lorraine',
    'Gracious'
  ]

  return (
    <div className='container px-2'>
      <h2>The following is a list of the esteem members of Money Mongers:</h2>
      <ul>
        {strings.map((name, i) => (
          <li key={i}>
            {i + 1}. {name}
          </li>
        ))}
      </ul>
      <Button className='my-4'>
        <Link href='/members/random' className='capitalize'>
          run voucher
        </Link>
      </Button>
    </div>
  )
}
