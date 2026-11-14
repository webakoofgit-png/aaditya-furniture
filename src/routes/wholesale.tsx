import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageIntro, InquiryForm } from "@/components/site";
import { images } from "@/lib/furniture-data";
export const Route = createFileRoute("/wholesale")({
  head: () => ({ meta: [{ title: "Home Interior Enquiry | Aditya Furniture and Interior" }] }),
  component: Wholesale,
});
function Wholesale() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Complete home interiors"
        title="Let's plan your project."
        description="Tell us what you need for your home. Our team will discuss measurements, design, materials and execution."
        image={images.office}
      />
      <section className="section-wrap page-section form-layout">
        <div>
          <span className="eyebrow">Project enquiry</span>
          <h2 className="serif">
            From first idea
            <br />
            to finished home.
          </h2>
          <p>
            We provide measurement, 3D design, manufacturing and installation for complete home
            interior projects.
          </p>
        </div>
        <InquiryForm
          title="Tell us about your project"
          fields={[
            { name: "name", label: "Name", required: true },
            { name: "phone", label: "Phone", type: "tel", required: true },
            { name: "email", label: "Email", type: "email" },
            {
              name: "interest",
              label: "Service",
              options: [
                "Modular kitchen",
                "Customized furniture",
                "False ceiling",
                "Wall painting",
                "Wall panelling",
                "Complete home interior",
              ],
            },
            { name: "requirements", label: "Project details", type: "textarea", required: true },
          ]}
        />
      </section>
    </PageShell>
  );
}
