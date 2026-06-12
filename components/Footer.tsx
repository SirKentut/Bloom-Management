import { BloomLogo } from "./BloomLogo";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <a className="brand" href="#">
              <BloomLogo className="brand-logo" />
              <span>Bloom</span>
            </a>
            <p className="footer-tagline">
              Owner-operated short-term rental management. Cleanings, listings, pricing,
              and the 2&nbsp;a.m. stuff — handled.
            </p>
          </div>
          <div className="footer-col">
            <h4>Markets</h4>
            <ul>
              <li>Los Angeles</li>
              <li>San Francisco</li>
              <li>Detroit</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get in touch</h4>
            <ul>
              <li>
                <a href="#book">Book a demo</a>
              </li>
              <li>
                <a href="mailto:pierreharbin@bloomcleaning.org">pierreharbin@bloomcleaning.org</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Bloom Management. All rights reserved.</span>
          <span>Built with care in LA · SF · Detroit</span>
        </div>
      </div>
    </footer>
  );
}
