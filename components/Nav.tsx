import { BloomLogo } from "./BloomLogo";
import { Arrow } from "./Arrow";
import { BookDemoButton } from "./DemoModal";

export function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a className="brand" href="#">
          <BloomLogo className="brand-logo" />
          <span>Bloom</span>
        </a>
        <BookDemoButton className="btn btn-ghost">
          Book a Demo
          <Arrow />
        </BookDemoButton>
      </div>
    </nav>
  );
}
