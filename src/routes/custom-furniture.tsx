import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageIntro, InquiryForm, SectionHeading } from "@/components/site";
import { images } from "@/lib/furniture-data";
import processShareIdea from "@/assets/process-share-idea.jpg";
import processChooseMaterials from "@/assets/process-choose-materials.jpg";
import processDesignConsultation from "@/assets/process-design-consultation.jpg";
import processProduction from "@/assets/process-production.jpg";
import processDelivery from "@/assets/process-delivery.jpg";
export const Route = createFileRoute("/custom-furniture")({
  head: () => ({ meta: [{ title: "Custom Furniture | Aditya Furniture and Interior" }] }),
  component: Custom,
});
const steps = [
  {
    title: "Share your idea",
    description:
      "A sketch, a saved reference or the dimensions of your favourite corner. Every good piece starts with you.",
    image: processShareIdea,
    imageAlt: "A furniture concept being sketched beside a mood board and material samples",
  },
  {
    title: "Choose materials",
    description:
      "Choose laminate, thermo laminate, digital laminate, acrylic or natural wood veneer in colors and textures to suit your home.",
    image: processChooseMaterials,
    imageAlt: "Wood, fabric and finish samples being selected for a custom furniture piece",
  },
  {
    title: "Design consultation",
    description: "Discuss proportions, practical needs and the details that make the piece yours.",
    image: processDesignConsultation,
    imageAlt: "A designer and client reviewing a furniture drawing and material palette",
  },
  {
    title: "Production",
    description:
      "Once the design and quote are approved, confirm the making schedule with the team.",
    image: processProduction,
    imageAlt: "A furniture craftsperson hand-planing a walnut cabinet in the workshop",
  },
  {
    title: "Delivery",
    description:
      "Discuss access, installation requirements and delivery arrangements for your space.",
    image: processDelivery,
    imageAlt: "Installers carefully positioning a finished walnut cabinet in a home",
  },
];
function Custom() {
  const [step, setStep] = useState(0);
  return (
    <PageShell>
      <PageIntro
        eyebrow="Customized furniture · direct manufacturer"
        title="Furniture for your whole home."
        description="Beds, wardrobes, sofas, dining tables, TV units, shoe racks, study tables, dressing tables and more, made for your space."
        image={images.dining}
      />
      <section className="section-wrap page-section">
        <SectionHeading
          eyebrow="From first thought to final detail"
          title="A conversation, then a creation."
        />
        <div className="process-flow">
          <div className="process-tabs">
            {steps.map(({ title }, i) => (
              <button
                key={title}
                type="button"
                aria-pressed={step === i}
                aria-controls="process-panel"
                onClick={() => setStep(i)}
              >
                <span>0{i + 1}</span>
                {title}
              </button>
            ))}
          </div>
          <div className="process-description" id="process-panel" aria-live="polite">
            <div className="process-copy" key={`copy-${step}`}>
              <span className="eyebrow">Step 0{step + 1}</span>
              <h3 className="serif">{steps[step]!.title}</h3>
              <p>{steps[step]!.description}</p>
            </div>
            <div className="process-image">
              <img
                key={`image-${step}`}
                src={steps[step]!.image}
                alt={steps[step]!.imageAlt}
                width={1200}
                height={800}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="materials-section section-wrap">
        <SectionHeading
          eyebrow="Modular furniture finishes"
          title="Choose your finish."
          copy="All finishes are available in a wide range of colors, textures and designs as per your choice."
        />
        <div className="material-grid">
          {["Laminate", "Thermo laminate", "Digital laminate", "Acrylic", "Veneer"].map((m, i) => (
            <article key={m}>
              <div className={`material-swatch swatch-${i}`} />
              <h3>{m}</h3>
              <p>
                {m === "Veneer"
                  ? "Natural wood veneer · premium look"
                  : "Available in colors, textures and designs of your choice"}
              </p>
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
              options: [
                "Modular kitchen",
                "Beds",
                "Wardrobes",
                "Sofas",
                "Dining tables",
                "TV units",
                "Shoe racks",
                "Study tables",
                "Dressing tables",
                "Other",
              ],
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
