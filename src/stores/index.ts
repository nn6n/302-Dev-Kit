import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ConfigStore, createConfigSlice } from "./slices/config-slice";

// type StoreState = ConfigStore & OtherStore;
type StoreState = ConfigStore;

export const useToolStore = create<StoreState>()(
  persist(
    (...a) => ({
      ...createConfigSlice(...a),
    }),
    {
      name: "ai-tool-store",
    },
  ),
);

// export const useConfigStore = () =>
//   useStore((state) => ({
//     region: state.region,
//     code: state.code,
//     apiKey: state.apiKey,
//     modelName: state.modelName,
//     language: state.language,
//     info: state.info,
//     updateOne: state.updateOne,
//     updateAll: state.updateAll,
//   }));
