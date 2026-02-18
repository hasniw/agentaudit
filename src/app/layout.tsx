import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentAudit — Test de sécurité pour agents IA",
  description:
    "Testez la résistance de votre agent IA aux prompt injections. Audit automatisé, rapport détaillé, recommandations de sécurité.",
  keywords: [
    "agent IA",
    "prompt injection",
    "sécurité IA",
    "audit sécurité",
    "test agent",
    "LLM security",
  ],
  authors: [{ name: "AgentAudit" }],
  openGraph: {
    title: "AgentAudit — Votre agent IA est-il sécurisé ?",
    description:
      "Testez la résistance de votre agent aux prompt injections en 2 minutes.",
    url: "https://agentaudit.vercel.app",
    siteName: "AgentAudit",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentAudit — Test de sécurité pour agents IA",
    description:
      "Testez la résistance de votre agent aux prompt injections en 2 minutes.",
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
    <html lang="fr" className="dark">
      <body className="antialiased bg-dark-950 text-dark-50 min-h-screen">
        {children}
      </body>
    </html>
  );
}
