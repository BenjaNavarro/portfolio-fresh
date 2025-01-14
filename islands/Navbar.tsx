import Dark from "../components/Icons/Dark.tsx";

export default function Navbar() {
  const toggleTheme = () => {
    globalThis.document.documentElement.classList.toggle("dark");
  };

  const NavOptions = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      class={`flex w-full justify-between sticky  top-0 bottom-0 items-center p-4 transition-all duration-500 z-20`}
    >
      <h1 class="w-auto">TITLE</h1>
      <nav class="flex w-fit justify-end">
        <ul class="flex w-full gap-4 justify-end">
          {NavOptions.map((option) => (
            <li key={option.name}>
              <a href={option.href}>{option.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div class={`flex`}>
        <button
          class={`w-8 p-1 m-1 flex items-center justify-center`}
          aria-label="Toggle Dark Mode"
          onClick={toggleTheme}
        >
          <Dark class={`cursor-[inherit]`} />
        </button>
      </div>
    </header>
  );
}
