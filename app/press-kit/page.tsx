import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PrintButton } from "@/components/print-button";
import { socials } from "@/data/site";
import { ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = { title: "Press kit", description: "Official DCR MILDA biography, artist profile, technical rider, press images, and booking contacts." };

export default function PressKitPage() {
  return (
    <main id="main" className="inner-page press-page">
      <section className="press-hero">
        <Image src="/images/dcr-editorial.jpg" alt="DCR MILDA in a dark denim editorial portrait" fill priority sizes="100vw" />
        <div className="inner-hero-shade" />
        <div className="press-hero-copy"><p className="eyebrow">Official electronic press kit / 2026</p><h1>DCR<br />MILDA</h1><div><span>Artist / DJ</span><span>Toronto / Worldwide</span></div></div>
      </section>
      <section className="press-intro section-pad">
        <div><div className="section-code"><span>001</span><span>Artist profile</span></div><h2>A bridge between<br />cultures and worlds.</h2></div>
        <div className="press-bio">
          <p>Born in the Czech Republic to Vietnamese parents and now based in Toronto, DCR MILDA is an international artist and DJ known for high-energy sets and viral PLAYGRND performances.</p>
          <p>His sound moves across global house, Afro, baile funk, Latin, Amapiano, Asian club music, and edits—connecting different cultures through a shared physical language.</p>
          <p>A former dancer whose path changed after an injury, Milda committed himself to making people move in the way he once did. His work advocates for peace, love, hope, and representation across the three continents that shaped him.</p>
          <div className="press-actions"><PrintButton /><Link href="/booking" className="button">Booking enquiry <ArrowUpRight /></Link></div>
        </div>
      </section>
      <section className="press-facts section-pad">
        <div className="section-code section-code-wide"><span>002</span><span>At a glance</span><span>Artist facts</span></div>
        <div className="fact-grid"><div><span>Origin</span><strong>Czech–Vietnamese</strong></div><div><span>Base</span><strong>Toronto, Canada</strong></div><div><span>DJ since</span><strong>2016</strong></div><div><span>Format</span><strong>Open format</strong></div><div><span>Sound</span><strong>Global house</strong></div><div><span>Set</span><strong>1—3 hours</strong></div></div>
      </section>
      <section className="press-images">
        <figure><Image src="/images/dcr-cyan.jpg" alt="DCR MILDA full-length cyan studio portrait" fill sizes="50vw" /><figcaption>Press portrait 01 / high-resolution source available</figcaption></figure>
        <figure><Image src="/images/dcr-red.jpg" alt="DCR MILDA red studio portrait" fill sizes="50vw" /><figcaption>Press portrait 02 / high-resolution source available</figcaption></figure>
      </section>
      <section className="rider-section section-pad">
        <div className="rider-title"><div className="section-code"><span>003</span><span>Technical</span></div><h2>Technical<br />rider</h2><p>All sound and lighting equipment must be supplied, tested, and connected by the venue.</p></div>
        <div className="rider-list"><div><span>Players</span><p>2× Pioneer CDJ-3000 or CDJ-2000NXS2</p></div><div><span>Mixer</span><p>DJM-S9 / S11, Rane SEVENTY-TWO, or DJM-900NXS2</p></div><div><span>Booth</span><p>Solid, stable DJ booth with nearby A/C power for at least three additional devices</p></div><div><span>Monitoring</span><p>One or two booth monitors at equal distance and ear height, controlled through BOOTH OUTPUT</p></div><div><span>Microphone</span><p>One wireless microphone, fully tested before soundcheck</p></div></div>
      </section>
      <section className="press-contact section-pad"><p className="eyebrow">Bookings / press / partnerships</p><a href="mailto:dcrmilda@gmail.com">dcrmilda@gmail.com</a><div>{socials.map((social) => <a href={social.href} target="_blank" rel="noreferrer" key={social.label}>{social.label} <ArrowUpRight /></a>)}</div></section>
    </main>
  );
}
