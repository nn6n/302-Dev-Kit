import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ConfigStore, createConfigSlice } from "./slices/config-slice";

// type StoreState = ConfigStore & OtherStore;
type StoreState = ConfigStore;

const useStore = create<StoreState>()(
  persist(
    (...a) => ({
      ...createConfigSlice(...a),
    }),
    {
      name: "ai-tool-store",
      partialize: (state) => ({
        region: state.region,
      }),
    },
  ),
);

export const useConfigStore = () =>
  useStore((state) => ({
    region: state.region,
    code: state.code,
    apiKey: state.apiKey,
    modelName: state.modelName,
    language: state.language,
    info: state.info,
    updateOne: state.updateOne,
    updateALl: state.updateAll,
  }));
