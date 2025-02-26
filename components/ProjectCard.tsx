"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'


interface Props {
    image: string;
    title: string;
    text: string;
    url?: string;  // ทำให้ URL เป็น optional เพื่อป้องกัน error
}

const ProjectCard = ({ image, title, text, url = "#" }: Props) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    function handleFlip() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }

    return (
        <Link href={url} target="_blank" rel="noopener noreferrer">
            <div className='w-[450px] h-[280px] rounded-md cursor-pointer'>
                <motion.div
                    className='flip-card-inner w-full h-full'
                    initial={false}
                    animate={{ rotateY: isFlipped ? 180 : 360 }}
                    transition={{ duration: 0.6, animationDirection: 'normal' }}
                    onAnimationComplete={() => setIsAnimating(false)}
                >
                    {/* ด้านหน้า */}
                    <div 
                        style={{ backgroundImage: `url(${image})` }}
                        className='w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4'
                    >
                        <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40 ' />
                    </div>

                    {/* ด้านหลัง */}
                    <div 
                        style={{ backgroundImage: `url(${image})` }}
                        className='w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg p-4'
                    >
                        <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-50 ' />
                        <div className='flex flex-col gap-4 py-3 z-[30] text-center'>
                            <h1 className='text-white text-2xl font-semibold'>{title}</h1>
                            <p className='text-gray-200 text-[16px]'>
                                {text}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Link>
    )
}

export default ProjectCard
