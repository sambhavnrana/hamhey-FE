"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          Hamhey
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#about"
            className="text-foreground hover:text-accent transition-colors"
          >
            ABOUT
          </Link>
          <Link
            href="#blog"
            className="text-foreground hover:text-accent transition-colors"
          >
            BLOG
          </Link>
          <Link
            href="#contact"
            className="text-foreground hover:text-accent transition-colors"
          >
            CONTACT US
          </Link>
          <Link
            href="#contact"
            className="text-foreground hover:text-accent transition-colors"
          >
            PARTNERS
          </Link>
          <Link
            href="/signin"
            className="ml-4 bg-accent hover:bg-accent/90 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            SIGN IN
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-4">
            <Link
              href="#about"
              className="block text-foreground hover:text-accent transition-colors"
            >
              ABOUT
            </Link>
            <Link
              href="#blog"
              className="block text-foreground hover:text-accent transition-colors"
            >
              BLOG
            </Link>
            <Link
              href="#contact"
              className="block text-foreground hover:text-accent transition-colors"
            >
              CONTACT US
            </Link>
            <Link
              href="#contact"
              className="block text-foreground hover:text-accent transition-colors"
            >
              PARTNERS
            </Link>
            <Link
              href="/signin"
              className="block w-full text-center bg-orange-500 text-white font-semibold px-4 py-2 rounded-md shadow hover:bg-orange-600 transition-all"
            >
              SIGN IN
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
