export default function ConsoleLog() {
  return (
    <p class={`text-xl sm:text-2xl flex bg-[#eeeeee] dark:bg-[#111111] select-none`}>
        <code>console<span>.<span>log</span></span>("</code>
        <div class="flex flex-col text-center animate-move-sm md:animate-move text-sm sm:text-base">
            <h1 class="relative animate-white-out">Hello World!</h1>
            <h1 class="relative animate-white-out">¡Hola Mundo!</h1>
            <h1 class="relative animate-white-out">Hallo Welt!</h1>
            <h1 class="relative animate-white-out">Ciao Mondo!</h1>  
        </div>
        <code 
            class={`closure bg-inherit`}
        >");</code>
    </p>
  )
}
