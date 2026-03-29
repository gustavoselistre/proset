import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pro Set Eventos | Transformamos Momentos em Memórias",
  description:
    "Especialistas em casamentos, quinze anos, eventos corporativos e festas sociais. Criamos experiências inesquecíveis com excelência e sofisticação.",
  keywords: [
    "eventos",
    "casamentos",
    "quinze anos",
    "festas",
    "corporativo",
    "decoração",
    "Pro Set",
  ],
  openGraph: {
    title: "Pro Set Eventos | Transformamos Momentos em Memórias",
    description:
      "Especialistas em casamentos, quinze anos, eventos corporativos e festas sociais.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
