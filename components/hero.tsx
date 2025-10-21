"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 1000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrolledEffectClass = scrolled
    ? "opacity-0 blur-lg transition-all duration-700 ease-out"
    : "opacity-100 transition-all duration-700 ease-out";

  const scrolledLogoEffectClass = scrolled
    ? "blur-3xl transition-all duration-700 ease-out"
    : "transition-all duration-700 ease-out";

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center transition-all duration-700 ease-out">
          {!showLogo ? (
            <span
              className={`text-4xl sm:text-5xl lg:text-9xl font-bold ${scrolledEffectClass}`}
              style={{ whiteSpace: "nowrap" }}
            >
              HAMHEY
            </span>
          ) : (
            <>
              <span
                className={`text-4xl sm:text-5xl lg:text-9xl font-bold ${scrolledEffectClass}`}
                style={{ marginRight: "-0.1em", whiteSpace: "nowrap" }}
              >
                HAM
              </span>

              <Image
                src="/hamhey-logo.png"
                alt="Hamhey Logo"
                width={1200}
                height={1200}
                className={`w-[60vw] sm:w-[45vw] lg:w-[35vw] max-w-[720px] h-auto opacity-100 ${scrolledLogoEffectClass}`}
                priority
              />

              <span
                className={`text-4xl sm:text-5xl lg:text-9xl font-bold ${scrolledEffectClass}`}
                style={{ marginLeft: "-0.1em", whiteSpace: "nowrap" }}
              >
                HEY
              </span>
            </>
          )}
        </div>

        <div
          className={`relative z-10 text-center max-w-5xl mx-auto transition-opacity duration-700 ease-in px-4 pt-24 ${
            scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="inline-block mb-6 px-4 py-6">
            <p className="text-sm text-muted-foreground font-medium text-center">
              TRY OUR BETA V1.0
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-primary flex flex-wrap items-center justify-center gap-3 mb-6 leading-tight text-balance">
            <span>BUILDING</span>
            <Image
              src="/hamhey-logo.png"
              alt="Hamhey Logo in text"
              width={50}
              height={50}
              className="w-[2rem] sm:w-[2.5rem] md:w-[3rem] lg:w-[3.5rem] h-auto"
            />
            <span>RELOCATION</span>
            <span>AI ENGINE.</span>
          </h1>

          <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
            THE WORLD&apos;S FIRST STUDENT RELOCATION
            <br /> ENGINE BUILT ON LLMs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button className="mt-12 bg-accent hover:bg-accent/90 text-accent-foreground px-8 sm:px-9 py-5 sm:py-4 rounded-full text-base sm:text-lg">
              Try BETA
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
