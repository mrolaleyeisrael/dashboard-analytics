import Image from "next/image";
import MainPage from "./components/mainPage/mainPage";
import Navigation from "./components/navigation/navigation";
export default function Home() {
  return (
    <main className="flex flex-row h-screen bg-white overflow-hidden relative ">
      <Navigation />
      <MainPage />
    </main>
  );
}
