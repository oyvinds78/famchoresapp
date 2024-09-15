'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/components/ui/use-toast"
import { Home, Trash2, Utensils, ShowerHead, Wind, Shirt, Dishwasher, Coat, UtensilsCrossed, Backpack, Droplet, Brush, Warehouse, Bed, Mop, Package, Leaf, Car, Coffee, Microwave, Shoe, Lightbulb, Wrench } from 'lucide-react'

// Define the chore type
type Chore = {
  id: number
  name: string
  points: number
  icon: React.ReactNode
  color: string
  frequency: string
}

// List of chores with icons and colors
const chores: Chore[] = [
    { id: 1, name: "Støvsuge stue", points: 30, icon: <Wind size={24} />, color: "bg-purple-400", frequency: "1 gang i uken" },
    { id: 2, name: "Vaske bad", points: 30, icon: <ShowerHead size={24} />, color: "bg-pink-400", frequency: "1 gang i uken" },
    { id: 3, name: "Rydde kjøkken", points: 20, icon: <Utensils size={24} />, color: "bg-yellow-400", frequency: "Hver dag" },
    { id: 4, name: "Ta ut søppel", points: 10, icon: <Trash2 size={24} />, color: "bg-blue-400", frequency: "2 ganger i uken" },
    { id: 5, name: "Vaske klær", points: 30, icon: <Shirt size={24} />, color: "bg-green-400", frequency: "2 ganger i uken" },
    { id: 6, name: "Rydde rom", points: 20, icon: <Home size={24} />, color: "bg-teal-400", frequency: "Hver dag" },
    { id: 7, name: "Ta ut oppvaskmaskinen", points: 20, icon: <Dishwasher size={24} />, color: "bg-red-400", frequency: "Hver dag" },
    { id: 8, name: "Rydde i gangen", points: 20, icon: <Coat size={24} />, color: "bg-indigo-400", frequency: "2 ganger i uken" },
    { id: 9, name: "Dekke på bordet", points: 10, icon: <UtensilsCrossed size={24} />, color: "bg-orange-400", frequency: "Hver dag" },
    { id: 10, name: "Rydde av bordet", points: 10, icon: <UtensilsCrossed size={24} />, color: "bg-lime-400", frequency: "Hver dag" },
    { id: 11, name: "Henge opp klær", points: 20, icon: <Shirt size={24} />, color: "bg-cyan-400", frequency: "2 ganger i uken" },
    { id: 12, name: "Støvsuge gang & kjøkken", points: 30, icon: <Wind size={24} />, color: "bg-fuchsia-400", frequency: "1 gang i uken" },
    { id: 13, name: "Lage mat/pakke", points: 30, icon: <Utensils size={24} />, color: "bg-rose-400", frequency: "Hver dag" },
    { id: 14, name: "Pakke sekken", points: 10, icon: <Backpack size={24} />, color: "bg-sky-400", frequency: "Hver dag" },
    { id: 15, name: "Sette inn i oppvaskmaskinen", points: 20, icon: <Dishwasher size={24} />, color: "bg-emerald-400", frequency: "Hver dag" },
    { id: 16, name: "Rydde bena v/vask", points: 10, icon: <Droplet size={24} />, color: "bg-violet-400", frequency: "Hver dag" },
    { id: 17, name: "Rydde gang ved trapp", points: 20, icon: <Brush size={24} />, color: "bg-amber-400", frequency: "2 ganger i uken" },
    { id: 18, name: "Rydde hobbyrom", points: 30, icon: <Warehouse size={24} />, color: "bg-lime-400", frequency: "1 gang i uken" },
    { id: 19, name: "Støvsuge gang nede", points: 20, icon: <Wind size={24} />, color: "bg-pink-400", frequency: "1 gang i uken" },
    { id: 20, name: "Støvsuge eget rom", points: 20, icon: <Wind size={24} />, color: "bg-blue-400", frequency: "1 gang i uken" },
    { id: 21, name: "Re opp seng", points: 10, icon: <Bed size={24} />, color: "bg-purple-400", frequency: "Hver dag" },
    { id: 22, name: "Vaske gulv stue", points: 30, icon: <Mop size={24} />, color: "bg-yellow-400", frequency: "1 gang i uken" },
    { id: 23, name: "Vaske gulv gang", points: 30, icon: <Mop size={24} />, color: "bg-green-400", frequency: "1 gang i uken" },
    { id: 24, name: "Vaske gulv kjeller", points: 40, icon: <Mop size={24} />, color: "bg-teal-400", frequency: "1 gang i uken" },
    { id: 25, name: "Vaske vinduer", points: 30, icon: <Droplet size={24} />, color: "bg-red-400", frequency: "1 gang i måneden" },
    { id: 26, name: "Tørke støv", points: 20, icon: <Brush size={24} />, color: "bg-indigo-400", frequency: "1 gang i uken" },
    { id: 27, name: "Rydde og organisere skap", points: 30, icon: <Package size={24} />, color: "bg-orange-400", frequency: "1 gang i måneden" },
    { id: 28, name: "Vanne planter", points: 10, icon: <Droplet size={24} />, color: "bg-lime-400", frequency: "2 ganger i uken" },
    { id: 29, name: "Sortere og vaske skittentøy", points: 30, icon: <Shirt size={24} />, color: "bg-cyan-400", frequency: "2 ganger i uken" },
    { id: 30, name: "Rense sluk på bad", points: 20, icon: <ShowerHead size={24} />, color: "bg-fuchsia-400", frequency: "1 gang i måneden" },
    { id: 31, name: "Rydde i garasjen", points: 40, icon: <Warehouse size={24} />, color: "bg-rose-400", frequency: "1 gang i måneden" },
    { id: 32, name: "Klippe plenen", points: 30, icon: <Leaf size={24} />, color: "bg-sky-400", frequency: "1 gang i uken" },
    { id: 33, name: "Luke i hagen", points: 30, icon: <Leaf size={24} />, color: "bg-emerald-400", frequency: "1 gang i uken" },
    { id: 34, name: "Rydde i kjøleskapet", points: 20, icon: <Utensils size={24} />, color: "bg-violet-400", frequency: "1 gang i uken" },
    { id: 35, name: "Vaske bilen", points: 40, icon: <Car size={24} />, color: "bg-amber-400", frequency: "1 gang i måneden" },
    { id: 36, name: "Rense kaffemaskin", points: 20, icon: <Coffee size={24} />, color: "bg-blue-400", frequency: "1 gang i måneden" },
    { id: 37, name: "Rengjøre mikrobølgeovn", points: 20, icon: <Microwave size={24} />, color: "bg-purple-400", frequency: "1 gang i uken" },
    { id: 38, name: "Rydde på loftet", points: 40, icon: <Warehouse size={24} />, color: "bg-yellow-400", frequency: "1 gang i måneden" },
    { id: 39, name: "Støvsuge under møbler", points: 30, icon: <Wind size={24} />, color: "bg-green-400", frequency: "1 gang i måneden" },
    { id: 40, name: "Vaske dører og dørhåndtak", points: 20, icon: <Brush size={24} />, color: "bg-teal-400", frequency: "1 gang i uken" },
    { id: 41, name: "Rense ventilasjonsfilter", points: 30, icon: <Wind size={24} />, color: "bg-red-400", frequency: "1 gang i måneden" },
    { id: 42, name: "Organisere skohylle", points: 20, icon: <Shoe size={24} />, color: "bg-indigo-400", frequency: "1 gang i uken" },
    { id: 43, name: "Tørke av lamper og lysbrytere", points: 20, icon: <Lightbulb size={24} />, color: "bg-orange-400", frequency: "1 gang i uken" },
    { id: 44, name: "Rydde og organisere verktøy", points: 30, icon: <Wrench size={24} />, color: "bg-lime-400", frequency: "1 gang i måneden" },
  ]


export default function DoChoresPage() {
  const [selectedChores, setSelectedChores] = useState<number[]>([])

  const handleChoreToggle = (choreId: number) => {
    setSelectedChores(prev =>
      prev.includes(choreId)
        ? prev.filter(id => id !== choreId)
        : [...prev, choreId]
    )
  }

  const handleSubmit = () => {
    toast({
      title: "Oppgaver sendt inn",
      description: "En voksen vil validere oppgavene dine snart.",
    })
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Gjør Husarbeid</h1>
      <div className="max-w-2xl mx-auto grid grid-cols-2 gap-4 mb-6">
        {chores.map((chore) => (
          <Card key={chore.id} className={`${chore.color} rounded-xl overflow-hidden`}>
            <CardContent className="p-4 flex flex-col h-full">
              <div className="flex justify-between items-start mb-2">
                <div className="text-gray-900">{chore.icon}</div>
                <Checkbox
                  checked={selectedChores.includes(chore.id)}
                  onCheckedChange={() => handleChoreToggle(chore.id)}
                  className="data-[state=checked]:bg-gray-900 data-[state=checked]:text-white"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{chore.name}</h3>
              <p className="text-sm text-gray-700 mb-2">{chore.frequency}</p>
              <div className="mt-auto">
                <span className="text-sm font-bold text-gray-900">{chore.points} poeng</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center">
        <Button 
          onClick={handleSubmit} 
          disabled={selectedChores.length === 0}
          className="bg-teal-400 hover:bg-teal-500 text-gray-900 font-semibold px-6 py-2 rounded-full"
        >
          Send inn valgte oppgaver
        </Button>
      </div>
    </div>
  )
}