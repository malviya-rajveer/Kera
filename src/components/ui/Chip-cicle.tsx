import { cn } from "@/lib/utils";

export const ChipCircle = ({ className }: { className: string }) => {
  return (
    <svg className={cn(className)} width={20} height={20}>
      <circle
        r={4.5}
        cx={10}
        cy={10}
        fill="none"
        strokeWidth="1.3"
        stroke="#9E9E9E"
      ></circle>
    </svg>
  );
};
