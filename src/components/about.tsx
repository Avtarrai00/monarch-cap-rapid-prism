export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="shell about-grid">
        <div>
          <p className="kicker">02 — About</p>
          <h2 id="about-title" className="sr-only">
            About
          </h2>
          <p className="pull">I prefer work you can hold — a rate, a cloth, a page.</p>
        </div>
        <div>
          <div className="about-copy">
            <p>
              I grew up around workshops in Ludhiana, where a thing is judged by whether it works
              in the hand. That is still the test.
            </p>
            <p>
              I design and build product interfaces, and I take on editorial and identity work when
              the material is interesting — grain markets, handloom, print, internal tools. Most
              projects start with the workflow, not a moodboard.
            </p>
            <p>The studio is independent. I partner with small teams and stay through the build.</p>
          </div>
          <dl className="fact-list mt-8">
            <div>
              <dt>Place</dt>
              <dd>Ludhiana, Punjab</dd>
            </div>
            <div>
              <dt>Practice</dt>
              <dd>Independent since 2019</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Product, brand, editorial, systems</dd>
            </div>
            <div>
              <dt>Now</dt>
              <dd>Open for select commissions</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
