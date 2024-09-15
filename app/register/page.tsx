'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronLeft, UserPlus } from 'lucide-react'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Registering user:', { name, age })
    // Add logic to save user and redirect
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-md mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-teal-400 hover:text-teal-300 flex items-center">
            <ChevronLeft className="h-6 w-6 mr-2" />
            Tilbake
          </Link>
          <h1 className="text-2xl font-bold text-center">Registrer Bruker</h1>
        </div>
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-teal-400">Opprett ny konto</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Navn</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Alder</Label>
                <Input
                  id="age"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-teal-400 hover:bg-teal-500 text-gray-900 font-semibold">
                <UserPlus className="mr-2 h-4 w-4" /> Registrer
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}