import type { Metadata } from "next";
import Image from "next/image";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import { MotionDirector } from "@/components/motion-director";
import { Navigation } from "@/components/navigation";
import "./globals.css";

const display = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dcrmilda.com"),
  title: { default: "DCR MILDA — Global House, Worldwide", template: "%s — DCR MILDA" },
  description: "Czech-Vietnamese artist and international DJ DCR MILDA. Global house, worldwide tour dates, music, press kit, and booking.",
  keywords: ["DCR MILDA", "DJ", "global house", "international DJ", "Toronto DJ", "PLAYGRND"],
  icons: { icon: "/images/dcr-logo-icon.png", apple: "/images/dcr-logo-icon.png" },
  alternates: { canonical: "/" },
  openGraph: {
    title: "DCR MILDA — Global House, Worldwide",
    description: "Music without borders. See tour dates, hear the latest releases, and book DCR MILDA.",
    url: "/",
    siteName: "DCR MILDA",
    images: [{ url: "/images/dcr-cyan.jpg", width: 1500, height: 2249, alt: "DCR MILDA" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "DCR MILDA", description: "Global house, worldwide.", images: ["/images/dcr-cyan.jpg"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <div className="page-loader" aria-hidden="true">
          <div className="loader-mark">
            <span className="loader-mark-icon">
              <Image src="/images/dcr-logo-icon.png" alt="" width={1108} height={1126} priority />
            </span>
          </div>
        </div>
        <div className="scroll-progress" aria-hidden="true" />
        <Navigation />
        <MotionDirector />
        {children}
      </body>
    </html>
  );
}
