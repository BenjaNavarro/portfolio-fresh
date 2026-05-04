import { useRef, useState, useEffect } from 'preact/hooks';

import HamburguerBtn from "../components/HamburguerBtn.tsx";
import Dark from "../components/Icons/Dark.tsx";
import Light from "../components/Icons/Light.tsx";
import { useOutsideClickClose } from "../hooks/handleClickOutside.tsx";
import Language from "../components/Icons/Language.tsx";
import { Dictionary, LangType } from "../types.d.ts";

export default function Navbar({ dictionary, language }: { dictionary: Dictionary; language: LangType }) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  // Iniciamos en falso para evitar discrepancias de SSR
  const [currentTheme, setCurrentTheme] = useState<boolean>(false);

  useOutsideClickClose(dialogRef);

  useEffect(() => {
    // Revisamos primero si hay un tema guardado manualmente
    const storedTheme = globalThis.localStorage?.getItem("theme");
    const prefersDark = globalThis.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    
    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      globalThis.document.documentElement.classList.add("dark");
      setCurrentTheme(true);
    } else {
      globalThis.document.documentElement.classList.remove("dark");
      setCurrentTheme(false);
    }
  }, []);

  const toggleTheme = () => {
    const isDark = globalThis.document.documentElement.classList.toggle("dark");
    setCurrentTheme(isDark);
    globalThis.localStorage?.setItem("theme", isDark ? "dark" : "light");
  };

  const toggleLanguage = () => {
    // Guardamos la preferencia en una cookie para que _middleware.ts la lea y recargamos
    document.cookie = `lang=${language === "en" ? "es" : "en"}; path=/`;
    globalThis.location.reload();
  };

  return (
    <header
      class={`header`}
    >
      <h1 class="lg:hidden w-auto flex items-center">
        BENJA
        <span class={`ml-2 animate-wiggle text-xl`}>💻</span>
      </h1>
      <nav class="flex w-fit md:w-full justify-end lg:justify-center">
        <ul class="hidden lg:flex w-full gap-6 justify-start items-center">
          {dictionary.navbar.NavOptions.map((option) => (
            <li 
              key={option.label}
              class={`
                hover:scale-105 hover:font-semibold dark:hover:border-b dark:border-[var(--text-color)] 
                transition-all ease-in duration-300 hover:before:content-["..."] before:transition-all
              `}
            >
            <a 
                title={option.label}
              href={`#${option.name}`}
            >{option.label}</a>
            </li>
          ))}
        </ul>
        <HamburguerBtn 
          toggleMenu={() => {
            if(dialogRef?.current?.open){
              dialogRef.current?.close();
            } else dialogRef?.current?.show();
          }}/>
      </nav>
      <dialog
        class={`p-2 rounded-lg bg-[var(--background-color)] z-[60] absolute top-20 w-[99%] shadow-lg border border-neutral-400`}
        ref={dialogRef}
        aria-labelledby="navbar-hamburger"
      >
        <nav 
          class={`bg-inherit flex flex-col justify-center items-center w-full`}
          id="navbar-hamburger"
        >
          <ul class="flex flex-col font-medium mt-4 gap-2">
            {dictionary.navbar.NavOptions.map((option) => (
              <li key={option.label}>
            <a 
                  title={option.label}
              href={`#${option.name}`} 
              onClick={() => dialogRef.current?.close()}
              class="block w-full text-left text-[var(--text-color)] hover:bg-[var(--text-color)] hover:text-[var(--background-color)] p-2 rounded-lg"
            >{option.label}</a>
              </li>
            ))}
            <li>
              <div class={`flex items-center`}>
                <button
                  type={`button`}
                  title={dictionary.navbar.theme}
                  class="flex items-center justify-start w-auto text-left text-[var(--text-color)] hover:bg-[var(--text-color)] hover:text-[var(--background-color)] p-2 rounded-lg"
                  aria-label="Toggle Dark Mode"
                  onClick={toggleTheme}
                >
                  {currentTheme &&
                    <Dark class="cursor-[inherit] w-6 h-6"/>
                  }
                  {!currentTheme &&
                    <Light class="cursor-[inherit] w-6 h-6"/>
                  }
                </button>
                <button
                  type={`button`}
                  title={dictionary.navbar.lang}
                  class="flex items-center justify-start w-auto text-left text-[var(--text-color)] hover:bg-[var(--text-color)] hover:text-[var(--background-color)] p-2 rounded-lg"
                  aria-label="Toggle Language"
                  onClick={toggleLanguage}
                >
                  <Language class={`cursor-[inherit] w-4 h-4`}/>
                  {language.toUpperCase()}
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </dialog>
      <div class="hidden md:flex items-center gap-2">
        <button 
          type={`button`}
          class={`flex items-center p-1 gap-1 font-semibold`}
          onClick={toggleLanguage}
          title={dictionary.navbar.lang}
        >
          <Language class={`cursor-[inherit] w-4 h-4`}/>
          {language.toUpperCase()}
        </button>
        <button
          type={`button`}
          class="w-8 p-1 m-1 flex items-center justify-center"
          aria-label={dictionary.navbar.theme}
          title={dictionary.navbar.theme}
          onClick={toggleTheme}
        >
          {currentTheme &&
            <Dark class="cursor-[inherit] w-6 h-6"/>
          }
          {!currentTheme &&
            <Light class="cursor-[inherit] w-6 h-6"/>
          }
        </button>
      </div>
    </header>
  );
}
