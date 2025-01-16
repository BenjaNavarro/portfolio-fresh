import MenuIcon from "./Icons/MenuIcon.tsx";

declare interface ComponentProps{
    toggleMenu: () => void;
}

export default function HamburguerBtn({
    toggleMenu
}: ComponentProps) {
  return (
    <label 
        // onCheck={toggleMenu}
        data-collapse-toggle="navbar-hamburger" 
        for={`hm-checkbox`}
        class="md:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 active:animate-spin" 
        aria-controls="navbar-hamburger" 
        aria-expanded="false"
    >
      <input type={`checkbox`} class={`hidden`} id={`hm-checkbox`} onChange={toggleMenu}/>
      <span class="sr-only">Open main menu</span>
      <MenuIcon class="w-6 h-6 transition-[all_1s_0.1s] duration-1000 rotate-0 checked:rotate-180" />
    </label>
  );
}
