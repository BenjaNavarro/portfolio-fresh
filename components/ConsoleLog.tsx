export default function ConsoleLog() {
  return (
    <p class={`text-2xl flex bg-[#eeeeee] dark:bg-[#111111] select-none`}>
        <code>console<span>.<span>log</span></span>("</code>
        <div class="flex flex-col text-center animate-move">
            <h1 class="relative animate-white-out en">Hello World!</h1>
            <h1 class="relative animate-white-out es">¡Hola Mundo!</h1>
            <h1 class="relative animate-white-out de">Hallo Welt!</h1>
            <h1 class="relative animate-white-out it">Ciao Mondo!</h1>  
        </div>
        <code 
            class={`closure bg-inherit`}
        >");</code>
    </p>
  )
}
