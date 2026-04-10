"use client";

import Link from "next/link";
import MovieCard from "@/components/MovieCard";
import { AdBannerPlaceholder } from "@/components/AdBanner";
import useStore from "@/store/useStore";

export default function WatchlistPage() {
  const { watchlist, removeFromWatchlist } = useStore();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-[var(--font-display)]">
                My Watchlist
              </h1>
              <p className="text-text-muted mt-2 text-sm sm:text-base">
                {watchlist.length === 0
                  ? "Your watchlist is empty. Start discovering movies!"
                  : `${watchlist.length} movie${watchlist.length === 1 ? "" : "s"} saved`}
              </p>
            </div>

            {watchlist.length > 0 && (
              <button
                onClick={() => {
                  if (confirm("Clear your entire watchlist?")) {
                    watchlist.forEach((m) => removeFromWatchlist(m.id));
                  }
                }}
                className="px-4 py-2 text-xs font-medium rounded-xl border border-white/10 text-text-muted hover:text-red-400 hover:border-red-500/30 hover:bg-red-500/5 transition-all duration-300"
              >
                Clear All
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Watchlist Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {watchlist.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-6xl mb-6">🎬</div>
            <h2 className="text-xl font-bold text-white mb-2">
              No movies yet
            </h2>
            <p className="text-text-muted mb-8 max-w-md mx-auto">
              Search by mood on the home page to find great movies, then add
              them to your watchlist.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-accent to-[var(--gradient-end)] text-white rounded-xl font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-[var(--accent-glow)]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              Discover Movies
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
              {watchlist.map((movie, index) => (
                <MovieCard key={movie.id} movie={movie} index={index} />
              ))}
            </div>
            <AdBannerPlaceholder className="mt-12" label="Advertisement" />
          </>
        )}
      </section>
    </div>
  );
}
