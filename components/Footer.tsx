import { useContext } from "preact/hooks";
import Github from "./Icons/Github.tsx";
import Linkedin from "./Icons/Linkedin.tsx";
import { LanguageContext } from "../context/languageContext.tsx";

export default function Footer() {
  const { dictionary } = useContext(LanguageContext);
  return (
    <footer class="flex flex-col items-center w-full p-4 gap-2 bg-neutral-300 border-t border-neutral-400 dark:bg-neutral-700 dark:border-neutral-600">
      <a
        href="https://fresh.deno.dev"
        aria-label={`Fresh's website`} 
        title={`Fresh's website`}
        class={`flex items-center justify-center gap-2 hover:animate-bounce transition-all duration-300 ease-in-out`}>
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
      <span class={`text-center flex gap-1`}>
        <span class={`font-semibold`}>Benjamín Navarro</span><h4 class={`font-normal`}>{dictionary.footer.rights}</h4> © {new Date().getFullYear()}
      </span>
    </footer>
  );
}
