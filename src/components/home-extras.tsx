import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Gallery } from "@/components/gallery";
import { SectionHeading } from "@/components/site";

const quotes = [
  "A thoughtfully designed home brings comfort to the moments that matter.",
  "The right furniture makes every corner feel like it belongs to you.",
  "From kitchen to living room, a considered design brings the whole home together.",
  "Made-to-fit furniture helps turn an idea for your home into a space you can live in.",
  "Beautiful finishes and practical details make a home feel distinctly yours.",
  "One plan, thoughtful workmanship and a home brought together from end to end.",
];

export function HomeGallery() {
  return (
    <section className="section-wrap page-section">
      <SectionHeading
        eyebrow="Spaces with soul"
        title="The art of feeling at home."
        copy="An inspiration journal. Illustrative spaces, ready for your imagination."
        linkText="Explore the gallery"
        linkTo="/projects"
      />
      <Gallery />
    </section>
  );
}

export function Testimonials() {
  const [i, setI] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 2 : 4);
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setI((current) => (current + 1) % quotes.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, []);

  const visibleQuotes = Array.from(
    { length: visibleCount },
    (_, offset) => (i + offset) % quotes.length,
  );

  return (
    <section className="section-wrap testimonials">
      <span className="eyebrow">Words for the way we live</span>
      <div className="testimonial-grid" aria-live="polite">
        {visibleQuotes.map((quoteIndex) => (
          <article className="testimonial-card" key={quoteIndex}>
            <span className="testimonial-mark" aria-hidden="true">
              “
            </span>
            <blockquote>{quotes[quoteIndex]}</blockquote>
            <span className="eyebrow">Home interior inspiration</span>
          </article>
        ))}
      </div>
      <p className="demo-note">Sample testimonials · placeholder copy, not customer reviews.</p>
      <div className="testimonial-controls">
        <button
          aria-label="Previous testimonials"
          onClick={() => setI((i + quotes.length - 1) % quotes.length)}
        >
          ←
        </button>
        <span>
          {String(i + 1).padStart(2, "0")} / {String(quotes.length).padStart(2, "0")}
        </span>
        <button aria-label="Next testimonials" onClick={() => setI((i + 1) % quotes.length)}>
          →
        </button>
      </div>
    </section>
  );
}
export function HomeProcess() {
  return (
    <section className="section-wrap page-section">
      <SectionHeading eyebrow="An idea, made real" title="A piece that is entirely yours." />
      <div className="process-tabs">
        {[
          "Share your idea",
          "Choose materials",
          "Design consultation",
          "Production",
          "Delivery",
        ].map((s, i) => (
          <Link key={s} to="/custom-furniture" className="home-step">
            <span className="eyebrow">0{i + 1}</span>
            <h3 className="serif">{s}</h3>
            <span className="text-link">Explore the process →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
