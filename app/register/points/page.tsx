import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, Award, Gift } from 'lucide-react'

// Mock data - replace with actual data fetching in a real application
const currentUser = {
  name: "Emma",
  points: 1250,
  lastRedemption: "2023-06-15",
  lastReward: "Kinobesøk"
}

const allUsers = [
  { name: "Emma", points: 1250 },
  { name: "Oliver", points: 980 },
  { name: "Sophia", points: 1100 },
  { name: "Liam", points: 850 }
]

export default function PointsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-teal-400 hover:text-teal-300 flex items-center">
            <ChevronLeft className="h-6 w-6 mr-2" />
            Tilbake
          </Link>
          <h1 className="text-2xl font-bold text-center">Poeng Oversikt</h1>
        </div>
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-teal-400">Dine Poeng</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-6xl font-bold text-teal-400 mb-4">
              {currentUser.points}
            </div>
            <p className="text-gray-400">
              Sist byttet: {currentUser.lastRedemption}
            </p>
            <p className="text-gray-400">
              Belønning: {currentUser.lastReward}
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-teal-400">Alle Brukere</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {allUsers.map((user, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{user.name}</span>
                  <span className="text-teal-400 font-semibold">{user.points} poeng</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}