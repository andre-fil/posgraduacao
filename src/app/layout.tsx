import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FEMAF DIGITAL",
  description: "Cursos e conteúdo em formato estático.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#05131a] text-white">
        <div className="relative min-h-screen">
          <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1200px_circle_at_20%_0%,rgba(0,200,248,0.34),transparent_56%),radial-gradient(900px_circle_at_80%_15%,rgba(6,182,212,0.22),transparent_55%),linear-gradient(to_bottom,#031018,#05131a)]" />
          <Header />
          <main className="min-h-full pt-24">{children}</main>
        </div>
      </body>
    </html>
  );
}
