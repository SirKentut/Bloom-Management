export function WhatWeDo() {
  return (
    <section className="what-we-do">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">What we do</span>
          <h2 className="section-title">
            Everything between guest checkout <em>and</em> the next 5-star review.
          </h2>
          <p className="section-sub">
            Three things owners hand to us on day one — and never think about again.
          </p>
        </div>

        {/* Block 01: Listings */}
        <div className="feature-block">
          <div className="feature-text">
            <div className="feature-meta">
              <span className="feature-num">01</span>
              <span className="feature-tag">Listing &amp; Platform Management</span>
            </div>
            <h3 className="feature-title">One listing. Every platform. Always in sync.</h3>
            <p className="feature-body">
              Airbnb, Vrbo, Booking.com — we write the copy, shoot or polish the photos,
              and keep your calendar, pricing, and house rules identical across every
              channel. A guest booking from anywhere gets the same flawless first
              impression.
            </p>
          </div>
          <div className="feature-visual visual-listings">
            <div className="listing-card lc-1">
              <div className="lc-photo">
                <span className="lc-platform airbnb">airbnb</span>
              </div>
              <div className="lc-body">
                <div className="lc-title">Sunlit Silver Lake Bungalow</div>
                <div className="lc-meta">Los Angeles · 2 bd · ★ 4.97 (142)</div>
                <div className="lc-price">
                  <strong>$248</strong> / night
                </div>
              </div>
            </div>
            <div className="listing-card lc-2">
              <div className="lc-photo">
                <span className="lc-platform vrbo">Vrbo</span>
              </div>
              <div className="lc-body">
                <div className="lc-title">Sunlit Silver Lake Bungalow</div>
                <div className="lc-meta">Los Angeles · Sleeps 4 · ★ 4.9</div>
                <div className="lc-price">
                  <strong>$248</strong> / night
                </div>
              </div>
            </div>
            <div className="listing-card lc-3">
              <div className="lc-photo">
                <span className="lc-platform booking">Booking.com</span>
              </div>
              <div className="lc-body">
                <div className="lc-title">Sunlit Silver Lake Bungalow</div>
                <div className="lc-meta">Los Angeles · 9.4 Superb</div>
                <div className="lc-price">
                  <strong>$248</strong> / night
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Block 02: Maintenance */}
        <div className="feature-block reverse">
          <div className="feature-text">
            <div className="feature-meta">
              <span className="feature-num">02</span>
              <span className="feature-tag">Maintenance &amp; Vendors</span>
            </div>
            <h3 className="feature-title">Something breaks. We fix it. You sleep.</h3>
            <p className="feature-body">
              A vetted local network — plumbers, electricians, handymen, deep-clean
              crews — on standby in every market. We dispatch, manage the visit, and
              pay the invoice. You see a &ldquo;resolved&rdquo; note in the morning,
              usually before your guest noticed.
            </p>
          </div>
          <div className="feature-visual visual-maintenance">
            <div className="ticket-stack">
              <div className="ticket t1">
                <div className="ticket-icon">🚿</div>
                <div className="ticket-body">
                  <div className="ticket-title">Shower handle replacement</div>
                  <div className="ticket-meta">Venice property · 47 min</div>
                </div>
                <span className="ticket-status resolved">Resolved</span>
              </div>
              <div className="ticket t2">
                <div className="ticket-icon">🔑</div>
                <div className="ticket-body">
                  <div className="ticket-title">Smart-lock battery swap</div>
                  <div className="ticket-meta">Nob Hill · between stays</div>
                </div>
                <span className="ticket-status resolved">Resolved</span>
              </div>
              <div className="ticket t3">
                <div className="ticket-icon">🧊</div>
                <div className="ticket-body">
                  <div className="ticket-title">Fridge ice-maker repair</div>
                  <div className="ticket-meta">Corktown · vendor scheduled</div>
                </div>
                <span className="ticket-status progress">In progress</span>
              </div>
              <div className="ticket t4">
                <div className="ticket-icon">💡</div>
                <div className="ticket-body">
                  <div className="ticket-title">Hallway bulb (×3)</div>
                  <div className="ticket-meta">Silver Lake · queued for turnover</div>
                </div>
                <span className="ticket-status new">New</span>
              </div>
            </div>
          </div>
        </div>

        {/* Block 03: Revenue */}
        <div className="feature-block">
          <div className="feature-text">
            <div className="feature-meta">
              <span className="feature-num">03</span>
              <span className="feature-tag">Pricing &amp; Revenue</span>
            </div>
            <h3 className="feature-title">Earn more, without lifting a finger.</h3>
            <p className="feature-body">
              Nightly pricing tuned daily to your market — events, weather, competitor
              rates, last-minute demand. We capture the high-value nights you&rsquo;d
              miss on autopilot, and protect occupancy through the slow ones. Owners
              typically see 18–32% lift in the first quarter.
            </p>
          </div>
          <div className="feature-visual visual-revenue">
            <div className="chart-card">
              <div className="chart-head">
                <div>
                  <div className="chart-title">Q1 Revenue · Silver Lake</div>
                  <div className="chart-value">
                    $18,420 <span className="chart-delta">↑ 24.6%</span>
                  </div>
                </div>
              </div>
              <svg className="chart-svg" viewBox="0 0 320 130" preserveAspectRatio="none">
                <path
                  d="M0,90 L40,88 L80,85 L120,82 L160,80 L200,76 L240,72 L280,70 L320,66"
                  stroke="#b8a878"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                  fill="none"
                />
                <defs>
                  <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#d97a85" stopOpacity="0.25" />
                    <stop offset="1" stopColor="#d97a85" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,95 L40,82 L80,70 L120,58 L160,48 L200,40 L240,28 L280,22 L320,14 L320,130 L0,130 Z"
                  fill="url(#rev)"
                />
                <path
                  d="M0,95 L40,82 L80,70 L120,58 L160,48 L200,40 L240,28 L280,22 L320,14"
                  stroke="#d97a85"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="320" cy="14" r="4" fill="#d97a85" />
                <circle cx="320" cy="14" r="8" fill="#d97a85" opacity="0.2" />
              </svg>
              <div className="chart-x">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
              </div>
            </div>
            <div className="price-pill pp-1">
              <span className="dot"></span>Bloom-managed
            </div>
            <div className="price-pill pp-2">
              <span className="dot"></span>Market average
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
