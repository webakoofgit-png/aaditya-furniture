import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro, PageShell, SectionHeading } from "@/components/site";
import { images } from "@/lib/furniture-data";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About | Aditya Furniture and Interior" },
    { name: "description", content: "Direct manufacturers of complete home interior furniture, from measurement and 3D design to manufacturing and installation." },
    { property: "og:title", content: "About | Aditya Furniture and Interior" },
    { property: "og:description", content: "Manufacturer of total home interior furniture with complete end-to-end solutions." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AboutPage,
});

function AboutPage() {
  return <PageShell>
    <PageIntro eyebrow="Aditya Furniture and Interior" title="Complete home interiors, made by us." description="We are direct manufacturers providing complete home interior solutions end-to-end." image={images.craft} />
    <section className="about-manifesto section-wrap">
      <div className="about-quote"><span className="eyebrow">About us</span><h2 className="serif">From your first measurement to the final installation.</h2></div>
      <div className="about-body">
        <p>We manufacture all kinds of home interior furniture and provide complete solutions for homes, tailored to your space and preferences.</p>
        <p>Our work includes modular kitchens, customized furniture, false ceilings, wall painting and wall panelling. Choose from a wide variety of materials, finishes, colors, textures and designs.</p>
        <p>We take care of measurement, 3D design, manufacturing and installation, coordinating the process from design through execution.</p>
      </div>
    </section>
    <section className="about-photo-band"><img src={images.hero} alt="Furniture and home interior details" loading="lazy" width={1920} height={1280} /><div className="about-photo-caption"><span className="eyebrow">Designed for your home</span><p className="serif">From plan to finished space.</p></div></section>
    <section className="section-wrap about-values"><SectionHeading eyebrow="Why choose us" title="Direct manufacturing. Complete service." /><div className="value-grid"><article><span>01</span><h3 className="serif">We are manufacturers</h3><p>Direct factory manufacturing, not traders.</p></article><article><span>02</span><h3 className="serif">End-to-end interiors</h3><p>Measurement, 3D design, manufacturing and installation for your home.</p></article><article><span>03</span><h3 className="serif">Wide choice</h3><p>Premium furniture finishes, leading paint brands and a wide range of wall panelling options.</p></article></div></section>
    <section className="about-cta"><div className="section-wrap about-cta-inner"><div><span className="eyebrow">Start with a conversation</span><h2 className="serif">Tell us about your home.</h2></div><Button asChild><Link to="/contact">Get in touch <ArrowRight /></Link></Button></div></section>
  </PageShell>;
}
