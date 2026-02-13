"use client";
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
      className="absolute top-[27vh] w-52 text-[18px] leading-6 text-neutral-50 md:top-30 md:left-14 xl:top-34 xl:left-18 xl:w-60 xl:text-xl"
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
