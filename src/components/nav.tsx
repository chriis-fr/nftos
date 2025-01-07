import { Search } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { NavLink } from "./nav-link"
import { MobileMenu } from "./mobile-menu"

export function Nav() {
  return (
    <>
    <nav className="flex items-center w-full justify-between px-4 lg:px-8 py-6 mb-2 border-b-2">
      <Link href="/" className="flex items-center">
        <Image
          src="/placeholder.svg?height=40&width=120"
          alt="trillicorn logo"
          width={120}
          height={40}
          className="h-10"
        />
      </Link>
      <div className="hidden lg:flex items-center gap-10">
        <NavLink href="/">HOME</NavLink>
        <NavLink href="/whoarewe">WHO WE ARE</NavLink>
        <NavLink href="/ourbusiness">OUR BUSINESS</NavLink>
        <NavLink href="/ourteam">OUR TEAM</NavLink>
        {/* <NavLink href="#">COMPANY DESIGN</NavLink> */}
        {/* <NavLink href="#">ARC</NavLink> */}
        <button className="hover:text-neutral-600 transition-colors ml-2">
          <Search className="h-5 w-5" />
        </button>
      </div>
      <MobileMenu />
    </nav>
   
    </>
  )
}

