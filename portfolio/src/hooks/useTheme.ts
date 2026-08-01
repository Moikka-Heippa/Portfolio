import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {

  const getInitialTheme = (): Theme => {

    const saved =
      localStorage.getItem("theme") as Theme | null;

    if (saved) return saved;

    return window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] =
    useState<Theme>(getInitialTheme);

  useEffect(() => {

    document.documentElement.dataset.theme =
      theme;

    localStorage.setItem(
      "theme",
      theme
    );

  }, [theme]);

  const toggleTheme = () => {

    setTheme((prev) =>
      prev === "light"
        ? "dark"
        : "light"
    );

  };

  return {
    theme,
    toggleTheme,
  };
}