import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'

export default function page() {
  return (
    <div>
        <h2>Students</h2>
        <Button>
            <Link href='/dashboard/students/new'>New Student</Link>
        </Button>
    </div>
  )
}
