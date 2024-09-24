"use client";

import { useEffect, useState } from "react";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useAppTheme, { Theme } from "@/hooks/use-theme";

export function ThemeSwitcher({ }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useAppTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  interface THEME_OPTION {
    label: string;
    value: Theme;
  }

  const THEME_OPTIONS: THEME_OPTION[] = [
    {
      label: "Light",
      value: "light",
    },
    {
      label: "Dark",
      value: "dark",
    },
    {
      label: "System",
      value: "system",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant={"ghost"}>
          <SunIcon className="size-5 dark:hidden" />
          <MoonIcon className="hidden size-5 dark:block" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup
          value={theme}
          onValueChange={(value) => setTheme(value as Theme)}
        >
          {THEME_OPTIONS.map((it) => (
            <DropdownMenuRadioItem key={it.value} value={it.value}>
              {it.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
