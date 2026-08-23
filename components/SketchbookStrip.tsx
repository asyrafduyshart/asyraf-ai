"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Tape from "./Tape";

/** Real post on blog.asyraf.ai — the prompt guide these six posters come from. */
const POSTER_GUIDE_URL = "https://blog.asyraf.ai/prompt-guide-poster-travel-flat-vector";

type SketchPage = { src: string; label: string };

const sketchPages: SketchPage[] = [
  { src: "/sketchbook/jakarta.png", label: "Jakarta" },
  { src: "/sketchbook/yogyakarta.png", label: "Yogyakarta" },
  { src: "/sketchbook/ubud.png", label: "Ubud" },
  { src: "/sketchbook/bangkok.png", label: "Bangkok" },
  { src: "/sketchbook/kuala-lumpur.png", label: "Kuala Lumpur" },
  { src: "/sketchbook/ho-chi-minh.png", label: "Ho Chi Minh" },
];

export default function SketchbookStrip() {
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);
  const wasOpenRef = useRef(false);

  const open = useCallback((index: number, trigger: HTMLElement) => {
    lastTriggerRef.current = trigger;
    setActive(index);
  }, []);

  const close = useCallback(() => {
    setActive(null);
    lastTriggerRef.current?.focus();
    lastTriggerRef.current = null;
  }, []);

  const step = useCallback((delta: number) => {
    setActive((current) =>
      current === null
        ? current
        : (current + delta + sketchPages.length) % sketchPages.length
    );
  }, []);

  // While open: lock page scroll, close on Escape, flip pages with arrows,
  // and keep Tab focus inside the lightbox.
  useEffect(() => {
    if (active === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      } else if (event.key === "ArrowRight") {
        step(1);
      } else if (event.key === "ArrowLeft") {
        step(-1);
      } else if (event.key === "Tab") {
        const dialog = dialogRef.current;
        if (!dialog) return;
        const focusables = dialog.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled])"
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [active, close, step]);

  // Focus the close button when the lightbox first opens (not on page flips).
  useEffect(() => {
    if (active !== null && !wasOpenRef.current) {
      closeButtonRef.current?.focus();
    }
    wasOpenRef.current = active !== null;
  }, [active]);

  const page = active === null ? null : sketchPages[active];

  return (
    <>
      <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 pt-2 scroll-pl-6 md:-mx-8 md:px-8 md:scroll-pl-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [mask-image:linear-gradient(to_right,transparent,black_1.5rem,black_calc(100%_-_1.5rem),transparent)]">
        {sketchPages.map((sketch, index) => (
          <button
            key={sketch.label}
            type="button"
            aria-haspopup="dialog"
            aria-label={`Open sketchbook page — ${sketch.label}`}
            onClick={(event) => open(index, event.currentTarget)}
            className="group card-quiet w-[11.5rem] shrink-0 snap-start overflow-hidden text-left hover:shadow-page focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ochre/60 motion-safe:transition motion-safe:duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:-rotate-[1.1deg] sm:w-[13rem]"
          >
            <span className="relative block aspect-[3/4] bg-ochre-wash/30">
              <Image
                src={sketch.src}
                alt={`Sketchbook — ${sketch.label}`}
                fill
                className="object-cover"
                sizes="208px"
              />
            </span>
            <span className="flex items-baseline justify-between gap-2 px-3 py-2.5 font-sketch text-base text-ink-mute">
              {sketch.label}
              <span
                aria-hidden
                className="text-ink-faint transition-colors group-hover:text-ochre-deep"
              >
                ↗
              </span>
            </span>
          </button>
        ))}
      </div>

      {page && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-5 sm:p-8">
          <div
            aria-hidden
            onClick={close}
            className="absolute inset-0 bg-ink/50 backdrop-blur-[2px] motion-safe:animate-fade-in-soft"
          />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`Sketchbook page — ${page.label}`}
            className="relative w-full max-w-[min(26rem,calc((100dvh_-_9rem)*0.72))] motion-safe:animate-pop-in"
          >
            <div className="relative rotate-[0.4deg] rounded-2xl border border-ink-faint/60 bg-paper-card p-2.5 shadow-page">
              <Tape className="-top-2.5 left-8 h-5 w-16 -rotate-6" />
              <Tape className="-top-2.5 right-8 h-5 w-16 rotate-[4deg]" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-ochre-wash/30">
                <Image
                  key={page.src}
                  src={page.src}
                  alt={`Sketchbook — ${page.label}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 90vw, 416px"
                />
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 px-1.5 pb-1 pt-2.5">
                <p className="font-sketch text-lg text-ink">{page.label}</p>
                <a
                  href={POSTER_GUIDE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-ochre-deep underline decoration-ochre/30 underline-offset-4 transition hover:decoration-ochre"
                >
                  from the poster series →
                </a>
              </div>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              aria-label="Close lightbox"
              className="absolute -right-2.5 -top-2.5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-ink-faint/60 bg-paper-card text-lg leading-none text-ink shadow-card transition hover:border-ochre/50 hover:text-ochre-deep"
            >
              ×
            </button>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous page"
              className="absolute -left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink-faint/60 bg-paper-card text-ink shadow-card transition hover:border-ochre/50 hover:text-ochre-deep"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next page"
              className="absolute -right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-ink-faint/60 bg-paper-card text-ink shadow-card transition hover:border-ochre/50 hover:text-ochre-deep"
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
