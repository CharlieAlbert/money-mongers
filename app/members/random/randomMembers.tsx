'use client'

import { Spinner, Button } from 'flowbite-react'
import { useEffect, useState } from 'react'
import getRandomString from '../../utils/random'
import { useRouter } from 'next/navigation'
interface RandomMembersProps {
  strings: string[]
  count: number
}

export default function RandomMembers({ strings, count }: RandomMembersProps) {
  const [loading, setLoading] = useState(true)
  const [randomStrings, setRandomStrings] = useState<string[]>([])
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      const generatedStrings = getRandomString(strings, count)
      setRandomStrings(generatedStrings)
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [strings, count])

  return (
    <div className='ms-4'>
      {loading ? (
        <div className='flex gap-2'>
          <span className='text-sm font-thin'>Generating list...</span>
          <Spinner color='info' aria-label='Default status example' />
        </div>
      ) : (
        <div>
          <ul>
            {randomStrings.map((name, i) => (
              <li key={i}>
                {i + 1}. {name}
              </li>
            ))}
          </ul>
          <Button className='my-4'>
            <a onClick={() => router.refresh()} className='capitalize'>
              re-run voucher
            </a>
          </Button>
        </div>
      )}
    </div>
  )
}
