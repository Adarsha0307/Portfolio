const SUPPORT_URL = 'https://buymeacoffee.com/adarshabu'

export default function SupportBlock() {
  return (
    <a
      href={SUPPORT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Buy me a coffee — opens in a new tab"
      className="fixed bottom-4 right-4 z-40 inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full border border-black/20 bg-[#FFDD00] px-4 font-sans text-sm font-semibold text-black shadow-[0_12px_35px_rgba(0,0,0,0.28)] transition-colors duration-200 hover:bg-[#f3cf00] focus-visible:outline-2 focus-visible:outline-gold sm:bottom-6 sm:right-6 sm:px-5"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
        <path d="M5 8h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5V8Z" />
        <path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16M7 21h12M8 4c0 1 1 1 1 2M12 4c0 1 1 1 1 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>Buy me a coffee</span>
    </a>
  )
}
