import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageIntro, InquiryForm, WhatsAppButton } from "@/components/site";
import { MapPin, Clock, MessageCircle } from "lucide-react";
export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Visit & Contact | Aaditya Furniture" }] }),
  component: Contact,
});
function Contact() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="Our door is open"
        title="Good spaces start with a conversation."
        description="A piece you love, an idea to explore, a room to reimagine. We'd love to hear about it."
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
              Showroom address
              <br />
              <small>To be supplied by Aaditya Furniture</small>
            </p>
          </div>
          <div className="contact-detail">
            <Clock />
            <p>
              Opening hours
              <br />
              <small>To be confirmed before visiting</small>
            </p>
          </div>
          <div className="contact-detail">
            <MessageCircle />
            <p>
              Phone & email
              <br />
              <small>Business contact details pending</small>
            </p>
          </div>
          <WhatsAppButton message="Hello Aaditya Furniture, I would like to plan a showroom visit." />
          <p className="demo-note">
            Demo: WhatsApp opens a share message. A verified business number must be configured to
            contact the showroom directly.
          </p>
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
                "Furniture collections",
                "Custom furniture",
                "Bulk enquiry",
                "Showroom visit",
              ],
            },
            { name: "message", label: "Your message", type: "textarea", required: true },
          ]}
        />
      </section>
      <section className="section-wrap map-placeholder" aria-label="Showroom map placeholder">
        <MapPin size={40} />
        <h3 className="serif">Meet us here. Soon.</h3>
        <p>Verified showroom location and map will be added here.</p>
        <span className="eyebrow">Location placeholder · no address supplied</span>
      </section>
    </PageShell>
  );
}
