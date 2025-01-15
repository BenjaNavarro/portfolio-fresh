import Github from "./Icons/Github.tsx";
import Linkedin from "./Icons/Linkedin.tsx";

export default function Footer() {
  return (
    <footer class="flex flex-col items-center w-full p-4">
      <div class={`flex w-full items-center justify-center`}>
        <img
          class=""
          src="/logo.svg"
          width="64"
          height="64"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <p class="font-semibold">
          Made with fresh
        </p>
      </div>
      <div class={`flex w-full items-center justify-center gap-4`}>
        <a 
          href="https://github.com/BenjaNavarro"
          aria-label="Github"
        >
          <Github class={`w-6 h-6`}/>
        </a>
        <a 
          href={`https://www.linkedin.com/in/benjam%C3%ADn-nicol%C3%A1s-navarro-manr%C3%ADquez-68b720210/`}
          aria-label="Linkedin"
        >
          <Linkedin class={`w-6 h-6`}/>
        </a>
      </div>
    </footer>
  );
}
