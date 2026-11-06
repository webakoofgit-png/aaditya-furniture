import { HomeGallery, Testimonials, HomeProcess } from "@/components/home-extras";
import { ProductCard } from "@/components/products";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell, SectionHeading, WhatsAppButton } from "@/components/site";
import { businessConfig, categories, images, products } from "@/lib/furniture-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aaditya Furniture | Crafted for Living" },
      {
        name: "description",
        content:
          "Discover furniture that transforms everyday spaces into timeless experiences. Explore collections and bespoke furniture from Aaditya Furniture.",
      },
      { property: "og:title", content: "Aaditya Furniture | Crafted for Living" },
      {
        property: "og:description",
        content: "Discover considered furniture and bespoke pieces for contemporary Indian homes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageShell>
      <section
        className="home-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, color-mix(in oklch, var(--charcoal) 52%, transparent), color-mix(in oklch, var(--charcoal) 3%, transparent) 70%), url(${images.hero})`,
        }}
      >
        <div className="section-wrap hero-content fade-up">
          <span className="eyebrow">AADITYA FURNITURE · INDIA</span>
          <h1 className="serif">
            Crafted for living.
            <br />
            <em>Designed to inspire.</em>
          </h1>
          <p>Discover furniture that transforms everyday spaces into timeless experiences.</p>
          <div className="hero-actions">
            <Button asChild>
              <Link to="/collections">
                Explore collections <ArrowRight />
              </Link>
            </Button>
            <Link to="/contact" className="hero-text-link">
              Request a quote <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        <div className="hero-bottom">
          <span>THE AADITYA EDIT</span>
          <span>Objects for a life well lived</span>
          <a href="#collections" aria-label="Scroll to collections">
            <ArrowDown size={18} />
          </a>
        </div>
      </section>

      <section className="intro-band section-wrap">
        <span className="eyebrow">FURNITURE WITH FEELING</span>
        <p className="serif">
          A home is never just a place. It is the shape of our days, the warmth of our rituals, and
          the things we choose to keep.
        </p>
        <Link to="/about" className="text-link">
          A little about us <ArrowRight size={16} />
        </Link>
      </section>

      <section className="section-wrap category-section" id="collections">
        <SectionHeading
          eyebrow="Find your feeling"
          title="Made for the moments that matter."
          copy="Explore considered pieces for every corner of the home."
          linkText="View all collections"
          linkTo="/collections"
        />
        <div className="category-grid">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={category.name === "Custom Furniture" ? "/custom-furniture" : "/collections"}
              search={category.name === "Custom Furniture" ? {} : { category: category.name }}
              className={`category-card category-card-${index + 1}`}
            >
              <div className="image-reveal">
                <img
                  src={category.image}
                  alt={`${category.name} furniture`}
                  loading="lazy"
                  width={1200}
                  height={1400}
                />
              </div>
              <div className="category-overlay">
                <span className="eyebrow">{category.note}</span>
                <h3 className="serif">{category.name}</h3>
                <span className="category-arrow">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="signature-section">
        <div className="section-wrap">
          <SectionHeading
            eyebrow="A few favourites"
            title="The signature edit."
            copy="A considered selection of pieces, materials and finishes. Ask us about making one yours."
            linkText="Browse the collection"
            linkTo="/collections"
          />
          <div className="product-grid home-products">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="craft-section section-wrap">
        <div className="craft-image image-reveal">
          <img
            src={images.craft}
            alt="Hands finishing the edge of a walnut furniture piece"
            loading="lazy"
            width={1200}
            height={1400}
          />
        </div>
        <div className="craft-copy">
          <span className="eyebrow">Made with intention</span>
          <h2 className="serif">Where craftsmanship meets contemporary living.</h2>
          <p>
            Thoughtful proportions, honest materials and considered details. Each piece begins with
            a conversation about how it will be lived with.
          </p>
          <Link to="/about" className="text-link">
            Explore our story <ArrowRight size={16} />
          </Link>
          <span className="craft-stamp serif">
            A<br />F
          </span>
        </div>
      </section>

      <section
        className="bespoke-band"
        style={{
          backgroundImage: `linear-gradient(90deg, color-mix(in oklch, var(--charcoal) 72%, transparent), color-mix(in oklch, var(--charcoal) 20%, transparent)), url(${images.dining})`,
        }}
      >
        <div className="section-wrap bespoke-content">
          <span className="eyebrow">Made around you</span>
          <h2 className="serif">
            A good idea deserves
            <br />a place to take shape.
          </h2>
          <p>
            Bring us a sketch, a reference or just a feeling. We’ll help you shape it into a piece
            that belongs.
          </p>
          <Button asChild variant="outline">
            <Link to="/custom-furniture">
              Discover bespoke <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <HomeProcess />
      <section className="section-wrap home-proof">
        <div className="proof-heading">
          <span className="eyebrow">A note from our studio</span>
          <h2 className="serif">
            Good design is felt
            <br />
            in the everyday.
          </h2>
        </div>
        <div className="proof-points">
          <div>
            <span>01</span>
            <h3>Material matters</h3>
            <p>
              We begin with considered surfaces, natural character and the right feel in the hand.
            </p>
          </div>
          <div>
            <span>02</span>
            <h3>Made personal</h3>
            <p>Explore finishes, fabrics and thoughtful adjustments to suit your space.</p>
          </div>
          <div>
            <span>03</span>
            <h3>Here to help</h3>
            <p>From first ideas to the final details, start a conversation with our team.</p>
          </div>
        </div>
      </section>

      {businessConfig.wholesaleEnabled && (
        <section className="trade-band">
          <div className="section-wrap trade-inner">
            <div>
              <span className="eyebrow">For the people who shape spaces</span>
              <h2 className="serif">
                A considered partner
                <br />
                for your next project.
              </h2>
              <p>
                Interior designers, architects, hospitality and workplace teams are welcome to
                enquire about trade and bulk requirements.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/wholesale">
                Discuss a project <ArrowRight />
              </Link>
            </Button>
          </div>
        </section>
      )}

      <HomeGallery />
      <Testimonials />
      <section className="section-wrap visit-strip">
        <div className="visit-mark serif">A.</div>
        <div>
          <span className="eyebrow">Come see what feels right</span>
          <h2 className="serif">A showroom visit is a good place to start.</h2>
        </div>
        <Button asChild>
          <Link to="/contact">
            Plan a visit <MoveUpRight />
          </Link>
        </Button>
        <span className="visit-placeholder">Address details to be confirmed</span>
      </section>
    </PageShell>
  );
}
