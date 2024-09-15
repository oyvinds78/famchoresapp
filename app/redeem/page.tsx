'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, Gift } from 'lucide-react'
import { toast } from "@/components/ui/use-toast"

// Mock data - replace with actual data fetching in a real application
const rewards = [
  { id: 1, name: "Kinobesøk", points: 500 },
  { id: 2, name: "Ny bok", points: 300 },
  { id: 3, name: "Ekstra TV-tid", points: 200 },
  { id: 4, name: "Velg middag", points: 150 },
]

const userPoints = 1250 // This should be fetched from the user's actual data

export default function RedeemPage() {
  const [selectedReward, setSelectedReward] = useState<number | null>(null)

  const handleRedeem = () => {
    if (selectedReward !== null) {
      const reward = rewards.find(r => r.id === selectedReward)
      if (reward && userPoints >= reward.points) {
        toast({
          title: "Belønning innløst!",
          description: `Du har byttet ${reward.points} poeng for "${reward.name}".`,
        })
        // Here you would update the user's points in a real application
      } else {
        toast({
          title: "Ikke nok poeng",
          description: "Du har ikke nok poeng til å løse inn denne belønningen.",
          variant: "destructive",
        })
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-teal-400 hover:text-teal-300 flex items-center">
            <ChevronLeft className="h-6 w-6 mr-2" />
            Tilbake
          </Link>
          <h1 className="text-2xl font-bold text-center">Bytt Poeng</h1>
        </div>
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-teal-400">Tilgjengelige Belønninger</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-center">Du har <span className="text-teal-400 font-bold">{userPoints}</span> poeng</p>
            <div className="space-y-4">
              {rewards.map((reward) => (
                <div key={reward.id} className="flex items-center justify-between">
                  <span>{reward.name} ({reward.points} poeng)</span>
                  <Button
                    onClick={() => setSelectedReward(reward.id)}
                    variant={selectedReward === reward.id ? "default" : "outline"}
                    className={selectedReward === reward.id ? "bg-teal-400 text-gray-900" : "border-teal-400 text-teal-400"}
                  >
                    Velg
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Button
          onClick={handleRedeem}
          disabled={selectedReward === null}
          className="w-full bg-teal-400 hover:bg-teal-500 text-gray-900 font-semibold"
        >
          <Gift className="mr-2 h-4 w-4" /> Løs Inn Belønning
        </Button>
      </div>
    </div>
  )
}