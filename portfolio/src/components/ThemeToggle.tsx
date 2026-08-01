import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import "../styles/ThemeToggle.css";

export default function ThemeToggle() {

  const {
    theme,
    toggleTheme,
  } = useTheme();

  return (

    <button

      className="theme-toggle"

      onClick={toggleTheme}

      aria-label="Toggle theme"

    >

      {
        theme === "light"

          ? <Moon size={18}/>

          : <Sun size={18}/>
      }

    </button>

  );

}