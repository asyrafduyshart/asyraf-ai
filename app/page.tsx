import Image from "next/image";
import Link from "next/link";

const lanes = [
  { title: "AI", note: "Tools that amplify judgment — not replace it." },
  { title: "Vibe coding", note: "Ship the feeling first. Clean it up after." },
  { title: "Build in public", note: "Share the messy middle, not just the launch." },
  { title: "Startup Indonesia", note: "From Jakarta, for operators who still touch the work." },
];

type Project = {
  index: string;
  name: string;
  subline: string;
  tag: string;
  href: string;
  domain: string;
  shot: string;
  shotAlt: string;
  caption: string;
  body: string[];
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
    shot: "/shots/jualan-home.png",
    shotAlt: "Latest jualan.ai homepage",
    caption: "the latest homepage, warts and all",
    body: [
      "An AI online store for sellers in Indonesia — katalog, pembayaran lokal, pesanan, and an AI copilot that answers in Bahasa Indonesia.",
      "It also minds the money: laba, arus kas, HPP. The unglamorous parts of selling, which is exactly the point.",
    ],
    colophon: "Toko online AI untuk seller Indonesia.",
  },
  {
    index: "entry 02",
    name: "Imaji",
    subline: "imajinyata.com · Tekno Imaji Nyata",
    tag: "The studio",
    href: "https://imajinyata.com",
    domain: "imajinyata.com",
    shot: "/shots/imajinyata-home.png",
    shotAlt: "Latest imajinyata.com homepage",
    caption: "the studio's front door",
    body: [
      "The AI-native studio I build with. Their words: \u201cAI is not a feature. It\u2019s our foundation.\u201d For once, a slogan that\u2019s also true of the codebase.",
      "Commerce, events, F&B — Saji, Jualan, and the new one, Hosteria — on an in-house suite with names like a family gathering: Biya, Gede, Prasa, Arum, Yona, Julia.",
    ],
    colophon: "Runs on Cloudflare · KrakenD · Ornith · GitHub · Notion.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Building />
      <Lanes />
      <Closing />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="mx-auto flex max-w-5xl items-center justify-between px-6 pb-2 pt-7 md:px-8 md:pt-9">
      <Link
        href="/"
        className="font-serif text-2xl tracking-tight text-ink md:text-[1.7rem]"
      >
        asyraf<span className="text-ochre">.ai</span>
      </Link>
      <nav className="flex items-center gap-5 text-sm font-medium text-ink-soft md:gap-7">
        <a href="#about" className="link-quiet hidden sm:inline">
          About
        </a>
        <a href="#building" className="link-quiet hidden sm:inline">
          Building
        </a>
        <a href="#lanes" className="link-quiet hidden sm:inline">
          Lanes
        </a>
        <a
          href="https://x.com/asyrafduyshart"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-ink-faint bg-paper-card px-3.5 py-1.5 text-ink transition hover:border-ochre/50 hover:text-ochre-deep"
        >
          Follow on X
        </a>
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
            src="/hero-sketch.png"
            alt=""
            fill
            priority
            className="object-cover object-center opacity-90"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-paper-warm/55 via-paper-warm/70 to-paper-warm/88" />
        </div>

        <div className="relative z-10 flex min-h-[26rem] flex-col justify-center px-7 py-12 text-center sm:min-h-[30rem] sm:px-12 md:px-16 md:py-16">
          <p className="font-sketch text-2xl text-ochre-deep opacity-0 animate-fade-in md:text-3xl">
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
        <div>
          <p className="font-sketch text-xl text-ochre-deep md:text-2xl">A short note</p>
          <h2 className="mt-2 font-serif text-4xl tracking-tight text-ink md:text-5xl">
            About
          </h2>
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
        </div>

        <div className="relative">
          <div className="card-quiet overflow-hidden p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-ochre-wash">
              <Image
                src="/asyraf-portrait.jpg"
                alt="Asyraf Duyshart"
                fill
                className="object-cover object-[center_20%] saturate-[0.92] contrast-[1.02]"
                sizes="(max-width: 768px) 90vw, 360px"
              />
            </div>
          </div>
          <p className="mt-3 text-center font-sketch text-lg text-ink-mute">
            asyraf, somewhere between coffee and a deploy
          </p>
        </div>
      </div>
    </section>
  );
}

function BrowserFrame({
  shot,
  shotAlt,
  domain,
  caption,
}: Pick<Project, "shot" | "shotAlt" | "domain" | "caption">) {
  return (
    <figure>
      <div className="card-quiet overflow-hidden">
        <div className="flex items-center gap-3 border-b border-ink-faint/50 bg-paper-soft/70 px-4 py-2.5">
          <span aria-hidden className="flex gap-1.5">
            <i className="h-2.5 w-2.5 rounded-full border border-ink-faint/80 bg-paper-card" />
            <i className="h-2.5 w-2.5 rounded-full border border-ink-faint/80 bg-paper-card" />
            <i className="h-2.5 w-2.5 rounded-full border border-ochre/40 bg-ochre-wash" />
          </span>
          <span className="mx-auto rounded-full border border-ink-faint/60 bg-paper-card px-3 py-0.5 text-xs font-medium tracking-wide text-ink-mute">
            {domain}
          </span>
          <span aria-hidden className="w-[42px]" />
        </div>
        <div className="relative aspect-[16/10] bg-ochre-wash/40">
          <Image
            src={shot}
            alt={shotAlt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 560px"
          />
        </div>
      </div>
      <figcaption className="mt-3 text-center font-sketch text-lg text-ink-mute">
        {caption}
      </figcaption>
    </figure>
  );
}

function Building() {
  return (
    <section id="building" className="mx-auto max-w-5xl px-6 py-14 md:px-8 md:py-20">
      <div className="mb-10 flex flex-col gap-3 md:mb-14 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-sketch text-xl text-ochre-deep md:text-2xl">On the desk</p>
          <h2 className="mt-2 font-serif text-4xl tracking-tight text-ink md:text-5xl">
            Building
          </h2>
        </div>
        <p className="max-w-sm text-pretty text-ink-soft">
          Two entries, kept honest — the store I&apos;m building, and the studio
          I build it with. Screenshots straight from the homepages.
        </p>
      </div>

      <div className="space-y-12 md:space-y-16">
        {projects.map((p, i) => (
          <article
            key={p.name}
            className="grid items-center gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-12"
          >
            <div className={i % 2 === 1 ? "md:order-2" : undefined}>
              <BrowserFrame
                shot={p.shot}
                shotAlt={p.shotAlt}
                domain={p.domain}
                caption={p.caption}
              />
            </div>

            <div className={i % 2 === 1 ? "md:order-1" : undefined}>
              <p className="font-sketch text-lg text-ochre-deep">{p.index}</p>
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
        ))}
      </div>
    </section>
  );
}

function Lanes() {
  return (
    <section id="lanes" className="mx-auto max-w-5xl px-6 py-10 md:px-8 md:py-14">
      <div className="rounded-[1.75rem] border border-dashed border-ink-faint bg-paper-soft/60 px-7 py-10 md:px-12 md:py-12">
        <p className="font-sketch text-xl text-ochre-deep md:text-2xl">
          Selected work / lanes
        </p>
        <h2 className="mt-2 font-serif text-4xl tracking-tight text-ink md:text-5xl">
          What I keep returning to
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {lanes.map((lane) => (
            <li key={lane.title} className="border-t border-ink-faint/80 pt-5">
              <h3 className="font-serif text-2xl text-ink">{lane.title}</h3>
              <p className="mt-2 text-pretty text-ink-soft">{lane.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-14 md:px-8 md:py-20">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-ink-faint/50 bg-ochre-wash/40 px-8 py-12 text-center shadow-page md:px-16 md:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-8 top-6 h-px bg-gradient-to-r from-transparent via-ink-faint to-transparent md:inset-x-16"
        />
        <p className="font-sketch text-2xl text-ochre-deep">If you&apos;re still here</p>
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
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-5xl border-t border-ink-faint/70 px-6 py-10 md:px-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-serif text-xl text-ink">asyraf.ai</p>
          <p className="mt-1 max-w-xs text-sm leading-relaxed text-ink-mute">
            Personal site for Asyraf Duyshart. Jakarta. Roast tools. Ship
            anyway.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
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
