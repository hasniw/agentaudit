"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark-950/80 backdrop-blur-xl border-b border-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-lg font-bold">Agent<span className="text-brand-500">Audit</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/#how" className="text-dark-300 hover:text-white transition-colors text-sm">Comment ça marche</Link>
            <Link href="/#pricing" className="text-dark-300 hover:text-white transition-colors text-sm">Tarifs</Link>
            <Link href="/blog" className="text-dark-300 hover:text-white transition-colors text-sm">Blog</Link>
            <Link
              href="/scan"
              className="px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-brand-600/25"
            >
              Tester gratuitement
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-dark-300">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-dark-900/95 backdrop-blur-xl border-b border-dark-800">
          <div className="px-4 py-4 space-y-3">
            <Link href="/#how" className="block text-dark-300 hover:text-white text-sm" onClick={() => setOpen(false)}>Comment ça marche</Link>
            <Link href="/#pricing" className="block text-dark-300 hover:text-white text-sm" onClick={() => setOpen(false)}>Tarifs</Link>
            <Link href="/blog" className="block text-dark-300 hover:text-white text-sm" onClick={() => setOpen(false)}>Blog</Link>
            <Link href="/scan" className="block px-4 py-2 bg-brand-600 text-white text-sm font-medium rounded-lg text-center" onClick={() => setOpen(false)}>Tester gratuitement</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
