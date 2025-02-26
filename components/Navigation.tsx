"use client"
import { NavLinks } from 'constants/index'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Transition from './Transition'

const Navigation = () => {
    const [isRounting, setisRounting] = useState(false)
    const path = usePathname();
    const [prevPath, setPrevPath] = useState("/");

    useEffect(() => {
        if (prevPath !== path) {
            setisRounting(true);
            setPrevPath(path); // ✅ อัปเดต prevPath ทันทีใน useEffect นี้
        }
    }, [path, prevPath]); // ✅ เพิ่ม path ใน dependency array

    useEffect(() => {
        if (isRounting) {
            const timeout = setTimeout(() => {
                setisRounting(false);
            }, 1200);

            return () => clearTimeout(timeout);
        }
    }, [isRounting]);

    return (
        <div
            style={{ left: "20%" }}
            className='absolute z-[50] -bottom-20 w-[50%] md:w-[20%] max-h-[150px] rounded-full flex justify-between items-center border bg-black border-white px-4 py-7'
        >
            {isRounting && <Transition />}
            {NavLinks.map((nav) => (
                <Link
                    key={nav.name}
                    href={nav.link}
                    className="mb-16 pl-4 min-w-[20%]"
                >
                    <nav.icon className={`w-[24px] h-[24px] ${path === nav.name ? "text-purple-800" : "text-white"}`} />
                </Link>
            ))}
        </div> 
    )
}

export default Navigation
