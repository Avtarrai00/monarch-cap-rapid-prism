import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#practice", label: "Practice" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [edged, setEdged] = useState(false);

  useEffect(() => {
    const onScroll = () => setEdged(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header" data-edge={edged || open ? "true" : "false"}>
      <a className="skip-link" href="#work">
        Skip to work
      </a>
      <div className="shell header-bar">
        <a className="wordmark" href="#top">
          Avtar Singh
        </a>
        <nav className="desktop-nav" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} className="nav-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="menu-button press"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>
      <div className="mobile-nav" id="mobile-nav" data-open={open ? "true" : "false"}>
        <div className="mobile-nav-inner">
          <nav className="shell" aria-label="Mobile">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
