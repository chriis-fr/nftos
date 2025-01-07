"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export function NavLink({ href, children }: NavLinkProps) {
  const [isHovered, setIsHovered] = useState(false)
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    if (pathRef.current) {
      pathRef.current.style.strokeDasharray = `${pathRef.current.getTotalLength()}`
      pathRef.current.style.strokeDashoffset = `${pathRef.current.getTotalLength()}`
    }
  }, [])

  return (
    <Link
      href={href}
      className="relative text-sm group py-2 px-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <svg
        className="absolute -bottom-1 left-0 w-full h-6 overflow-visible pointer-events-none"
        viewBox="0 0 100 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          d="M0,22 Q25,0 50,22 T100,22"
          className="stroke-emerald-500"
          strokeWidth="2"
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 0.5s ease",
            strokeDashoffset: isHovered ? "0" : "153%",
          }}
        />
      </svg>
    </Link>
  )
}

