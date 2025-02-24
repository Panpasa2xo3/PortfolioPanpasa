"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex-col gap-5 z-[10] max-w-[750px]">
          {/* ✅ ใช้ Typewriter Effect */}
          <motion.h1
            className="text-[50px] text-white font-semibold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm Panpasa <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 whitespace-nowrap">
              <Typewriter
                words={["I'm a Frontend Developer", "I'm a UX/UI Designer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
                
              />
            </span>
          </motion.h1>

          <p className="text-gray-200 hidden md:block pt-10">A third-year Computer Science student with a solid understanding of programming, UI/UX design, and database management. Eager to learn, adaptable, and seeking an internship to apply and grow technical skills in a real-world environment.</p>

          <div className="flex-col md:flex-row hidden md:flex gap-5 mt-10">
              {[{ href: "/my-skills", text: "Learn more" },
                { href: "/my-projects", text: "My projects" },
                { href: "/contact-me", text: "Contact me" }].map((btn, i) => (
            <motion.div
              key={btn.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
            <Link
             href={btn.href}
              className="rounded-[20px] group relative px-5 py-3 text-lg text-white max-w-[200px] 
              border-2 border-white transition duration-300 ease-in-out 
              hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-400 hover:border-transparent"
            >
              {btn.text}
          </Link>
        </motion.div>
      ))}
</div>
        </div>
      </div>

      <div className="absolute bottom-10 z-[20] right-5 flex flex-col md:hidden ">
        {[{ href: "/my-skills", text: "Learn more" },
          { href: "/my-projects", text: "My projects" },
          { href: "/contact-me", text: "Contact me" }].map((btn, i) => (
          <motion.div
            key={btn.href}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <Link href={btn.href} className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              {btn.text}
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image src="/horse.png" alt="horse" height={300} width={300} className="absolute right-20 top-40" />
        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image src="/tree.webp" alt="trees" width={2000} height={2000} className="w-full h-full" />
      </div>

      <Image src="/stars.png" alt="stars" height={300} width={300} className="absolute top-10 left-0 z-[10]" />
    </main>
  );
}
