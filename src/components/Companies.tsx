import Image from "next/image";
import { InfiniteSlider } from "./ui/infinteslider";

export const Companies = () => {
  return (
    <div className="flex h-50 w-full flex-col justify-center gap-1 pl-5 font-mono md:flex-row md:items-center lg:h-60">
      <h2 className="w-70 text-[17px] text-white md:w-full md:pl-10 md:text-[18px] lg:text-[22px] xl:text-[32px] xl:leading-11">
        Trusted by the{" "}
        <span className="text-stone-400">
          best AI Companies leading the Industry.
        </span>
      </h2>
      <div className="w-90 md:pr-10 lg:w-md xl:w-xl">
        <InfiniteSlider gap={40}>
          <Image
            width={0}
            height={0}
            alt="claude"
            src={"./claude-Logo.svg"}
            className="md:size- size-25 lg:size-28 xl:size-30"
          ></Image>
          <Image
            width={0}
            height={0}
            alt="google"
            src={"./google-Logo.svg"}
            className="md:size- size-25 lg:size-28 xl:size-30"
          ></Image>
          <Image
            width={0}
            height={0}
            alt="lovable"
            src={"./lovable-Logo.svg"}
            className="md:size- size-25 lg:size-28 xl:size-30"
          ></Image>
          <Image
            width={0}
            height={0}
            alt="meta"
            src={"./meta-logo.svg"}
            className="md:size- size-25 lg:size-28 xl:size-30"
          ></Image>
          <Image
            width={0}
            height={0}
            alt="openAI"
            src={"./openAI-Logo.svg"}
            className="md:size- size-25 lg:size-28 xl:size-30"
          ></Image>
          <Image
            width={0}
            height={0}
            alt="nv"
            src={"./nvidia-Logo.svg"}
            className="md:size- size-25 lg:size-28 xl:size-30"
          ></Image>
        </InfiniteSlider>
      </div>
    </div>
  );
};
