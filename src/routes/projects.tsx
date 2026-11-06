import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/gallery";
import { PageShell, PageIntro } from "@/components/site";
import { projectGallery, images } from "@/lib/furniture-data";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [{ title: "Spaces & Inspiration | Aaditya Furniture" }] }),
  component: Projects,
});
function Projects() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="The spaces between"
        title="A feeling, brought to life."
        description="An inspiration journal of warm interiors, thoughtful furniture and possibilities for your space."
        image={images.hero}
      />
      <section className="section-wrap page-section">
        <p className="demo-note">
          Inspiration gallery · illustrative imagery, not verified Aaditya projects.
        </p>
        <Gallery />
      </section>
    </PageShell>
  );
}
