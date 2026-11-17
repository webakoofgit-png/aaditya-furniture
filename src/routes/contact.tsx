import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageIntro, InquiryForm, WhatsAppButton } from "@/components/site";
import { businessConfig } from "@/lib/furniture-data";
import { Clock3, Globe2, Mail, MapPin, Phone } from "lucide-react";
export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact | Aditya Furniture and Interior" }] }),
  component: Contact,
});
function Contact() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Aditya Furniture and Interior"
        title="Plan your complete home interior."
        description="Talk to our team about modular kitchens, custom furniture and end-to-end interior work."
      />
      <section className="section-wrap page-section form-layout">
        <div>
          <span className="eyebrow">Come a little closer</span>
          <h2 className="serif">
            Let's make
            <br />
            room for you.
          </h2>
          <div className="contact-detail">
            <MapPin />
            <p>
              Official address
              <br />
              <small>{businessConfig.address}</small>
            </p>
          </div>
          <div className="contact-detail">
            <Phone />
            <p>
              Contact numbers
              <br />
              <small>
                {businessConfig.phoneNumbers.map((phone, index) => (
                  <span key={phone.href}>
                    {index > 0 && " / "}
                    <a href={phone.href}>{phone.label}</a>
                  </span>
                ))}
              </small>
            </p>
          </div>
          <div className="contact-detail">
            <Mail />
            <p>
              Email
              <br />
              <small>
                <a href={`mailto:${businessConfig.email}`}>{businessConfig.email}</a>
              </small>
            </p>
          </div>
          <div className="contact-detail">
            <Clock3 />
            <p>
              Business hours
              <br />
              <small>
                Daily {businessConfig.businessHours} · Closed every {businessConfig.closedDay}
              </small>
            </p>
          </div>
          <div className="contact-detail">
            <Globe2 />
            <p>
              Website
              <br />
              <small>
                <a href={businessConfig.website}>adityafurnitures.com</a>
              </small>
            </p>
          </div>
          <WhatsAppButton message="Hello Aditya Furniture and Interior, I would like to discuss a home interior project.">
            Call / WhatsApp us
          </WhatsAppButton>
        </div>
        <InquiryForm
          title="What do you have in mind?"
          fields={[
            { name: "name", label: "Name", required: true },
            { name: "phone", label: "Phone", type: "tel", required: true },
            { name: "email", label: "Email", type: "email" },
            {
              name: "interest",
              label: "Interested in",
              options: [
                "Modular kitchen",
                "Customized furniture",
                "False ceiling / painting / wall panelling",
                "Complete home interior",
                "Project / showroom visit",
              ],
            },
            { name: "message", label: "Your message", type: "textarea", required: true },
          ]}
        />
      </section>
      <section className="section-wrap map-embed" aria-label="Aditya Furniture and Interior location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d786.158829729273!2d73.92084798109462!3d18.548148614390097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDMyJzUzLjQiTiA3M8KwNTUnMTYuMyJF!5e1!3m2!1sen!2sin!4v1794889221137!5m2!1sen!2sin"
          title="Aditya Furniture and Interior on Google Maps"
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </section>
    </PageShell>
  );
}
