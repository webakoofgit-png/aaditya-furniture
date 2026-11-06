import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageIntro, InquiryForm } from "@/components/site";
import { images } from "@/lib/furniture-data";
export const Route = createFileRoute("/wholesale")({
  head: () => ({ meta: [{ title: "Trade & Bulk Enquiries | Aaditya Furniture" }] }),
  component: Wholesale,
});
function Wholesale() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="For the spaces you shape"
        title="Big ideas. Considered together."
        description="A starting point for architects, interior designers, builders, hospitality and workplace teams."
        image={images.office}
      />
      <section className="section-wrap page-section">
        <div className="value-grid">
          {[
            [
              "Residential developments",
              "Explore coordinated furniture selections for apartments and shared spaces.",
            ],
            [
              "Hospitality & workplaces",
              "Discuss seating, tables, storage and furnishing requirements for your project.",
            ],
            [
              "Design professionals",
              "Bring your specifications and finish palette to a collaborative conversation.",
            ],
          ].map(([t, d]) => (
            <article key={t}>
              <h3 className="serif">{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
        <p className="demo-note">
          Trade and bulk services are proposed demo offerings. Availability, minimum quantities,
          lead times and terms require confirmation.
        </p>
      </section>
      <section className="section-wrap page-section form-layout">
        <div>
          <span className="eyebrow">Trade enquiries</span>
          <h2 className="serif">
            Let's look at
            <br />
            the bigger picture.
          </h2>
          <p>Tell us about your project to prepare a bulk quotation request.</p>
        </div>
        <InquiryForm
          title="Request a bulk quotation"
          fields={[
            { name: "business", label: "Business name", required: true },
            { name: "name", label: "Contact person", required: true },
            { name: "phone", label: "Phone", type: "tel", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            {
              name: "category",
              label: "Product category",
              required: true,
              options: ["Seating", "Bedroom", "Dining", "Storage", "Office", "Mixed requirements"],
            },
            { name: "quantity", label: "Approximate quantity", type: "number", required: true },
            {
              name: "requirements",
              label: "Project requirements",
              type: "textarea",
              required: true,
            },
          ]}
        />
      </section>
    </PageShell>
  );
}
