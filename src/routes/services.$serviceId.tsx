import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro, PageShell, SectionHeading, WhatsAppButton } from "@/components/site";
import { getService, services } from "@/lib/service-data";

export const Route = createFileRoute("/services/$serviceId")({
  loader: ({ params }) => {
    const service = getService(params.serviceId);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.name ?? "Interior Service"} | Aditya Furniture and Interior`,
      },
      {
        name: "description",
        content: loaderData?.shortDescription ?? "Complete home interior services in Pune.",
      },
    ],
  }),
  component: ServiceDetailPage,
});

const processSteps = [
  ["01", "Measure", "We understand the room, dimensions, access and practical requirements."],
  ["02", "Plan", "Layout, materials, finishes and service coordination are discussed with you."],
  ["03", "Manufacture", "Approved furniture elements move into planned factory production."],
  ["04", "Install", "Delivery, on-site execution and final installation are coordinated."],
] as const;

function ServiceDetailPage() {
  const service = Route.useLoaderData();
  const serviceIndex = services.findIndex((item) => item.id === service.id);
  const related = [1, 2, 3].map(
    (offset) => services[(serviceIndex + offset) % services.length]!,
  );

  return (
    <PageShell>
      <PageIntro
        eyebrow="Our services · Direct manufacturers"
        title={service.name}
        description={service.tagline}
        image={service.image}
      />

      <section className="section-wrap service-detail-intro">
        <div className="service-detail-visual">
          <Link to="/collections" className="service-back-link">
            <ArrowLeft size={15} /> All services
          </Link>
          <div className="service-detail-image image-reveal">
            <img src={service.image} alt={service.imageAlt} loading="lazy" />
          </div>
        </div>
        <div className="service-detail-copy">
          <span className="eyebrow">What we provide</span>
          <h2 className="serif">{service.tagline}</h2>
          <p>{service.description}</p>
          <div className="service-highlights">
            {service.highlights.map((highlight) => (
              <span key={highlight}>
                <Check size={15} /> {highlight}
              </span>
            ))}
          </div>
          <WhatsAppButton
            message={`Hello, I would like to discuss your ${service.name} service. Please share the next steps for a consultation.`}
          >
            Enquire about {service.name}
          </WhatsAppButton>
        </div>
      </section>

      {service.gallery && service.gallery.length > 0 && (
        <section className="section-wrap page-section service-gallery-section">
          <SectionHeading
            eyebrow={`${service.name} inspiration`}
            title={service.galleryTitle ?? `Explore our ${service.name.toLowerCase()} work.`}
          />
          <div className="service-gallery-grid">
            {service.gallery.map((item) => (
              <figure key={item.image} className="image-reveal">
                <img src={item.image} alt={item.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="service-options-section">
        <div className="section-wrap">
          <SectionHeading
            eyebrow={`${service.name} options`}
            title="Planned around your space and preferences."
          />
          <div className="service-option-grid">
            {service.options.map((option, index) => (
              <article key={option}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{option}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap page-section">
        <SectionHeading eyebrow="How it comes together" title="One clear process, end to end." />
        <div className="service-process-grid">
          {processSteps.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <h3 className="serif">{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="service-enquiry-band">
        <div className="section-wrap service-enquiry-inner">
          <div>
            <span className="eyebrow">Start your project</span>
            <h2 className="serif">Tell us what you have in mind.</h2>
          </div>
          <Button asChild>
            <Link to="/contact">
              Request a consultation <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <section className="section-wrap page-section">
        <SectionHeading eyebrow="Explore more" title="Other services for your home." />
        <div className="related-service-grid">
          {related.map((item) => (
            <Link
              key={item.id}
              to="/services/$serviceId"
              params={{ serviceId: item.id }}
              className="related-service-card image-reveal"
            >
              <img src={item.image} alt={item.imageAlt} loading="lazy" />
              <span>
                <small className="eyebrow">Our services</small>
                <strong className="serif">{item.name}</strong>
                <ArrowUpRight />
                <p>{item.shortDescription}</p>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
