import { Nav } from "@/components/nav"
import { Parallax } from "@/components/parallax"
import { TeamMember } from "@/components/team-member"

export default function OurTeamPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Nav />
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
        Our Team
      </h1>
      <Parallax>
        <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          The minds behind Trillicorn
        </p>
      </Parallax>
      <Parallax>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "John Doe",
            "Jane Smith",
            "Mike Johnson",
            "Emily Brown",
            "David Lee",
            "Sarah Davis",
          ].map((name) => (
            <TeamMember key={name} name={name} />
          ))}
        </div>
      </Parallax>
    </div>
  )
}

