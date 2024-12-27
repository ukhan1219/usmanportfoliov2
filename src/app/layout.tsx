import type { Metadata } from "next";
import "./globals.css";
import DarkModeToggle from "./components/DarkModeToggle"; 
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "Usman Khan",
  description: "Usman Khan's Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-manrope antialiased">
        <NavBar />
        {children}
        <DarkModeToggle />
      </body>
    </html>
  );
}