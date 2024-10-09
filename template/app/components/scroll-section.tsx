"use client"

import React, { useRef, useEffect, useState, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const ScrollSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const deviceRef = useRef<HTMLDivElement>(null);
    const stickySectionRef = useRef<HTMLDivElement>(null);
    const [stickyHeight, setStickyHeight] = useState(0);
    const [deviceHeight, setDeviceHeight] = useState(0);

    useEffect(() => {
        const updateSizes = () => {
            if (stickySectionRef.current) {
                const height = stickySectionRef.current.offsetHeight;
                setStickyHeight(height);
            }
            if (deviceRef.current) {
                const height = deviceRef.current.offsetHeight;
                setDeviceHeight(height);
            }
        };

        // Initial size calculation
        updateSizes();

        // Add event listener for window resize
        window.addEventListener('resize', updateSizes);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', updateSizes);
        };
    }, []);

    const stickyYPadding = useMemo(() => {
        return (stickyHeight - deviceHeight) / 2;
    }, [stickyHeight, deviceHeight]);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const { scrollYProgress: backgroundScrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "0.15 start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.2, 1], [3.3, 3, 1]);
    const textOpacity = useTransform(backgroundScrollYProgress, [0, 0.8], [1, 0]);
    const backgroundOpacity = useTransform(backgroundScrollYProgress, [0, 1], [1, 0]);

    console.log("Sticky Y Padding:", stickyYPadding);

    return (
        <div>
            <motion.div
                ref={sectionRef}
                id="scroll-section"
                className="w-screen h-[200svh] bg-black overflow-clip flex flex-col justify-start items-center px-4"
            >
                <motion.div style={{ opacity: textOpacity }} className="absolute h-[100svh] w-screen text-center flex flex-col gap-0 text-white text-[76px] leading-[76px] tracking-[-5px] font-semibold z-50 justify-center items-center">
                    <h1>4K 120 fps Dolby Vision.</h1>
                    <h1>Cinemasterful.</h1>
                </motion.div>
                <motion.div style={{ opacity: backgroundOpacity }} className="absolute w-screen h-[200svh] bg-black/20 z-40"/>
                <motion.div
                    ref={stickySectionRef}
                    id="sticky-section"
                    className="w-screen h-[100svh] sticky top-0 flex flex-col items-center justify-center px-4"
                >
                    <motion.div
                        ref={deviceRef}
                        id="device"
                        style={{
                            scale,
                        }}
                        className="relative w-full max-w-5xl aspect-[900/436] overflow-clip"
                    >
                        <video
                            autoPlay
                            muted
                            playsInline
                            className="absolute inset-0 object-cover pt-[2%] px-[1.5%] rounded-[11%]"
                        >
                            <source src="/assets/video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <Image
                            src="/assets/phone.png"
                            alt="iPhone frame"
                            fill
                            style={{ objectFit: 'contain' }}
                            className="absolute"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
            <div 
                className="bg-black w-full h-screen flex flex-col justify-start items-center px-4"
                style={{ marginTop: `calc(28px - ${stickyYPadding}px)` }}
            >
                <section className="w-full max-w-4xl flex flex-col justify-start items-center gap-16">
                    <h1 className="text-zinc-400 text-sm font-sf-pro-regular text-center">A herd of Icelandic horses, captured in stunning 4K 120 fps Dolby Vision</h1>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-row gap-24">
                            <h3 className="text-zinc-400 text-xl w-full">iPhone 16 Pro takes video capture to a whole new level with <span className="text-white">4K 120 fps Dolby Vision</span> — our highest resolution and frame rate combo yet. Enabled by the new 48MP Fusion camera with second-generation quad-pixel sensor and our powerful A18 Pro chip, iPhone 16 Pro lets you record 4K 120 fps Dolby Vision in video mode or slo-mo.</h3>
                            <h3 className="text-zinc-400 text-[40px] leading-[44px] w-full"><span className="text-white">Highest-quality video</span> in a smartphone</h3>
                        </div>
                        <div className="flex flex-row gap-24">
                            <h2 className="text-zinc-400 text-xl w-full">And now you can <span className="text-white">adjust the playback speed</span> after capture in the redesigned Photos app, giving you greater editing capabilities. To add a dreamy quality to your shot, try out the new half-speed option. Or for a cinematic effect, slow it right down to 24 fps playback.</h2>
                            <h3 className="text-zinc-400 text-xl w-full pr-12">iPhone 16 Pro also provides <span className="text-white">a big leap in audio performance</span> with four studio-quality mics for higher-quality recording. They provide a lower noise floor so you get more true-to-life sounds. New Spatial Audio capture makes your videos sound more immersive when listening with AirPods. And thanks to wind noise reduction, the audio quality is even clearer.

AudioAudio Mix. Make your voice heard.
</h3>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ScrollSection;