"use client";

import { useEffect, useState } from "react";
import Link from "@/components/ui/Link";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsFixed(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = -50;
      const topPos = element.offsetTop + offset;
      window.scrollTo({
        top: topPos,
        behavior: "smooth",
      });
    }
    setIsActive(false);
  };

  return (
    <nav
      className={`fixed start-0 top-0 z-20 w-full bg-light-blue px-8 py-4 ${
        isFixed ? "shadow-md" : ""
      }`}
    >
      <div className="relative flex items-center justify-end md:justify-center">
        {isActive && (
          <div
            className="fixed inset-0 z-10 bg-black bg-opacity-50"
            onClick={toggleActiveClass}
          ></div>
        )}
        <ul
          className={`items-center justify-center gap-6 md:flex ${
            isActive
              ? "fixed inset-0 z-20 flex flex-col items-center justify-center bg-light-blue"
              : "hidden"
          }`}
        >
          <li>
            <Link
              className="cursor-pointer font-medium"
              onClick={() => scrollToSection("hero")}
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer font-medium"
              onClick={() => scrollToSection("about")}
            >
              Sobre mim
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer font-medium"
              onClick={() => scrollToSection("experience")}
            >
              Currículo
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer font-medium"
              onClick={() => scrollToSection("projects")}
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              className="cursor-pointer font-medium"
              onClick={() => scrollToSection("contact")}
            >
              Contato
            </Link>
          </li>
        </ul>
        <div
          className="z-30 cursor-pointer md:hidden"
          onClick={toggleActiveClass}
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 18L20 18"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 12L20 12"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}
