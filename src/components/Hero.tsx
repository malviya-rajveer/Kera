"use client";
import { cn } from "@/lib/utils";
import { AI_Chip } from "./ui/AI_Chip";
import { motion } from "motion/react";
export const HeroSection = () => {
  return (
    <section className="flex min-h-screen w-full justify-center bg-black">
      <div className="relative flex w-6xl">
        <div className="mt-[30vh] ml-5 flex flex-col items-center md:ml-10">
          <div className="w-[19rem] font-mono md:w-[15rem] lg:w-[25rem] xl:w-[37rem]">
            <h1
              className={cn(
                "tracking-tight text-white",
                "text-[25px] md:text-[27px] lg:text-[32px] xl:text-[50px]",
                "leading-8 md:leading-9 lg:leading-10 xl:leading-14",
              )}
            >
              The Revolutionary AI Processors{" "}
              <span className="bg-linear-to-b from-violet-200 to-violet-400 bg-clip-text text-transparent">
                supercharging
              </span>{" "}
              your supercomputing
            </h1>
            <p className="mt-[5vh] w-60 text-xs text-neutral-400 md:w-60 lg:w-80 lg:text-[13px] xl:w-sm xl:text-[14px]">
              It operates on thousands of high-end NVIDIA GPUs such as the H100
              and A100 models for training and inference,{" "}
            </p>
          </div>
          <div className="mt-[5vh] flex w-full gap-4">
            <motion.button
              initial={{
                scale: 1,
              }}
              whileTap={{
                scale: [1, 0.9, 1],
              }}
              className="cursor-pointer rounded-full bg-neutral-100 px-4 py-2 text-[14px] tracking-wide text-black hover:bg-neutral-300 xl:text-[16px]"
            >
              Article
            </motion.button>{" "}
            <motion.button
              initial={{
                scale: 1,
              }}
              whileTap={{
                scale: [1, 0.9, 1],
              }}
              className="cursor-pointer rounded-full bg-linear-to-b from-violet-300 to-violet-500 px-4 py-2 text-[14px] tracking-wide text-white xl:text-[16px]"
            >
              book a call
            </motion.button>
          </div>
        </div>
        <AI_Chip></AI_Chip>
        <div className="absolute top-[15vh] h-px w-full bg-[repeating-linear-gradient(_to_right,rgba(255,255,255,0.5)_0px,rgba(255,255,255,0.5)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_right,transparent_0%,black_2%,black_95%,transparent_100%)]" />
        <div className="absolute top-[25.5vh] h-px w-full bg-[repeating-linear-gradient(_to_right,rgba(255,255,255,0.5)_0px,rgba(255,255,255,0.5)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_right,transparent_0%,black_2%,black_95%,transparent_100%)]" />
        <div className="absolute bottom-[11.5vh] h-px w-full bg-[repeating-linear-gradient(_to_right,rgba(255,255,255,0.45)_0px,rgba(255,255,255,0.45)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_right,transparent_0%,black_2%,black_95%,transparent_100%)]" />
        <div className="absolute bottom-0 h-px w-full bg-[repeating-linear-gradient(_to_right,rgba(255,255,255,0.45)_0px,rgba(255,255,255,0.45)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_right,transparent_0%,black_2%,black_95%,transparent_100%)]" />
      </div>
    </section>
  );
};

// <div className="absolute top-15 h-px w-300 bg-[repeating-linear-gradient(_to_right,rgba(255,255,255,0.5)_0px,rgba(255,255,255,0.5)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]" />
