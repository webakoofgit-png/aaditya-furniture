import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageIntro, InquiryForm, SectionHeading } from "@/components/site";
import { images } from "@/lib/furniture-data";
import processShareIdea from "@/assets/process-share-idea.jpg";
import processChooseMaterials from "@/assets/process-choose-materials.jpg";
import processDesignConsultation from "@/assets/process-design-consultation.jpg";
import processProduction from "@/assets/process-production.jpg";
import processDelivery from "@/assets/process-delivery.jpg";
import customKitchen from "@/assets/custom-kitchen-configurator.png";
import kitchenForestWalnut from "@/assets/custom-kitchen-forest-walnut.png";
import kitchenMidnightLuxe from "@/assets/custom-kitchen-midnight-luxe.png";
import kitchenClayCashmere from "@/assets/custom-kitchen-clay-cashmere.png";
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

type KitchenSurface = "cabinet" | "worktop" | "backsplash";
type KitchenColors = Record<KitchenSurface, string>;
type KitchenSelections = Record<KitchenSurface, string>;

const kitchenThemes: Array<{
  name: string;
  mood: string;
  image: string;
  colors: KitchenColors;
}> = [
  {
    name: "Warm minimal",
    mood: "Ivory, champagne stone and a soft greige wall — bright, calm and timeless.",
    image: customKitchen,
    colors: { cabinet: "#e7dfcf", worktop: "#d7c7aa", backsplash: "#a89989" },
  },
  {
    name: "Forest & walnut",
    mood: "Muted forest green, warm white quartz and clay — grounded and naturally premium.",
    image: kitchenForestWalnut,
    colors: { cabinet: "#536456", worktop: "#e9dfce", backsplash: "#a66e55" },
  },
  {
    name: "Midnight luxe",
    mood: "Deep ink blue with pale marble and smoky grey for a sharp, architectural finish.",
    image: kitchenMidnightLuxe,
    colors: { cabinet: "#263646", worktop: "#e6e1d8", backsplash: "#767d80" },
  },
  {
    name: "Clay & cashmere",
    mood: "Earthy terracotta, creamy quartz and cashmere beige — warm and welcoming.",
    image: kitchenClayCashmere,
    colors: { cabinet: "#a5654f", worktop: "#eadbc3", backsplash: "#b9a78e" },
  },
];

const surfaceOptions: Record<
  KitchenSurface,
  Array<{ name: string; value: string; theme: string }>
> = {
  cabinet: [
    { name: "Warm ivory", value: "#e7dfcf", theme: "Warm minimal" },
    { name: "Forest green", value: "#536456", theme: "Forest & walnut" },
    { name: "Midnight blue", value: "#263646", theme: "Midnight luxe" },
    { name: "Terracotta", value: "#a5654f", theme: "Clay & cashmere" },
  ],
  worktop: [
    { name: "Champagne", value: "#d7c7aa", theme: "Warm minimal" },
    { name: "Warm white", value: "#e9dfce", theme: "Forest & walnut" },
    { name: "Pale marble", value: "#e6e1d8", theme: "Midnight luxe" },
    { name: "Cashmere", value: "#eadbc3", theme: "Clay & cashmere" },
  ],
  backsplash: [
    { name: "Soft greige", value: "#a89989", theme: "Warm minimal" },
    { name: "Clay", value: "#a66e55", theme: "Forest & walnut" },
    { name: "Smoky grey", value: "#767d80", theme: "Midnight luxe" },
    { name: "Warm limestone", value: "#b9a78e", theme: "Clay & cashmere" },
  ],
};

const surfaceNames: Record<KitchenSurface, string> = {
  cabinet: "Cabinet finish",
  worktop: "Countertop",
  backsplash: "Backsplash",
};

function Custom() {
  const [step, setStep] = useState(0);
  const [surface, setSurface] = useState<KitchenSurface>("cabinet");
  const [kitchenSelections, setKitchenSelections] = useState<KitchenSelections>({
    cabinet: kitchenThemes[0]!.name,
    worktop: kitchenThemes[0]!.name,
    backsplash: kitchenThemes[0]!.name,
  });

  const themeByName = (name: string) =>
    kitchenThemes.find((theme) => theme.name === name) ?? kitchenThemes[0]!;
  const selectedThemeNames = Object.values(kitchenSelections);
  const activeTheme = selectedThemeNames.every((name) => name === selectedThemeNames[0])
    ? selectedThemeNames[0]!
    : "Custom combination";
  const kitchenColors: KitchenColors = {
    cabinet: themeByName(kitchenSelections.cabinet).colors.cabinet,
    worktop: themeByName(kitchenSelections.worktop).colors.worktop,
    backsplash: themeByName(kitchenSelections.backsplash).colors.backsplash,
  };

  const chooseTheme = (theme: (typeof kitchenThemes)[number]) => {
    setKitchenSelections({
      cabinet: theme.name,
      worktop: theme.name,
      backsplash: theme.name,
    });
  };

  const chooseSurfaceColor = (themeName: string) => {
    setKitchenSelections((current) => ({ ...current, [surface]: themeName }));
  };

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
      <section className="kitchen-studio-section">
        <div className="section-wrap">
          <SectionHeading
            eyebrow="Interactive kitchen studio"
            title="See your palette before you choose."
            copy="Select a kitchen element in the image, then try a finish — or begin with one of our designer-curated combinations."
          />
          <div className="kitchen-studio">
            <div className="kitchen-preview">
              <img
                className="kitchen-render kitchen-render-base"
                src={customKitchen}
                alt="Fully furnished L-shaped modular kitchen with independently configurable finishes"
                width={1680}
                height={945}
              />
              <svg
                className="kitchen-material-layers"
                viewBox="0 0 1680 945"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <clipPath id="cabinet-material-mask">
                    <polygon points="444,142 620,142 620,372 444,372" />
                    <polygon points="1162,84 1312,78 1312,345 1162,345" />
                    <polygon points="1312,78 1541,70 1541,559 1312,559" />
                    <polygon points="126,516 552,516 552,693 126,836" />
                    <polygon points="552,520 982,520 982,707 552,693" />
                  </clipPath>
                  <clipPath id="worktop-material-mask">
                    <polygon points="118,487 1159,487 1163,532 126,537" />
                    <polygon points="982,546 1680,545 1680,651 982,621" />
                  </clipPath>
                  <clipPath id="backsplash-material-mask">
                    <polygon points="473,348 1161,348 1161,489 473,489" />
                  </clipPath>
                </defs>
                <image
                  key={`cabinet-${kitchenSelections.cabinet}`}
                  className="kitchen-material-layer"
                  href={themeByName(kitchenSelections.cabinet).image}
                  width="1680"
                  height="945"
                  clipPath="url(#cabinet-material-mask)"
                />
                <image
                  key={`worktop-${kitchenSelections.worktop}`}
                  className="kitchen-material-layer"
                  href={themeByName(kitchenSelections.worktop).image}
                  width="1680"
                  height="945"
                  clipPath="url(#worktop-material-mask)"
                />
                <image
                  key={`backsplash-${kitchenSelections.backsplash}`}
                  className="kitchen-material-layer"
                  href={themeByName(kitchenSelections.backsplash).image}
                  width="1680"
                  height="945"
                  clipPath="url(#backsplash-material-mask)"
                />
              </svg>
              <button
                type="button"
                className="kitchen-hotspot hotspot-cabinet"
                aria-pressed={surface === "cabinet"}
                onClick={() => setSurface("cabinet")}
              >
                <span>1</span> Cabinets
              </button>
              <button
                type="button"
                className="kitchen-hotspot hotspot-worktop"
                aria-pressed={surface === "worktop"}
                onClick={() => setSurface("worktop")}
              >
                <span>2</span> Countertop
              </button>
              <button
                type="button"
                className="kitchen-hotspot hotspot-backsplash"
                aria-pressed={surface === "backsplash"}
                onClick={() => setSurface("backsplash")}
              >
                <span>3</span> Backsplash
              </button>
              <div className="kitchen-preview-note">Photorealistic preview · {activeTheme}</div>
            </div>
            <aside className="kitchen-controls" aria-label="Kitchen colour controls">
              <div className="kitchen-control-heading">
                <span className="eyebrow">Now editing</span>
                <h3 className="serif">{surfaceNames[surface]}</h3>
                <p>
                  Choose a finish below to see it as part of a fully coordinated, realistically
                  rendered kitchen.
                </p>
              </div>
              <div className="surface-switcher" aria-label="Choose kitchen element">
                {(Object.keys(surfaceNames) as KitchenSurface[]).map((item) => (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={surface === item}
                    onClick={() => setSurface(item)}
                  >
                    {surfaceNames[item]}
                  </button>
                ))}
              </div>
              <div
                className="finish-options"
                role="group"
                aria-label={`${surfaceNames[surface]} colours`}
              >
                {surfaceOptions[surface].map((option) => (
                  <button
                    key={option.name}
                    type="button"
                    className="finish-chip"
                    aria-label={option.name}
                    aria-pressed={kitchenSelections[surface] === option.theme}
                    title={option.name}
                    onClick={() => chooseSurfaceColor(option.theme)}
                  >
                    <span style={{ backgroundColor: option.value }} />
                    {option.name}
                  </button>
                ))}
              </div>
              <div className="theme-summary" aria-live="polite">
                <span>Current palette</span>
                <strong>{activeTheme}</strong>
                <div className="theme-summary-swatches" aria-hidden="true">
                  {(Object.keys(kitchenColors) as KitchenSurface[]).map((item) => (
                    <i key={item} style={{ backgroundColor: kitchenColors[item] }} />
                  ))}
                </div>
              </div>
            </aside>
          </div>
          <div className="kitchen-themes">
            <div className="kitchen-themes-intro">
              <span className="eyebrow">Our best combinations</span>
              <h3 className="serif">Designer-curated palettes</h3>
            </div>
            <div className="theme-grid">
              {kitchenThemes.map((theme) => (
                <button
                  key={theme.name}
                  type="button"
                  className="theme-card"
                  aria-pressed={activeTheme === theme.name}
                  onClick={() => chooseTheme(theme)}
                >
                  <span className="theme-card-swatches" aria-hidden="true">
                    {(Object.keys(theme.colors) as KitchenSurface[]).map((item) => (
                      <i key={item} style={{ backgroundColor: theme.colors[item] }} />
                    ))}
                  </span>
                  <strong>{theme.name}</strong>
                  <small>{theme.mood}</small>
                </button>
              ))}
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
