import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Artigos da Minha Equipe",
  description: "Registro e consulta de arquivos",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
