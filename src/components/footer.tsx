import { cn } from "@/lib/utils";

export const Footer = () => {
  return (
    <div className="relative flex h-full w-full flex-col">
      <div
        className={cn(
          "pointer-events-none mt-[14vh] flex w-full justify-center bg-linear-to-b from-[#474747] to-[#030303] bg-clip-text font-medium text-transparent",
          "text-[180px] md:text-[250px] lg:text-[300px] xl:text-[359px]",
          "md:leading-55 lg:leading-70 xl:leading-80",
        )}
      >
        Kera
      </div>
      <div className="flex h-[20vh] w-full flex-col items-center">
        <div className="flex w-xl items-center justify-center gap-4 text-[13px] text-neutral-300 md:gap-8 lg:gap-13 lg:text-[14px] xl:text-[16px]">
          <div className="cursor-pointer hover:text-neutral-600">Career</div>
          <div className="cursor-pointer hover:text-neutral-600">Product</div>
          <div className="cursor-pointer hover:text-neutral-600">Contact</div>
          <div className="cursor-pointer hover:text-neutral-600">
            News letter
          </div>
          <div className="cursor-pointer hover:text-neutral-600">Articles</div>
        </div>
        <div className="mt-1 flex items-center justify-center">
          <div className="scale-35 cursor-pointer">
            <XSVG></XSVG>
          </div>
          <div className="scale-35 cursor-pointer">
            <MessageSVG></MessageSVG>
          </div>
          <div className="scale-50 cursor-pointer">
            <LinkdIn></LinkdIn>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "mx-auto -mt-[6vh] mb-6 flex justify-between font-sans text-sm text-neutral-500",
          "w-full px-4 md:px-10 xl:px-20",
        )}
      >
        <div>
          KERA <span className="text-[15px]">©</span>26
        </div>
        <div className="flex gap-5">
          <div className="cursor-pointer">Terms</div>
          <div>Privacy</div>
        </div>
      </div>

      <div className="absolute top-0 h-px w-full bg-[repeating-linear-gradient(_to_right,rgba(255,255,255,0.5)_0px,rgba(255,255,255,0.5)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)]" />
    </div>
  );
};

const MessageSVG = () => {
  return (
    <svg
      width="62"
      height="52"
      viewBox="0 0 62 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_313_353)">
        <rect width="62" height="52" rx="10" fill="#4A4A4A" />
        <path
          d="M-0.5 13C23.5 23.8 32.5 27 32.5 27L64 13"
          stroke="#232323"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_313_353">
          <rect width="62" height="52" rx="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const XSVG = () => {
  return (
    <svg
      width="50"
      height="45"
      viewBox="0 0 50 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M39.2 0H46.8L30.2 19.1L49.8 45H34.4L22.4 29.3L8.6 45H1L18.8 24.6L0 0H15.8L26.7 14.4L39.2 0ZM36.5 40.4H40.7L13.5 4.3H8.9L36.5 40.4Z"
        fill="#4A4A4A"
      />
    </svg>
  );
};

const LinkdIn = () => {
  return (
    <svg
      width="49"
      height="45"
      viewBox="0 0 49 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 11C0 4.92487 4.92487 0 11 0H38C44.0751 0 49 4.92487 49 11V34C49 40.0751 44.0751 45 38 45H11C4.92487 45 0 40.0751 0 34V11Z"
        fill="#4E4E4E"
      />
      <path
        d="M12.6513 33V16.6364H17.8608V33H12.6513ZM15.2614 14.7294C14.5298 14.7294 13.9013 14.4879 13.3757 14.005C12.8501 13.5149 12.5874 12.9254 12.5874 12.2365C12.5874 11.5547 12.8501 10.9723 13.3757 10.4893C13.9013 9.99929 14.5298 9.75426 15.2614 9.75426C16 9.75426 16.6286 9.99929 17.147 10.4893C17.6726 10.9723 17.9354 11.5547 17.9354 12.2365C17.9354 12.9254 17.6726 13.5149 17.147 14.005C16.6286 14.4879 16 14.7294 15.2614 14.7294ZM25.1862 23.6676V33H19.9767V16.6364H24.9305V19.6406H25.1116C25.4738 18.6392 26.0917 17.8544 26.9653 17.2862C27.8389 16.7109 28.8794 16.4233 30.0868 16.4233C31.2373 16.4233 32.2352 16.6825 33.0804 17.201C33.9326 17.7124 34.5931 18.4297 35.0619 19.353C35.5377 20.2692 35.7721 21.3416 35.765 22.5703V33H30.5555V23.593C30.5626 22.6839 30.3318 21.9737 29.863 21.4624C29.4014 20.951 28.7586 20.6953 27.9348 20.6953C27.3879 20.6953 26.9049 20.8161 26.4859 21.0575C26.074 21.2919 25.7544 21.6293 25.5271 22.0696C25.3069 22.5099 25.1933 23.0426 25.1862 23.6676Z"
        fill="#050505"
      />
    </svg>
  );
};
