import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { ScrollAnimations } from "@/components/scroll-animations";
import { Reveal } from "@/components/reveal";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { businessConfig, categories, whatsappLink } from "@/lib/furniture-data";

const allNavItems = [
  ["Home", "/"],
  ["Our story", "/about"],
  ["Collections", "/collections"],
  ["Bespoke", "/custom-furniture"],
  ["Projects", "/projects"],
  ["Trade", "/wholesale"],
  ["Contact", "/contact"],
] as const;
const navItems = allNavItems.filter(
  ([, path]) => businessConfig.wholesaleEnabled || path !== "/wholesale",
);

export function SiteHeader() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className={`site-header ${scrolled || menuOpen ? "site-header-scrolled" : ""}`}>
      <div className="section-wrap header-inner">
        <Link to="/" aria-label="Aaditya Furniture home" className="brand-lockup">
          <span className="brand-mark" aria-hidden="true">
            A
          </span>
          <span className="brand-wordmark">
            <strong>AADITYA</strong>
            <small>FURNITURE · INDIA</small>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, to]) =>
            to === "/collections" ? (
              <div className="nav-collection" key={to}>
                <Link
                  to={to}
                  className="nav-link"
                  aria-current={pathname === to ? "page" : undefined}
                >
                  {label}
                </Link>
                <div className="mega-menu" aria-label="Furniture categories">
                  {categories.map((c) => (
                    <Link
                      key={c.name}
                      to={c.name === "Custom Furniture" ? "/custom-furniture" : "/collections"}
                      search={c.name === "Custom Furniture" ? {} : { category: c.name }}
                    >
                      {c.name}
                      <small>{c.note}</small>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={to}
                to={to}
                className="nav-link"
                aria-current={pathname === to ? "page" : undefined}
              >
                {label}
              </Link>
            ),
          )}
        </nav>
        <Button asChild size="sm" className="header-inquiry">
          <a
            href={whatsappLink("Hello, I would like to enquire about Aaditya Furniture.")}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle /> <span>Enquire</span>
          </a>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="mobile-menu-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map(([label, to]) => (
            <Link key={to} to={to} aria-current={pathname === to ? "page" : undefined}>
              {label}
              <ArrowRight size={16} />
            </Link>
          ))}
          <a
            href={whatsappLink("Hello, I would like to enquire about Aaditya Furniture.")}
            target="_blank"
            rel="noreferrer"
          >
            Start an enquiry <MessageCircle size={16} />
          </a>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-wordmark">
            AADITYA<span>FURNITURE · INDIA</span>
          </Link>
          <p>Thoughtful furniture for the way we live, gather and grow.</p>
          <a
            className="footer-contact"
            href={whatsappLink("Hello, I would like to speak with the Aaditya Furniture team.")}
            target="_blank"
            rel="noreferrer"
          >
            Start a conversation <ArrowRight size={15} />
          </a>
        </div>
        <div className="footer-column">
          <span className="eyebrow">Explore</span>
          <Link to="/about">Our story</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Visit & contact</Link>
        </div>
        <div className="footer-column">
          <span className="eyebrow">For every space</span>
          <Link to="/collections" search={{ category: "Sofas & Seating" }}>
            Living
          </Link>
          <Link to="/collections" search={{ category: "Beds & Bedroom" }}>
            Bedroom
          </Link>
          <Link to="/custom-furniture">Made to order</Link>
          <Link to="/wholesale">Trade & bulk</Link>
        </div>
        <div className="footer-note">
          <span className="eyebrow">Visit the showroom</span>
          <p>
            Address and opening hours
            <br />
            to be confirmed
          </p>
          <Link to="/contact" className="footer-contact">
            Plan a visit <ArrowRight size={15} />
          </Link>
        </div>
      </div>
      <div className="section-wrap footer-bottom">
        <span>© {new Date().getFullYear()} Aaditya Furniture</span>
        <span>Showroom details shown as placeholders</span>
        <a href={whatsappLink("Hello, Aaditya Furniture.")} target="_blank" rel="noreferrer">
          WhatsApp enquiry ↗
        </a>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
      <FloatingWhatsApp />
      <ScrollAnimations />
    </>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
}) {
  return (
    <section
      className={`page-intro ${image ? "page-intro-image" : ""}`}
      style={
        image
          ? {
              backgroundImage: `linear-gradient(90deg, color-mix(in oklch, var(--charcoal) 78%, transparent), color-mix(in oklch, var(--charcoal) 12%, transparent)), url(${image})`,
            }
          : undefined
      }
    >
      <div className="section-wrap page-intro-inner">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="serif">{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  linkText,
  linkTo,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  linkText?: string;
  linkTo?: string;
}) {
  return (
    <Reveal>
      <div className="section-heading">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="serif">{title}</h2>
          {copy && <p>{copy}</p>}
        </div>
        {linkText && linkTo && (
          <Link to={linkTo} className="text-link">
            {linkText}
            <ArrowDownRight size={16} />
          </Link>
        )}
      </div>
    </Reveal>
  );
}

export function InquiryForm({
  title = "Tell us a little about it",
  fields,
  button = "Prepare enquiry",
}: {
  title?: string;
  fields: {
    name: string;
    label: string;
    type?: string;
    required?: boolean;
    options?: string[];
    placeholder?: string;
  }[];
  button?: string;
}) {
  const [prepared, setPrepared] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const details = fields
      .map((field) => `${field.label}: ${String(form.get(field.name) || "Not specified")}`)
      .join("\n");
    window.open(
      whatsappLink(`Hello, I would like to enquire with Aaditya Furniture.\n\n${details}`),
      "_blank",
      "noopener,noreferrer",
    );
    setPrepared(true);
  };
  return (
    <form className="inquiry-form" onSubmit={submit}>
      <h3 className="serif">{title}</h3>
      <div className="form-grid">
        {fields.map((field) => (
          <label
            key={field.name}
            className={field.type === "textarea" ? "field field-wide" : "field"}
          >
            <span>
              {field.label}
              {field.required && <i> *</i>}
            </span>
            {field.options ? (
              <select name={field.name} required={field.required} defaultValue="">
                <option value="" disabled>
                  Select one
                </option>
                {field.options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                rows={4}
              />
            ) : (
              <input
                name={field.name}
                type={field.type || "text"}
                min={field.type === "number" ? 1 : undefined}
                pattern={field.type === "tel" ? "[+]?[0-9 ]{10,18}" : undefined}
                title={
                  field.type === "tel" ? "Enter a valid phone number (10-18 characters)" : undefined
                }
                required={field.required}
                placeholder={field.placeholder}
              />
            )}
          </label>
        ))}
      </div>
      <div className="form-submit">
        <Button type="submit">
          {button}
          <ArrowRight />
        </Button>
        <p>
          {prepared
            ? "Your message was prepared. If WhatsApp did not open, allow pop-ups and try again."
            : "A WhatsApp message will open with your details. Demo: choose a recipient in WhatsApp; the business number is not yet configured."}
        </p>
      </div>
    </form>
  );
}

export function WhatsAppButton({
  children = "Enquire on WhatsApp",
  message,
  outline = false,
}: {
  children?: ReactNode;
  message: string;
  outline?: boolean;
}) {
  return (
    <Button asChild variant={outline ? "outline" : "default"}>
      <a href={whatsappLink(message)} target="_blank" rel="noreferrer">
        <MessageCircle />
        {children}
      </a>
    </Button>
  );
}
