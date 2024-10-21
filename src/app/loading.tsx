import { DotLoader } from "@/components/common/loader-renderer";

export default function Loading() {
  return (
    <div className="w-full p-8 flex items-center justify-center">
      <DotLoader />
    </div>
  );
}