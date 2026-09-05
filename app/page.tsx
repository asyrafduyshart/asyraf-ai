import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import SketchUnderline from "@/components/SketchUnderline";
import Tape from "@/components/Tape";
import Wordmark from "@/components/Wordmark";

const navAnchors = [
  { href: "#about", label: "About" },
  { href: "#building", label: "Building" },
  { href: "#lanes", label: "Lanes" },
  { href: "#writing", label: "Writing" },
];

const lanes = [
  {
    index: "01",
    title: "AI",
    note: "A lever for judgment, never a substitute for having some.",
  },
  {
    index: "02",
    title: "Vibe coding",
    note: "Ship the feeling first. Then earn the right to clean it up.",
  },
  {
    index: "03",
    title: "Build in public",
    note: "Show the messy middle. Launch posts are the least interesting bit.",
  },
  {
    index: "04",
    title: "Startup Indonesia",
    note: "Built from Jakarta, for operators who still touch the work.",
  },
];

type Shot = {
  src: string;
  alt: string;
};

type RosterItemBase = {
  name: string;
  lane: string;
  badge?: string;
};

type RosterItem = RosterItemBase &
  (
    | { href: string; domain: string }
    | { href?: never; domain?: never }
  );

type ProjectCore = {
  index: string;
  status: string;
  name: string;
  subline: string;
  href: string;
  domain: string;
  primary: Shot;
  secondary: Shot;
  caption: string;
  body: string[];
  colophon: string;
  align: "left" | "right";
  postscript?: string;
};

type Project = ProjectCore &
  (
    | { roster: RosterItem[]; rosterLabel: string }
    | { roster?: never; rosterLabel?: never }
  );

const projects: Project[] = [
  {
    index: "01",
    status: "Now building",
    name: "jualan.ai",
    subline: "by PT Solusi Bagi Bangsa",
    href: "https://jualan.ai",
    domain: "jualan.ai",
    primary: {
      src: "/shots/jualan-home.png",
      alt: "jualan.ai homepage showing one platform for every sales solution",
    },
    secondary: {
      src: "/shots/jualan-product.png",
      alt: "jualan.ai no-code storefront builder interface",
    },
    caption: "The front door, with the store builder pulled from underneath.",
    body: [
      "One platform for the whole selling operation — produk, pesanan, pembayaran, pengiriman, pelanggan — plus an AI copilot that answers in Bahasa Indonesia.",
      "Sellers build the storefront without code: pick a template, change it by chat, put it on their own domain. It also minds the money — laba, arus kas, HPP.",
      "The unglamorous parts of selling, which is exactly the point.",
    ],
    colophon: "Toko online AI untuk seller Indonesia · waitlist open.",
    align: "right",
  },
  {
    index: "02",
    status: "The studio",
    name: "Imaji",
    subline: "imajinyata.com · Tekno Imaji Nyata",
    href: "https://imajinyata.com",
    domain: "imajinyata.com",
    primary: {
      src: "/shots/imajinyata-home.png",
      alt: "Imaji homepage with the line reality is a canvas, Imajination is the ink",
    },
    secondary: {
      src: "/shots/imajinyata-products.png",
      alt: "Imaji product page featuring Hosteria and its event tools",
    },
    caption: "The studio front door, then a glimpse of the product shelf.",
    body: [
      "The AI-native studio I build with. Their words: “AI is not a feature. It’s our foundation.” For once, a slogan that is also true of the codebase.",
    ],
    rosterLabel: "Current shelf",
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
      "All of it sits on an in-house suite with names like a family gathering: Biya, Gede, Prasa, Arum, Yona, Julia.",
    colophon: "Runs on Cloudflare · KrakenD · Ornith · GitHub · Notion.",
    align: "left",
  },
];

type FieldNote = {
  title: string;
  note: string;
  href: string;
  meta: string;
};

const fieldNotes = [
  {
    title: "Kenapa Banyak Orang Suka Hidup dalam ‘Hard Mode’",
    note: "A self-roast about borrowed ambition, alignment, and why the rubber band always returns.",
    href: "https://blog.asyraf.ai/kenapa-banyak-orang-main-hidup-di-hard-mode",
    meta: "Essay · 9 menit · Bahasa Indonesia",
  },
  {
    title: "Prompt Guide: Poster Travel Flat-Vector",
    note: "One template, six cities, and the exact constraints that stop every result from becoming the same postcard.",
    href: "https://blog.asyraf.ai/prompt-guide-poster-travel-flat-vector",
    meta: "Prompt guide · 3 menit",
  },
  {
    title: "7 Bookmark X yang Layak Diingat",
    note: "Decisions, second brains, graph agents, and the one sentence worth keeping from each.",
    href: "https://blog.asyraf.ai/7-bookmark-x-yang-layak-diingat",
    meta: "Bookmark notes · 3 menit",
  },
] as const satisfies readonly [FieldNote, ...FieldNote[]];

function Outbound({
  href,
  children,
  className = "",
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={
        ariaLabel ? `${ariaLabel} (opens in a new tab)` : undefined
      }
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content" className="relative overflow-x-clip">
        <Hero />
        <About />
        <DeskInterlude />
        <Building />
        <Lanes />
        <RubberBandInterlude />
        <Writing />
        <Closing />
      </main>
      <Footer />
    </>
  );
}

function Nav() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className="page-shell flex items-center justify-between px-5 pb-5 pt-6 sm:px-8 md:pb-6 md:pt-8">
        <Link
          href="/"
          aria-label="asyraf.ai home"
          className="group text-[1.65rem] md:text-[1.85rem]"
        >
          <Wordmark />
        </Link>

        <p className="hidden items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ink-mute md:flex">
          <span className="h-px w-8 bg-ochre" aria-hidden />
          Personal field journal · Jakarta
        </p>

        <Outbound
          href="https://x.com/asyrafduyshart"
          className="masthead-link"
        >
          @asyrafduyshart <span aria-hidden>↗</span>
        </Outbound>
      </header>

      <div className="section-nav-shell">
        <nav className="section-nav page-shell" aria-label="Page sections">
          <span className="section-nav-label" aria-hidden>
            Index
          </span>
          {navAnchors.map((anchor) => (
            <a key={anchor.href} href={anchor.href} className="section-nav-link">
              {anchor.label}
            </a>
          ))}
          <span className="section-nav-folio" aria-hidden>
            No. 01 / 2026
          </span>
        </nav>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section className="page-shell px-5 pb-20 pt-7 sm:px-8 md:pb-28 md:pt-10" aria-labelledby="hero-title">
      <div className="hero-cover">
        <Image
          src="/hero-sketch.png"
          alt=""
          fill
          priority
          className="hero-art"
          sizes="(max-width: 1280px) 100vw, 1216px"
        />
        <div className="hero-wash" aria-hidden />
        <span className="crop-mark crop-mark-tl" aria-hidden />
        <span className="crop-mark crop-mark-tr" aria-hidden />
        <span className="crop-mark crop-mark-bl" aria-hidden />
        <span className="crop-mark crop-mark-br" aria-hidden />

        <div className="hero-content">
          <div className="flex items-start justify-between gap-6">
            <p className="eyebrow opacity-0 animate-fade-in">
              Asyraf Duyshart
              <span className="mx-2 text-ochre" aria-hidden>
                /
              </span>
              Working draft
            </p>
            <p className="hidden text-right font-sketch text-sm leading-snug text-ink-soft opacity-0 animate-fade-in [animation-delay:120ms] sm:block">
              notes from 06° south
              <br />
              shipped from Jakarta
            </p>
          </div>

          <h1
            id="hero-title"
            className="hero-title mt-12 opacity-0 animate-fade-up [animation-delay:80ms] sm:mt-14 md:mt-16"
          >
            <span className="block">Roast tools.</span>
            <span className="hero-title-offset block">
              Ship <span className="hero-swipe">anyway.</span>
            </span>
          </h1>

          <div className="hero-deck opacity-0 animate-fade-up [animation-delay:180ms]">
            <div className="hero-pullquote">
              <span className="font-sketch text-base text-ochre-deep">The operating note</span>
              <p className="mt-2 font-serif text-xl leading-snug text-ink sm:text-2xl">
                “AI won’t save you from bad judgment. It only scales it.”
              </p>
            </div>

            <div className="hero-intro">
              <p className="text-pretty text-lg leading-relaxed text-ink-soft">
                Designer and developer building{" "}
                <Outbound href="https://jualan.ai" className="inline-link">
                  jualan.ai
                </Outbound>{" "}
                with Imaji. Keeping judgment in the loop while the models get louder.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#building" className="button button-solid">
                  Open the workbench <span aria-hidden>↓</span>
                </a>
                <Outbound href="https://blog.asyraf.ai" className="button button-paper">
                  Read the field notes <span aria-hidden>↗</span>
                </Outbound>
              </div>
            </div>
          </div>

          <div className="hero-stamp" aria-hidden>
            <span>JKT</span>
            <span className="hero-stamp-rule" />
            <small>Working notes</small>
          </div>
        </div>
      </div>
      <p className="mt-3 text-right font-sketch text-sm text-ink-mute sm:pr-8">
        cover sketch: coffee, an empty page, and no excuse not to ship
      </p>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="page-shell scroll-mt-24 px-5 py-16 sm:px-8 md:py-24"
      aria-labelledby="about-title"
    >
      <Reveal>
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / The person behind the tabs</p>
            <h2 id="about-title" className="section-title">
              A short note,
              <br />
              not a résumé.
            </h2>
            <SketchUnderline className="mt-4 w-44" />
          </div>
          <p className="section-deck">
            Design, code, product — and the quiet decisions between prompt and
            production.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid items-start gap-10 md:mt-16 md:grid-cols-12 md:gap-x-8 lg:gap-x-12">
        <Reveal className="md:col-span-5 md:col-start-1" variant="page-left">
          <figure className="portrait-plate">
            <Tape className="-top-2.5 left-[42%] h-6 w-20 -rotate-2" />
            <div className="relative aspect-square overflow-hidden border border-ink/10 bg-paper">
              <Image
                src="/about-sketch.png"
                alt="Woodcut-style portrait of Asyraf Duyshart"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 460px"
              />
            </div>
            <figcaption className="portrait-caption">
              Fig. 01 — a face for the byline
            </figcaption>
          </figure>
        </Reveal>

        <Reveal
          className="md:col-span-6 md:col-start-7 md:pt-10"
          variant="page-right"
          delay={100}
        >
          <blockquote className="about-quote">
            Taste is just judgment with receipts.
          </blockquote>
          <div className="mt-8 space-y-5 text-pretty text-lg leading-relaxed text-ink-soft">
            <p>
              I’m Asyraf. I roast tools, ship anyway, and build{" "}
              <Outbound href="https://jualan.ai" className="inline-link">
                jualan.ai
              </Outbound>{" "}
              with Imaji (
              <Outbound href="https://imajinyata.com" className="inline-link">
                imajinyata.com
              </Outbound>
              ).
            </p>
            <p>
              I care about the craft between the prompt and the product: what
              gets cut, what earns its place, and whether the thing survives
              contact with a real person.
            </p>
            <p>
              AI makes the loop faster. It does not make the call for you. Bad
              judgment at machine speed is still bad judgment.
            </p>
          </div>
          <p className="margin-note mt-8 border-l-2 border-ochre pl-4">
            Designer + developer. Indo tech-uncle energy, editorial on the
            outside.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function DeskInterlude() {
  return (
    <div className="page-shell px-5 py-12 sm:px-8 md:py-16">
      <Reveal className="md:ml-auto md:w-3/4" variant="page-right">
        <figure className="journal-panorama">
          <Tape className="-top-3 right-[18%] h-6 w-24 rotate-2" />
          <div className="relative aspect-[3/2] overflow-hidden border border-ink/10 sm:aspect-[16/9]">
            <Image
              src="/section-desk.png"
              alt="Watercolor desk with a lamp, open notebook, pen, flowers, and coffee"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 880px"
            />
          </div>
          <figcaption className="journal-caption">
            <span>Plate 02</span>
            <span className="font-sketch normal-case tracking-normal">
              back to the desk
            </span>
          </figcaption>
        </figure>
      </Reveal>
    </div>
  );
}

function ProjectEvidence({ project }: { project: Project }) {
  return (
    <figure className="project-evidence">
      <div className="project-shot-main">
        <Tape className="-top-3 left-[18%] h-6 w-20 -rotate-3" />
        <div className="relative aspect-[16/10] overflow-hidden bg-paper-soft">
          <Image
            src={project.primary.src}
            alt={project.primary.alt}
            fill
            className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 700px"
          />
        </div>
      </div>
      <div className="project-shot-detail">
        <div className="relative aspect-[16/10] overflow-hidden bg-paper-soft">
          <Image
            src={project.secondary.src}
            alt={project.secondary.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 66vw, 390px"
          />
        </div>
      </div>
      <figcaption className="project-caption">{project.caption}</figcaption>
    </figure>
  );
}

function ProjectSpread({ project }: { project: Project }) {
  return (
    <Reveal variant={project.align === "right" ? "page-right" : "page-left"}>
      <article className={`project-spread project-media-${project.align}`}>
        <header className="project-head">
          <p className="eyebrow">
            Entry {project.index} <span aria-hidden>/</span> {project.status}
          </p>
          <div className="mt-3 flex flex-wrap items-end gap-x-4 gap-y-2">
            <h3 className="font-serif text-5xl leading-none tracking-[-0.045em] text-ink md:text-6xl">
              {project.name}
            </h3>
            <span className="project-status">{project.status}</span>
          </div>
          <p className="mt-3 text-sm font-medium text-ink-mute">{project.subline}</p>
        </header>

        <ProjectEvidence project={project} />

        <div className="project-body">
          <div className="space-y-4 text-pretty leading-relaxed text-ink-soft">
            {project.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {project.roster && (
            <div className="mt-7">
              <p className="margin-note text-ochre-deep">{project.rosterLabel}</p>
              <ul className="project-ledger">
                {project.roster.map((item) => (
                  <li key={item.name}>
                    <span className="flex items-center gap-2">
                      <span className="font-serif text-xl text-ink">{item.name}</span>
                      {item.badge && <span className="ledger-badge">{item.badge}</span>}
                    </span>
                    <span className="text-sm text-ink-mute">{item.lane}</span>
                    {item.href && item.domain ? (
                      <Outbound href={item.href} className="ledger-link">
                        {item.domain} <span aria-hidden>↗</span>
                      </Outbound>
                    ) : (
                      <span className="ledger-dash" aria-hidden>
                        —
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.postscript && (
            <p className="mt-6 text-pretty leading-relaxed text-ink-soft">
              {project.postscript}
            </p>
          )}

          <p className="project-colophon">{project.colophon}</p>
          <Outbound href={project.href} className="text-link-arrow">
            Visit {project.domain} <span aria-hidden>↗</span>
          </Outbound>
        </div>
      </article>
    </Reveal>
  );
}

function Building() {
  return (
    <section
      id="building"
      className="page-shell scroll-mt-24 px-5 py-20 sm:px-8 md:py-28"
      aria-labelledby="building-title"
    >
      <Reveal>
        <div className="building-heading">
          <div>
            <p className="eyebrow">02 / Work in progress</p>
            <h2 id="building-title" className="section-title section-title-display">
              Building
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-serif text-2xl leading-snug text-ink">
              Keep the evidence large and the claims small.
            </p>
            <p className="mt-3 leading-relaxed text-ink-soft">
              The store, the studio, and one page still in pencil. Screenshots
              are from the real products.
            </p>
          </div>
        </div>
      </Reveal>

      <div className="mt-16 space-y-24 md:mt-24 md:space-y-32">
        {projects.map((project) => (
          <ProjectSpread key={project.name} project={project} />
        ))}

        <Reveal variant="page-right">
          <article className="skobar-sheet">
            <div className="skobar-copy">
              <p className="eyebrow">Entry 03 / Still in pencil</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <h3 className="font-serif text-5xl tracking-[-0.045em] text-ink md:text-6xl">
                  Skobar
                </h3>
                <span className="project-status">Coming soon</span>
              </div>
              <p className="mt-2 text-sm font-medium text-ink-mute">
                Next off the Imaji shelf
              </p>
              <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
                Still being drawn at the studio. This page stays honest: no
                fake interface, no invented metrics, no screenshot until there
                is something real to point a camera at.
              </p>
              <p className="project-colophon">
                Watch the shelf at{" "}
                <Outbound href="https://imajinyata.com" className="inline-link">
                  imajinyata.com
                </Outbound>
                .
              </p>
            </div>

            <div className="blueprint-blank">
              <span className="blueprint-cross blueprint-cross-tl" aria-hidden />
              <span className="blueprint-cross blueprint-cross-br" aria-hidden />
              <p className="font-sketch text-2xl text-ink-soft">screenshot pending</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink-mute">
                It ships first
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
    <section id="lanes" className="ink-section scroll-mt-20" aria-labelledby="lanes-title">
      <div className="page-shell px-5 py-20 sm:px-8 md:py-28">
        <div className="grid gap-14 md:grid-cols-12 md:gap-x-12">
          <Reveal className="md:col-span-4" variant="page-left">
            <p className="eyebrow text-ochre-soft">03 / Recurring arguments</p>
            <h2 id="lanes-title" className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.045em] text-paper md:text-6xl">
              Four lanes.
              <br />
              One operating system.
            </h2>
            <p className="mt-6 max-w-sm text-pretty leading-relaxed text-paper-soft/80">
              Not four philosophy cards. Four views of the same job: decide,
              make, show the work, stay close to the people using it.
            </p>
            <p className="margin-note mt-8 text-ochre-soft">
              Filed under: things worth arguing about twice.
            </p>
          </Reveal>

          <ol className="lane-list md:col-span-8">
            {lanes.map((lane, index) => (
              <li key={lane.title}>
                <Reveal delay={index * 70} variant="page-right">
                  <div className="lane-row">
                    <span className="lane-index" aria-hidden>
                      {lane.index}
                    </span>
                    <h3>{lane.title}</h3>
                    <p>{lane.note}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function RubberBandInterlude() {
  return (
    <div className="page-shell px-5 py-16 sm:px-8 md:py-24">
      <Reveal className="md:w-4/5" variant="page-left">
        <figure className="journal-panorama">
          <Tape className="-top-3 left-[24%] h-6 w-24 -rotate-2" />
          <div className="relative aspect-[16/9] overflow-hidden border border-ink/10">
            <Image
              src="/sketchbook/rubber-band.jpg"
              alt="Two sketched hands stretching a rubber band toward its limit"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 920px"
            />
          </div>
          <figcaption className="journal-caption">
            <span>Margin study</span>
            <span className="font-sketch normal-case tracking-normal">
              stretched, not snapped
            </span>
          </figcaption>
        </figure>
      </Reveal>
    </div>
  );
}

function Writing() {
  const [featured, ...moreNotes] = fieldNotes;

  return (
    <section
      id="writing"
      className="page-shell scroll-mt-24 px-5 py-16 sm:px-8 md:py-24"
      aria-labelledby="writing-title"
    >
      <Reveal>
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / Field notes</p>
            <h2 id="writing-title" className="section-title">
              Ideas worth
              <br />
              unfolding.
            </h2>
            <SketchUnderline className="mt-4 w-48" />
          </div>
          <div className="section-deck">
            <p>Longer thinking, mostly in Bahasa Indonesia.</p>
            <Outbound href="https://blog.asyraf.ai" className="text-link-arrow mt-4">
              Browse every note <span aria-hidden>↗</span>
            </Outbound>
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-14 md:mt-20" variant="page-right">
        <article className="writing-feature">
          <figure className="writing-feature-image">
            <Tape className="-top-3 right-[20%] h-6 w-24 rotate-2" />
            <div className="relative aspect-[3/2] overflow-hidden bg-ink">
              <Image
                src="/sketchbook/hard-mode-split.jpg"
                alt="Illustration contrasting a person stuck at a blank page with the same person writing in daylight"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 760px"
              />
            </div>
            <figcaption>Before force, after alignment.</figcaption>
          </figure>

          <div className="writing-feature-copy">
            <p className="eyebrow">{featured.meta}</p>
            <h3 className="mt-4 font-serif text-4xl leading-[1.03] tracking-[-0.035em] text-ink md:text-5xl">
              <Outbound href={featured.href} className="title-link">
                {featured.title}
              </Outbound>
            </h3>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-soft">
              {featured.note}
            </p>
            <Outbound href={featured.href} className="text-link-arrow mt-7">
              Read the essay <span aria-hidden>↗</span>
            </Outbound>
          </div>
        </article>
      </Reveal>

      <ol className="writing-ledger" start={2}>
        {moreNotes.map((note, index) => (
          <li key={note.href}>
            <Reveal variant="page-left">
              <article>
                <p className="writing-number">0{index + 2}</p>
                <div>
                  <p className="eyebrow">{note.meta}</p>
                  <h3 className="mt-2 font-serif text-2xl leading-tight text-ink md:text-3xl">
                    <Outbound href={note.href} className="title-link">
                      {note.title}
                    </Outbound>
                  </h3>
                </div>
                <p className="text-pretty leading-relaxed text-ink-soft">{note.note}</p>
                <Outbound href={note.href} className="ledger-read" ariaLabel={`Read ${note.title}`}>
                  Read <span aria-hidden>↗</span>
                </Outbound>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Closing() {
  return (
    <section className="page-shell px-5 py-20 sm:px-8 md:py-28" aria-labelledby="closing-title">
      <Reveal variant="page-right">
        <div className="postcard">
          <span className="postcard-corner" aria-hidden />
          <div>
            <p className="eyebrow">05 / Correspondence, not conversion</p>
            <h2 id="closing-title" className="mt-6 max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.045em] text-ink md:text-7xl">
              If the work has a pulse, send a note.
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
              No funnel. No calendar link. Just the work, a public notebook,
              and a reply when there is something worth saying.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Outbound href="https://x.com/asyrafduyshart" className="button button-solid">
                Write on X <span aria-hidden>↗</span>
              </Outbound>
              <Outbound href="https://jualan.ai" className="button button-paper">
                See jualan.ai <span aria-hidden>↗</span>
              </Outbound>
            </div>
          </div>

          <div className="postcard-address">
            <div className="postal-stamp" aria-hidden>
              <span>asyraf.ai</span>
              <strong>JAKARTA</strong>
              <small>06°12′S</small>
            </div>
            <dl>
              <div>
                <dt>From</dt>
                <dd>Asyraf Duyshart</dd>
              </div>
              <div>
                <dt>Currently</dt>
                <dd>Building the useful bits</dd>
              </div>
              <div>
                <dt>Reply via</dt>
                <dd>@asyrafduyshart</dd>
              </div>
            </dl>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink/20 bg-paper-soft/45">
      <div className="page-shell px-5 py-10 sm:px-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-12 md:items-start">
          <div className="md:col-span-4">
            <Link
              href="/"
              aria-label="asyraf.ai home"
              className="group inline-block text-2xl"
            >
              <Wordmark />
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
              Personal field journal for Asyraf Duyshart. Jakarta. Roast tools.
              Ship anyway.
            </p>
          </div>

          <nav
            aria-label="Elsewhere"
            className="footer-links md:col-span-5 md:col-start-6"
          >
            <Outbound href="https://blog.asyraf.ai">Blog</Outbound>
            <Outbound href="https://jualan.ai">jualan.ai</Outbound>
            <Outbound href="https://imajinyata.com">Imaji</Outbound>
            <Outbound href="https://x.com/asyrafduyshart">X</Outbound>
            <Outbound href="https://github.com/asyrafduyshart">GitHub</Outbound>
          </nav>

          <p className="font-sketch text-base text-ink-mute md:col-span-2 md:text-right">
            Made with paper grain
            <br />
            and stubborn taste.
          </p>
        </div>
      </div>
    </footer>
  );
}
