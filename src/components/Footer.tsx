import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-dark-800/50 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-lg font-bold">Agent<span className="text-brand-500">Audit</span></span>
            </div>
            <p className="text-dark-400 text-sm max-w-md">
              Protégez vos agents IA contre les prompt injections. Audit automatisé, rapport détaillé, recommandations actionables.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-dark-200 mb-4">Produit</h3>
            <ul className="space-y-2">
              <li><Link href="/#how" className="text-dark-400 hover:text-white text-sm transition-colors">Comment ça marche</Link></li>
              <li><Link href="/#pricing" className="text-dark-400 hover:text-white text-sm transition-colors">Tarifs</Link></li>
              <li><Link href="/scan" className="text-dark-400 hover:text-white text-sm transition-colors">Lancer un scan</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-dark-200 mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-dark-400 hover:text-white text-sm transition-colors">Blog</Link></li>
              <li><Link href="/blog/prompt-injection-comprendre-se-proteger-2026" className="text-dark-400 hover:text-white text-sm transition-colors">Guide prompt injection</Link></li>
              <li><Link href="/blog/checklist-securite-agent-ia-production" className="text-dark-400 hover:text-white text-sm transition-colors">Checklist sécurité</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-dark-500 text-xs">© 2026 AgentAudit. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-dark-500 hover:text-dark-300 text-xs transition-colors">Mentions légales</Link>
            <Link href="#" className="text-dark-500 hover:text-dark-300 text-xs transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
