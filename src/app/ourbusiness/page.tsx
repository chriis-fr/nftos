import Image from "next/image"
import { Parallax } from "@/components/parallax"
import { BusinessCard } from "@/components/business-card"
import { Nav } from "@/components/nav"

export default function OurBusinessPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Nav />
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
        Our Business
      </h1>
      <Parallax>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative h-96">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt=" business overview"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Investing in the Future
            </h2>
            <p className="text-lg text-gray-700 mb-6">
            We are building a metaverse based NFTs marketplace that combines all NFTs market services into one platform, empowering you to create, buy, sell, and trade digital assets effortlessly in a unique and modern digital experience.
            </p>
            <button className="bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 transition-colors">
              Explore Our Portfolio
            </button>
          </div>
        </div>
      </Parallax>
      <Parallax>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
          Our Focus Areas
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Enterprise",
            "Consumer",
            "Healthcare",
            "Fintech",
            "AI & Machine Learning",
            "Crypto & Blockchain",
          ].map((area) => (
            <BusinessCard key={area} title={area} />
          ))}
        </div>
      </Parallax>
    </div>
  )
}

