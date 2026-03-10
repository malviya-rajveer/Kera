"use client";
import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate } from "motion/react";
import { useEffect } from "react";
export const TextSequence = () => {
  const [scope, animate] = useAnimate();
  const text = "The Pro chips for pro AI's to feel pure fastness ";

  const startAnimating = () => {
    animate(
      "span",
      {
        opacity: [0, 1, 1, 1, 0],
        filter: "blur(0px)",
      },
      {
        duration: 5,
        // times: [0, 1, 1, 0],
        ease: "easeInOut",
        delay: stagger(0.1),
        repeat: Infinity,
        repeatDelay: 3,
      },
    );
  };

  useEffect(() => {
    startAnimating();
  }, []);
  return (
    <motion.div
      ref={scope}
      className={cn(
        "absolute w-52 text-center leading-6 text-neutral-50",
        "top-30 text-[20px] md:left-10",
        "xl:top-36 xl:left-12 xl:w-65 xl:text-[23px] xl:leading-7",
      )}
    >
      {text.split(" ").map((word, idx) => {
        return (
          <motion.span
            key={idx}
            style={{
              opacity: 0,
              filter: "blur(0px)",
            }}
          >
            {word}{" "}
          </motion.span>
        );
      })}
    </motion.div>
  );
};
