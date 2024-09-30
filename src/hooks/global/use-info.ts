import { login } from "@/lib/auth";
import { useAppStore } from "@/stores";
import { useQuery } from "@tanstack/react-query";

interface InfoResult {
  success: boolean;
  errorMessage?: string;
  data?: {
    code: string;
    info: string;
    apiKey: string;
    modelName: string;
    region: string;
  };
}

export const fetchAuth = async (): Promise<InfoResult> => {
  const { code } = useAppStore.getState()
  const res = await login(code)
  return res
};

export const useInfo = () => {
  return useQuery<InfoResult, Error>({
    queryKey: ["info"],
    queryFn: async () => {
      return fetchAuth();
    },
    retry: false,
  });
};
