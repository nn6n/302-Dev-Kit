import { StateCreator } from "zustand";

type ConfigState = {
  region?: string
  code?: string
  apiKey?: string
  modelName?: string
  language?: string
  info?: string
};

type ConfigActions = {
  updateOne: <T extends keyof ConfigState>(
    field: T,
    value: ConfigState[T]
  ) => void;
  updateAll: (fields: Partial<ConfigState>) => void;
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
  updateOne: (field, value) => set((state) => ({ ...state, [field]: value })),
  updateAll: (fields) => set((state) => ({ ...state, ...fields })),
});