import Image from "next/image";
import { Parallax } from "@/components/parallax";
import { Nav } from "@/components/nav";

export default function WhoWeArePage() {
  const visionData = [
    {
      heading: "Vision",
      text: "To guide the world towards a decentralized digital future, where businesses and individuals succeed through safe, clear, and innovative web3 solutions.",
    },
    {
      heading: "Mission",
      text: "Our mission is to deliver advanced web3 products that empower individuals and businesses to embrace decentralization, optimize their operations, and unlock new opportunities in the digital economy.",
    },
    {
      heading: "Values",
      text: "We believe in innovation, transparency, security and teamwork. We aim to promote the use of decentralized technologies while building trust and supporting long-term growth for our clients and partners.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Nav />
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8">
        Get To Know Us.
      </h1>

      {/* First Parallax Section */}
      <Parallax>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Our Goal
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              We are committed to delivering innovative products that shape the future of decentralized technologies, empoweringand transforming digital ecosystems for a more connected and equittable world.
            </p>
            <button className="bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 transition-colors">
              Learn More
            </button>
          </div>

          <div className="relative h-96">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt=" team collaborating"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </Parallax>

      {/* Second Parallax Section: Our Vision */}
      <Parallax>
        <div className="mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            Our Vision
          </h2>

          {/* Render each vision item in its own card */}
          <div className="grid md:grid-cols-3 gap-8">
            {visionData.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl text-black font-semibold mb-4">
                  {item.heading}
                </h3>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Parallax>
    </div>
  );
}
