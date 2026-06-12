"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration: number = 2000, active: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [active, target, duration]);

  return count;
}

export function Credentials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const count1 = useCountUp(40, 2000, hasAnimated);
  const count2 = useCountUp(2, 2000, hasAnimated);
  const count3 = useCountUp(3, 2000, hasAnimated);

  return (
    <section className="credentials" ref={sectionRef}>
      <div className="container creds-row">
        <div className="cred cred-1">
          <div className="cred-num">
            {count1}<span className="accent">+</span>
          </div>
          <div className="cred-label">Properties under active management</div>
        </div>
        <div className="cred cred-2">
          <div className="cred-num">
            ${count2}M<span className="accent">+</span>
          </div>
          <div className="cred-label">In owner property value managed</div>
        </div>
        <div className="cred cred-3">
          <div className="cred-num">{count3}</div>
          <div className="cred-label">Markets · LA, San Francisco, Detroit</div>
        </div>
      </div>
    </section>
  );
}
