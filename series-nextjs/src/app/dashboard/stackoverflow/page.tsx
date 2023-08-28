'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from 'react-bootstrap'

type Props = {}

export default function StackOverflow({}: Props) {
  const router = useRouter()
  
  const handleBackHome = () => {
    router.push('/')
  }

  return (
    <div>
      StackOverflow
      <div>
        <Button variant='primary'>Bootstrap Button</Button>
        <button onClick={handleBackHome}>Back Home</button>
      </div>
    </div>
  )
}