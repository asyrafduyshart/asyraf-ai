type WordmarkProps = {
  className?: string;
};

/**
 * Typography-only asyraf.ai mark: serif name, ochre disc, compact sans "ai".
 * Size the name from the call site (font-size inherits). Wrap in a Link
 * with aria-label="asyraf.ai home" — add `group` on that Link for hover.
 */
export default function Wordmark({ className = "" }: WordmarkProps) {
  return (
    <span className={`inline-flex items-baseline text-ink ${className}`.trim()}>
      <span className="font-serif" style={{ letterSpacing: "-0.03em" }}>
        asyraf
      </span>
      <span className="sr-only">.</span>
      <span
        aria-hidden
        className="mx-[0.2em] inline-block h-[0.28em] w-[0.28em] shrink-0 translate-y-[-0.26em] rounded-full bg-ochre"
      />
      <span className="font-sans text-[0.72em] font-semibold tracking-wide text-ochre transition-colors duration-200 group-hover:text-ochre-deep">
        ai
      </span>
    </span>
  );
}
