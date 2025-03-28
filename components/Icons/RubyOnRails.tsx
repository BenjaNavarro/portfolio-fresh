import { JSX } from "preact";

export default function RubyOnRails(props: JSX.HTMLAttributes<SVGSVGElement>) {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Ruby On Rails"
        viewBox="0 0 512 512"
        {...props}
    >
        <g fill="#c00">
            <path d="M98 402c34-163 125-282 321-288v15c-121 33-180 118-159 273z" />
            <path d="m274 359-4 27 30 13 1-27zM88 283l-13 36 34 10 13-35zm70-108-25 27 31 23 25-30zm92-66-27 19 21 24 28-18zm75-10 6 18 28-7-6-16zm34 70 13 20 16-15-7-16zm-39 27-17 18 23 27 12-19zm-37 78-8 25 31 18 1-27z" />
        </g>
    </svg>
  )
}
