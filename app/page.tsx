'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import MainPage from "./components/mainPage/mainPage";
import Navigation from "./components/navigation/navigation";
import { ThemeProvider, useTheme } from "next-themes";
export default function Home() {

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }


  return (
    <ThemeProvider attribute="class"  >
      <main className="flex flex-row h-screen dark:bg-zinc-900 bg-white overflow-hidden relative ">
        <Navigation />
        <MainPage />
      </main>
    </ThemeProvider>
  );
}
