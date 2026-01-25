import { ComponentProps } from "react";

export function BagIcon({ ...props }: ComponentProps<"svg">) {
  return (
    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.2937 29.5627H21.772C25.9881 29.5627 29.2227 28.0397 28.304 21.9105L27.2342 13.6038C26.6678 10.5455 24.7171 9.375 23.0053 9.375H9.00993C7.27309 9.375 5.43557 10.6336 4.78109 13.6038L3.7113 21.9105C2.93099 27.3476 6.07744 29.5627 10.2937 29.5627Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.1047 9.07289C10.1047 5.79204 12.7644 3.13238 16.0452 3.13238C17.6251 3.12568 19.1425 3.7486 20.2621 4.86339C21.3816 5.97817 22.0109 7.493 22.0109 9.07289" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.9675 15.2651H12.0305" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.9846 15.2651H20.0476" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}


export function ArrowLeftIcon({ ...props }: ComponentProps<"svg">) {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5.90283 17.0479H26.7362" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.3054 25.4149L5.90259 17.0482L14.3054 8.68018" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}


export function TrashCanIcon({ ...props }: ComponentProps<"svg">) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M20.7743 10.1783C20.7743 10.1783 20.1906 17.4185 19.8519 20.4682C19.6907 21.9249 18.7909 22.7784 17.3171 22.8053C14.5124 22.8558 11.7045 22.859 8.90092 22.7999C7.483 22.7709 6.59827 21.9066 6.44025 20.4758C6.09947 17.3991 5.51897 10.1783 5.51897 10.1783M22.2613 6.70773H4.03149M18.7487 6.70771C17.9048 6.70771 17.1781 6.11108 17.0126 5.28441L16.7513 3.97721C16.5901 3.37413 16.044 2.95703 15.4216 2.95703H10.8711C10.2487 2.95703 9.70255 3.37413 9.5413 3.97721L9.28008 5.28441C9.11453 6.11108 8.38783 6.70771 7.54395 6.70771" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function MinusIcon({ ...props }: ComponentProps<"svg">) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M3.22925 8H12.5626" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PlusIcon({ ...props }: ComponentProps<"svg">) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.62492 8.37516V12.6665C7.62492 12.8736 7.79281 13.0415 7.99992 13.0415C8.20703 13.0415 8.37492 12.8736 8.37492 12.6665V8.37516H12.6663C12.8734 8.37516 13.0413 8.20727 13.0413 8.00016C13.0413 7.79306 12.8734 7.62516 12.6663 7.62516H8.37492V3.3335C8.37492 3.12639 8.20703 2.9585 7.99992 2.9585C7.79281 2.9585 7.62492 3.12639 7.62492 3.3335V7.62516H3.33325C3.12615 7.62516 2.95825 7.79306 2.95825 8.00016C2.95825 8.20727 3.12615 8.37516 3.33325 8.37516H7.62492Z" stroke="currentColor" />
    </svg>
  )
}