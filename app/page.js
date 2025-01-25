import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6 mt-20">
          <div className="w-40 h-40 relative rounded-full overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Profile"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-text">GiGiTech</h1>
          <p className="text-lg text-center text-text">
            Hi! I'm a full-stack developer who loves building web applications
            and learning new technologies.
          </p>
        </div>
      </div>
    </div>
  );
}
