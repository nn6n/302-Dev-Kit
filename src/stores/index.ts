import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { ConfigStore, createConfigSlice } from "./slices/config-slice";

// type AppStore = ConfigStore & OtherStore;
type AppStore = ConfigStore;

export const useAppStore = create<AppStore>()(
  persist(
    (...a) => ({
      ...createConfigSlice(...a),
    }),
    {
      name: "ai-tool-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
