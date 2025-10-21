"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

interface PropertyCardProps {
  property: {
    id: number
    title: string
    location: string
    price: string
    image: string
    features: string[]
  }
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        <Image
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{property.title}</h3>

        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <MapPin size={16} />
          <p className="text-sm">{property.location}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {property.features.map((feature, index) => (
            <span key={index} className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-accent">{property.price}</p>
          <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
            View
          </Button>
        </div>
      </div>
    </div>
  )
}
