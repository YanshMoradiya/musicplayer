"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Button } from "./ui/moving-border";


export function HeroHighlightDemo() {
    return (
        <HeroHighlight>
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >

                <div className="sm:mt-50px"><TextGenerateEffect className="text-3xl leading-10 m-5" words="Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential." />
                    <div className="flex justify-center items-center flex-col">
                        <Highlight className="text-black dark:text-white mt-3 sm:mb-[100px] max-sm:mb-[50px]">
                            Master the art of music
                        </Highlight>
                        <Button borderRadius="1.75rem">Explore courses</Button>
                    </div></div>
            </motion.h1>
        </HeroHighlight>
    );
}
