const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#practice", label: "Practice" },
  { href: "#contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-name">Avtar Singh</p>
          <p className="footer-dek">
            Designer and developer. A small practice for interfaces that stay out of the way.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <nav className="footer-links" aria-label="Footer">
            <p className="footer-label">Index</p>
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="footer-meta">
            <p className="footer-label">Studio</p>
            <p>Ludhiana, Punjab</p>
            <p>India</p>
            <p className="mt-3">
              <a href="#contact">Start a note</a>
            </p>
          </div>
        </div>
      </div>
      <div className="shell footer-rule">
        <p>© 2026 Avtar Singh</p>
        <p>Fraunces for display. Outfit for text.</p>
      </div>
    </footer>
  );
}
