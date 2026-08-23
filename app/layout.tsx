import type { Metadata } from "next";
import { Instrument_Serif, Source_Sans_3, Caveat } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const sketch = Caveat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-sketch",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asyraf Duyshart — asyraf.ai",
  description:
    "Roast tools. Ship anyway. Building jualan.ai with Imaji. Designer, developer, and AI builder from Jakarta.",
  metadataBase: new URL("https://asyraf.ai"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Asyraf Duyshart — asyraf.ai",
    description:
      "Roast tools. Ship anyway. Building jualan.ai with Imaji from Jakarta.",
    url: "https://asyraf.ai",
    siteName: "asyraf.ai",
    type: "website",
    images: [{ url: "/hero-sketch.png", width: 1536, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asyraf Duyshart — asyraf.ai",
    description:
      "Roast tools. Ship anyway. Building jualan.ai with Imaji from Jakarta.",
    images: ["/hero-sketch.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${sketch.variable}`}>
      <body className="font-sans paper-texture min-h-screen">{children}</body>
    </html>
  );
}
