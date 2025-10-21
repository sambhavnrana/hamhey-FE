"use client";

import { Briefcase, CreditCard, Phone, Shield } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: CreditCard,
      title: "Banking Setup",
      description:
        "Open accounts before you arrive. No more waiting in bank queues on your first week.",
      gridClass: "md:col-span-1 md:row-span-1",
    },
    {
      icon: Phone,
      title: "SIM & Connectivity",
      description:
        "Local numbers and data plans ready when you land. Stay connected from day one.",
      gridClass: "md:col-span-1 md:row-span-2",
    },
    {
      icon: Shield,
      title: "Insurance Coverage",
      description:
        "Health and travel insurance that actually covers what you need, where you need it.",
      gridClass:
        "md:col-span-1 md:row-span-1 md:col-start-1 md:row-start-3 -mt-12",
    },
    {
      icon: Briefcase,
      title: "Job Opportunities",
      description:
        "Connect with verified employers. Land your dream role before you even arrive.",
      gridClass: "md:col-span-2 md:row-span-1",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 text-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-max">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isJob = service.title === "Job Opportunities";

            return (
              <div
                key={index}
                className={`rounded-3xl border border-accent/30 shadow-xl hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300 ${
                  service.gridClass
                } ${isJob ? "p-6 md:p-6" : "p-8 md:p-10"}`}
              >
                <div className="flex flex-col items-start gap-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-white/10 group-hover:bg-white/15 transition-colors">
                    <Icon className="w-8 h-8 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                      {service.title}
                    </h3>
                    <p className="text-base text-black leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
