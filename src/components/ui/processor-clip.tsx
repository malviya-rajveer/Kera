import { cn } from "@/lib/utils";

export const ProcessorClip = ({ className }: { className: string }) => {
  return (
    <svg
      width="12"
      height="19"
      viewBox="0 0 12 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "absolute top-100 right-51.5 z-50 scale-95 rotate-90",
        className,
      )}
    >
      <g filter="url(#filter0_f_0_1)">
        <path d="M1 1H3V18H1V1Z" fill="#DEDFDE" />
      </g>
      <g filter="url(#filter1_f_0_1)">
        <path d="M9 1H11V18H9V1Z" fill="#DEDFDE" />
      </g>
      <g filter="url(#filter2_f_0_1)">
        <path d="M1 4H11V9H1V4Z" fill="#D8D8D8" />
      </g>
      <g filter="url(#filter3_f_0_1)">
        <path d="M1 14H11V18H1V14Z" fill="#BCBCBC" />
      </g>
      <path d="M1 1H11V18H1V1Z" fill="#F1EFEF" fillOpacity="0.36" />
      <defs>
        <filter
          id="filter0_f_0_1"
          x="0"
          y="0"
          width="4"
          height="19"
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
            stdDeviation="0.5"
            result="effect1_foregroundBlur_0_1"
          />
        </filter>
        <filter
          id="filter1_f_0_1"
          x="8"
          y="0"
          width="4"
          height="19"
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
            stdDeviation="0.5"
            result="effect1_foregroundBlur_0_1"
          />
        </filter>
        <filter
          id="filter2_f_0_1"
          x="0.2"
          y="3.2"
          width="11.6"
          height="6.6"
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
            stdDeviation="0.4"
            result="effect1_foregroundBlur_0_1"
          />
        </filter>
        <filter
          id="filter3_f_0_1"
          x="0"
          y="13"
          width="12"
          height="6"
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
            stdDeviation="0.5"
            result="effect1_foregroundBlur_0_1"
          />
        </filter>
      </defs>
    </svg>
  );
};
