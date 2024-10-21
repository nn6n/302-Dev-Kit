"use client";

import { useEffect, useState } from "react";

import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";
import { useCookies } from "react-cookie";
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";

import { defaultLocale, locales } from "@/i18n/config";

import { UseTranslationOptions } from "./";
import enAuth from "./locales/en/auth.json";
import enBasic from "./locales/en/basic.json";
import enLand from "./locales/en/land.json";
import zhAuth from "./locales/zh/auth.json";
import zhBasic from "./locales/zh/basic.json";
import zhLand from "./locales/zh/land.json";

export const cookieName = "i18next";

const runsOnServerSide = typeof window === "undefined";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init({
    resources: {
      en: { basic: enBasic, auth: enAuth, land: enLand },
      zh: { basic: zhBasic, auth: zhAuth, land: zhLand },
    },
    supportedLngs: locales,
    fallbackLng: defaultLocale,
    lng: defaultLocale,
    fallbackNS: "basic",
    defaultNS: "basic",
    ns: "basic",
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    preload: runsOnServerSide ? locales : [],
  });

export function useTranslation(
  lng: string,
  ns: string = "basic",
  options: UseTranslationOptions = {}
) {
  const [cookies, setCookie] = useCookies([cookieName]);
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;
  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  } else {
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);
    useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) return;
      setActiveLng(i18n.resolvedLanguage);
    }, [activeLng, i18n.resolvedLanguage]);
    useEffect(() => {
      if (!lng || i18n.resolvedLanguage === lng) return;
      i18n.changeLanguage(lng);
    }, [lng, i18n]);
    useEffect(() => {
      if (cookies.i18next === lng) return;
      setCookie(cookieName, lng, { path: "/" });
    }, [lng, cookies.i18next]);
  }
  return ret;
}
