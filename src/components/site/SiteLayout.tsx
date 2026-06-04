import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { MobileStickyBar } from "./MobileStickyBar";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
      <MobileStickyBar />
      <div className="h-16 md:hidden" />
    </div>
  );
}
