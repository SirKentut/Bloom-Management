import { BloomLogo } from "./BloomLogo";
import { Arrow } from "./Arrow";

export function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a className="brand" href="#">
          <BloomLogo className="brand-logo" />
          <span>Bloom</span>
        </a>
        <a className="btn btn-ghost" href="#book">
          Book a Demo
          <Arrow />
        </a>
      </div>
    </nav>
  );
}
