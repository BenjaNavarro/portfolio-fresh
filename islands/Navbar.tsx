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
      class={`flex w-[99%] justify-between items-center sticky top-4 shadow-lg backdrop-filter backdrop-blur-lg bg-transparent p-4 z-20 mx-2 mt-4 rounded border-0 dark:border border-gray-50`}
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
