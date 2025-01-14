import { useMemo } from "preact/hooks";
import Navbar from "../islands/Navbar.tsx";
import Start from "../components/Start.tsx";
import About from "../components/About.tsx";
import Experience from "../components/Experience.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <main class="w-full flex flex-col min-h-screen">
      <Navbar />
      <Start />
      <About />
      <Experience />
      <Footer />
    </main>
  );
}
