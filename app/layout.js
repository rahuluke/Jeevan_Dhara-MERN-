"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { useRouter, usePathname } from "next/navigation";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  let pathname = usePathname()


  return (
    <html lang="en">
      <body className={inter.className}>
        {pathname === '/admin'? <Sidebar/> : <Navbar /> }
        {children}
      </body>
    </html>
  );
}
