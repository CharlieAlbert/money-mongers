'use client'

import { Spinner } from 'flowbite-react'
import { useEffect, useState } from 'react'
import getRandomString from '../../utils/random'

interface RandomMembersProps {
  strings: string[]
  count: number
}

export default function RandomMembers({ strings, count }: RandomMembersProps) {
  const [loading, setLoading] = useState(true)
  const [randomStrings, setRandomStrings] = useState<string[]>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      const generatedStrings = getRandomString(strings, count)
      setRandomStrings(generatedStrings)
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [strings, count])

  return (
    <div>
      {loading ? (
        <Spinner color='info' aria-label='Default status example' />
      ) : (
        <ul>
          {randomStrings.map((name, i) => (
            <li key={i}>
              {i + 1}. {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
