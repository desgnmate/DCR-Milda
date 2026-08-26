import Image from "next/image";
import Link from "next/link";
import { siApplemusic, siSoundcloud, siSpotify } from "simple-icons";
import { gallery, releases, socials, tourDates } from "@/data/site";
import { BrandIcon } from "@/components/brand-icon";
import { HeroPlayer } from "@/components/hero-player";
import { ArrowRight, ArrowUpRight } from "@/components/icons";

export default function Home() {
  const upcomingLocations = tourDates.map((show) => show.city);

  return (
    <main id="main">
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-media">
          <Image className="hero-image-base" src="/images/dcr-hero-new.jpeg" alt="DCR MILDA in a blue leather portrait" fill priority sizes="100vw" />
          <Image className="hero-image-curtain" src="/images/dcr-hero-hover.jpeg" alt="" fill priority sizes="100vw" aria-hidden="true" />
        </div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-chrome">
          <div className="hero-transmission">
            <p className="eyebrow">Upcoming events</p>
            <div className="hero-tour-marquee" aria-label={`Upcoming tour locations: ${upcomingLocations.join(", ")}`}>
              <div className="hero-tour-track" aria-hidden="true">
                {[0, 1].map((loop) => (
                  <span className="hero-tour-loop" key={loop}>
                    {upcomingLocations.map((location, index) => (
                      <span className="hero-tour-location" key={`${loop}-${location}-${index}`}>
                        {location}<i>·</i>
                      </span>
                    ))}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="hero-lockup">
          <h1 className="hero-title" id="hero-title"><span className="hero-line"><span>DCR MILDA</span></span></h1>
          <p className="hero-edition">Global house / worldwide</p>
        </div>
        <HeroPlayer />
      </section>

      <section className="manifesto section-pad" aria-labelledby="manifesto-title">
        <div className="section-code"><span>001</span><span>The signal</span></div>
        <h2 id="manifesto-title" data-reveal>
          Three continents.<br />One dance floor.
        </h2>
        <div className="manifesto-foot" data-reveal>
          <p>Born in the Czech Republic to Vietnamese parents and based in Toronto, DCR MILDA connects rooms through global house—Afro, baile, Latin, Asian club sounds, and the unexpected spaces between them.</p>
          <p className="eyebrow">Peace · Love · Hope<br />Movement without borders</p>
        </div>
      </section>

      <section className="music-section" id="music" aria-labelledby="music-title">
        <div className="music-image" data-parallax>
          <Image src="/images/dcr-leather.jpg" alt="DCR MILDA in a black leather editorial portrait" fill sizes="(max-width: 820px) 100vw, 46vw" />
          <span className="image-code">STUDIO / 2026</span>
        </div>
        <div className="music-content section-pad">
          <div className="section-code"><span>002</span><span>Music</span></div>
          <h2 id="music-title" data-reveal>Latest<br />transmissions</h2>
          <div className="release-list" data-reveal>
            {releases.map((release, index) => (
              <a href={release.href} target="_blank" rel="noreferrer" className="release-row" key={release.title}>
                <span className="release-number">0{index + 1}</span>
                <span><strong>{release.title}</strong><small>{release.note}</small></span>
                <span className="release-year">{release.year}</span>
                <ArrowUpRight className="icon-arrow release-arrow" />
              </a>
            ))}
          </div>
          <div className="music-links">
            <a href="https://open.spotify.com/artist/5AS0k6J1K3MrVUtKKahv64" target="_blank" rel="noreferrer"><BrandIcon icon={siSpotify} /> Spotify</a>
            <a href="https://music.apple.com/us/artist/dcr-milda/1761169899" target="_blank" rel="noreferrer"><BrandIcon icon={siApplemusic} /> Apple Music</a>
            <a href="https://soundcloud.com/dcr-milda" target="_blank" rel="noreferrer"><BrandIcon icon={siSoundcloud} /> SoundCloud</a>
          </div>
        </div>
      </section>

      <section className="tour-section section-pad" id="tour" aria-labelledby="tour-title">
        <div className="section-code section-code-wide"><span>003</span><span>World tour / 2026</span><span>Remaining dates</span></div>
        <div className="tour-heading">
          <h2 id="tour-title" data-reveal>Meet me<br />somewhere</h2>
          <div className="tour-intro" data-reveal>
            <p>Different countries. Different cultures. Different dance floors. Same energy.</p>
            <span className="tour-link-note"><strong>{tourDates.filter((show) => show.href).length}</strong> direct ticket links live</span>
          </div>
        </div>
        <div className="tour-layout">
          <div className="tour-visual-pin">
            <div className="tour-visual" data-parallax>
              <Image src="/images/dcr-crowd.jpg" alt="DCR MILDA performing for a packed outdoor crowd" fill sizes="(max-width: 900px) 100vw, 40vw" />
              <span className="image-code">LIVE / ASIA</span>
            </div>
          </div>
          <div className="tour-list">
            {tourDates.map((show) => {
              const row = (
                <>
                  <time>{show.date}</time>
                  <span className="tour-city"><strong>{show.city}</strong><small>{show.venue}</small></span>
                  <span className="tour-country">{show.country}</span>
                  {show.href ? <ArrowUpRight /> : <span className="event-status">Info soon</span>}
                </>
              );

              return show.href ? (
                <a className="tour-row" href={show.href} target="_blank" rel="noreferrer" key={`${show.date}-${show.city}`} aria-label={`${show.city} tickets — ${show.venue}`}>
                  {row}
                </a>
              ) : (
                <div className="tour-row tour-row-muted" key={`${show.date}-${show.city}`}>
                  {row}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="story-section" id="story" aria-labelledby="story-title">
        <div className="story-copy section-pad">
          <div className="section-code"><span>004</span><span>Origin</span></div>
          <h2 id="story-title" data-reveal>He used to<br />dance.</h2>
          <div className="story-body" data-reveal>
            <p className="story-lead">An injury ended one path and opened another.</p>
            <p>DCR MILDA moved from dancer to DJ with a simple commitment: make people move in the way he once did. The result is a live language built from instinct, cultural memory, and high-energy improvisation.</p>
            <p>His viral PLAYGRND performances turned that energy into a global audience. The mission remains personal—build a bridge between cultures, then invite everyone across.</p>
            <Link href="/press-kit" className="text-link">Read the press kit <ArrowUpRight /></Link>
          </div>
        </div>
        <div className="story-image" data-parallax>
          <Image src="/images/dcr-red.jpg" alt="DCR MILDA smiling in a red studio portrait" fill sizes="(max-width: 820px) 100vw, 50vw" />
          <span className="image-code">PORTRAIT / TORONTO</span>
        </div>
      </section>

      <section className="archive-section" id="archive" aria-labelledby="archive-title">
        <div className="archive-head">
          <div className="section-code"><span>005</span><span>Visual archive</span></div>
          <h2 id="archive-title">On the road</h2>
          <p className="eyebrow archive-direction">Drag / scroll to travel <ArrowRight /></p>
        </div>
        <div className="archive-track">
          {gallery.map((item, index) => (
            <figure className={`archive-frame frame-${index + 1}`} key={item.src}>
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 820px) 82vw, 40vw" />
              <figcaption><span>{item.code}</span><span>0{index + 1} / 0{gallery.length}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="booking-cta" id="contact" aria-labelledby="booking-title">
        <Image src="/images/dcr-live-green.jpg" alt="DCR MILDA in motion during a live performance" fill sizes="100vw" />
        <div className="booking-shade" aria-hidden="true" />
        <div className="booking-copy section-pad">
          <div className="section-code"><span>006</span><span>Booking</span></div>
          <h2 id="booking-title" data-reveal>Bring the<br />world in.</h2>
          <div className="booking-actions" data-reveal>
            <Link className="button button-light" href="/booking">Start an enquiry <ArrowUpRight /></Link>
            <Link className="button button-ghost" href="/press-kit">Open press kit <ArrowUpRight /></Link>
          </div>
        </div>
      </section>

      <footer id="footer" className="site-footer section-pad">
        <div className="footer-top">
          <Image className="footer-logo" src="/images/dcr-logo.webp" alt="DCR MILDA official logo" width={600} height={600} />
          <div><span className="eyebrow">Booking</span><a href="mailto:dcrmilda@gmail.com">dcrmilda@gmail.com <ArrowUpRight /></a></div>
          <div><span className="eyebrow">Follow</span>{socials.map((social) => <a href={social.href} target="_blank" rel="noreferrer" key={social.label}>{social.label} <ArrowUpRight /></a>)}</div>
        </div>
        <div className="footer-bottom"><span>© 2026 DCR MILDA</span><span>Global house / Worldwide</span><span><Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link></span></div>
      </footer>
    </main>
  );
}
