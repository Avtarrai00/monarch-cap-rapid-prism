import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="shell">
        <div className="hero-kicker kicker enter">
          <span>Portfolio</span>
          <span>Vol. 08</span>
          <span>Ludhiana</span>
        </div>
        <div className="hero-grid">
          <h1 id="hero-title" className="display enter enter-2">
            Design for trade, type, and tools.
          </h1>
          <div className="hero-dek enter enter-3">
            <p>
              I'm Avtar Singh, a designer and developer working from Ludhiana. The practice is
              small on purpose: interfaces for markets, print, and the tools people already trust.
            </p>
            <div className="hero-actions">
              <Button asChild>
                <a href="#work">See the work</a>
              </Button>
              <Button asChild variant="secondary">
                <a href="#contact">Write a note</a>
              </Button>
            </div>
          </div>
        </div>
        <dl className="hero-facts">
          <div>
            <dt>01</dt>
            <dd>Based in Ludhiana</dd>
          </div>
          <div>
            <dt>02</dt>
            <dd>Select commissions</dd>
          </div>
          <div>
            <dt>03</dt>
            <dd>Design and engineering</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
