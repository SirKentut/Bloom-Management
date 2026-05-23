import { BloomLogo } from "./BloomLogo";
import { Arrow } from "./Arrow";

export function FinalCta() {
  return (
    <section className="final-cta" id="book">
      <BloomLogo className="final-cta-flower" monochrome />
      <div className="container final-cta-inner">
        <h2>
          Let&rsquo;s run your STR like it&rsquo;s <em>our own.</em>
        </h2>
        <p>
          30-minute call. We&rsquo;ll walk your listing, find what&rsquo;s leaving money
          on the table, and tell you straight whether Bloom is the right fit. Either way
          you leave with a free property review.
        </p>
        <a className="btn btn-lg" href="#">
          Book a Demo
          <Arrow />
        </a>
        <div className="final-cta-meta">
          <span>No long-term contracts</span>
          <span className="sep">·</span>
          <span>Onboarding in 14 days</span>
          <span className="sep">·</span>
          <span>Real human on day one</span>
        </div>
      </div>
    </section>
  );
}
