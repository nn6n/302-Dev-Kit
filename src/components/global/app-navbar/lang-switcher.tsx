"use client";

import * as React from "react";

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
import { APP_CONSTANTS } from "@/constants";
import Locale, { Lang, changeLang } from "@/locales";

// Import locale utilities

export default function LangSwitcher() {
  const [lang, setLang] = React.useState(Locale.Symbol); // Initialize lang to the Locale symbol

  // Handler for changing language
  const handlerChangeLang = (value: Lang) => {
    setLang(value);
    changeLang(value); // Update locale
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
          {/* Map language options to menu items */}
          {APP_CONSTANTS.appLangOption.map((option) => (
            <DropdownMenuRadioItem key={option.value} value={option.value}>
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
