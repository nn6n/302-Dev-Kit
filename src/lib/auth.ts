"use client";

import { env } from "@/env";

import { authKy } from "./api";

interface Response {
  data: {
    info: string;
    api_key: string;
    model_name: string;
    region: string;
  };
  code: number;
}

interface LoginResult {
  success: boolean;
  errorMessage?: string;
  data?: {
    info: string;
    apiKey: string;
    modelName: string;
    region: string;
  };
}

export const login = async (code?: string): Promise<LoginResult> => {
  const hostname =
    env.NEXT_PUBLIC_DEV_HOST_NAME || window.location.host.split(".")[0];

  const res = await authKy.get(
    `bot/v1/${hostname}${code ? `?pwd=${code}` : ""}`
  );

  if (res.status !== 200) {
    return {
      success: false,
      errorMessage: "auth:errors.network_error",
    };
  }

  const data = await res.json<Response>();

  if (data.code === 0) {
    return {
      success: true,
      data: {
        info: data.data.info,
        apiKey: data.data.api_key,
        modelName: data.data.model_name || env.NEXT_PUBLIC_DEFAULT_MODEL_NAME!,
        region: data.data.region,
      },
    };
  }

  let errorMessage = "auth:errors.unknown_error";
  if (data.code === -101) {
    errorMessage = "auth:errors.tool_deleted";
  } else if (data.code === -100) {
    errorMessage = "auth:errors.tool_disabled";
  } else if (data.code === -99) {
    errorMessage = "auth:errors.share_code_error";
  }
  throw errorMessage;
  // return {
  //   success: false,
  //   errorMessage,
  // };
};
