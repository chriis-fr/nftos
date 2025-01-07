"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function TeamMember({ name }: { name: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-lg shadow-md text-center"
    >
      <div className="relative w-32 h-32 mx-auto mb-4">
        <Image
          src="/placeholder.svg?height=200&width=200"
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </motion.div>
  )
}

