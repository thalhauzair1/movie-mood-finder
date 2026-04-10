"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "About", href: "/about" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Contact", href: "/contact" },
  ];

  const moodLinks = [
    { label: "Sad", href: "/discover/sad" },
    { label: "Happy", href: "/discover/happy" },
    { label: "Romantic", href: "/discover/romantic" },
    { label: "Scary", href: "/discover/scary" },
    { label: "Adventure", href: "/discover/adventure" },
  ];

  return (
    <footer className="mt-auto border-t border-white/5 bg-[var(--card-bg)]/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--purple-accent)] flex items-center justify-center shadow-lg group-hover:shadow-[var(--accent-glow)] transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 11V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5" />
                  <polygon points="10,9 16,12 10,15" fill="white" stroke="none" />
                </svg>
              </div>
              <span className="text-lg font-bold font-[var(--font-display)] tracking-tight">
                <span className="gradient-text">Movie</span>
                <span className="text-foreground">Mood</span>
              </span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed">
              Discover the perfect movie based on how you feel. Our smart mood engine finds films that match your emotions perfectly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Platform</h3>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text-muted hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Discovery */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Discovery</h3>
            <ul className="space-y-4">
              {moodLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text-muted hover:text-accent transition-colors text-sm">
                    {link.label} Movies
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal/Monetization Notice */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Support</h3>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              Help us stay free by allowing ads. We only show high-quality, relevant content to support our recommendations.
            </p>
            <div className="flex gap-4">
               {/* Placeholders for social icons if needed */}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs">
            © {currentYear} Movie Mood Finder. All rights reserved. 
          </p>
          <p className="text-text-muted text-xs">
            Data provided by <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="text-accent">TMDB</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
