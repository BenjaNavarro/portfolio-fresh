import MenuIcon from "./Icons/MenuIcon.tsx";

declare interface ComponentProps{
    toggleMenu: () => void;
}

export default function HamburguerBtn({
    toggleMenu
}: ComponentProps) {
  return (
    <button 
        onClick={toggleMenu}
        data-collapse-toggle="navbar-hamburger" 
        type="button" 
        class="md:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600" 
        aria-controls="navbar-hamburger" 
        aria-expanded="false"
    >
      <span class="sr-only">Open main menu</span>
      <MenuIcon class="w-6 h-6" />
    </button>
  );
}
