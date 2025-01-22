import { useContext } from "preact/hooks";
import Github from "./Icons/Github.tsx";
import Linkedin from "./Icons/Linkedin.tsx";
import { LanguageContext } from "../context/languageContext.tsx";

export default function Footer() {
  const { dictionary } = useContext(LanguageContext);
  return (
    <footer class="flex flex-col items-center w-full p-4 gap-2 bg-neutral-300 border-t border-neutral-400 dark:bg-neutral-700 dark:border-neutral-600 dark:border-t-[var(--text-color)]">
      <a
        href="https://fresh.deno.dev"
        aria-label={`Fresh's website`} 
        title={`Fresh's website`}
        class={`flex items-center justify-center gap-2 hover:animate-gentle-tilt-move-shake transition-all duration-300 ease-in-out`}>
        <img
          class=""
          src="/logo.svg"
          width="72"
          height="72"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <p class="font-semibold">
          {dictionary.footer.$fresh}
        </p>
      </a>
      <div class={`flex w-full items-center justify-center gap-4`}>
        <a 
          href="https://github.com/BenjaNavarro"
          aria-label="Github"
          title={`Github`}
        >
          <Github class={`w-10 h-10 cursor-pointer hover:animate-bounce`}/>
        </a>
        <a 
          href={`https://www.linkedin.com/in/benjam%C3%ADn-nicol%C3%A1s-navarro-manr%C3%ADquez-68b720210/`}
          aria-label="Linkedin"
          title={`Linkedin`}
        >
          <Linkedin class={`w-8 h-8 cursor-pointer hover:animate-bounce`}/>
        </a>
      </div>
      <span class={`text-center flex flex-col gap-1`}>
        <h2 class={`font-semibold`}>Benjamín Navarro</h2>
        <h3 class={`font-normal`}>
          {dictionary.footer.rights}
          <span class={`font-semibold`}> © {new Date().getFullYear()}</span>
        </h3>
      </span>
    </footer>
  );
}
