import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center">
          <Target className="h-12 w-12 text-teal-400 mb-2" />
          <h1 className="text-2xl font-bold text-center">
            Familien Sarheim Andersens HusApp
          </h1>
        </div>
        <p className="text-lg text-center text-gray-400">
          Bli med å hold huset rent og ryddig og tjen poeng og premier!
        </p>
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-teal-400">Slik fungerer det:</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>Utfør husarbeid / oppgaver</li>
              <li>Samle poeng</li>
              <li>Bytt poeng mot spennende belønninger</li>
            </ol>
          </CardContent>
        </Card>
        <div className="flex flex-col gap-4">
          <Button asChild className="bg-teal-400 hover:bg-teal-500 text-gray-900 font-semibold">
            <Link href="/do-chores">Gjør husarbeid</Link>
          </Button>
          <Button asChild variant="outline" className="bg-transparent border-teal-400 text-teal-400 hover:bg-teal-400/10">
            <Link href="/redeem-points">Bytt poeng</Link>
          </Button>
        </div>
        <p className="text-sm text-center text-gray-500">
          Har du ikke en konto? <Link href="/signup" className="text-teal-400 hover:underline">Opprett konto</Link>
        </p>
      </div>
    </div>
  )
}