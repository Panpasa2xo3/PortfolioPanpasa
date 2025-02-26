"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants/index"; // ✅ แก้ import ให้ถูกต้อง
import Image from "next/image";
import { Autoplay } from "swiper/modules";

// ✅ เพิ่ม TypeScript type ให้ SkillData
interface Skill {
  name: string;
  Image: string;
  width: number;
  height: number;
}

const Page = () => {
  // ✅ ใช้ useMemo แทน useEffect เพื่อลด re-render
  const filteredSkills: Skill[] = useMemo(
    () => [
      ...SkillData.filter((skill) =>
        ["Html 5", "Css", "JavaScript", "Next js 13"].includes(skill.name)
      ),
      { name: "C++", Image: "/cpp.png", width: 80, height: 80 },
      { name: "MySQL", Image: "/mysql.png", width: 80, height: 80 },
    ],
    []
  );

  return (
    <div
      style={{ backgroundImage: "url(/bg-2.jpg)" }}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
    >
      <div className="flex flex-col gap-20 max-w-[80%] w-full text-center items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-semibold text-white text-[50px]">
            Skills{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              &{" "}
            </span>
            Technologies
          </h1>
          <p className="text-gray-400 text-[20px]">
            Using the latest tech this world has to offer
          </p>
        </div>

        {/* ✅ Swiper แรก (ปกติ) */}
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%] w-full"
        >
          {filteredSkills.map((skill, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
                unoptimized // ✅ ป้องกันปัญหาโหลดภาพผิดพลาด
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Swiper ที่สอง (ย้อนกลับ) */}
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%] w-full"
        >
          {filteredSkills.map((skill, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
                unoptimized
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Page;
