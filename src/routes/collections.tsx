import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, PageShell, SectionHeading } from "@/components/site";
import { images } from "@/lib/furniture-data";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [{ title: "Modular Kitchen & Furniture | Aditya Furniture and Interior" }],
  }),
  component: Collections,
});

const serviceCards = [
  [
    "Modular kitchen",
    "Customized L-shape, U-shape, parallel and island layouts with premium materials, hardware and finishes.",
  ],
  [
    "Customized furniture",
    "Beds, wardrobes, sofas, dining tables, TV units, shoe racks, study tables, dressing tables and more, made by us.",
  ],
  ["False ceiling", "POP, gypsum, grid and designer false ceilings with integrated lighting."],
  [
    "Wall painting",
    "Asian Paints, Berger, Dulux, Nerolac and all other leading brands. Plastic paint, emulsion, lustre, enamel, texture, Royale, Tractor, distemper, PU, Duco and other finishes.",
  ],
  [
    "Wall panelling",
    "WPC louvers, fluted and 3D panels, PVC, wooden and veneer, charcoal louvers, MDF CNC jali, HDHMR, fabric upholstered, metal PVD, stone or marble cladding, glass and mirror, acoustic, backlight with LED.",
  ],
  [
    "Total home interior",
    "End-to-end service from measurement and 3D design through manufacturing and installation.",
  ],
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
        <div className="value-grid">
          {serviceCards.map(([title, description], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3 className="serif">{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
