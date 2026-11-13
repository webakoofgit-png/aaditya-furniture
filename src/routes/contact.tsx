import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageIntro, InquiryForm, WhatsAppButton } from "@/components/site";
import { MapPin, MessageCircle } from "lucide-react";
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
              <small>Shop No. 1, Titan Tower, Survey No. 39/A-1, Near HDFC Bank</small>
            </p>
          </div>
          <div className="contact-detail">
            <MessageCircle />
            <p>
              Phone & website
              <br />
              <small><a href="tel:+919860196472">+91 9860196472</a> · <a href="http://adityafurnitures.com">http://adityafurnitures.com</a></small>
            </p>
          </div>
          <WhatsAppButton message="Hello Aditya Furniture and Interior, I would like to discuss a home interior project.">Call / WhatsApp us</WhatsAppButton>
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
      <section className="section-wrap map-placeholder" aria-label="Business address">
        <MapPin size={40} />
        <h3 className="serif">Visit our showroom.</h3>
        <p>Aditya Furniture and Interior<br />Shop No. 1, Titan Tower, Survey No. 39/A-1, Near HDFC Bank</p>
        <span className="eyebrow">+91 9860196472 | http://adityafurnitures.com</span>
      </section>
    </PageShell>
  );
}
