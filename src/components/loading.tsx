export default function Loading() {
  return (
    <div className="flex size-full justify-center">
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
  );
}
