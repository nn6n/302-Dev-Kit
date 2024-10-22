import { env } from "@/env";
import { useAppSession } from "@/stores";

export const useIsLogin = () => {
  const apiKey = useAppSession((state) => state.apiKey);
  const isLogin = apiKey || env.NEXT_PUBLIC_302_API_KEY;
  console.log("isLogin::", !!isLogin);
  return !!isLogin;
};
