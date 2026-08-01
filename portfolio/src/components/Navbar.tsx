import { useEffect, useState } from "react";
import { useScrollSpy } from "../hooks/useScrollSpy";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  {
    name: "About",
    href: "about",
  },
  {
    name: "Skills",
    href: "skills",
  },
  {
    name: "Projects",
    href: "projects",
  },
];


export default function Navbar() {

  const [scrolled, setScrolled] =
    useState(false);


  const activeSection =
    useScrollSpy(
      navItems.map((item) => item.href)
    );


  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);


  return (
    <header
      className={`navbar ${
        scrolled ? "scrolled" : ""
      }`}
    >

      <div className="navbar-container">

        <a
          href="#"
          className="navbar-logo"
        >
          Moikka-Heippa
        </a>


        <nav>

          {navItems.map((item) => (

            <a
              key={item.href}
              href={`#${item.href}`}
              className={
                activeSection === item.href
                  ? "active"
                  : ""
              }
            >
              {item.name}
            </a>

          ))}

          <ThemeToggle/>

        </nav>

      </div>

    </header>
  );
}