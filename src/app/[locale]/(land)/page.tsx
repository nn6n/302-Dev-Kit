// "use client";
import { useTranslation } from "@/i18n";

import LandHeader from "./_components/header";
// import { useAppStore } from "@/stores";
import Test from "./_components/test";

interface pageProps {
  params: {
    locale: string;
  };
}

const HomePage = async ({ params: { locale } }: pageProps) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, 2 * 1000);
  });
  const { t } = await useTranslation(locale);
  // const { apiKey } = useAppStore.getState();

  return (
    <div className="flex w-full flex-col items-center p-8">
      <LandHeader title={t("title")} />
      <Test locale={locale} />
      <p>{t("lang")}</p>
    </div>
  );
};

export default HomePage;
