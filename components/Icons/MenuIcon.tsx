import { JSX } from "preact";

export default function MenuIcon(props: JSX.HTMLAttributes<SVGSVGElement>) {
  return (
    <svg
        height={800}
        width={800}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        {...props}
    >
        <path 
            d="M186.2 139.6h139.6V0H186.2zM372.4 0v139.6H512V0zM0 139.6h139.6V0H0zm186.2 186.2h139.6V186.2H186.2zm186.2 0H512V186.2H372.4zM0 325.8h139.6V186.2H0zM186.2 512h139.6V372.4H186.2zm186.2 0H512V372.4H372.4zM0 512h139.6V372.4H0z" 
            fill={`currentColor`}
        />
    </svg>
  )
}
