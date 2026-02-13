import Image from "next/image";
import { InfiniteSlider } from "./infinteslider";
import { Logo } from "./Logo";

export const SlideTrail = () => {
  return (
    <div className="relative mt-5 flex h-30 w-full flex-col gap-3">
      <InfiniteSlider className="" reverse gap={7} speed={50} speedOnHover={20}>
        <div className="flex h-7 w-22 items-center justify-center rounded-2xl border border-neutral-700">
          {/* <img src={"./google-Symbol.svg"} className="size-4"></img> */}
          <Image
            alt="google"
            src={"./google-Logo.svg"}
            className="size-10"
            height={0}
            width={0}
          ></Image>
        </div>{" "}
        <div className="flex h-7 w-22 items-center justify-center rounded-2xl border border-neutral-700">
          <Image
            height={0}
            width={0}
            alt="claude"
            src={"./claude-Logo.svg"}
            className="size-13"
          ></Image>
        </div>{" "}
        <div className="flex h-7 w-22 items-center justify-center gap-1 rounded-2xl border border-neutral-700 text-xs text-white">
          <Image
            height={0}
            width={0}
            alt="Apple"
            src={"./apple-Logo.svg"}
            className="size-3.5"
          ></Image>
          <h4>Apple</h4>
        </div>{" "}
        <div className="flex h-7 w-22 items-center justify-center gap-1 rounded-2xl border border-neutral-700 text-xs text-white">
          <Image
            height={0}
            width={0}
            alt="figma"
            src={"./figma-Symbol.svg"}
            className="size-3"
          ></Image>
          Figma
        </div>{" "}
        <div className="flex h-7 w-22 items-center justify-center rounded-2xl border border-neutral-700">
          <Image
            height={0}
            width={0}
            alt="X"
            src={"./X-Logo.svg"}
            className="size-3"
          ></Image>
        </div>
      </InfiniteSlider>
      <div className="flex w-full items-center justify-center gap-2">
        <div className="flex h-8 w-22 items-center justify-center rounded-3xl border border-neutral-700">
          {/* <img src={"./google-Symbol.svg"} className="size-4"></img> */}
          <Image
            height={0}
            width={0}
            alt="google"
            src={"./google-Logo.svg"}
            className="size-10"
          ></Image>
        </div>{" "}
        <div className="flex h-10 w-22 items-center justify-center rounded-3xl border border-neutral-700">
          <Logo className="scale-30"></Logo>
          <span className="-translate-x-3 text-sm text-white">KERA</span>
        </div>{" "}
        {/* <div className="flex h-10 w-22 items-center justify-center gap-1 rounded-3xl border border-neutral-700 text-xs text-white">
                    <img src={"./apple-Logo.svg"} className="size-3.5"></img>
                    <h4>Apple</h4>
                  </div>{" "} */}
        <div className="flex h-8 w-22 items-center justify-center gap-1 rounded-3xl border border-neutral-700 text-xs text-white">
          <Image
            height={0}
            width={0}
            alt="apple"
            src={"./apple-Logo.svg"}
            className="size-3.5"
          ></Image>
          <h4>Apple</h4>
        </div>{" "}
      </div>
      <InfiniteSlider gap={7} speed={50} speedOnHover={20}>
        <div className="flex h-7 w-22 items-center justify-center rounded-2xl border border-neutral-700">
          {/* <img src={"./google-Symbol.svg"} className="size-4"></img> */}
          <Image
            height={0}
            width={0}
            alt="google"
            src={"./google-Logo.svg"}
            className="size-10"
          ></Image>
        </div>{" "}
        <div className="flex h-7 w-22 items-center justify-center rounded-2xl border border-neutral-700">
          <Image
            height={0}
            width={0}
            alt="Claude"
            src={"./claude-Logo.svg"}
            className="size-13"
          ></Image>
        </div>{" "}
        <div className="flex h-7 w-22 items-center justify-center gap-1 rounded-2xl border border-neutral-700 text-xs text-white">
          <Image
            height={0}
            width={0}
            alt="Apple"
            src={"./apple-Logo.svg"}
            className="size-3.5"
          ></Image>
          <h4>Apple</h4>
        </div>{" "}
        <div className="flex h-7 w-22 items-center justify-center gap-1 rounded-2xl border border-neutral-700 text-xs text-white">
          <Image
            height={0}
            width={0}
            alt="figma"
            src={"./figma-Symbol.svg"}
            className="size-3"
          ></Image>
          Figma
        </div>{" "}
        <div className="flex h-7 w-22 items-center justify-center rounded-2xl border border-neutral-700">
          <Image
            height={0}
            width={0}
            alt="X"
            src={"./X-Logo.svg"}
            className="size-3"
          ></Image>
        </div>
      </InfiniteSlider>

      <div className="absolute -top-3 h-px w-full bg-[repeating-linear-gradient(_to_right,rgba(255,255,255,0.45)_0px,rgba(255,255,255,0.45)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_right,transparent_0%,black_35%,black_75%,transparent_100%)]" />
      <div className="absolute -bottom-3 h-px w-full bg-[repeating-linear-gradient(_to_right,rgba(255,255,255,0.45)_0px,rgba(255,255,255,0.45)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_right,transparent_0%,black_35%,black_75%,transparent_100%)]" />
    </div>
  );
};
