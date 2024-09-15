'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"
import { ChevronLeft, Check } from 'lucide-react'

type ChoreSubmission = {
  id: number
  userId: number
  userName: string
  chores: { id: number; name: string; points: number }[]
}

// This would typically come from an API
const mockSubmissions: ChoreSubmission[] = [
  {
    id: 1,
    userId: 101,
    userName: "Emma",
    chores: [
      { id: 1, name: "Støvsuge stue", points: 10 },
      { id: 3, name: "Rydde kjøkken", points: 8 },
    ]
  },
  {
    id: 2,
    userId: 102,
    userName: "Oliver",
    chores: [
      { id: 2, name: "Vaske bad", points: 15 },
      { id: 4, name: "Ta ut søppel", points: 5 },
    ]
  }
]

export default function ValidateChoresPage() {
  const [submissions, setSubmissions] = useState<ChoreSubmission[]>([])

  useEffect(() => {
    // In a real app, you'd fetch this data from your API
    setSubmissions(mockSubmissions)
  }, [])

  const handleApprove = (submissionId: number) => {
    // Here you would send an approval to your backend
    toast({
      title: "Oppgaver godkjent",
      description: "Poeng har blitt lagt til brukerens konto.",
    })
    // Remove the approved submission from the list
    setSubmissions(prev => prev.filter(sub => sub.id !== submissionId))
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-teal-400 hover:text-teal-300 flex items-center">
            <ChevronLeft className="h-6 w-6 mr-2" />
            Tilbake
          </Link>
          <h1 className="text-2xl font-bold text-center">Valider Husarbeid</h1>
        </div>
        {submissions.length === 0 ? (
          <p className="text-center text-gray-400">Ingen oppgaver å validere for øyeblikket.</p>
        ) : (
          <div className="space-y-4">
            {submissions.map((submission) => (
              <Card key={submission.id} className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-teal-400">{submission.userName}s Innsending</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 mb-4 space-y-2">
                    {submission.chores.map((chore) => (
                      <li key={chore.id} className="text-gray-300">
                        {chore.name} - <span className="text-teal-400 font-semibold">{chore.points} poeng</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => handleApprove(submission.id)}
                    className="bg-teal-400 hover:bg-teal-500 text-gray-900 font-semibold w-full"
                  >
                    <Check className="mr-2 h-4 w-4" /> Godkjenn
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}