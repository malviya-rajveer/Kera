import { cn } from "@/lib/utils";

export const OurChip = () => {
  return (
    <div className="relative flex h-[90vh] w-full overflow-hidden">
      <div className="absolute mt-4 h-px w-full bg-[repeating-linear-gradient(_to_right,rgba(255,255,255,0.5)_0px,rgba(255,255,255,0.5)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)]" />
      <div className="ml-5 w-1/2 font-mono md:ml-10">
        <h2 className="mt-[18vh] w-80 text-[20px] text-white md:text-[18px] lg:w-full lg:text-[22px] lg:leading-8 xl:text-[34px] xl:leading-11">
          A high-performance processor optimized for real-time{" "}
          <span className="text-stone-400">
            AI workloads The compute engine powering the next generation of AI
          </span>
        </h2>
        <p className="mt-4 w-70 text-[12px] text-neutral-200 md:text-[11px] lg:w-90 lg:text-[13px] lg:leading-5 xl:w-md xl:text-[15px] xl:leading-6">
          Our AI processor is purpose-built to run modern machine learning
          workloads efficiently and at scale. Designed from the ground
        </p>
        <div className="mt-8 flex h-20 w-full gap-6">
          <div className="flex flex-col items-center">
            <h3 className="bg-linear-to-br from-violet-200 to-violet-700 bg-clip-text text-[22px] font-medium text-transparent md:text-[25px] lg:text-3xl xl:text-4xl">
              10B+
            </h3>
            <p className="pr-2 text-[12px] text-neutral-200 md:text-[11px] lg:text-[12px] xl:text-[14px]">
              Total revenue
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-[22px] font-medium text-white md:text-[25px] lg:text-3xl xl:text-4xl">
              10M+
            </h3>
            <p className="pr-2 text-[12px] text-neutral-200 md:text-[11px] lg:text-[12px] xl:text-[14px]">
              production
            </p>
          </div>{" "}
          <div className="flex flex-col items-center">
            <h3
              className={cn(
                "bg-linear-to-br from-lime-200 to-emerald-400 bg-clip-text text-[22px] font-medium text-transparent md:text-[25px] lg:text-3xl xl:text-4xl",
              )}
            >
              100%
            </h3>
            <p className="pr-2 text-[12px] text-neutral-200 md:text-[11px] lg:text-[12px] xl:text-[14px]">
              recycled
            </p>
          </div>
        </div>
      </div>
      <div className="relative z-0 hidden w-70 items-center justify-center overflow-hidden md:flex lg:translate-x-10 xl:w-100">
        {/* <div className="absolute top-10 z-20 mt-4 h-px w-120 bg-[repeating-linear-gradient(_to_right,rgba(255,255,255,0.5)_0px,rgba(255,255,255,0.5)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)]" /> */}

        <div className="absolute top-0 left-0 z-20 h-full w-px bg-[repeating-linear-gradient(_to_bottom,rgba(255,255,255,0.5)_0px,rgba(255,255,255,0.5)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_90%,transparent_100%)]" />
        <div className="absolute top-0 right-0 z-20 h-full w-px bg-[repeating-linear-gradient(_to_bottom,rgba(255,255,255,0.5)_0px,rgba(255,255,255,0.5)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_90%,transparent_100%)]" />
        <div className="absolute bottom-[8vh] z-20 mt-4 h-px w-120 bg-[repeating-linear-gradient(_to_right,rgba(255,255,255,0.5)_0px,rgba(255,255,255,0.5)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)]" />

        <img
          src="./Vector.png"
          className="mt-[5vh] h-[60vh] scale-130"
          alt=""
        />
      </div>

      <div className="absolute bottom-0 mt-4 h-px w-full bg-[repeating-linear-gradient(_to_right,rgba(255,255,255,0.5)_0px,rgba(255,255,255,0.5)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)]" />
    </div>
  );
};
