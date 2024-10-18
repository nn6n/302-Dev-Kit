import { useAppStore } from "@/stores";

export function useIsLogin() {
  const apiKey = useAppStore((state) => state.apiKey);
  return !!apiKey;
}
