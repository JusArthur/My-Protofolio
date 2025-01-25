import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe/>
    </div>
  );
}
