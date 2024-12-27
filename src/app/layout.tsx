import DarkModeToggle from "./components/DarkModeToggle";
import NavBar from "./components/NavBar";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Usman Khan",
  description: "Usman Khan's Portfolio",
};

const themeScript = `
(function() {
  try {
    const storedTheme = localStorage.getItem('theme');
    // If there's a stored theme, use it
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (storedTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      // If not stored, fall back to system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.add('light');
      }
    }
  } catch (e) {
    // If all else fails, default to 'light'
    document.documentElement.classList.add('light');
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-manrope antialiased">
        <NavBar />
        {children}
        <DarkModeToggle />
      </body>
    </html>
  );
}
