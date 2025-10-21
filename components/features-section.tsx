"use client";

import { Building2, FileText } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl border-2 border-accent/30 bg-white p-8 hover:border-accent/50 transition-colors">
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-semibold text-accent bg-orange-50 px-3 py-1 rounded-full">
                ✓ Available Now
              </span>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4">
              Student Housing
            </h3>

            <p className="text-foreground/70 mb-6 leading-relaxed">
              Skip the housing nightmare completely. We've pre-verified every
              property, negotiated transparent pricing, and eliminated the scams
              that plague international students. Our curated selection features
              safe neighborhoods, real photos, honest reviews, and direct
              landlord connections—making your housing search stress-free and
              secure.
            </p>

            <div className="flex items-center gap-6 mb-6 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <span className="text-lg">✓</span>
                <span>Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🌍</span>
                <span>Berlin & Munich</span>
              </div>
            </div>

            <button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-6 rounded-full transition-colors flex items-center justify-center gap-2">
              Browse Housing
              <span>→</span>
            </button>
          </div>

          <div className="rounded-3xl border-2 border-accent/30 bg-white p-8 hover:border-accent/50 transition-colors">
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-semibold text-accent bg-orange-50 px-3 py-1 rounded-full">
                ✓ Beta Testing
              </span>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4">
              Visa & Documents
            </h3>

            <p className="text-foreground/70 mb-6 leading-relaxed">
              We're currently beta testing vertical agents and agentic workflow
              automation for complex relocation processes. Our AI agents handle
              appointment booking, Anmeldung registration, form filling,
              paperwork automation, and other bureaucratic tasks—transforming
              tedious processes into seamless experiences.
            </p>

            <div className="flex items-center gap-6 mb-6 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <span className="text-lg">⚡</span>
                <span>Agentic AI</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🧪</span>
                <span>Beta Testing</span>
              </div>
            </div>

            <button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-6 rounded-full transition-colors flex items-center justify-center gap-2">
              Get Started
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
