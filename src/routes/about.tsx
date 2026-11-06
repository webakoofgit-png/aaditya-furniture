import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro, PageShell, SectionHeading } from "@/components/site";
import { images } from "@/lib/furniture-data";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "Our Story | Aaditya Furniture" },
    { name: "description", content: "Discover the ideas behind Aaditya Furniture: thoughtful forms, considered materials and furniture made for everyday living." },
    { property: "og:title", content: "Our Story | Aaditya Furniture" },
    { property: "og:description", content: "Thoughtful furniture for the way we live, gather and grow." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AboutPage,
});

function AboutPage() {
  return <PageShell><PageIntro eyebrow="A little about us" title="Furniture for a life well lived." description="Aaditya Furniture is shaped around the belief that the things we live with should feel as good as they look." image={images.craft} />
    <section className="about-manifesto section-wrap"><div className="about-quote"><span className="eyebrow">Our point of view</span><h2 className="serif">“Make room for the things that make a place feel like yours.”</h2></div><div className="about-body"><p>We believe thoughtful furniture can bring a room together and make the everyday feel a little more considered. The best pieces make space for a quiet morning, a long meal, a book left open or friends who stay late.</p><p>That is why we care about shape, material and detail in equal measure. Our collection is a starting point, not a limit: finishes, proportions and personal ideas can all become part of the conversation.</p><p>We are building a brand with an open door and a considered point of view. The details of our story, workshop and showroom are being shaped with care.</p></div></section>
    <section className="about-photo-band"><img src={images.hero} alt="Walnut furniture and considered interior details" loading="lazy" width={1920} height={1280} /><div className="about-photo-caption"><span className="eyebrow">A place to settle in</span><p className="serif">Comfort, with character.</p></div></section>
    <section className="section-wrap about-values"><SectionHeading eyebrow="What guides us" title="The details make the difference." /><div className="value-grid"><article><span>01</span><h3 className="serif">Honest materials</h3><p>Natural grain, touchable textures and finishes chosen with the whole room in mind.</p></article><article><span>02</span><h3 className="serif">Thoughtful forms</h3><p>Pieces with a clear purpose, balanced proportions and room to make them your own.</p></article><article><span>03</span><h3 className="serif">Human by design</h3><p>Useful guidance and open conversations, whether you are choosing a piece or shaping an idea.</p></article></div></section>
    <section className="about-cta"><div className="section-wrap about-cta-inner"><div><span className="eyebrow">Start with a conversation</span><h2 className="serif">Tell us what home<br />means to you.</h2></div><Button asChild><Link to="/contact">Get in touch <ArrowRight /></Link></Button></div></section>
  </PageShell>;
}