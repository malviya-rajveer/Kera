"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { KeraGradinetCard } from "./ui/keraGradientCard";
import { cn } from "@/lib/utils";
import { SlideTrail } from "./ui/Slidetrail";
import { motion } from "motion/react";
import { TextSequence } from "./ui/textSequence";
import { WaveCircles } from "./ui/circles";

export const OurFeatures = () => (
  <div className="flex h-full w-full items-center justify-center font-mono">
    <div className="my-30 grid h-full w-80 grid-cols-3 grid-rows-2 gap-2 md:w-xl md:grid-cols-6 lg:h-145 lg:w-3xl lg:grid-cols-8 xl:w-5xl">
      <div className="col-span-3 rounded-md border border-dashed border-white/0 lg:col-span-2">
        <h3 className="pt-34 font-mono text-[70px] leading-13 md:pt-5 xl:text-[75px]">
          <span className="text-white">Our</span>
          <br />
          <span
            className={cn(
              "pointer-events-none text-[35px] xl:text-[40px]",
              // "bg-[radial-gradient(46%_90%_at_110%_79%,var(--color-yellow-300)_0%,#ff6bfc_80%,white_100%)] bg-clip-text not-only:text-transparent",
              // "pt-2 pb-2 lg:pt-2 lg:pb-4",
              "bg-linear-to-br from-yellow-200 to-fuchsia-400 bg-clip-text text-transparent",
            )}
          >
            featurings
          </span>
        </h3>
      </div>
      <div className="col-span-3 flex flex-col justify-center gap-8 rounded-md bg-neutral-900/70">
        <SlideTrail></SlideTrail>
        <div className="pt-5 pl-4 text-[17px] text-neutral-50">
          Designing chips as per Campanies need.
        </div>
      </div>

      <div className="relative z-0 col-span-3 flex justify-center rounded-md bg-neutral-900/70">
        <img src="./pro-glass.png" className="mt-3 lg:h-60 xl:h-70" alt="" />
        <TextSequence></TextSequence>
      </div>
      <div className="relative col-span-3 flex items-center justify-center rounded-md bg-neutral-900/70">
        <div
          className={cn(
            "absolute bg-linear-to-b from-white to-neutral-200 bg-clip-text pb-2 font-medium text-transparent",
            "text-3xl xl:text-4xl",
          )}
        >
          Neural Processing
        </div>
        <div className="absolute bottom-25 bg-linear-to-b from-white to-neutral-400 bg-clip-text text-lg font-medium text-transparent">
          Connect the dots Faster
        </div>{" "}
        <WaveCircles></WaveCircles>
      </div>
      <div className="relative col-span-3 rounded-md bg-neutral-900/70">
        <div className="relative mt-5 flex h-50 w-full items-center justify-center">
          <div className="relative flex h-20 w-40 skew-x-32 items-center justify-center bg-linear-to-b from-neutral-600">
            {/* <div className="absolute top-0.5 z-0 h-full w-full bg-linear-to-b from-yellow-200 to-fuchsia-600 blur-[2px]"></div> */}
            <div className="absolute -top-2.5 left-40">
              <div className="absolute right-32 h-2.5 w-px bg-neutral-700"></div>
              <div className="absolute right-24 h-2.5 w-px bg-neutral-700"></div>
              <div className="absolute right-18 h-2.5 w-px bg-neutral-700"></div>
              <div className="absolute right-12 h-2.5 w-px bg-neutral-700"></div>
              <div className="absolute right-6 h-2.5 w-px bg-neutral-700"></div>
            </div>
            <div className="absolute -bottom-0 left-39">
              <div className="absolute right-32 h-2.5 w-px bg-neutral-700"></div>
              <div className="absolute right-24 h-2.5 w-px bg-neutral-700"></div>
              <div className="absolute right-18 h-2.5 w-px bg-neutral-700"></div>
              <div className="absolute right-12 h-2.5 w-px bg-neutral-700"></div>
              <div className="absolute right-6 h-2.5 w-px bg-neutral-700"></div>
            </div>
            <div className="absolute -top-0 -left-3">
              <div className="absolute top-16 h-px w-2.5 bg-neutral-700"></div>
              <div className="absolute top-12 h-px w-2.5 bg-neutral-700"></div>
              <div className="absolute top-8 h-px w-2.5 bg-neutral-700"></div>
              <div className="absolute top-4 h-px w-2.5 bg-neutral-700"></div>
            </div>
            <div className="absolute -top-0 -right-0.5">
              <div className="absolute top-16 h-px w-2.5 bg-neutral-700"></div>
              <div className="absolute top-12 h-px w-2.5 bg-neutral-700"></div>
              <div className="absolute top-8 h-px w-2.5 bg-neutral-700"></div>
              <div className="absolute top-4 h-px w-2.5 bg-neutral-700"></div>
            </div>
            <div className="font- z-30 bg-linear-to-b from-white bg-clip-text font-sans text-6xl text-neutral-50">
              AI
            </div>
          </div>
          <div className="absolute top-15 h-px w-full skew-0 bg-neutral-700"></div>
          <div className="absolute bottom-15 h-px w-full skew-0 bg-neutral-700"></div>
          <div className="absolute left-27 h-full w-px skew-32 bg-neutral-700"></div>
          <div className="absolute right-27 h-full w-px skew-32 bg-neutral-700"></div>
          <div className="absolute top-0 h-15 w-full overflow-hidden">
            <motion.div
              initial={{
                translateY: 80,
              }}
              animate={{
                translateY: -50,
              }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
              className="absolute top-0 right-39.5 h-10 w-px -rotate-32 rounded-full bg-linear-to-b from-white to-transparent"
            ></motion.div>
          </div>
          <div className="absolute bottom-0 h-15 w-full rotate-180 overflow-hidden">
            <motion.div
              initial={{
                translateY: 80,
              }}
              animate={{
                translateY: -50,
              }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
              className="absolute top-0 right-39.5 h-10 w-px -rotate-32 rounded-full bg-linear-to-b from-white to-transparent"
            ></motion.div>
          </div>
        </div>
        <div className="absolute bottom-9 left-5 text-[17px] text-neutral-50">
          Processing trillions of tasks every sec.
        </div>
      </div>
      <div className="relative col-span-3 overflow-hidden rounded-md bg-neutral-100 lg:col-span-2">
        <KeraGradinetCard></KeraGradinetCard>
        <div className="absolute right-3 bottom-9 flex items-center gap-1 text-[17px]">
          <span className="cursor-pointer font-medium text-stone-500 hover:text-neutral-700">
            View Pricing
          </span>
          <IconArrowNarrowRight
            size={24}
            className="cursor-pointer stroke-neutral-500"
          ></IconArrowNarrowRight>
        </div>
      </div>
    </div>
  </div>
);
