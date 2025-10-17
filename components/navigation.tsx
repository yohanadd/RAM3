"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"


export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-[#003366] text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2" scroll={true}>
            <span className="text-xl font-bold">RAM Trucking Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-white hover:text-[#99CCFF] transition-colors ${
                  pathname === link.href ? "font-bold " : ""
                }`}
                scroll={true}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" scroll={true} className="w-full">
              <Button className="w-full bg-[#FF6600] hover:bg-[#FF6600]/90 text-white mt-2">Get a Quote</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-3 pb-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block text-white hover:text-[#99CCFF] py-2 transition-colors ${
                  pathname === link.href ? "font-bold " : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
                scroll={true}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" scroll={true} className="w-full">
              <Button className="w-full bg-[#FF6600] hover:bg-[#FF6600]/90 text-white mt-2">Get a Quote</Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
