'use client'
import React, { use } from 'react'
import { useRouter } from 'next/navigation'

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
        <button onClick={handleBackHome}>Back Home</button>
      </div>
    </div>
  )
}