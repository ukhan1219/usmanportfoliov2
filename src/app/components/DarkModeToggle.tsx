"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import DarkMode from "../../../public/dark_mode_24dp_0C0C0C_FILL0_wght400_GRAD0_opsz24.png";
import LightMode from "../../../public/light_mode_24dp_F5F5F5_FILL0_wght400_GRAD0_opsz24.png";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.add(savedTheme);
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
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
