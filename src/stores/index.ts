import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ConfigStore, createConfigSlice } from "./slices/config-slice";

type AppStore = ConfigStore;

// 使用 persist 中间件来持久化 store
export const useAppStore = create<AppStore>()(
  persist(
    (...a) => ({
      ...createConfigSlice(...a),
    }),
    {
      name: "app-store",
    }
  )
);