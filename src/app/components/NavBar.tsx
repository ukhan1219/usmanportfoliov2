"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "daisyui";
import "./NavBar.css";

const languages = [
  { lang: "hello" },
  { lang: "ہیلو" },
  { lang: "مرحبا" },
  { lang: "こんにちは" },
  { lang: "안녕하세요" },
  { lang: "你好" },
  { lang: "xin chào" },
  { lang: "bonjour" },
  { lang: "ciao" },
  { lang: "привет" },
  { lang: "hola" },
];

const NavBar = () => {
  const [currentLang, setCurrentLang] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");
  const [dateTime, setDateTime] = useState({ date: "", time: "" });
  const pathname = usePathname();

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("fade-out");
      setTimeout(() => {
        setCurrentLang((prev) => (prev + 1) % languages.length);
        setFadeClass("fade-in");
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      const date = `${String(now.getDate()).padStart(2, "0")} ${String(
        now.getMonth() + 1
      ).padStart(2, "0")} ${now.getFullYear()}`;

      const time = `${String(now.getHours()).padStart(2, "0")}:${String(
        now.getMinutes()
      ).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}:${String(
        now.getMilliseconds()
      ).padStart(3, "0")}`;

      setDateTime({ date, time });
    };
    const clockInterval = setInterval(updateClock, 1);
    return () => clearInterval(clockInterval);
  }, []);

  return (
    <div className="navbar fixed top-0 w-full z-50 px-6 md:px-12 lg:px-24 py-6 md:py-8">
      <div className="navbar-start flex flex-col items-start">
        {pathname === "/" ? (
          <span
            className={`text-lg md:text-xl lg:text-2xl font-light ${fadeClass}`}
          >
            {languages[currentLang].lang}
          </span>
        ) : (
          <Link
            href="/"
            className="text-sm md:text-base lg:text-xl font-light"
          >
            {"<"}home
          </Link>
        )}
        <span
          className="text-sm md:sm lg:sm font-extralight mt-2"
          style={{ minWidth: "220px", textAlign: "left" }}
        >
          {dateTime.date} | {dateTime.time}
        </span>
      </div>
      <div className="navbar-end">
        <Link
          href="/USMAN_KHAN_RESUME.pdf"
          className="text-sm md:text-base lg:text-lg font-light px-4"
        >
          resume{">"}
        </Link>

        {pathname === "/contact" ? null : (

          <Link
            href="/contact"
            className="text-sm md:text-base lg:text-lg font-light"
          >
            contact{">"}
          </Link>

        )}
      </div>
    </div>
  );
};

export default NavBar;
