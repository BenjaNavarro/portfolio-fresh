import { useRef, MutableRef } from "preact/hooks";

import Navbar from "../islands/Navbar.tsx";
import About from "../islands/About.tsx";
import Start from "./Start.tsx";
import Experience from "./Experience.tsx";
import Footer from "../components/Footer.tsx";
import { CustomRef } from "../types.d.ts";
import Contact from "./Contact.tsx";

export default function MainLand() {
    const startRef = useRef<CustomRef | null>(null);
    const aboutRef = useRef<CustomRef | null>(null);
    const experienceRef = useRef<CustomRef | null>(null);
    const contactRef = useRef<CustomRef | null>(null);

  const handleScroll = function(e: Event) {
    const target = e.target as HTMLButtonElement;
    
    if(target?.name === 'start' && startRef.current) startRef?.current?.base?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    if(target?.name === 'about' && aboutRef.current) aboutRef?.current?.base?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    if(target?.name === 'contact' && contactRef.current) contactRef?.current?.base?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    // if(target?.name === 'projects') projectsRef?.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    if(target?.name === 'experience' && experienceRef.current) experienceRef?.current?.base?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  };

  return (
    <div class="w-full flex flex-col items-center min-h-screen">
      <Start ref={startRef as MutableRef<HTMLElement | null>} />
      <Navbar handleScroll={handleScroll}/>
      <About ref={aboutRef as MutableRef<HTMLElement | null>}/>
      <Experience ref={experienceRef as MutableRef<HTMLElement | null>}/>
      <Contact ref={contactRef as MutableRef<HTMLFormElement | null>}/>
      <Footer />
    </div>
  );
}
