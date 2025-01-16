import { useRef, useState } from 'preact/hooks';

import HamburguerBtn from "../components/HamburguerBtn.tsx";
import Dark from "../components/Icons/Dark.tsx";
import Light from "../components/Icons/Light.tsx";
import { useOutsideClickClose } from "../hooks/handleClickOutside.tsx";

declare interface ComponentProps {
  handleScroll: (e: Event) => void;
};

export default function Navbar({
  handleScroll,
}: ComponentProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [currentTheme, setCurrentTheme] = useState<boolean>(globalThis?.document?.documentElement?.classList?.contains("dark"));

  useOutsideClickClose(dialogRef);

  const toggleTheme = () => {
    globalThis.document.documentElement.classList.toggle("dark");
    setCurrentTheme(!currentTheme);
  };

  const NavOptions = [
    { label: "Home", name: "start" },
    { label: "About", name: "about" },
    { label: "Experience", name: "experience" },
    { label: "Contact", name: "contact" },
  ];

  return (
    <header
      class={`header`}
    >
      <h1 class="w-auto flex items-center">
        BENJA
        <span class={`ml-2 animate-wiggle text-xl`}>💻</span>
      </h1>
      <nav class="flex w-fit justify-end">
        <ul class="hidden md:flex w-full gap-4 justify-end">
          {NavOptions.map((option) => (
            <li key={option.label}>
              <button 
                name={option.name} 
                onClick={handleScroll}
              >{option.label}</button>
            </li>
          ))}
        </ul>
        <HamburguerBtn 
          toggleMenu={() => {
            console.log('🍋‍🟩', dialogRef?.current?.close, dialogRef?.current?.show, dialogRef?.current?.open);
            
            if(dialogRef?.current?.open) dialogRef.current?.close();
            else dialogRef?.current?.show();
          }}/>
      </nav>
      <dialog
        class={`p-2 rounded-lg bg-[var(--background-color)] z-[60] absolute top-16 -right-44 shadow-lg border border-neutral-400`}
        ref={dialogRef}
        aria-labelledby="navbar-hamburger"
      >
        <nav 
          class={`bg-inherit flex flex-col justify-center items-center`}
          id="navbar-hamburger"
        >
          <ul class="flex flex-col font-medium mt-4 gap-2">
            {NavOptions.map((option) => (
              <li key={option.label}>
                <button 
                  name={option.name} 
                  onClick={handleScroll}
                  class="w-full text-left text-[var(--text-color)] hover:bg-[var(--text-color)] hover:text-[var(--background-color)] p-2 rounded-lg"
                >{option.label}</button>
              </li>
            ))}
            <li>
              <button
                class="flex items-center justify-start w-full text-left text-[var(--text-color)] hover:bg-[var(--text-color)] hover:text-[var(--background-color)] p-2 rounded-lg"
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
            </li>
          </ul>
        </nav>
      </dialog>
      <div class="hidden md:flex">
        <button
          class="w-8 p-1 m-1 flex items-center justify-center"
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
      </div>
    </header>
  );
}
