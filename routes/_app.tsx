import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="generator" content="Fresh" />
        <title>Benjamín Navarro</title>
        <link rel="stylesheet" href="/styles.css" />
        <script dangerouslySetInnerHTML={{
          __html: `
            try {
              const storedTheme = localStorage.getItem('theme');
              if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              }
            } catch (e) {}
          `
        }} />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
