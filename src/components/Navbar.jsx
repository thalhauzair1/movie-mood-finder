"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import useStore from "@/store/useStore";

export default function Navbar() {
  const pathname = usePathname();
  const watchlist = useStore((s) => s.watchlist);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/watchlist", label: "Watchlist" },
  ];

  return (
    <nav className="glass-effect fixed top-0 left-0 right-0 z-50 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--purple-accent)] flex items-center justify-center shadow-lg shadow-[var(--accent-glow)] group-hover:shadow-xl group-hover:shadow-[var(--accent-glow)] transition-all duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 11V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5" />
                <polygon points="10,9 16,12 10,15" fill="white" stroke="none" />
              </svg>
            </div>
            <span className="text-lg font-bold font-[var(--font-display)] tracking-tight">
              <span className="gradient-text">Movie</span>
              <span className="text-foreground">Mood</span>
            </span>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  pathname === link.href
                    ? "text-white bg-white/10"
                    : "text-text-muted hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
                {link.href === "/watchlist" && watchlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-[10px] font-bold flex items-center justify-center text-white shadow-lg shadow-[var(--accent-glow)]">
                    {watchlist.length}
                  </span>
                )}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
