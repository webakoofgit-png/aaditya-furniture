import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/gallery";
import { PageShell, PageIntro } from "@/components/site";
import { projectGallery, images } from "@/lib/furniture-data";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [{ title: "Interior Ideas | Aditya Furniture and Interior" }] }),
  component: Projects,
});
function Projects() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Home interior inspiration"
        title="Ideas for your space."
        description="Explore interior and furniture references as you plan a home tailored to your needs."
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
