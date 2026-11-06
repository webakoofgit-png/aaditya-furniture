import { MessageCircle, ArrowUpRight } from "lucide-react";
import { whatsappLink } from "@/lib/furniture-data";
export function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={whatsappLink("Hello, I would like to enquire about Aaditya Furniture.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp (opens in a new tab)"
    >
      <span className="whatsapp-tooltip">
        Let's talk furniture <ArrowUpRight size={14} />
      </span>
      <MessageCircle size={27} strokeWidth={1.8} />
      <span className="whatsapp-label">WhatsApp</span>
    </a>
  );
}
