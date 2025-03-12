import { useContext, useRef, useState } from 'preact/hooks';

import HamburguerBtn from "../components/HamburguerBtn.tsx";
import Dark from "../components/Icons/Dark.tsx";
import Light from "../components/Icons/Light.tsx";
import { useOutsideClickClose } from "../hooks/handleClickOutside.tsx";
import { LanguageContext } from "../context/languageContext.tsx";
import Language from "../components/Icons/Language.tsx";

declare interface ComponentProps {
  handleScroll: (e: Event) => void;
};

export default function Navbar({
  handleScroll,
}: ComponentProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const { language, setLanguage, dictionary } = useContext(LanguageContext);
  const [currentTheme, setCurrentTheme] = useState<boolean>(globalThis?.document?.documentElement?.classList?.contains("dark"));

  useOutsideClickClose(dialogRef);

  const toggleTheme = () => {
    globalThis.document.documentElement.classList.toggle("dark");
    setCurrentTheme(!currentTheme);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
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
              <button 
                type={`button`}
                title={option.label}
                name={option.name} 
                onClick={handleScroll}
              >{option.label}</button>
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
                <button 
                  type={`button`}
                  title={option.label}
                  name={option.name} 
                  onClick={handleScroll}
                  class="w-full text-left text-[var(--text-color)] hover:bg-[var(--text-color)] hover:text-[var(--background-color)] p-2 rounded-lg"
                >{option.label}</button>
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
