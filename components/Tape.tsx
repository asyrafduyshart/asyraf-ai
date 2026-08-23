type TapeProps = {
  className?: string;
};

/**
 * A strip of washi tape — pins shots and photos onto the page.
 * Position, size and rotation come from the call site.
 */
export default function Tape({ className = "" }: TapeProps) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute z-10 block rounded-[3px] border border-ochre/20 bg-ochre-wash/80 shadow-[0_1px_2px_rgba(42,36,32,0.06)] backdrop-blur-[1px] ${className}`.trim()}
    />
  );
}
