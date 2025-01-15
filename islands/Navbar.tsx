import { useSignal } from '@preact/signals';
import { useState } from 'preact/hooks';

import HamburguerBtn from "../components/HamburguerBtn.tsx";
import Dark from "../components/Icons/Dark.tsx";
import Light from "../components/Icons/Light.tsx";

declare interface ComponentProps {
  handleScroll: (e: Event) => void;
}

export default function Navbar({
  handleScroll,
}: ComponentProps) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const currentTheme = useSignal(globalThis?.document?.documentElement?.classList?.contains("dark"));

  const toggleTheme = () => {
    globalThis.document.documentElement.classList.toggle("dark");
    currentTheme.value = !currentTheme.value;
  };

  const NavOptions = [
    { label: "Home", name: "start" },
    { label: "About", name: "about" },
    { label: "Contact", name: "experience" },
  ];

  return (
    <header
      class={`header`}
    >
      <h1 class="w-auto flex items-center">
        BENJA
        <span class={`ml-2 animate-wiggle`}>💻</span>
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
        <HamburguerBtn toggleMenu={() => setShowMenu(!showMenu)}/>
      </nav>
      <nav 
        class={`${!showMenu ? 'hidden': 'absolute top-16 right-0 mt-4 z-50'} w-[90%] md:hidden shadow-lg rounded-lg bg-[var(--background-color)]`}
        id="navbar-hamburger"
      >
        <ul class="flex flex-col font-medium mt-4">
          {NavOptions.map((option) => (
            <li key={option.label}>
              <button 
                name={option.name} 
                onClick={handleScroll}
                class="block py-2 px-3 rounded dark:hover:text-white"
              >{option.label}</button>
            </li>
          ))}
          <li>
            <button
              class="w-8 p-1 m-1 flex items-center justify-center"
              aria-label="Toggle Dark Mode"
              onClick={toggleTheme}
            >
              <Dark class="cursor-[inherit]" />
            </button>
          </li>
        </ul>
      </nav>
      <div class="hidden md:flex">
        <button
          class="w-8 p-1 m-1 flex items-center justify-center"
          aria-label="Toggle Dark Mode"
          onClick={toggleTheme}
        >
          {currentTheme.value &&
            <Dark class="cursor-[inherit]"/>
          }
          {!currentTheme.value &&
            <Light class="cursor-[inherit]"/>
          }
        </button>
      </div>
    </header>
  );
}
