"use client"

import Link from "next/link"
import { ArrowLeft, Home, ZapOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ErrorProps {
  error?: Error
  reset?: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <Card className="w-full max-w-lg text-center shadow-lg">
        <CardContent className="pt-16 pb-10 px-4 space-y-6">
          {/* Error Icon */}
          <div className="mx-auto w-24 h-24 bg-red-500 rounded-full flex items-center justify-center">
            <ZapOff className="w-12 h-12 text-white" />
          </div>

          {/* Error Title */}
          <h1 className="text-4xl font-bold text-gray-900 mt-8">500 - Server Error</h1>

          {/* Error Description */}
          <div className="space-y-2">
            <p className="text-gray-600 text-lg">Sorry! Something went wrong on our server.</p>
            <p className="text-gray-500">We're working to fix the issue.</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button asChild variant="default" className="bg-gray-900 hover:bg-gray-800 min-w-[160px]">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go to Homepage
              </Link>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()} className="min-w-[160px]">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </CardContent>

        {error?.message && (
          <CardFooter className="justify-center pb-8">
            <p className="text-sm text-gray-500">Error: {error.message}</p>
          </CardFooter>
        )}
      </Card>
    </div>
  )
}

