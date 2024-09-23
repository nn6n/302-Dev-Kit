"use client";

import { useEffect, useState } from "react";

import useSystemTheme from "@/hooks/use-system-theme";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Theme } from "@/hooks/use-system-theme";

export function ThemeSwitcher({ }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useSystemTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  interface THEME_OPTION {
    label: string,
    value: Theme,
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
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Theme</DropdownMenuTrigger>
      <DropdownMenuContent>
        {
          THEME_OPTIONS.map((it) => (
            <DropdownMenuItem key={it.value} onClick={() => { setTheme(it.value) }}>{it.label}</DropdownMenuItem>
          ))
        }
      </DropdownMenuContent>
    </DropdownMenu>

  );
}
