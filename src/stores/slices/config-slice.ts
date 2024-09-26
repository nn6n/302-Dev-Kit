import { StateCreator } from "zustand";

type ConfigState = {
  region?: string;
  code?: string;
  apiKey?: string;
  modelName?: string;
  language?: string;
  info?: string;
};

type ConfigActions = {
  updateConfig: (fields: Partial<ConfigState>) => void;
};

export type ConfigStore = ConfigState & ConfigActions;

export const createConfigSlice: StateCreator<
  ConfigStore,
  [],
  [],
  ConfigStore
> = (set) => ({
  region: "",
  code: "",
  apiKey: "",
  modelName: "",
  language: "",
  info: "",
  updateConfig: (fields) => set((state) => ({ ...state, ...fields })),
});
