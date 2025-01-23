"use client";
import Link from "next/link";
import { ArrowLeft, Home, Slash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "../components/ui/card";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gray-50">
      <Card className="w-full max-w-lg text-center">
        <CardContent className="pt-16 pb-10 px-4 space-y-6">
          {/* Icon */}
          <div className="mx-auto w-24 h-24 bg-red-500 rounded-full flex items-center justify-center">
            <Slash className="w-12 h-12 text-white rotate-12" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold text-[#1a2542] mt-8">
            404 - Page Not Found
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been
            moved or deleted.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button
              asChild
              variant="default"
              className="bg-[#4169e1] hover:bg-[#3154b3]"
            >
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go to Homepage
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="text-[#9370db] hover:text-[#7b5ab5] border-[#9370db] hover:border-[#7b5ab5] hover:bg-[#9370db]/10"
            >
              <button onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </button>
            </Button>
          </div>
        </CardContent>

        <CardFooter className="justify-center pb-8 text-sm text-gray-500">
          © {new Date().getFullYear()} School Smart. All rights reserved.
        </CardFooter>
      </Card>
    </div>
  );
}
