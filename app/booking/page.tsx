import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookingForm } from "@/components/booking-form";
import { ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = { title: "Booking", description: "Book DCR MILDA for clubs, festivals, fashion shows, private events, and brand experiences worldwide." };

export default function BookingPage() {
  return (
    <main id="main" className="inner-page booking-page">
      <section className="inner-hero">
        <Image src="/images/dcr-crowd.jpg" alt="DCR MILDA performing to a crowd" fill priority sizes="100vw" />
        <div className="inner-hero-shade" />
        <div className="inner-hero-copy">
          <p className="eyebrow">Worldwide booking / 2026—27</p>
          <h1>Bring DCR<br />to your room.</h1>
          <p>Clubs · Festivals · Fashion · Private events</p>
        </div>
      </section>
      <section className="booking-page-content section-pad">
        <div className="booking-note">
          <div className="section-code"><span>001</span><span>Enquiry</span></div>
          <h2>Tell us where<br />we&apos;re going.</h2>
          <p>Share the essentials below. The form prepares a structured email for the artist team, so no booking details disappear into a generic inbox.</p>
          <p className="eyebrow">Prefer email?<br /><a className="icon-link" href="mailto:dcrmilda@gmail.com">dcrmilda@gmail.com <ArrowUpRight /></a></p>
        </div>
        <BookingForm />
      </section>
      <section className="booking-rider section-pad">
        <div><span className="eyebrow">Performance profile</span><h3>Open format<br />Global house</h3></div>
        <ul><li><span>Based</span>Toronto / Worldwide</li><li><span>Set duration</span>1—3 hours</li><li><span>Available for</span>Club, festival, fashion, private</li><li><span>DJ since</span>2016</li></ul>
        <Link href="/press-kit" className="button">View technical rider <ArrowUpRight /></Link>
      </section>
    </main>
  );
}
