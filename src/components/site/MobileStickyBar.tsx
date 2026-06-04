import { Phone, MessageCircle } from "lucide-react";
import { waLink } from "./WhatsAppFloat";

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-border bg-card/95 p-2 backdrop-blur-md md:hidden">
      <a href="tel:+94741450646" className="flex items-center justify-center gap-2 rounded-full bg-navy py-3 text-sm font-medium text-white">
        <Phone className="h-4 w-4" /> Call Now
      </a>
      <a href={waLink} target="_blank" rel="noopener noreferrer"
         className="flex items-center justify-center gap-2 rounded-full bg-gold py-3 text-sm font-medium text-navy">
        <MessageCircle className="h-4 w-4" /> WhatsApp
      </a>
    </div>
  );
}
