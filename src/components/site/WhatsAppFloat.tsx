import { MessageCircle } from "lucide-react";

export const WHATSAPP_NUMBER = "94741450646";
export const WHATSAPP_MSG = encodeURIComponent(
  "Hello Urban Travels, I would like to inquire about your Sri Lanka tour packages."
);
export const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

export function WhatsAppFloat() {
  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full pulse-whatsapp transition-transform hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
    >
      <MessageCircle className="h-7 w-7 text-white" fill="white" strokeWidth={0} />
      <svg viewBox="0 0 32 32" className="absolute h-7 w-7 text-white" fill="currentColor">
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.04 1.397-1.04 2.385.015.99.41 1.92.99 2.706 1.075 1.585 2.435 2.928 4.025 3.978 1 .664 2.236 1.34 3.435 1.527h.5c.83 0 2.27-.602 2.587-1.39.13-.342.27-.715.27-1.087 0-.5-1.532-1.157-1.962-1.157zM16 26.4C10.27 26.4 5.6 21.73 5.6 16S10.27 5.6 16 5.6 26.4 10.27 26.4 16 21.73 26.4 16 26.4zm0-22.795C9.158 3.605 3.605 9.158 3.605 16c0 2.18.573 4.31 1.66 6.19L3.5 28.5l6.448-1.688A12.394 12.394 0 0 0 16 28.395c6.842 0 12.395-5.553 12.395-12.395 0-3.31-1.29-6.42-3.63-8.76A12.31 12.31 0 0 0 16 3.605z" />
      </svg>
    </a>
  );
}
