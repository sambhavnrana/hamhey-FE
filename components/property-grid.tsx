"use client";

import CompanyMarquee from "./company-marquee";
import FeaturesSection from "./features-section";
import PropertyCard from "./property-card";

const properties = [
  {
    id: 1,
    title: "Modern Studio in Downtown",
    location: "San Francisco, CA",
    price: "$2,500/mo",
    image: "/modern-studio-apartment-downtown.jpg",
    features: ["Studio", "1 Bath", "450 sqft"],
  },
  {
    id: 2,
    title: "Cozy 1BR Near Campus",
    location: "Berkeley, CA",
    price: "$1,800/mo",
    image: "/cozy-bedroom-apartment-near-campus.jpg",
    features: ["1 Bed", "1 Bath", "650 sqft"],
  },
  {
    id: 3,
    title: "Spacious 2BR with Balcony",
    location: "Oakland, CA",
    price: "$2,200/mo",
    image: "/spacious-bedroom-apartment-with-balcony.jpg",
    features: ["2 Beds", "1.5 Bath", "900 sqft"],
  },
  {
    id: 4,
    title: "Luxury Loft in Tech Hub",
    location: "Mountain View, CA",
    price: "$3,100/mo",
    image: "/luxury-loft-apartment-tech-hub.jpg",
    features: ["2 Beds", "2 Bath", "1100 sqft"],
  },
  {
    id: 5,
    title: "Charming Victorian Room",
    location: "San Jose, CA",
    price: "$1,600/mo",
    image: "/charming-victorian-room-apartment.jpg",
    features: ["1 Bed", "1 Bath", "550 sqft"],
  },
  {
    id: 6,
    title: "Contemporary Apartment",
    location: "Palo Alto, CA",
    price: "$2,900/mo",
    image: "/contemporary-apartment-modern-design.jpg",
    features: ["2 Beds", "2 Bath", "1000 sqft"],
  },
];

import Image from "next/image";
import ServicesSection from "./services-section";

export default function PropertyGrid() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-primary mb-4 text-balance">
            <span className="text-accent">Trusted by </span>
            Users from
            <br />
            Leading <span className="text-accent">Institutions</span>
          </h2>
          <p className="text-sm text-muted-foreground font-medium text-center">
            OUR PLATFORM IS TRUSTED BY STUDENTS FROM PRESTIGIOUS UNIVERSITIES{" "}
            <br />
            AND EDUCATIONAL INSTITUTIONS WORLDWIDE.
          </p>
        </div>

        <CompanyMarquee />

        <div className="flex flex-col items-center text-center space-y-4 pt-12 pb-6">
          <Image
            src="/hamhey-logo.png"
            alt="Hamhey Logo"
            width={30}
            height={30}
            className="w-16 h-auto"
            priority
          />

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl text text-accent mb-4 text-balance">
              <span className="text-primary">Your </span>
              all-in-one Reloation
              <br />
              <span className="text-primary">Platform</span>
            </h2>
            <p className="text-sm text-muted-foreground font-medium text-center">
              FROM THE MOMENT YOU DECIDE TO RELOCATE UNTIL YOU'RE SETTLED IN{" "}
              <br />
              YOUR NEW COUNTRY - WE HANDLE EVERYTHING{" "}
            </p>
          </div>
        </div>
        <FeaturesSection />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      <ServicesSection />
    </section>
  );
}
