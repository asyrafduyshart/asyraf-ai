type SketchUnderlineProps = {
  className?: string;
};

/**
 * Hand-drawn ink underline. Inside a `<Reveal>` it draws itself in
 * (`.sketch-stroke` + `drawIn` in globals.css) when the section scrolls
 * into view; without JS or with reduced motion it simply sits there, drawn.
 */
export default function SketchUnderline({ className = "" }: SketchUnderlineProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 220 12"
      fill="none"
      preserveAspectRatio="none"
      className={`h-3 w-40 text-ochre ${className}`.trim()}
    >
      <path
        className="sketch-stroke"
        d="M3 8.5C38 4.5 72 3.5 106 5.5C140 7.5 176 8 217 4.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        pathLength={240}
      />
    </svg>
  );
}
