"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col">
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-4">Hamhey</h3>
              <p className="text-sm opacity-80">
                We help students and workers relocate worldwide using AI.
              </p>

              <div className="w-1/6 h-0.5 bg-gray-400 mt-2 mb-3"></div>
            </div>

            <p className="text-xs text-gray-500 mt-2">
              Hamhey provides AI-powered relocation technology and services. We
              are not a law firm or financial advisor.{" "}
              <a href="#" className="font-medium hover:underline">
                Read full disclaimer →
              </a>
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">PLATFORM</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Tenant Request Form
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Careers
                </Link>
              </li>
            </ul>
          </div>


          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition-opacity">
                  Data Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>


        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
          <p>&copy; Made with ❤️ by Hamhey.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:opacity-100 transition-opacity">
              Twitter
            </Link>
            <Link href="#" className="hover:opacity-100 transition-opacity">
              LinkedIn
            </Link>
            <Link href="#" className="hover:opacity-100 transition-opacity">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
