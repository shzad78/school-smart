import React from 'react'
import { Badge } from '../ui/badge'
import { Sparkle } from 'lucide-react'

export default function SmallTitle({title} : {title: string}) {
  return (
    <Badge variant="secondary" className="mb-8 flex items-center gap-1.5 rounded-full px-4 py-1.5">
        <Sparkle className="h-4 w-4" />
        <span>{title}</span>
      </Badge>
  )
}
