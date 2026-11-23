import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Gallery } from "@/components/gallery";
import { SectionHeading } from "@/components/site";
import projectVideo1 from "@/assets/videos/project-1.mp4";
import projectVideo2 from "@/assets/videos/project-2.mp4";
import projectVideo3 from "@/assets/videos/project-3.mp4";
import projectVideo4 from "@/assets/videos/project-4.mp4";
import projectVideo5 from "@/assets/videos/project-5.mp4";
import projectVideo6 from "@/assets/videos/project-6.mp4";
import projectVideo7 from "@/assets/videos/project-7.mp4";
import projectVideo8 from "@/assets/videos/project-8.mp4";

const projectVideos = [
  projectVideo1,
  projectVideo2,
  projectVideo3,
  projectVideo4,
  projectVideo5,
  projectVideo6,
  projectVideo7,
  projectVideo8,
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

export function ProjectVideos() {
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

  const visibleVideos = Array.from(
    { length: visibleCount },
    (_, offset) => (i + offset) % projectVideos.length,
  );

  return (
    <section className="section-wrap testimonials">
      <span className="eyebrow">Project showcase</span>
      <div className="testimonial-grid" aria-live="polite">
        {visibleVideos.map((videoIndex) => (
          <article className="testimonial-card" key={videoIndex}>
            <video
              src={projectVideos[videoIndex]}
              controls
              playsInline
              preload="metadata"
              aria-label={`Project video ${videoIndex + 1}`}
            />
          </article>
        ))}
      </div>
      <div className="testimonial-controls">
        <button
          aria-label="Previous projects"
          onClick={() => setI((i + projectVideos.length - 1) % projectVideos.length)}
        >
          ←
        </button>
        <span>
          {String(i + 1).padStart(2, "0")} / {String(projectVideos.length).padStart(2, "0")}
        </span>
        <button
          aria-label="Next projects"
          onClick={() => setI((i + 1) % projectVideos.length)}
        >
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
