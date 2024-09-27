import { cn } from "@/lib/utils";
export default function Loading({ className }: { className?: string }) {
  return (
    <div className={cn("flex size-full justify-center items-center", className)}>
      <div className="flex">
        <div className="mx-1 size-2 animate-dotFlashing rounded-full bg-gray-400"></div>
        <div
          className="mx-1 size-2 animate-dotFlashing rounded-full bg-gray-400"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="mx-1 size-2 animate-dotFlashing rounded-full bg-gray-400"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
    </div>
  );
}
