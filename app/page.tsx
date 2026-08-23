import Image from "next/image";
import Link from "next/link";

const lanes = [
  { title: "AI", note: "Tools that amplify judgment — not replace it." },
  { title: "Vibe coding", note: "Ship the feeling first. Clean it up after." },
  { title: "Build in public", note: "Share the messy middle, not just the launch." },
  { title: "Startup Indonesia", note: "From Jakarta, for operators who still touch the work." },
];

const projects = [
  {
    name: "jualan.ai",
    href: "https://jualan.ai",
    blurb:
      "Toko online AI untuk seller Indonesia — katalog, pembayaran lokal, pesanan, dan kopilot berbahasa Indonesia.",
    tag: "Building",
    image: "/shots/jualan-home.png",
    imageAlt: "Latest jualan.ai homepage",
  },
  {
    name: "Imaji",
    href: "https://imajinyata.com",
    blurb:
      "Tekno Imaji Nyata — AI-native products for events (Hosteria), commerce (jualan.ai), and F&B (Saji). Skobar cooking.",
    tag: "With Imaji",
    image: "/shots/imajinyata-home.png",
    imageAlt: "Latest imajinyata.com homepage",
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
    <header className="mx-auto flex max-w-5xl items-center justify-between px-6 pb-2 pt-8 md:px-8 md:pt-10">
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
    <section className="relative mx-auto max-w-5xl px-6 pb-16 pt-10 md:px-8 md:pb-24 md:pt-14">
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

        <div className="relative z-10 flex min-h-[28rem] flex-col justify-center px-7 py-14 text-center sm:min-h-[32rem] sm:px-12 md:px-16 md:py-20">
          <p className="font-sketch text-2xl text-ochre-deep opacity-0 animate-fade-in md:text-3xl">
            from Jakarta
          </p>
          <h1 className="mt-3 font-serif text-[2.75rem] leading-[1.05] tracking-tight text-ink opacity-0 animate-fade-up [animation-delay:80ms] sm:text-6xl md:text-7xl">
            Roast tools.
            <br />
            <span className="ink-underline">Ship anyway.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-sans text-lg leading-relaxed text-ink-soft opacity-0 animate-fade-up [animation-delay:160ms] md:text-xl">
            Asyraf Duyshart — designer, developer, building AI products with
            judgment still in the loop.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 opacity-0 animate-fade-up [animation-delay:240ms]">
            <a
              href="https://jualan.ai"
              target="_blank"
              rel="noopener noreferrer"
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
    <section id="about" className="mx-auto max-w-5xl px-6 py-8 md:px-8 md:py-12">
      <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-14">
        <div>
          <p className="font-sketch text-xl text-ochre-deep">A short note</p>
          <h2 className="mt-2 font-serif text-4xl tracking-tight text-ink md:text-5xl">
            About
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
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

function Building() {
  return (
    <section id="building" className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-24">
      <div className="mb-10 flex flex-col gap-3 md:mb-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-sketch text-xl text-ochre-deep">On the desk</p>
          <h2 className="mt-2 font-serif text-4xl tracking-tight text-ink md:text-5xl">
            Building
          </h2>
        </div>
        <p className="max-w-sm text-ink-soft">
          Quiet cards for the work in progress — jualan.ai and Imaji, side by
          side.
        </p>
      </div>

      <div className="relative mb-10 overflow-hidden rounded-[1.5rem] border border-ink-faint/50 shadow-page">
        <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
          <Image
            src="/section-desk.png"
            alt="Sketch of a warm writing desk"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="card-quiet group block overflow-hidden transition hover:-translate-y-0.5 hover:border-ochre/35"
          >
            <div className="relative aspect-[16/10] w-full border-b border-ink-faint/40 bg-paper-soft">
              <Image
                src={p.image}
                alt={p.imageAlt}
                fill
                className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>
            <div className="p-7">
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-serif text-2xl text-ink md:text-3xl">
                  {p.name}
                </h3>
                <span className="rounded-full bg-ochre-wash px-3 py-1 text-xs font-semibold tracking-wide text-ochre-deep">
                  {p.tag}
                </span>
              </div>
              <p className="mt-4 leading-relaxed text-ink-soft">{p.blurb}</p>
              <p className="mt-6 text-sm font-medium text-ochre-deep transition group-hover:translate-x-0.5">
                Visit {p.name} →
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Lanes() {
  return (
    <section id="lanes" className="mx-auto max-w-5xl px-6 py-8 md:px-8 md:py-12">
      <div className="rounded-[1.75rem] border border-dashed border-ink-faint bg-paper-soft/60 px-7 py-10 md:px-12 md:py-14">
        <p className="font-sketch text-xl text-ochre-deep">Selected work / lanes</p>
        <h2 className="mt-2 font-serif text-4xl tracking-tight text-ink md:text-5xl">
          What I keep returning to
        </h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {lanes.map((lane) => (
            <li
              key={lane.title}
              className="border-t border-ink-faint/80 pt-5"
            >
              <h3 className="font-serif text-2xl text-ink">{lane.title}</h3>
              <p className="mt-2 text-ink-soft">{lane.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:px-8 md:py-24">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-ink-faint/50 bg-ochre-wash/40 px-8 py-14 text-center shadow-page md:px-16 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-8 top-6 h-px bg-gradient-to-r from-transparent via-ink-faint to-transparent md:inset-x-16"
        />
        <p className="font-sketch text-2xl text-ochre-deep">If you&apos;re still here</p>
        <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-ink md:text-5xl">
          Build what judgment
          <br />
          won&apos;t outsource.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-ink-soft">
          Say hello on X, or peek at what&apos;s shipping on jualan.ai.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
