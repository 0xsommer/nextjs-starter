"use client"

import Image from "next/image";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Starter Template</h1>
        <p className="text-lg">
          This is a starter template for a NextJS project with Typescript,
          Tailwind, and Framer Motion.
        </p>
        <motion.div
        drag
          className="w-10 h-10 bg-red-500"
          animate={{ x: 100, y: 100 }}
        >
        </motion.div>
      </main>
    </div>
  );
}
