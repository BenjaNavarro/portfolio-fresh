import Dark from "../components/Icons/Dark.tsx";

declare interface ComponentProps {
  handleScroll: (e: Event) => void;
}

export default function Navbar({
  handleScroll,
}: ComponentProps) {

  const toggleTheme = () => {
    globalThis.document.documentElement.classList.toggle("dark");
  };

  const NavOptions = [
    { label: "Home", name: "start" },
    { label: "About", name: "about" },
    { label: "Contact", name: "experience" },
  ];

  return (
    <header
      class={`header fixed-header`}
    >
      <h1 class="w-auto">TITLE</h1>
      <nav class="flex w-fit justify-end">
        <ul class="flex w-full gap-4 justify-end">
          {NavOptions.map((option) => (
            <li key={option.label}>
              <button 
                name={option.name} 
                onClick={handleScroll}
              >{option.label}</button>
            </li>
          ))}
        </ul>
      </nav>
      <div class="flex">
        <button
          class="w-8 p-1 m-1 flex items-center justify-center"
          aria-label="Toggle Dark Mode"
          onClick={toggleTheme}
        >
          <Dark class="cursor-[inherit]" />
        </button>
      </div>
    </header>
  );
}
