import { useTranslation } from "@/i18n";

import LandHeader from "./_components/header";
import Test from "./_components/test";

interface pageProps {
  params: {
    locale: string;
  };
}

const HomePage = async ({ params: { locale } }: pageProps) => {
  const { t } = await useTranslation(locale);

  return (
    <div className="flex w-full flex-col items-center p-8">
      <LandHeader title={t("land:title")} />
      <p>{t("land:desc")}</p>
      <Test />
    </div>
  );
};

export default HomePage;
