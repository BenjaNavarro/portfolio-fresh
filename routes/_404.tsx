import { Head } from "$fresh/runtime.ts";
import Button from "../islands/404Button.tsx";

export default function Error404() {

  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="flex flex-col w-full justify-center items-center h-screen max-h-screen bg-primary px-32 gap-20">
        <h1 class={`text-5xl text-left w-full leading-loose`}>
          Aquello que buscas no existe, pero lo puedes encontrar dentro de tí.
        </h1>
        <Button/>
      </div>
    </>
  );
}
