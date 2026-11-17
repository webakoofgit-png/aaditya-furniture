import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageIntro, PageShell, SectionHeading } from "@/components/site";
import { images } from "@/lib/furniture-data";
import { services } from "@/lib/service-data";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [{ title: "Modular Kitchen & Furniture | Aditya Furniture and Interior" }],
  }),
  component: Collections,
});

const furnitureFinishes = [
  ["Laminate", "A wide range of durable colors, textures and designs."],
  ["Thermo laminate", "Seamless shaped finishes for modern modular furniture."],
  ["Digital laminate", "Decorative printed designs and statement surfaces."],
  ["Acrylic", "Smooth, premium high-gloss and contemporary finishes."],
  ["Natural veneer", "Natural wood veneer with a warm, premium look."],
];

const manufacturingStandards = [
  ["Boards & plywood", "BWP plywood from Greenply or Century, plus HDHMR for suitable applications."],
  ["Laminates", "Greenlam, Merino and an extensive choice of mica, colors and textures."],
  ["Hardware", "Hettich, Hafele and Godrej hardware options selected for the project."],
];

function Collections() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Our services"
        title="Everything your home needs."
        description="Direct manufacturing and end-to-end interior work, tailored to your space and choice."
        image={images.sofa}
      />
      <section className="section-wrap page-section">
        <SectionHeading
          eyebrow="Aditya Furniture and Interior"
          title="From individual furniture to the whole home."
          copy="We are manufacturers, providing design-to-installation interior solutions."
        />
        <div className="value-grid service-page-grid">
          {services.map((service, index) => (
            <article key={service.id}>
              <Link
                to="/services/$serviceId"
                params={{ serviceId: service.id }}
                className="service-card-link"
                aria-label={`Explore ${service.name}`}
              >
                <div className="service-card-image image-reveal">
                  <img src={service.image} alt={service.imageAlt} loading="lazy" />
                </div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3 className="serif">
                  {service.name} <ArrowUpRight size={17} />
                </h3>
                <p>{service.shortDescription}</p>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="section-wrap page-section">
        <SectionHeading
          eyebrow="Modular furniture finishes"
          title="Every finish, chosen around your home."
          copy="All finishes are available in a wide range of colors, textures and designs according to customer choice."
        />
        <div className="value-grid">
          {furnitureFinishes.map(([title, description], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3 className="serif">{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section-wrap page-section">
        <SectionHeading
          eyebrow="Made in our own factory"
          title="Specified with trusted materials."
          copy="No middleman: we manufacture the furniture ourselves and offer premium material and hardware choices."
        />
        <div className="value-grid">
          {manufacturingStandards.map(([title, description], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3 className="serif">{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
