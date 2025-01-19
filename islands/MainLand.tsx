import { useRef, MutableRef, useEffect } from "preact/hooks";

import Navbar from "../islands/Navbar.tsx";
import About from "../islands/About.tsx";
import Start from "./Start.tsx";
import Experience from "./Experience.tsx";
import Footer from "../components/Footer.tsx";
import { CustomRef } from "../types.d.ts";
import Contact from "./Contact.tsx";
import { LanguageProvider } from "../context/languageContext.tsx";
import Projects from "../components/Projects.tsx";
import Formation from "../components/Formation.tsx";

export default function MainLand() {
  const startRef = useRef<CustomRef | null>(null);
  const aboutRef = useRef<CustomRef | null>(null);
  const experienceRef = useRef<CustomRef | null>(null);
  const contactRef = useRef<CustomRef | null>(null);
  const projectsRef = useRef<CustomRef | null>(null);
  const formationRef = useRef<CustomRef | null>(null);

  const scrollOptions: ScrollIntoViewOptions = { behavior: "smooth", block: "center", inline: "nearest" } as const;

  const handleScroll = function(e: Event) {
    const target = e.target as HTMLButtonElement;
    
    if(target?.name === 'start' && startRef.current) startRef?.current?.base?.scrollIntoView(scrollOptions);
    if(target?.name === 'about' && aboutRef.current) aboutRef?.current?.base?.scrollIntoView(scrollOptions);
    if(target?.name === 'contact' && contactRef.current) contactRef?.current?.base?.scrollIntoView(scrollOptions);
    if(target?.name === 'projects') projectsRef?.current?.base?.scrollIntoView(scrollOptions);
    if(target?.name === 'experience' && experienceRef.current) experienceRef?.current?.base?.scrollIntoView(scrollOptions);
    if(target?.name === 'formation' && formationRef.current) formationRef?.current?.base?.scrollIntoView(scrollOptions);
  };

  useEffect(() => {
    if(globalThis.matchMedia("(prefers-color-scheme: dark)"))
      globalThis.document.documentElement.classList.toggle("dark");
  }, []);

  return (
    <LanguageProvider>
      <div class="w-full flex flex-col items-center min-h-screen">
        <Start ref={startRef as MutableRef<HTMLElement | null>} />
        <Navbar handleScroll={handleScroll}/>
        <About ref={aboutRef as MutableRef<HTMLElement | null>}/>
        <Experience ref={experienceRef as MutableRef<HTMLElement | null>}/>
        <Formation ref={formationRef as MutableRef<HTMLElement | null>}/>
        <Projects ref={projectsRef as MutableRef<HTMLElement | null>}/>
        <Contact ref={contactRef as MutableRef<HTMLFormElement | null>}/>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
