"use client";

import { Arrow } from "./Arrow";
import { BookDemoButton } from "./DemoModal";

const FALLBACKS = [
  "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?auto=format&fit=crop&w=2880&q=80",
  "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=2880&q=80",
  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=2880&q=80",
  "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&fit=crop&w=2880&q=80",
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2880&q=80",
];

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-photo" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=2880&q=80"
          data-fallbacks={JSON.stringify(FALLBACKS)}
          alt=""
          onError={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            try {
              const f = JSON.parse(img.dataset.fallbacks || "[]") as string[];
              const next = f.shift();
              if (next) {
                img.src = next;
                img.dataset.fallbacks = JSON.stringify(f);
              }
            } catch {
              /* ignore */
            }
          }}
        />
      </div>
      <div className="container hero-content">
        <p className="eyebrow">
          <span className="eyebrow-dot"></span> Short-term rental management · Owner-operated
        </p>
        <h1 className="hero-headline">
          Your short-term rental, <em>beautifully</em> run.
        </h1>
        <p className="hero-sub">
          We handle the cleanings, the listings, the pricing, and the 2&nbsp;a.m.
          &ldquo;the wifi&rsquo;s down&rdquo; texts — so you don&rsquo;t have to.
        </p>
        <div className="hero-cta-row">
          <BookDemoButton className="btn btn-lg">
            Book a Demo
            <Arrow />
          </BookDemoButton>
          <span className="hero-meta">30 min · No pressure · Free property review</span>
        </div>
      </div>
      <div className="hero-cities">
        <span>Los Angeles</span>
        <span className="dot"></span>
        <span>San Francisco</span>
        <span className="dot"></span>
        <span>Detroit</span>
      </div>
    </section>
  );
}
