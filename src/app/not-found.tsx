import { MilestoneIcon } from "lucide-react";

import { useTranslation } from "@/i18n";

type pageProps = {
  params: {
    locale: string;
  };
};

const NotFoundPage = async ({ params: { locale } }: pageProps) => {
  const { t } = await useTranslation(locale);
  return (
    <div className="mx-auto mt-4 max-w-md">
      <p className="flex items-center justify-center gap-2 text-2xl font-normal">
        <MilestoneIcon />
        {t("global:error.not_found")}
      </p>
    </div>
  );
};

export default NotFoundPage;
