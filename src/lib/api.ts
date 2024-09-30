"use client";

import ky from "ky";
import { isEmpty } from "radash";

import { env } from "@/env";
import { emitter } from "@/lib/mitt";
import { useAppStore } from "@/stores";

import { langToCountry } from "./utils";

const apiKy = ky.create({
  prefixUrl: env.NEXT_PUBLIC_API_URL,
  timeout: 60 * 1000,
  hooks: {
    beforeRequest: [
      (request) => {
        const { apiKey, language } = useAppStore.getState();
        if (apiKey) {
          request.headers.set("Authorization", `Bearer ${apiKey}`);
        }
        if (language) {
          request.headers.set("Lang", langToCountry(language));
        }
      },
    ],
    afterResponse: [
      async (request, options, response) => {
        if (!response.ok) {
          const res = await response.json<{ error: { err_code: number } }>();
          if (!isEmpty(res.error?.err_code)) {
            emitter.emit("ToastError", JSON.stringify(res.error));
          }
        }
      },
    ],
  },
});

const authKy = ky.create({
  prefixUrl: env.NEXT_PUBLIC_AUTH_API_URL,
  timeout: 60 * 1000,
  hooks: {
    beforeRequest: [
      (request) => {
        const { language } = useAppStore.getState();
        if (language) {
          request.headers.set("Lang", langToCountry(language));
        }
      },
    ],
  },
});

export { apiKy, authKy };
