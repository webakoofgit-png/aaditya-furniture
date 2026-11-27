import { ProjectVideos } from "@/components/home-extras";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Download,
  FileText,
  MoveUpRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell, SectionHeading } from "@/components/site";
import { businessConfig, categories, images } from "@/lib/furniture-data";
import homeVideo from "@/assets/home-video-optimized.mp4";
import bedroomCatalogue from "@/assets/Aditya_Furniture_Interior_Bedroom_Package_Catalogue.pdf";
import interiorCatalogue from "@/assets/Aditya_Furniture_Interior_Catalogue.pdf";
import kitchenCatalogue from "@/assets/Aditya_Furniture_Interior_Modular_Kitchen_Packages.pdf";

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

const premiumPackages = [
  {
    name: "2 BHK Premium Package",
    description: "Complete home furniture and interior",
    features: [
      "Modular kitchen with premium finish",
      "2 bedroom wardrobes",
      "2 beds with storage",
      "Premium TV unit",
      "Living room sofa set",
      "Modern false ceiling",
      "Designer wall panels",
      "Dining table with chairs",
      "Shoe rack and entrance unit",
      "Curtains and lighting provisions",
    ],
  },
  {
    name: "3 BHK Premium Package",
    description: "Complete luxury home furniture and interior",
    features: [
      "Premium modular kitchen",
      "3 designer bedroom wardrobes",
      "3 beds with storage",
      "Luxury TV unit and wall panel",
      "Premium living room sofa set",
      "Designer false ceiling",
      "6-seater dining table",
      "Premium entrance shoe rack",
      "Crockery unit",
      "Study table and work station",
      "Designer lighting provisions",
      "Curtains and decorative finishes",
    ],
  },
];

const premiumFeatures = [
  "CNC-designed wooden panels",
  "Premium laminate, acrylic and PU finishes",
  "Soft-close hardware",
  "Custom-made furniture",
  "Space-saving storage solutions",
  "Professional installation",
  "3D interior design preview",
];

const catalogues = [
  {
    title: "Complete Interior Catalogue",
    description: "Explore our complete range of furniture and interior solutions.",
    href: interiorCatalogue,
  },
  {
    title: "Bedroom Package Catalogue",
    description: "Browse bedroom furniture packages designed for modern homes.",
    href: bedroomCatalogue,
  },
  {
    title: "Modular Kitchen Packages",
    description: "Discover modular kitchen layouts, finishes and package options.",
    href: kitchenCatalogue,
  },
];

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

          <div className="catalogue-block">
            <div className="catalogue-heading">
              <span className="eyebrow">Our catalogues</span>
              <h3 className="serif">Explore our interior packages.</h3>
              <p>Open a catalogue online or download a copy to view later.</p>
            </div>
            <div className="catalogue-grid">
              {catalogues.map((catalogue, index) => (
                <article className="catalogue-card" key={catalogue.title}>
                  <div className="catalogue-card-top">
                    <span className="catalogue-number">0{index + 1}</span>
                    <FileText aria-hidden="true" size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4>{catalogue.title}</h4>
                    <p>{catalogue.description}</p>
                  </div>
                  <div className="catalogue-actions">
                    <a href={catalogue.href} target="_blank" rel="noreferrer">
                      View catalogue <ArrowUpRight aria-hidden="true" size={17} />
                    </a>
                    <a
                      className="catalogue-download"
                      href={catalogue.href}
                      download
                      aria-label={`Download ${catalogue.title}`}
                    >
                      <Download aria-hidden="true" size={17} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="craft-section section-wrap">
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
        <div className="craft-image image-reveal">
          <video
            src={homeVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Customized furniture and home interior project showcase"
          />
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

      <section className="premium-packages-section" id="premium-packages">
        <div className="section-wrap">
          <SectionHeading
            eyebrow="Premium complete-home packages"
            title="One package. Your entire home."
            copy="Thoughtfully planned furniture and interiors, custom-made for modern 2 BHK and 3 BHK homes."
            linkText="Get a custom quote"
            linkTo="/contact"
          />

          <div className="premium-package-grid">
            {premiumPackages.map((homePackage, index) => (
              <article
                className={`premium-package-card premium-package-card-${index + 1}`}
                key={homePackage.name}
              >
                <div className="premium-package-card-head">
                  <span className="premium-package-number">0{index + 1}</span>
                  <Sparkles aria-hidden="true" size={22} />
                </div>
                <h3 className="serif">{homePackage.name}</h3>
                <p className="premium-package-description">{homePackage.description}</p>
                <ul>
                  {homePackage.features.map((feature) => (
                    <li key={feature}>
                      <Check aria-hidden="true" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="premium-package-link">
                  Enquire about this package <ArrowRight aria-hidden="true" size={17} />
                </Link>
              </article>
            ))}
          </div>

          <div className="premium-features-panel">
            <div className="premium-features-intro">
              <span className="eyebrow">Included premium features</span>
              <h3 className="serif">Crafted around your space and lifestyle.</h3>
              <p>
                Premium materials, practical storage and a professionally managed finish from design
                to installation.
              </p>
            </div>
            <ul className="premium-features-list">
              {premiumFeatures.map((feature) => (
                <li key={feature}>
                  <Check aria-hidden="true" size={17} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="premium-packages-signoff">
            <strong>ADITYA FURNITURE &amp; INTERIOR</strong>
            <span>Your Dream Home, Our Premium Craftsmanship.</span>
          </p>
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

      <ProjectVideos />
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
