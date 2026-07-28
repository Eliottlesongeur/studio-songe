import type { Metadata } from "next";
import { site } from "@/content/site";
import { Navbar } from "@/sections/Navbar/Navbar";
import { Footer } from "@/sections/Footer/Footer";
import { ContactModalProvider } from "@/components/ContactModal/ContactModalProvider";
import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nom} — Architecture & design d'intérieur`,
    template: `%s · ${site.nom}`,
  },
  description: site.description,
  openGraph: {
    siteName: site.nom,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/projets/hero/renovation-appartement-dinard-couloirs.jpg",
        width: 1920,
        height: 1279,
        alt: "Cuisine ouverte sur mur bleu nuit avec îlot en bois, rénovation d'appartement à Dinard par Studio Songe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ContactModalProvider>
          <Navbar />
          {children}
          <Footer />
        </ContactModalProvider>
      </body>
    </html>
  );
}
