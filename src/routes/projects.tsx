import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/gallery";
import { PageShell, PageIntro } from "@/components/site";
import { images } from "@/lib/furniture-data";
export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [{ title: "Interior Ideas | Aditya Furniture and Interior" }] }),
  component: Projects,
});
function Projects() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Service & product gallery"
        title="Total Home Interiors, Manufactured for Life."
        description="Explore modular kitchens, wardrobes, ceilings, living spaces, bedrooms and complete home interior references."
        image={images.hero}
      />
      <section className="section-wrap page-section">
        <p className="demo-note">
          Reference imagery for inspiration. Contact us to discuss a design for your home.
        </p>
        <Gallery />
      </section>
    </PageShell>
  );
}
