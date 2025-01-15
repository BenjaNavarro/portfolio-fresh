import { useRef, MutableRef } from "preact/hooks";

import Navbar from "../islands/Navbar.tsx";
import Start from "./Start.tsx";
import About from "../islands/About.tsx";
import Experience from "./Experience.tsx";
import Footer from "../components/Footer.tsx";
import { CustomRef } from "../types.d.ts";

export default function MainLand() {
    const startRef = useRef<CustomRef | null>(null);
    const aboutRef = useRef<CustomRef | null>(null);
    const experienceRef = useRef<CustomRef | null>(null);

  const handleScroll = function(e: Event) {
    const target = e.target as HTMLButtonElement;
    
    if(target?.name === 'start' && startRef.current) startRef?.current?.base?.scrollIntoView(true);
    if(target?.name === 'about' && aboutRef.current) aboutRef?.current?.base?.scrollIntoView(true);
    // if(target?.name === 'projects') projectsRef?.current?.scrollIntoView(true);
    if(target?.name === 'experience' && experienceRef.current) experienceRef?.current?.base?.scrollIntoView(true);
  };

  return (
    <div class="w-full flex flex-col min-h-screen">
      <Start ref={startRef as MutableRef<HTMLElement | null>} />
      <Navbar handleScroll={handleScroll}/>
      <About ref={aboutRef as MutableRef<HTMLElement | null>}/>
      <Experience ref={experienceRef as MutableRef<HTMLElement | null>}/>
      <Footer />
    </div>
  );
}
