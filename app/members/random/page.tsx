import RandomMembers from './randomMembers'
import { Button } from 'flowbite-react'
import Link from 'next/link'

export default function RandomPicker() {
  const count = 3
  const strings = [
    'Davis',
    'Charles',
    'Ryan',
    'Alvin',
    'Lebu',
    'Sherryl',
    'Shalon',
    'Lorraine',
    'Gracious'
  ]
  return (
    <div>
      <RandomMembers strings={strings} count={count} />
      
    </div>
  )
}
