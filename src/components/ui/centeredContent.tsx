import { cn } from "@/lib/utils";

export const CenteredContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-full w-xl flex-col items-center",
        "w-full md:w-2xl lg:w-[51rem] xl:w-6xl",
      )}
    >
      <div className="absolute top-20 right-0 h-full w-px bg-[repeating-linear-gradient(_to_bottom,rgba(255,255,255,0.4)_0px,rgba(255,255,255,0.4)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_90%,transparent_100%)]" />
      <div className="absolute top-20 left-0 h-full w-px bg-[repeating-linear-gradient(_to_bottom,rgba(255,255,255,0.4)_0px,rgba(255,255,255,0.4)_6px,transparent_6px,transparent_12px)] [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_90%,transparent_100%)]" />
      {children}
    </div>
  );
};
