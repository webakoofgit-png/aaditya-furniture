import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageIntro, InquiryForm, SectionHeading } from "@/components/site";
import { images } from "@/lib/furniture-data";
export const Route = createFileRoute("/custom-furniture")({
  head: () => ({ meta: [{ title: "Bespoke Furniture | Aaditya Furniture" }] }),
  component: Custom,
});
const steps = [
  [
    "Share your idea",
    "A sketch, a saved reference or the dimensions of your favourite corner. Every good piece starts with you.",
  ],
  [
    "Choose materials",
    "Discover walnut tones, natural textures and upholstery palettes that sit beautifully together.",
  ],
  [
    "Design consultation",
    "Discuss proportions, practical needs and the details that make the piece yours.",
  ],
  [
    "Production",
    "Once the design and quote are approved, confirm the making schedule with the team.",
  ],
  [
    "Delivery",
    "Discuss access, installation requirements and delivery arrangements for your space.",
  ],
];
function Custom() {
  const [step, setStep] = useState(0);
  return (
    <PageShell>
      <PageIntro
        eyebrow="Bespoke, by you"
        title="Your space. Your story."
        description="Some pieces are found. Others begin with an idea only you could have."
        image={images.dining}
      />
      <section className="section-wrap page-section">
        <SectionHeading
          eyebrow="From first thought to final detail"
          title="A conversation, then a creation."
        />
        <div className="process-tabs">
          {steps.map(([title], i) => (
            <button key={title} aria-pressed={step === i} onClick={() => setStep(i)}>
              <span>0{i + 1}</span>
              {title}
            </button>
          ))}
        </div>
        <div className="process-description" aria-live="polite">
          <h3 className="serif">{steps[step]![0]}</h3>
          <p>{steps[step]![1]}</p>
        </div>
      </section>
      <section className="materials-section section-wrap">
        <SectionHeading eyebrow="A palette of possibilities" title="Feel the difference." />
        <div className="material-grid">
          {["Natural walnut", "Smoked oak", "Ivory linen", "Forest upholstery"].map((m, i) => (
            <article key={m}>
              <div className={`material-swatch swatch-${i}`} />
              <h3>{m}</h3>
              <p>Illustrative finish · samples on consultation</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section-wrap page-section form-layout">
        <div>
          <span className="eyebrow">Make it yours</span>
          <h2 className="serif">
            Start with
            <br />a little inspiration.
          </h2>
          <p>
            Share your ideas and prepare a consultation enquiry. Materials, feasibility and
            estimates are confirmed together.
          </p>
        </div>
        <InquiryForm
          title="Your bespoke brief"
          fields={[
            { name: "name", label: "Name", required: true },
            { name: "phone", label: "Phone", type: "tel", required: true },
            {
              name: "type",
              label: "Furniture type",
              required: true,
              options: ["Sofa & seating", "Bed", "Dining", "Storage", "Office", "Other"],
            },
            {
              name: "budget",
              label: "Budget range",
              options: [
                "To be discussed",
                "Under ₹50,000",
                "₹50,000–₹1 lakh",
                "₹1–3 lakh",
                "Above ₹3 lakh",
              ],
            },
            {
              name: "requirements",
              label: "Requirements / dimensions",
              type: "textarea",
              required: true,
            },
            { name: "message", label: "Additional message", type: "textarea" },
          ]}
        />
      </section>
    </PageShell>
  );
}
