'use client'

import { Spinner, Button } from 'flowbite-react'
import { useEffect, useState } from 'react'
import getRandomString from '../../utils/random'
// import { useRouter } from 'next/navigation'

interface RandomMembersProps {
  strings: string[]
  count: number
}
export default function RandomMembers({ strings, count }: RandomMembersProps) {
  const [loading, setLoading] = useState(true)
  const [randomStrings, setRandomStrings] = useState<string[]>([])
  const [previouslySelected, setPreviouslySelected] = useState<string[]>([])
  const [remainingMembers, setRemainingMembers] = useState<string[]>([])
  // const router = useRouter()

  const generateRandomStrings = () => {
    const newSelections = getRandomString(strings, count, previouslySelected)
    setRandomStrings(newSelections)
    setPreviouslySelected(prev => [...prev, ...newSelections])
    setRemainingMembers(strings.filter(str => ![...previouslySelected, ...newSelections].includes(str)))
    setLoading(false)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      generateRandomStrings()
    }, 3000)
    return () => clearTimeout(timer)
  }, [strings, count])

  const handleRerun = () => {
    setLoading(true)
    setTimeout(() => {
      generateRandomStrings()
    }, 3000)
  }

  return (
    <div className='ms-4'>
      {loading ? (
        <div className='flex gap-2'>
          <i className='text-sm font-light'>generating list...</i>
          <Spinner color='info' aria-label='Default status example' />
        </div>
      ) : (
        <div>
          <h2>Previously Selected Members:</h2>
          <ul>
            {previouslySelected.map((name, i) => (
              <li key={`prev-${i}`}>
                {i + 1}. {name}
              </li>
            ))}
          </ul>
          <h2>Currently Selected Members:</h2>
          <ul>
            {randomStrings.map((name, i) => (
              <li key={`new-${i}`}>
                {i + 1}. {name}
              </li>
            ))}
          </ul>
          <h2>Remaining Members:</h2>
          <ul>
            {remainingMembers.map((name, i) => (
              <li key={`remaining-${i}`}>
                {i + 1}. {name}
              </li>
            ))}
          </ul>
          <Button className='my-4' onClick={handleRerun}>
            re-run voucher
          </Button>
        </div>
      )}
    </div>
  )
}