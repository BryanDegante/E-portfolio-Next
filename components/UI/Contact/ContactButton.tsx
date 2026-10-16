import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ContactButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: ReactNode;
}

export default function ContactButton({
  label = 'Contact Me',
  icon,
  className = '',
  type = 'button',
  ...props
}: ContactButtonProps) {
  return (
    <button
      type={type}
      className={`
        cursor-pointer
        group inline-flex h-11.25 items-center justify-center gap-2
        rounded-full border border-transparent
        bg-linear-to-br from-primary-blue to-secondary-cyan
        px-5 text-sm font-semibold text-white
        shadow-[2px_2px_10px_rgba(0,0,0,0.2)]
        transition-all duration-300 ease-in-out
        hover:-translate-y-0.5
        hover:shadow-[2px_5px_15px_rgba(6,182,212,0.4)]
        active:translate-y-0
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-cyan
        focus-visible:ring-offset-2 focus-visible:ring-offset-section
        disabled:cursor-not-allowed disabled:opacity-50
        ${className}
      `}
      {...props}
    >
      <span
        aria-hidden="true"
        className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
      >
        {icon ?? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
        )}
      </span>

      <span>{label}</span>
    </button>
  );
}