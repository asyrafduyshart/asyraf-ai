import type { Metadata } from "next";
import { Fraunces, Karla, Architects_Daughter } from "next/font/google";
import "./globals.css";

const serif = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const sketch = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sketch",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asyraf Duyshart — asyraf.ai",
  description:
    "Roast tools. Ship anyway. Building jualan.ai with Imaji. Designer, developer, and AI builder from BSD.",
  metadataBase: new URL("https://asyraf.ai"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Asyraf Duyshart — asyraf.ai",
    description:
      "Roast tools. Ship anyway. Building jualan.ai with Imaji from BSD.",
    url: "https://asyraf.ai",
    siteName: "asyraf.ai",
    type: "website",
    images: [{ url: "/hero-sketch.png", width: 819, height: 546 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asyraf Duyshart — asyraf.ai",
    description:
      "Roast tools. Ship anyway. Building jualan.ai with Imaji from BSD.",
    images: ["/hero-sketch.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${sketch.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans paper-texture min-h-screen">
        {/* Tags <html> so scroll-reveal hiding only happens when JS runs. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
        {children}
      </body>
    </html>
  );
}
