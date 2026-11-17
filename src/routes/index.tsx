import { HomeGallery, Testimonials } from "@/components/home-extras";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell, SectionHeading } from "@/components/site";
import { businessConfig, categories, images } from "@/lib/furniture-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aditya Furniture and Interior | Complete Home Interiors" },
      {
        name: "description",
        content:
          "Direct manufacturers of complete home interiors, modular kitchens, customized furniture, false ceilings, wall painting and panelling.",
      },
      { property: "og:title", content: "Aditya Furniture and Interior | Complete Home Interiors" },
      {
        property: "og:description",
        content:
          "Manufacturer of total home interior furniture with end-to-end design, manufacturing and installation.",
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
        <div className="section-wrap hero-content">
          <span className="eyebrow">ADITYA FURNITURE AND INTERIOR</span>
          <h1 className="serif">
            We Manufacture
            <br />
            <em>Your Dream Home.</em>
          </h1>
          <p>
            From modular kitchens and customized furniture to false ceilings, painting and wall
            panelling, we take your home from design to installation.
          </p>
          <div className="hero-actions">
            <Button asChild>
              <Link to="/collections">
                Explore our services <ArrowRight />
              </Link>
            </Button>
            <Link to="/contact" className="hero-text-link">
              Request a quote <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        <div className="hero-bottom">
          <span>DESIGN / MANUFACTURE / INSTALL</span>
          <span>Total Home Interiors, Manufactured for Life</span>
          <a href="#collections" aria-label="Scroll to services">
            <ArrowDown size={18} />
          </a>
        </div>
      </section>

      <section className="welcome-section section-wrap">
        <div className="welcome-video-frame">
          <video
            className="welcome-video"
            src="/video.mp4"
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Aditya Furniture and Interior introduction video"
          />
        </div>
        <div className="welcome-copy">
          <span className="eyebrow">Direct manufacturers · complete solutions</span>
          <h2 className="serif">
            Welcome to
            <br />
            <em>Aditya Furniture</em>
          </h2>
          <p>
            We are direct manufacturers providing complete home interior solutions end-to-end. We
            manufacture all kinds of home interior furniture.
          </p>
          <Link to="/about" className="text-link">
            About us <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="section-wrap category-section" id="collections">
        <SectionHeading
          eyebrow="Our services"
          title="Everything your home needs."
          copy="Modular kitchens in L-shape, U-shape, parallel and island layouts; custom furniture, ceilings, painting, panelling and complete home interiors."
          linkText="Discuss your project"
          linkTo="/contact"
        />
        <div className="category-grid service-card-grid">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={category.name === "Customized Furniture" ? "/custom-furniture" : "/contact"}
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
            eyebrow="Modular furniture finishes"
            title="Choose the finish that feels right."
            copy="Laminate, thermo laminate, digital laminate, acrylic and natural wood veneer, available in a wide range of colors, textures and designs."
            linkText="Ask about finishes"
            linkTo="/contact"
          />
          <div className="material-grid">
            {["Laminate", "Thermo laminate", "Digital laminate", "Acrylic", "Veneer"].map(
              (finish, i) => (
                <article key={finish}>
                  <div className={`material-swatch swatch-${i}`} />
                  <h3>{finish}</h3>
                  <p>
                    {finish === "Veneer"
                      ? "Natural wood veneer · premium look"
                      : "Wide range of colors, textures and designs"}
                  </p>
                </article>
              ),
            )}
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
          <span className="eyebrow">Customized furniture | Made by us</span>
          <h2 className="serif">Your whole home, made to fit.</h2>
          <p>
            Beds, wardrobes, sofas, dining tables, TV units, shoe racks, study tables, dressing
            tables and more, manufactured directly for your home.
          </p>
          <Link to="/custom-furniture" className="text-link">
            Explore custom furniture <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section
        className="bespoke-band"
        style={{
          backgroundImage: `linear-gradient(90deg, color-mix(in oklch, var(--charcoal) 72%, transparent), color-mix(in oklch, var(--charcoal) 20%, transparent)), url(${images.dining})`,
        }}
      >
        <div className="section-wrap bespoke-content">
          <span className="eyebrow">From design to execution</span>
          <h2 className="serif">
            One team for your
            <br />
            complete home interior.
          </h2>
          <p>
            Measurement, 3D design, manufacturing and installation, coordinated from start to
            finish.
          </p>
          <Button asChild variant="outline">
            <Link to="/custom-furniture">
              Plan your interior <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <section className="section-wrap home-proof">
        <SectionHeading
          eyebrow="More home interior services"
          title="Interior work, all under one roof."
        />
        <div className="proof-points">
          <div>
            <span>01</span>
            <h3>False ceiling</h3>
            <p>POP, gypsum, grid and designer ceilings with integrated lighting.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Wall painting</h3>
            <p>
              Asian Paints, Berger, Dulux, Nerolac and all other leading brands. Plastic paint,
              emulsion, lustre, enamel, texture, Royale, Tractor, distemper, PU, Duco and other
              finishes.
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>Wall panelling</h3>
            <p>
              WPC louvers, fluted and 3D panels, PVC, wooden and veneer, charcoal louvers, MDF CNC
              jali, HDHMR, fabric upholstered, metal PVD, stone or marble cladding, glass and
              mirror, acoustic, backlight with LED.
            </p>
          </div>
        </div>
      </section>
      <section className="section-wrap home-proof">
        <div className="proof-heading">
          <span className="eyebrow">Why choose us</span>
          <h2 className="serif">
            Made by manufacturers
            <br />
            for your whole home.
          </h2>
        </div>
        <div className="proof-points">
          <div>
            <span>01</span>
            <h3>Material matters</h3>
            <p>Direct factory manufacturing, not trading.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Complete interiors</h3>
            <p>End-to-end home interior solutions, including sofas and custom furniture.</p>
          </div>
          <div>
            <span>03</span>
            <h3>More choice</h3>
            <p>
              Premium laminate, thermo laminate, digital laminate, acrylic and veneer finishes, plus
              broad paint and panelling options.
            </p>
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
                enquire about complete interior design and execution.
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
        <div>
          <span className="eyebrow">Come see what feels right</span>
          <h2 className="serif">A showroom visit is a good place to start.</h2>
        </div>
        <Button asChild>
          <Link to="/contact">
            Plan a visit <MoveUpRight />
          </Link>
        </Button>
        <span className="visit-placeholder">
          {businessConfig.address} | {businessConfig.phoneNumbers[0].label} /{" "}
          {businessConfig.phoneNumbers[1].label} | {businessConfig.email}
        </span>
      </section>
    </PageShell>
  );
}
