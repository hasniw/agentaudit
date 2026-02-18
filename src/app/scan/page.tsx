"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ScanPage() {
  const [step, setStep] = useState<"form" | "loading" | "done">("form");
  const [form, setForm] = useState({
    name: "",
    email: "",
    agentName: "",
    description: "",
    systemPrompt: "",
    endpoint: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep("loading");

    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStep("done");
      } else {
        setStep("form");
        alert("Erreur lors de la soumission. Veuillez réessayer.");
      }
    } catch {
      setStep("form");
      alert("Erreur réseau. Veuillez réessayer.");
    }
  };

  if (step === "done") {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-16 flex items-center justify-center">
          <div className="max-w-lg mx-auto px-4 text-center">
            <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold mb-4">Scan en cours ! 🔍</h1>
            <p className="text-dark-300 mb-2">
              Nous avons bien reçu les informations de votre agent <strong className="text-white">{form.agentName}</strong>.
            </p>
            <p className="text-dark-400 mb-8">
              Vous recevrez les résultats détaillés à <strong className="text-brand-400">{form.email}</strong> sous 24h.
            </p>
            <a href="/" className="px-6 py-3 bg-dark-800 hover:bg-dark-700 text-dark-200 font-medium rounded-xl border border-dark-700 transition-all inline-block">
              Retour à l&apos;accueil
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Lancez votre <span className="text-gradient">audit de sécurité</span>
            </h1>
            <p className="text-dark-400">
              Remplissez le formulaire ci-dessous pour soumettre votre agent à notre batterie de tests.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-dark-200 mb-2">Votre nom *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-900/50 border border-dark-700/50 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/25 transition-all"
                  placeholder="Jean Dupont"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-200 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-900/50 border border-dark-700/50 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/25 transition-all"
                  placeholder="jean@entreprise.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-200 mb-2">Nom de l&apos;agent *</label>
              <input
                type="text"
                required
                value={form.agentName}
                onChange={(e) => setForm({ ...form, agentName: e.target.value })}
                className="w-full px-4 py-3 bg-dark-900/50 border border-dark-700/50 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/25 transition-all"
                placeholder="Mon assistant IA"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-200 mb-2">Description de l&apos;agent *</label>
              <textarea
                required
                rows={3}
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="w-full px-4 py-3 bg-dark-900/50 border border-dark-700/50 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/25 transition-all resize-none"
                placeholder="Un chatbot de support client qui répond aux questions sur nos produits..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-200 mb-2">
                System prompt <span className="text-dark-500">(optionnel, confidentiel)</span>
              </label>
              <textarea
                rows={4}
                value={form.systemPrompt}
                onChange={(e) => setForm({ ...form, systemPrompt: e.target.value })}
                className="w-full px-4 py-3 bg-dark-900/50 border border-dark-700/50 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/25 transition-all resize-none font-mono text-sm"
                placeholder="Tu es un assistant de support client. Tu dois..."
              />
              <p className="mt-1.5 text-xs text-dark-500">🔒 Chiffré et supprimé après l&apos;audit</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-dark-200 mb-2">
                Endpoint API <span className="text-dark-500">(optionnel)</span>
              </label>
              <input
                type="url"
                value={form.endpoint}
                onChange={(e) => setForm({ ...form, endpoint: e.target.value })}
                className="w-full px-4 py-3 bg-dark-900/50 border border-dark-700/50 rounded-xl text-white placeholder-dark-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/25 transition-all font-mono text-sm"
                placeholder="https://api.monapp.com/chat"
              />
            </div>

            <button
              type="submit"
              disabled={step === "loading"}
              className="w-full py-4 bg-brand-600 hover:bg-brand-500 disabled:bg-brand-800 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all hover:shadow-xl hover:shadow-brand-600/25 text-lg"
            >
              {step === "loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Soumission en cours...
                </span>
              ) : (
                "Lancer l'audit de sécurité →"
              )}
            </button>

            <p className="text-center text-dark-500 text-xs">
              En soumettant ce formulaire, vous acceptez nos conditions d&apos;utilisation.
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
