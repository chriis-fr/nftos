"use client"

import { useState } from "react"
import { Menu, X } from 'lucide-react'
import { NavLink } from "./nav-link"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <button
        className="p-2 text-gray-500 hover:text-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {isOpen && (
        <div className="absolute top-16 right-0 left-0 bg-white shadow-md p-4 z-50">
          <nav className="flex flex-col space-y-4">
            <NavLink href="#">OUR FOUNDERS</NavLink>
            <NavLink href="#">OUR COMPANIES</NavLink>
            <NavLink href="#">OUR TEAM</NavLink>
            <NavLink href="#">STORIES</NavLink>
            <NavLink href="#">COMPANY DESIGN</NavLink>
            <NavLink href="#">ARC</NavLink>
          </nav>
        </div>
      )}
    </div>
  )
}

