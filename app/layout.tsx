import type { Metadata } from "next";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import "./globals.css";

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
    <html lang="pt-BR">
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
