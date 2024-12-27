"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import DarkMode from "../../../public/dark_mode_24dp_0C0C0C_FILL0_wght400_GRAD0_opsz24.png";
import LightMode from "../../../public/light_mode_24dp_F5F5F5_FILL0_wght400_GRAD0_opsz24.png";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as
      | "dark"
      | "light"
      | null;
    if (storedTheme === "dark" || storedTheme === "light") {
      setTheme(storedTheme);
    } else {
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove(
      theme === "dark" ? "light" : "dark",
    );

    document.documentElement.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 p-3 bg-gray-800 dark:bg-gray-200 rounded-full shadow-lg"
    >
      {theme === "light" ? (
        <Image src={LightMode} alt="Light Mode Icon" width={24} height={24} />
      ) : (
        <Image src={DarkMode} alt="Dark Mode Icon" width={24} height={24} />
      )}
    </button>
  );
}
