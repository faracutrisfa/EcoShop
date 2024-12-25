import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PrimaryButton from '../PrimaryButton';
import heroImage from "../../assets/HomePage/hero_image.webp";

const useResponsiveBackground = (breakpoint = 1024) => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < breakpoint);

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth < breakpoint);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);

    return isSmallScreen;
};

const Hero = () => {
    const isSmallScreen = useResponsiveBackground();

    return (
        <section
            className="relative px-4 lg:px-16 flex justify-center lg:justify-between items-center"
            style={{
                backgroundImage: isSmallScreen ? `url(${heroImage})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {isSmallScreen && (
                <div className="absolute inset-0 bg-white opacity-[0.85]"></div>
            )}

            <div className="space-y-6 text-center lg:text-start lg:pl-16 py-20 z-10">
                <motion.h1
                    className="text-grey-600 font-bold text-4xl lg:text-5xl font-libre"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Healthy cutlery, healthy body
                </motion.h1>

                <motion.p
                    className="text-grey-500 text-sm lg:text-xl font-inter leading-7"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Upgrade your dining experience and <br />
                    begin your path to a healthy you right now.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <PrimaryButton onClick={() => console.log('Button clicked!')}>
                        Learn More
                    </PrimaryButton>
                </motion.div>
            </div>

            <div className="hidden lg:block">
                <motion.img
                    src={heroImage}
                    alt="Hero"
                    className="w-[720px]"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                />
            </div>
        </section>
    );
};

export default Hero;