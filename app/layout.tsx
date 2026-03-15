import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LexRecupera | Recuperación de Títulos Judiciales en Colombia",
  description:
    "Servicios especializados en búsqueda, gestión y recuperación de títulos judiciales. Si tuvo embargos o descuentos judiciales, puede tener dinero consignado en juzgados. Lo ayudamos a recuperarlo.",
  keywords:
    "titulos judiciales, recuperacion dinero juzgados, embargos Colombia, descuentos judiciales, depositos judiciales, Banco Agrario Colombia",
  authors: [{ name: "LexRecupera" }],
  openGraph: {
    title: "LexRecupera | Recuperación de Títulos Judiciales en Colombia",
    description:
      "¿Tuvo un embargo o descuento judicial? Puede tener dinero consignado en un juzgado. Nosotros lo buscamos y gestionamos la entrega por usted.",
    type: "website",
    locale: "es_CO",
    siteName: "LexRecupera",
  },
  robots: "index, follow",
  themeColor: "#0D1B35",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
