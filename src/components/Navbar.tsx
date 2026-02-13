import { Logo } from "./ui/Logo";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  return (
    <div
      className={cn(
        "fixed top-2 z-100 mx-auto flex h-11 justify-between rounded-xs backdrop-blur-xl",
        "w-full md:w-2xl lg:w-[51rem] xl:w-6xl",
      )}
    >
      {/* <div className=""></div> */}
      <div className="ml-5 flex w-18 items-center justify-center">
        <Logo></Logo>
        <a className="font-medium tracking-tight text-white">KERA</a>
      </div>
      <div className="mr-2 flex items-center gap-3 text-[15px] text-neutral-50 md:mr-5 md:gap-4">
        <div className="cursor-pointer text-sm text-white hover:text-neutral-400 md:text-[15px]">
          Home
        </div>
        <div className="cursor-pointer text-sm text-white hover:text-neutral-400 md:text-[15px]">
          Products
        </div>
        <div className="hidden cursor-pointer text-white hover:text-neutral-400 md:block">
          Resources
        </div>
        <div className="cusror-pointer hidden text-white hover:text-neutral-400 md:block">
          Careers
        </div>
      </div>

      <div className="absolute top-0 left-0 h-full w-px bg-[repeating-linear-gradient(_to_bottom,rgba(255,255,255,0.45)_0px,rgba(255,255,255,0.45)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_bottom,transparent_0%,black_50%,black_90%,transparent_100%)]" />
      <div className="absolute top-0 right-0 h-full w-px bg-[repeating-linear-gradient(_to_bottom,rgba(255,255,255,0.45)_0px,rgba(255,255,255,0.45)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_bottom,transparent_0%,black_50%,black_90%,transparent_100%)]" />
      <div className="absolute top-0 h-px w-full bg-[repeating-linear-gradient(_to_right,rgba(255,255,255,0.45)_0px,rgba(255,255,255,0.45)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_right,transparent_0%,black_2%,black_95%,transparent_100%)]" />
      <div className="absolute bottom-0 h-px w-full bg-[repeating-linear-gradient(_to_right,rgba(255,255,255,0.45)_0px,rgba(255,255,255,0.45)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_right,transparent_0%,black_2%,black_95%,transparent_100%)]" />
    </div>
  );
};
