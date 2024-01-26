'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import MainPage from "./components/mainPage/mainPage";
import Navigation from "./components/navigation/navigation";
import { ThemeProvider, useTheme } from "next-themes";
import ProfileNavigation from "./components/profileNavigation/profileNavigation";
import MobileNav from "./components/MobileNav";
export default function Home() {

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }


  return (
    <ThemeProvider attribute="class"  >
      <main className=" relative w-full  ">
        <MobileNav />
        <ProfileNavigation />
        <div className=" flex flex-row h-screen">
          <Navigation />
          <MainPage />
        </div>

        <div className=" h-10 w-10 bg-white/30 bottom-0 absolute left-0 " >
          M
        </div>
      </main>
    </ThemeProvider>
  );
}
