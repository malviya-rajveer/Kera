import { motion } from "motion/react";
import { ProcessorClip } from "./processor-clip";
import { ChipCircle } from "./Chip-cicle";
export const AI_Chip = () => {
  interface Reflection {
    rx: string;
    ry: string;
    className: string;
  }
  type ChipReflection = Reflection & { translateX: number; translateY: number };
  const reflection: Reflection[] = [
    { rx: "10", ry: "300.719", className: "-translate-20" },
    { rx: "2", ry: "300.719", className: "-translate-25" },
    {
      rx: "45",
      ry: "385.719",
      className: "",
    },
    {
      rx: "40",
      ry: "385.719",
      className: "-translate-44",
    },
    {
      rx: "60",
      ry: "300.719",
      className: "-translate-20",
    },
    {
      rx: "60",
      ry: "300.719",
      className: "translate-20",
    },
  ];

  const chipReflection: ChipReflection[] = [
    {
      rx: "40",
      ry: "385.719",
      className: "translate-40",
      translateX: -245,
      translateY: -245,
    },
    {
      rx: "14",
      ry: "385.719",
      className: "translate-50",
      translateX: -255,
      translateY: -255,
    },
  ];

  return (
    <div className="relative ml-10 hidden items-center justify-center md:flex lg:ml-0 xl:ml-14">
      <div className="absolute top-20 -left-1 h-[89vh] w-px bg-[repeating-linear-gradient(_to_bottom,rgba(255,255,255,0.5)_0px,rgba(255,255,255,0.5)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_90%,transparent_100%)]" />
      <div className="absolute top-20 -right-1 h-[89vh] w-px bg-[repeating-linear-gradient(_to_bottom,rgba(255,255,255,0.5)_0px,rgba(255,255,255,0.5)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_90%,transparent_100%)]" />
      <div className="mt-[14vh] flex h-[62vh] items-center justify-center overflow-hidden">
        <div className="relative flex items-center justify-center overflow-hidden">
          <svg
            width="87"
            height="400"
            viewBox="-0 2 91 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 right-0 z-30"
          >
            <path
              d="M 0 -2 H 67 C 71 -2 71 -2 71 -6 H 71 V -213 M 0 20 H 40.5 M 0 41 H 65 C 69 41 69 41 69 44 V 175 M 0 64.5 H 52 C 55 64.5 55 64.5 55 67 V 252"
              stroke="#9E9E9E"
              strokeWidth={1.3}
            />
            <motion.path
              d="M 0 -2 H 67 C 71 -2 71 -2 71 -6 H 71 V -213"
              stroke={"url(#right_beam)"}
              strokeLinecap="round"
              strokeWidth={2.7}
            />
            <motion.path
              d="M 0 64.5 H 52 C 55 64.5 55 64.5 55 67 V 252"
              stroke={"url(#right_beam2)"}
              strokeWidth={3}
            />
            <defs>
              <motion.linearGradient
                id={"right_beam"}
                gradientUnits="userSpaceOnUse"
                initial={{
                  x1: "150%",
                  x2: "200%",
                }}
                animate={{
                  x1: "-50%",
                  x2: "0%",
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  // repeatDelay: 1,
                }}
              >
                <stop stopColor="#9E00FF" stopOpacity="0" />
                <stop stopColor="oklch(98.5% 0 0)" />

                <stop offset="1" stopColor="oklch(98.5% 0 0)" stopOpacity="0" />
              </motion.linearGradient>
              <motion.linearGradient
                id={"right_beam2"}
                gradientUnits="userSpaceOnUse"
                initial={{
                  x1: "150%",
                  x2: "200%",
                }}
                animate={{
                  x1: "-50%",
                  x2: "0%",
                }}
                transition={{
                  duration: 2,
                  delay: 0.4,
                  repeat: Infinity,
                  // repeatDelay: 1,
                }}
              >
                <stop stopColor="#9E00FF" stopOpacity="0" />
                <stop stopColor="oklch(98.5% 0 0)" />

                <stop offset="1" stopColor="oklch(98.5% 0 0)" stopOpacity="0" />
              </motion.linearGradient>
            </defs>
          </svg>
          <svg
            width="87"
            height="315"
            viewBox="-30 -40 91 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0 z-30"
          >
            <path
              d="M 38.5 0.5 H 60.5 M 68 41 H 24 C 19 41 19 41 19 45 V 81 C 19 85 19 85 16 85 H -57 M 38 65 H 60.5 M 62 20 H 32 H 3 C 0 20 0 20 0 17 V -155"
              stroke="#AFAFAF"
              strokeWidth={1.3}
            />
            <motion.path
              d="M 68 41 H 24 C 19 41 19 41 19 45 V 81 C 19 85 19 85 16 85 H -57"
              stroke={"url(#left_beam)"}
              strokeWidth={2.3}
            />
            <defs>
              <motion.linearGradient
                initial={{
                  x1: "-30%",
                  x2: "0%",
                }}
                animate={{
                  x1: "100%",
                  x2: "130%",
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                id={"left_beam"}
              >
                <stop offset="0" stopColor="oklch(98.5% 0 0)" stopOpacity="0" />
                <stop offset="1" stopColor="oklch(98.5% 0 0)" />
                <stop offset="1" stopColor="" stopOpacity="0" />
              </motion.linearGradient>
            </defs>
          </svg>
          <svg
            width="183"
            height="133"
            viewBox="0 -33 70 134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 z-30"
          >
            <path
              d="M 0.5 93.5 L 0.5 46.75 L 0.5 0 M 25.4844 93.5 L 25.4844 39.5 M 73 93 L 73 52 C 73 48 73 48 78 48 H 113 C 115 48 115 48 115 46 V -90 M 49 93 V 17 C 49 12 49 12 56 12 L 95 12 C 99 12 99 12 99 9 V -90"
              stroke="#9E9E9E"
              strokeWidth={1.3}
            />
            <path
              d="M 49 93 V 17 C 49 12 49 12 56 12 L 95 12 C 99 12 99 12 99 9 V -90"
              stroke={"url(#right_beam)"}
              strokeWidth={2.7}
            />
          </svg>
          <svg
            width="73"
            height="126"
            viewBox="0 0 73 126"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-68 z-30"
          >
            <path
              d="M0.5 72L0.5 -7.77841e-06M25.4844 35.5L25.4844 -7.77841e-06M49.3906 67L49.3906 27L49.3906 -7.77841e-06M72.5 125.5L72.5 -7.77841e-06"
              stroke="#9E9E9E"
              strokeWidth={1.3}
            />
          </svg>
          <ProcessorClip className="top-39 right-21.5 z-40 scale-x-90 scale-y-60"></ProcessorClip>
          <ProcessorClip className="top-44 right-21.5 z-40 scale-x-90 scale-y-60"></ProcessorClip>
          <ProcessorClip className="top-49 right-21.5 z-40 scale-x-90 scale-y-60"></ProcessorClip>
          <ProcessorClip className="top-55 right-21.5 z-40 scale-x-90 scale-y-60"></ProcessorClip>

          <ProcessorClip className="top-39 left-21.5 z-40 scale-x-90 scale-y-60"></ProcessorClip>
          <ProcessorClip className="top-44 left-21.5 z-40 scale-x-90 scale-y-60"></ProcessorClip>
          <ProcessorClip className="top-49 left-21.5 z-40 scale-x-90 scale-y-60"></ProcessorClip>
          <ProcessorClip className="top-55 left-21.5 z-40 scale-x-90 scale-y-60"></ProcessorClip>

          <ProcessorClip className="top-30.5 left-30 z-40 scale-x-90 scale-y-60 rotate-0"></ProcessorClip>
          <ProcessorClip className="top-30.5 left-36 z-40 scale-x-90 scale-y-60 rotate-0"></ProcessorClip>
          <ProcessorClip className="top-30.5 left-42 z-40 scale-x-90 scale-y-60 rotate-0"></ProcessorClip>
          <ProcessorClip className="top-30.5 left-48 z-40 scale-x-90 scale-y-60 rotate-0"></ProcessorClip>
          <ChipCircle className="absolute top-0.5 left-4.5 z-20"></ChipCircle>
          <ChipCircle className="absolute top-4.5 left-29 z-20"></ChipCircle>
          <ChipCircle className="absolute top-14.5 left-35 z-20"></ChipCircle>
          <ChipCircle className="absolute top-39 left-13 z-20"></ChipCircle>
          <ChipCircle className="absolute top-54 left-13 z-20"></ChipCircle>
          <ChipCircle className="absolute top-39 left-13 z-20"></ChipCircle>
          <ChipCircle className="absolute top-44 right-8.5 z-20"></ChipCircle>
          <ChipCircle className="absolute top-44 right-8.5 z-20"></ChipCircle>
          <ChipCircle className="absolute bottom-10.5 left-28.5 z-20"></ChipCircle>
          <ChipCircle className="absolute right-34 bottom-12 z-20"></ChipCircle>
          <ChipCircle className="absolute right-40 bottom-19.5 z-20"></ChipCircle>
          <ChipCircle className="absolute right-2.5 bottom-13 z-20"></ChipCircle>

          <ProcessorClip className="top-64.5 left-30 z-40 scale-x-90 scale-y-60 rotate-180"></ProcessorClip>
          <ProcessorClip className="top-64.5 left-36 z-40 scale-x-90 scale-y-60 rotate-180"></ProcessorClip>
          <ProcessorClip className="top-64.5 left-42 z-40 scale-x-90 scale-y-60 rotate-180"></ProcessorClip>
          <ProcessorClip className="top-64.5 left-48 z-40 scale-x-90 scale-y-60 rotate-180"></ProcessorClip>

          {/* <ProcessorClip className="top-56 right-21.5 z-40 scale-x-90 scale-y-60"></ProcessorClip> */}
          <motion.div
            animate={{
              background: [
                "linear-gradient(130deg, var(--color-rose-300), var(--color-blue-500))",
                "linear-gradient(130deg, var(--color-yellow-300), var(--color-emerald-400))",
                "linear-gradient(130deg, var(--color-red-400), var(--color-indigo-600))",
                "linear-gradient(130deg, var(--color-rose-300), var(--color-blue-500))",
                // "linear-gradient(130deg,#FDBB2D, #3A1C71",
              ],
            }}
            transition={{
              duration: 9,
              times: [0, 0.33, 0.66, 1],
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative h-100 w-80 border border-white"
          ></motion.div>
          <motion.div className="absolute inset-0 z-0">
            {reflection.map((data, idx) => {
              return (
                <motion.svg
                  key={idx}
                  initial={{
                    translateX: 0,
                    translateY: 0,
                    opacity: 0.5,
                  }}
                  animate={{
                    translateX: [0, -35, 0, -60, 0],
                    translateY: [0, -35, 0, -60, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                  }}
                  className="absolute"
                  width="510"
                  height="502"
                  viewBox="0 0 510 502"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_f_59_303)">
                    <ellipse
                      cx="240.303"
                      cy="212.972"
                      rx={data.rx}
                      ry={data.ry}
                      transform="rotate(42.9541 240.303 212.972)"
                      fill="url(#paint0_linear_59_303)"
                      className={data.className}
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_59_303"
                      x="-28.7138"
                      y="-75.1211"
                      width="538.034"
                      height="576.185"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="2.05"
                        result="effect1_foregroundBlur_59_303"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_59_303"
                      x1="195.303"
                      y1="212.849"
                      x2="285.304"
                      y2="212.957"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="3.28673e-05"
                        stopColor="white"
                        stopOpacity="0.1"
                      />
                      <stop
                        offset="0.49045"
                        stopColor="white"
                        stopOpacity="0.87"
                      />
                      <stop
                        offset="0.601035"
                        stopColor="white"
                        stopOpacity="0.75"
                      />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              );
            })}
          </motion.div>
          <div className="absolute z-0 flex h-30 w-30 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-b from-[#404040] to-stone-900 ring ring-2 ring-[#4E4E4E] drop-shadow-2xl drop-shadow-black/0">
            {chipReflection.map((data, idx) => {
              return (
                <motion.svg
                  key={idx}
                  initial={{
                    translateX: 0,
                    translateY: 0,
                    opacity: 0.1,
                  }}
                  animate={{
                    translateX: data.translateX,
                    translateY: data.translateY,
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                  className="absolute z-30"
                  width="500"
                  height="502"
                  viewBox="0 0 510 502"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_f_59_303)">
                    <ellipse
                      cx="240.303"
                      cy="212.972"
                      rx={data.rx}
                      ry={data.ry}
                      transform="rotate(42.9541 240.303 212.972)"
                      fill="url(#paint0_linear_59_303)"
                      className={data?.className}
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_59_303"
                      x="-28.7138"
                      y="-75.1211"
                      width="538.034"
                      height="576.185"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="2.05"
                        result="effect1_foregroundBlur_59_303"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_59_303"
                      x1="195.303"
                      y1="212.849"
                      x2="285.304"
                      y2="212.957"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="3.28673e-05"
                        stopColor="white"
                        stopOpacity="0.1"
                      />
                      <stop
                        offset="0.49045"
                        stopColor="white"
                        stopOpacity="0.87"
                      />
                      <stop
                        offset="0.601035"
                        stopColor="white"
                        stopOpacity="0.75"
                      />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              );
            })}
            <h1 className="bg-linear-to-b from-white to-neutral-500 bg-clip-text font-sans text-6xl text-transparent">
              AI
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
