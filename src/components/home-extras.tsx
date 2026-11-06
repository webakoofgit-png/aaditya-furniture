import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Gallery } from "@/components/gallery";
import { SectionHeading } from "@/components/site";
const quotes = [
  "A space that feels collected, comfortable and entirely your own.",
  "Thoughtful materials and personal details can make an everyday room feel special.",
  "From an initial idea to a considered piece, a conversation makes all the difference.",
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
  return (
    <section className="section-wrap testimonials">
      <span className="eyebrow">Words for the way we live</span>
      <blockquote>“{quotes[i]}”</blockquote>
      <p className="demo-note" style={{ marginInline: "auto" }}>
        Demo testimonial placeholder {i + 1} of {quotes.length} · sample copy, not a customer
        review.
      </p>
      <button
        aria-label="Previous testimonial"
        onClick={() => setI((i + quotes.length - 1) % quotes.length)}
      >←</button>
      <button aria-label="Next testimonial" onClick={() => setI((i + 1) % quotes.length)}>→</button>
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
            <span className="text-link">Explore the process ↗</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
