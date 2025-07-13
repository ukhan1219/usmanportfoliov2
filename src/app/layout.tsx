import DarkModeToggle from "./components/DarkModeToggle";
import NavBar from "./components/NavBar";

import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

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
    <html lang="en" className={manrope.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <NavBar />
        {children}
        <DarkModeToggle />
      </body>
    </html>
  );
}
