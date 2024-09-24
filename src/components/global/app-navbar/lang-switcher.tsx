"use client";

import * as React from "react";

import { LanguagesIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Locale, { ALL_LANG_OPTIONS, changeLang } from "@/locales";

export function LangSwitcher() {
  const [lang, setLang] = React.useState("zh");

  React.useEffect(() => {
    setLang(Locale.Symbol);
  }, []);

  const handlerChangeLang = (value: string) => {
    setLang(value);
    changeLang(value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant={"ghost"}>
          <LanguagesIcon className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-12">
        <DropdownMenuLabel className="hidden"></DropdownMenuLabel>
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuRadioGroup value={lang} onValueChange={handlerChangeLang}>
          {ALL_LANG_OPTIONS.map((it) => (
            <DropdownMenuRadioItem key={it.value} value={it.value}>
              {it.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
