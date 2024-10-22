"use client";

import { useState } from "react";

import { LanguagesIcon } from "lucide-react";

// Import UI components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocaleRouter } from "@/hooks/global";
import { Lang, languages } from "@/i18n/config";

type LangSwitcherProps = {
  locale: string;
};
export default function LangSwitcher({ locale }: LangSwitcherProps) {
  const [lang, setLang] = useState(locale); // Initialize lang to the Locale symbol
  const { replaceLocale } = useLocaleRouter();

  // Handler for changing language
  const handlerChangeLang = (value: Lang) => {
    setLang(value);
    replaceLocale(value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* Trigger button for the dropdown menu */}
        <Button size="icon" variant="ghost">
          <LanguagesIcon className="size-5" /> {/* Language icon */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-12">
        {/* Dropdown language selection */}
        <DropdownMenuRadioGroup
          value={lang}
          onValueChange={(value: string) => handlerChangeLang(value as Lang)}
        >
          {languages.map((l) => {
            return (
              <DropdownMenuRadioItem key={l.value} value={l.value}>
                {l.label}
              </DropdownMenuRadioItem>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
