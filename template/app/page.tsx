import Image from "next/image";
import { motion } from "framer-motion"
import ScrollSection from "./components/scroll-section"
import Header from "./components/header"
export default function Home() {
  return (
      <main className="flex flex-col gap-0 items-center justify-center w-full">
        <Header />
        <div className="bg-gradient-to-b from-black to-zinc-900 w-full h-screen flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl font-bold">Rebuilding Apple</h1>
        </div>
        <ScrollSection />
      </main>
  );
}
