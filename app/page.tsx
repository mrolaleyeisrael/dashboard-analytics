'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import MainPage from "./components/mainPage/mainPage";
import Navigation from "./components/navigation/navigation";
import { ThemeProvider, useTheme } from "next-themes";
import ProfileNavigation from "./components/profileNavigation/profileNavigation";
import MobileNav from "./components/MobileNav";
import { useStore, StoreState, useModalStore } from "./store/store";
import ProfileMenu from "./components/profileMenu";
import ModalComponent from "./components/ModalComponent";
import CustomModal from "./components/CustomModal";
export default function Home() {

  interface ModalStore {
    isOpen: boolean;
    toggleModal: () => void;
  }

  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { openMenu }: StoreState = useStore() as StoreState;
  const { isOpen, toggleModal } = useModalStore() as ModalStore;



  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }


  return (
    <ThemeProvider attribute="class"  >
      <main className=" relative w-full  ">

        {
          openMenu && <MobileNav />
        }
        <ProfileNavigation />
        <div className=" flex flex-row h-screen">
          <Navigation />
          <MainPage />
        </div>


        {
          isOpen &&
          <CustomModal />
        }


        {/* <ProfileMenu /> */}
      </main>
    </ThemeProvider>
  );
}
