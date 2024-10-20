import { create } from "zustand";

import { ConfigStore, createConfigSlice } from "./slices/config-slice";

type AppStore = ConfigStore;

export const useAppStore = create<AppStore>()((...a) => ({
  ...createConfigSlice(...a),
}));
