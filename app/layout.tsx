import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://orbitamos-vitrine-infantil.vercel.app"),
  title: {
    default: "Vitrine Infantil | Demonstração Orbitamos",
    template: "%s | Vitrine Infantil — Orbitamos",
  },
  description:
    "Demonstração de catálogo infantil criada pela Orbitamos. Produtos ilustrativos, sem vendas neste site.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: "Vitrine Infantil — Orbitamos",
    description:
      "Conheça uma demonstração de catálogo infantil criada pela Orbitamos.",
    type: "website",
    images: [
      {
        url: "/hero.webp",
        width: 1200,
        height: 630,
        alt: "Vitrine Infantil — demonstração Orbitamos",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
