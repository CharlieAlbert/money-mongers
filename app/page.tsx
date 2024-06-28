import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Money Mongers'
  }
}

const page = () => {
  return (
    <div>
      <section className='p-24'>
        <div className='container'>
          <h1 className='text-3xl font-bold capitalize'>money mongers</h1>
        </div>
      </section>
    </div>
  )
}

export default page
