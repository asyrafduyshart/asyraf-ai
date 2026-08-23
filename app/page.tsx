import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import Reveal from "@/components/Reveal";
import SketchUnderline from "@/components/SketchUnderline";
import Tape from "@/components/Tape";
import Wordmark from "@/components/Wordmark";

const lanes = [
  { title: "AI", note: "Tools that amplify judgment — not replace it." },
  { title: "Vibe coding", note: "Ship the feeling first. Clean it up after." },
  { title: "Build in public", note: "Share the messy middle, not just the launch." },
  { title: "Startup Indonesia", note: "From Jakarta, for operators who still touch the work." },
];

const navAnchors = [
  { href: "#about", label: "About" },
  { href: "#building", label: "Building" },
  { href: "#lanes", label: "Lanes" },
  { href: "#writing", label: "Writing" },
];

type Shot = { src: string; alt: string };

type RosterItem = {
  name: string;
  lane: string;
  href?: string;
  domain?: string;
  badge?: string;
};

type Project = {
  index: string;
  name: string;
  subline: string;
  tag: string;
  href: string;
  domain: string;
  primary: Shot;
  secondary: Shot;
  caption: string;
  body: string[];
  roster?: RosterItem[];
  rosterLabel?: string;
  postscript?: string;
  colophon: string;
};

const projects: Project[] = [
  {
    index: "entry 01",
    name: "jualan.ai",
    subline: "by PT Solusi Bagi Bangsa",
    tag: "Building",
    href: "https://jualan.ai",
    domain: "jualan.ai",
    primary: {
      src: "/shots/jualan-home.png",
      alt: "jualan.ai homepage — satu platform untuk semua solusi penjualan",
    },
    secondary: {
      src: "/shots/jualan-product.png",
      alt: "jualan.ai design toko — build a store website without coding",
    },
    caption: "the homepage, and the no-code store builder",
    body: [
      "One platform for the whole selling operation — produk, pesanan, pembayaran, pengiriman, pelanggan — plus an AI copilot that answers in Bahasa Indonesia.",
      "Sellers build the storefront without code: pick a template, change it by chat, put it on their own domain. And it minds the money — laba, arus kas, HPP.",
      "The unglamorous parts of selling, which is exactly the point.",
    ],
    colophon: "Toko online AI untuk seller Indonesia · waitlist open.",
  },
  {
    index: "entry 02",
    name: "Imaji",
    subline: "imajinyata.com · Tekno Imaji Nyata",
    tag: "The studio",
    href: "https://imajinyata.com",
    domain: "imajinyata.com",
    primary: {
      src: "/shots/imajinyata-home.png",
      alt: "imajinyata.com homepage — reality is a canvas, Imajination is the ink",
    },
    secondary: {
      src: "/shots/imajinyata-products.png",
      alt: "imajinyata.com products — Hosteria, the best way to run your events",
    },
    caption: "the front door, and the product shelf",
    body: [
      "The AI-native studio I build with. Their words: \u201cAI is not a feature. It\u2019s our foundation.\u201d For once, a slogan that\u2019s also true of the codebase.",
    ],
    rosterLabel: "the product shelf",
    roster: [
      {
        name: "Hosteria",
        lane: "events",
        href: "https://hosteria.app",
        domain: "hosteria.app",
        badge: "New",
      },
      {
        name: "Jualan.ai",
        lane: "commerce",
        href: "https://jualan.ai",
        domain: "jualan.ai",
      },
      {
        name: "Saji",
        lane: "F&B",
        href: "https://saji.site",
        domain: "saji.site",
      },
      {
        name: "Skobar",
        lane: "coming soon",
      },
    ],
    postscript:
      "All of it on an in-house suite with names like a family gathering: Biya, Gede, Prasa, Arum, Yona, Julia.",
    colophon: "Runs on Cloudflare · KrakenD · Ornith · GitHub · Notion.",
  },
];

/** Real posts on blog.asyraf.ai — titles, reading times and URLs verified. */
const fieldNotes = [
  {
    title: "Kenapa Banyak Orang Suka Hidup dalam \u2018Hard Mode\u2019",
    note: "Not because life is heavy — because we pick the punishing lane, then call it discipline. Self-roast, dibungkus essay.",
    href: "https://blog.asyraf.ai/kenapa-banyak-orang-main-hidup-di-hard-mode",
    meta: "essay · 9 menit · Bahasa Indonesia",
  },
  {
    title: "Prompt Guide: Poster Travel Flat-Vector",
    note: "One template, six cities — the exact prompts behind the sketchbook pages above. Ganti [CITY_NAME], keep the taste.",
    href: "https://blog.asyraf.ai/prompt-guide-poster-travel-flat-vector",
    meta: "prompt guide · 3 menit",
  },
  {
    title: "7 Bookmark X yang Layak Diingat",
    note: "Seven bookmarks on decisions, second brains, and agent harnesses — one line worth keeping from each.",
    href: "https://blog.asyraf.ai/7-bookmark-x-yang-layak-diingat",
    meta: "bookmark notes · 3 menit",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <JournalDivider
        src="/section-desk.png"
        alt="Watercolor sketch of a desk — lamp, open notebook, coffee"
        caption="back to the desk"
      />
      <Building />
      <Lanes />
      <JournalDivider
        src="/sketchbook/rubber-band.jpg"
        alt="Sketch of two hands stretching a rubber band to its limit"
        caption="stretched, not snapped"
        flip
      />
      <Writing />
      <Closing />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="mx-auto max-w-5xl px-6 pb-2 pt-7 md:px-8 md:pt-9">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          aria-label="asyraf.ai home"
          className="group text-2xl md:text-[1.7rem]"
        >
          <Wordmark />
        </Link>
        <nav
          aria-label="Primary"
          className="flex items-center gap-5 text-sm font-medium text-ink-soft md:gap-7"
        >
          {navAnchors.map((anchor) => (
            <a
              key={anchor.href}
              href={anchor.href}
              className="link-quiet hidden sm:inline"
            >
              {anchor.label}
            </a>
          ))}
          <a
            href="https://x.com/asyrafduyshart"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink-faint bg-paper-card px-3.5 py-1.5 text-ink transition hover:border-ochre/50 hover:text-ochre-deep"
          >
            Follow on X
          </a>
        </nav>
      </div>

      {/* Mobile: same index, written straight onto the paper. */}
      <nav
        aria-label="Sections"
        className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-dashed border-ink-faint/70 pt-3 text-sm font-medium text-ink-soft sm:hidden"
      >
        {navAnchors.map((anchor, index) => (
          <Fragment key={anchor.href}>
            {index > 0 && (
              <span aria-hidden className="text-ink-faint">
                ·
              </span>
            )}
            <a href={anchor.href} className="link-quiet">
              {anchor.label}
            </a>
          </Fragment>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 pb-12 pt-9 md:px-8 md:pb-16 md:pt-12">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-ink-faint/50 bg-paper-warm shadow-page">
        <div className="absolute inset-0">
          <Image
            src="/sketchbook/desk-notebook.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center opacity-90"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-paper-warm/55 via-paper-warm/70 to-paper-warm/88" />
        </div>

        <div className="relative z-10 flex min-h-[26rem] flex-col justify-center px-7 py-12 text-center sm:min-h-[30rem] sm:px-12 md:px-16 md:py-16">
          <p className="font-sketch text-xl text-ochre-deep opacity-0 animate-fade-in md:text-2xl">
            from Jakarta
          </p>
          <h1 className="mt-3 text-balance font-serif text-[2.75rem] leading-[1.05] tracking-tight text-ink opacity-0 animate-fade-up [animation-delay:80ms] sm:text-6xl md:text-7xl">
            Roast tools.
            <br />
            <span className="ink-underline">Ship anyway.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty font-sans text-lg leading-relaxed text-ink-soft opacity-0 animate-fade-up [animation-delay:160ms] md:text-xl">
            Asyraf Duyshart — designer, developer, building AI products with
            judgment still in the loop.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 opacity-0 animate-fade-up [animation-delay:240ms]">
            <a
              href="#building"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper-warm transition hover:bg-ochre-deep"
            >
              See what I&apos;m building
            </a>
            <a
              href="https://x.com/asyrafduyshart"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink/20 bg-paper-card/80 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ochre/40"
            >
              Follow on X
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-10 md:px-8 md:py-14">
      <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-14">
        <Reveal>
          <p className="font-sketch text-lg text-ochre-deep md:text-xl">A short note</p>
          <h2 className="mt-2 font-serif text-4xl tracking-tight text-ink md:text-5xl">
            About
          </h2>
          <SketchUnderline className="mt-2.5 w-28" />
          <div className="mt-5 space-y-4 text-pretty text-lg leading-relaxed text-ink-soft">
            <p>
              Roast tools. Ship anyway. Building{" "}
              <a
                href="https://jualan.ai"
                className="text-ink underline decoration-ochre/40 underline-offset-4 transition hover:decoration-ochre"
                target="_blank"
                rel="noopener noreferrer"
              >
                jualan.ai
              </a>{" "}
              with Imaji (
              <a
                href="https://imajinyata.com"
                className="text-ink underline decoration-ochre/40 underline-offset-4 transition hover:decoration-ochre"
                target="_blank"
                rel="noopener noreferrer"
              >
                imajinyata.com
              </a>
              ).
            </p>
            <p>
              AI won&apos;t save you from bad judgment. It only scales it. I care
              about the craft between the prompt and the product — design,
              code, and the quiet decision to ship.
            </p>
            <p className="text-base text-ink-mute">
              Designer + developer. Indo tech-uncle energy, editorial on the
              outside.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative rotate-[0.85deg]">
            <Tape className="-top-2.5 left-1/2 h-5 w-16 -translate-x-1/2 -rotate-2" />
            <div className="card-quiet overflow-hidden p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-ochre-wash">
                <Image
                  src="/about-sketch.png"
                  alt="Sketchbook woodcut portrait of Asyraf from blog.asyraf.ai"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 90vw, 360px"
                />
              </div>
            </div>
          </div>
          <p className="mt-3 text-center font-sketch text-base text-ink-mute">
            from the sketchbook — woodcut self-portrait
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/** A small photo taped between sections, like a snapshot in a journal margin. */
function JournalDivider({
  src,
  alt,
  caption,
  flip,
}: {
  src: string;
  alt: string;
  caption: string;
  flip?: boolean;
}) {
  return (
    <div className="mx-auto max-w-5xl px-6 md:px-8">
      <Reveal className="flex justify-center py-2">
        <figure className={`w-44 sm:w-52 ${flip ? "rotate-[1.25deg]" : "-rotate-[1.25deg]"}`}>
          <div className="relative rounded-lg border border-ink-faint/60 bg-paper-card p-1.5 shadow-card">
            <Tape
              className={`-top-2 left-1/2 h-4 w-14 -translate-x-1/2 ${
                flip ? "rotate-2" : "-rotate-2"
              }`}
            />
            <div className="relative aspect-[3/2] overflow-hidden rounded-md">
              <Image src={src} alt={alt} fill className="object-cover" sizes="208px" />
            </div>
          </div>
          <figcaption className="mt-1.5 text-center font-sketch text-sm text-ink-mute">
            {caption}
          </figcaption>
        </figure>
      </Reveal>
    </div>
  );
}

function ShotStack({
  primary,
  secondary,
  domain,
  caption,
  href,
  flip,
}: Pick<Project, "primary" | "secondary" | "domain" | "caption" | "href"> & {
  flip?: boolean;
}) {
  return (
    <figure>
      {/* Primary shot — a print taped straight onto the page. */}
      <div
        className={`relative rounded-2xl border border-ink-faint/60 bg-paper-card p-2 shadow-page ${
          flip ? "rotate-[0.5deg]" : "-rotate-[0.5deg]"
        }`}
      >
        <Tape className={`-top-2.5 left-7 h-5 w-16 ${flip ? "rotate-[4deg]" : "-rotate-6"}`} />
        <Tape className={`-top-2.5 right-7 h-5 w-16 ${flip ? "-rotate-3" : "rotate-[5deg]"}`} />
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${domain}`}
          className="group relative block aspect-[16/10] overflow-hidden rounded-xl bg-ochre-wash/40"
        >
          <Image
            src={primary.src}
            alt={primary.alt}
            fill
            className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-[1.035]"
            sizes="(max-width: 768px) 100vw, 560px"
          />
          <span aria-hidden className="absolute inset-0 rounded-xl ring-1 ring-inset ring-ink/5" />
        </a>
        <span
          className={`absolute -bottom-3 rounded-md border border-ink-faint/70 bg-paper-card px-2.5 py-0.5 font-sketch text-sm text-ink-mute shadow-card ${
            flip ? "right-6 rotate-[1.5deg]" : "left-6 -rotate-[1.5deg]"
          }`}
        >
          {domain}
        </span>
      </div>

      {/* Second shot, dropped on top like a photo taped into a journal. */}
      <div
        className={`relative z-10 -mt-12 w-[58%] sm:-mt-16 ${
          flip
            ? "mr-auto ml-3 -rotate-[1.5deg] sm:ml-5"
            : "ml-auto mr-3 rotate-[1.5deg] sm:mr-5"
        } motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:rotate-0`}
      >
        <div className="relative rounded-xl border border-ink-faint/60 bg-paper-card p-1.5 shadow-page">
          <Tape className="-top-2 left-1/2 h-4 w-14 -translate-x-1/2 -rotate-3" />
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
            <Image
              src={secondary.src}
              alt={secondary.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 58vw, 330px"
            />
          </div>
        </div>
      </div>

      <figcaption className="mt-4 text-center font-sketch text-base text-ink-mute">
        {caption}
      </figcaption>
    </figure>
  );
}

function Building() {
  return (
    <section id="building" className="mx-auto max-w-5xl px-6 py-14 md:px-8 md:py-20">
      <Reveal>
        <div className="mb-10 flex flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-sketch text-lg text-ochre-deep md:text-xl">On the desk</p>
            <h2 className="mt-2 font-serif text-4xl tracking-tight text-ink md:text-5xl">
              Building
            </h2>
            <SketchUnderline className="mt-2.5 w-32" />
          </div>
          <p className="max-w-sm text-pretty text-ink-soft">
            Three entries, kept honest — the store I&apos;m building, the studio
            I build it with, and one still in pencil. Screenshots straight from
            the sites.
          </p>
        </div>
      </Reveal>

      <div className="space-y-14 md:space-y-20">
        {projects.map((p, i) => (
          <Reveal key={p.name}>
            <article className="grid items-center gap-9 md:grid-cols-[1.05fr_0.95fr] md:gap-12">
              <div className={i % 2 === 1 ? "md:order-2" : undefined}>
                <ShotStack
                  primary={p.primary}
                  secondary={p.secondary}
                  domain={p.domain}
                  caption={p.caption}
                  href={p.href}
                  flip={i % 2 === 1}
                />
              </div>

              <div className={i % 2 === 1 ? "md:order-1" : undefined}>
                <p className="font-sketch text-base text-ochre-deep">{p.index}</p>
                <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">
                    {p.name}
                  </h3>
                  <span className="rounded-full bg-ochre-wash px-3 py-1 text-xs font-semibold tracking-wide text-ochre-deep">
                    {p.tag}
                  </span>
                </div>
                <p className="mt-1 text-sm text-ink-mute">{p.subline}</p>
                <div className="mt-4 space-y-3 text-pretty leading-relaxed text-ink-soft">
                  {p.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                {p.roster && (
                  <div className="mt-5">
                    <p className="font-sketch text-base text-ochre-deep">
                      {p.rosterLabel}
                    </p>
                    <ul className="mt-1 divide-y divide-dashed divide-ink-faint/60">
                      {p.roster.map((r) => (
                        <li
                          key={r.name}
                          className="flex flex-wrap items-baseline gap-x-2.5 py-2.5"
                        >
                          <span className="font-serif text-lg text-ink">
                            {r.name}
                          </span>
                          {r.badge && (
                            <span className="rounded-full bg-ochre-wash px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-ochre-deep">
                              {r.badge}
                            </span>
                          )}
                          <span className="text-sm text-ink-soft">
                            — {r.lane}
                          </span>
                          {r.href && r.domain && (
                            <a
                              href={r.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-auto text-sm text-ink-mute underline decoration-ochre/30 underline-offset-4 transition hover:text-ochre-deep hover:decoration-ochre"
                            >
                              {r.domain}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {p.postscript && (
                  <p className="mt-4 text-pretty leading-relaxed text-ink-soft">
                    {p.postscript}
                  </p>
                )}

                <p className="mt-4 border-t border-dashed border-ink-faint/70 pt-3 text-sm text-ink-mute">
                  {p.colophon}
                </p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ochre-deep transition hover:text-terracotta"
                >
                  Visit {p.domain}
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              </div>
            </article>
          </Reveal>
        ))}

        {/* Entry 03 — a plate kept blank on purpose until Skobar is real. */}
        <Reveal>
          <article className="grid items-center gap-9 rounded-[1.75rem] border-2 border-dashed border-ink-faint/80 bg-paper-soft/40 px-6 py-9 md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:px-10 md:py-10">
            <div>
              <div className="relative -rotate-[0.75deg] rounded-2xl border border-dashed border-ink-faint bg-paper-card/70 p-2">
                <Tape className="-top-2.5 left-7 h-5 w-16 -rotate-6" />
                <Tape className="-top-2.5 right-7 h-5 w-16 rotate-[5deg]" />
                <div className="flex aspect-[16/10] flex-col items-center justify-center gap-1.5 rounded-xl bg-[repeating-linear-gradient(-45deg,transparent,transparent_9px,rgba(196,184,171,0.16)_9px,rgba(196,184,171,0.16)_10px)] px-6 text-center">
                  <p className="font-sketch text-xl text-ink-mute">screenshot pending</p>
                  <p className="text-xs tracking-wide text-ink-mute">
                    no fake screenshots — it ships first
                  </p>
                </div>
              </div>
              <p className="mt-4 text-center font-sketch text-base text-ink-mute">
                a page kept blank on purpose
              </p>
            </div>

            <div>
              <p className="font-sketch text-base text-ochre-deep">entry 03</p>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-2">
                <h3 className="font-serif text-3xl tracking-tight text-ink md:text-4xl">
                  Skobar
                </h3>
                <span className="rounded-full border border-dashed border-ochre/60 px-3 py-1 text-xs font-semibold tracking-wide text-ochre-deep">
                  Coming soon
                </span>
              </div>
              <p className="mt-1 text-sm text-ink-mute">next off the Imaji shelf</p>
              <div className="mt-4 space-y-3 text-pretty leading-relaxed text-ink-soft">
                <p>
                  Still in pencil. The lines are being drawn at the studio, and
                  this page stays honest — no screenshots until there&apos;s
                  something real to point a camera at.
                </p>
              </div>
              <p className="mt-4 border-t border-dashed border-ink-faint/70 pt-3 text-sm text-ink-mute">
                Lane: coming soon · watch the shelf at{" "}
                <a
                  href="https://imajinyata.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-ochre/30 underline-offset-4 transition hover:text-ochre-deep hover:decoration-ochre"
                >
                  imajinyata.com
                </a>
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

function Lanes() {
  return (
    <section id="lanes" className="mx-auto max-w-5xl px-6 py-10 md:px-8 md:py-14">
      <Reveal>
        <div className="rounded-[1.75rem] border border-dashed border-ink-faint bg-paper-soft/60 px-7 py-10 md:px-12 md:py-12">
          <p className="font-sketch text-lg text-ochre-deep md:text-xl">
            Selected work / lanes
          </p>
          <h2 className="mt-2 font-serif text-4xl tracking-tight text-ink md:text-5xl">
            What I keep returning to
          </h2>
          <SketchUnderline className="mt-2.5 w-44" />
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {lanes.map((lane) => (
              <li key={lane.title} className="border-t border-ink-faint/80 pt-5">
                <h3 className="font-serif text-2xl text-ink">{lane.title}</h3>
                <p className="mt-2 text-pretty text-ink-soft">{lane.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

function Writing() {
  return (
    <section id="writing" className="mx-auto max-w-5xl px-6 py-10 md:px-8 md:py-14">
      <Reveal>
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-sketch text-lg text-ochre-deep md:text-xl">Field notes</p>
            <h2 className="mt-2 font-serif text-4xl tracking-tight text-ink md:text-5xl">
              Latest from the sketchbook
            </h2>
            <SketchUnderline className="mt-2.5 w-48" />
          </div>
          <a
            href="https://blog.asyraf.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-ochre-deep underline decoration-ochre/30 underline-offset-4 transition hover:decoration-ochre"
          >
            all posts → blog.asyraf.ai
          </a>
        </div>
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-3">
        {fieldNotes.map((note, index) => (
          <Reveal key={note.href} delay={index * 90}>
            <a
              href={note.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group card-quiet sketch-rule flex h-full flex-col px-5 pb-5 pt-4 hover:shadow-page motion-safe:transition motion-safe:duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:-rotate-[0.4deg]"
            >
              <p className="font-sketch text-sm text-ochre-deep">{note.meta}</p>
              <h3 className="mt-2 font-serif text-xl leading-snug text-ink transition-colors group-hover:text-ochre-deep">
                {note.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{note.note}</p>
              <span className="mt-auto pt-4 text-sm font-semibold text-ochre-deep">
                Read on blog.asyraf.ai
                <span
                  aria-hidden
                  className="inline-block motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5"
                >
                  {" "}
                  →
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-14 md:px-8 md:py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[1.75rem] border border-ink-faint/50 bg-ochre-wash/40 px-8 py-12 text-center shadow-page md:px-16 md:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-8 top-6 h-px bg-gradient-to-r from-transparent via-ink-faint to-transparent md:inset-x-16"
          />
          <p className="font-sketch text-xl text-ochre-deep">If you&apos;re still here</p>
          <h2 className="mt-3 text-balance font-serif text-4xl leading-tight tracking-tight text-ink md:text-5xl">
            Build what judgment
            <br />
            won&apos;t outsource.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-pretty text-ink-soft">
            Say hello on X, or peek at what&apos;s shipping on jualan.ai.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://jualan.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper-warm transition hover:bg-ochre-deep"
            >
              jualan.ai
            </a>
            <a
              href="https://x.com/asyrafduyshart"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink/20 bg-paper-card px-6 py-3 text-sm font-semibold text-ink transition hover:border-ochre/40"
            >
              @asyrafduyshart
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-5xl border-t border-ink-faint/70 px-6 py-10 md:px-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Link
            href="/"
            aria-label="asyraf.ai home"
            className="group inline-block text-xl"
          >
            <Wordmark />
          </Link>
          <p className="mt-1 max-w-xs text-sm leading-relaxed text-ink-mute">
            Personal site for Asyraf Duyshart. Jakarta. Roast tools. Ship
            anyway.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
          <a
            href="https://blog.asyraf.ai"
            className="link-quiet"
            target="_blank"
            rel="noopener noreferrer"
          >
            blog.asyraf.ai
          </a>
          <a
            href="https://jualan.ai"
            className="link-quiet"
            target="_blank"
            rel="noopener noreferrer"
          >
            jualan.ai
          </a>
          <a
            href="https://imajinyata.com"
            className="link-quiet"
            target="_blank"
            rel="noopener noreferrer"
          >
            imajinyata.com
          </a>
          <a
            href="https://x.com/asyrafduyshart"
            className="link-quiet"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
          <a
            href="https://github.com/asyrafduyshart"
            className="link-quiet"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <p className="mt-8 font-sketch text-base text-ink-mute">
        Made with paper grain and stubborn taste.
      </p>
    </footer>
  );
}
