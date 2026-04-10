"use client";

import Link from "next/link";
import { getImageUrl } from "@/services/tmdbApi";
import { getYear, formatRating, truncate } from "@/utils/helpers";
import useStore from "@/store/useStore";

export default function MovieCard({ movie, index = 0 }) {
  const { addToWatchlist, removeFromWatchlist, isInWatchlist, setSelectedMovieReason } =
    useStore();
  const inWatchlist = isInWatchlist(movie.id);

  const handleWatchlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWatchlist) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist(movie);
    }
  };

  const handleViewDetails = () => {
    setSelectedMovieReason(movie.reason || null);
  };

  const posterUrl = getImageUrl(movie.poster_path);
  const rating = formatRating(movie.vote_average);
  const year = getYear(movie.release_date);

  return (
    <div
      className={`animate-fade-in-up opacity-0 stagger-${Math.min(index + 1, 8)}`}
      style={{ animationFillMode: "forwards" }}
    >
      <div className="group relative bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2 card-shine">
        {/* Poster */}
        <div className="relative aspect-[2/3] overflow-hidden">
          {posterUrl ? (
            <img
              src={posterUrl}
              alt={movie.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[var(--card-hover)] to-[var(--card-bg)] flex items-center justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-text-muted"
              >
                <rect x="2" y="2" width="20" height="20" rx="2" />
                <circle cx="8" cy="8" r="2" />
                <path d="M2 15l5-5 5 5" />
                <path d="M14 13l3-3 5 5" />
              </svg>
            </div>
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Rating badge */}
          {movie.vote_average > 0 && (
            <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#fbbf24"
                stroke="none"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span className="text-yellow-400 text-xs font-bold">{rating}</span>
            </div>
          )}

          {/* Watchlist button */}
          <button
            onClick={handleWatchlistToggle}
            className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
              inWatchlist
                ? "bg-accent text-white shadow-lg shadow-[var(--accent-glow)]"
                : "bg-black/60 backdrop-blur-md text-white/70 hover:bg-accent hover:text-white"
            }`}
            title={inWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
          >
            {inWatchlist ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            )}
          </button>
        </div>

        {/* Card Content */}
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-bold text-base text-white group-hover:text-accent transition-colors duration-300 line-clamp-1">
              {movie.title}
            </h3>
            <p className="text-xs text-text-muted mt-0.5">{year}</p>
          </div>

          {/* AI Explanation */}
          {movie.reason && (
            <p className="text-xs text-text-muted/80 leading-relaxed line-clamp-2 italic">
              &ldquo;{truncate(movie.reason, 100)}&rdquo;
            </p>
          )}

          {/* Actions */}
          <div className="flex gap-2 pt-1">
            <Link
              href={`/movie/${movie.id}`}
              onClick={handleViewDetails}
              className="flex-1 text-center py-2.5 text-xs font-semibold rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              View Details
            </Link>
            <button
              onClick={handleWatchlistToggle}
              className={`flex-1 py-2.5 text-xs font-semibold rounded-xl transition-all duration-300 ${
                inWatchlist
                  ? "bg-accent/20 text-accent border border-accent/30"
                  : "bg-gradient-to-r from-accent to-[var(--gradient-end)] text-white hover:opacity-90"
              }`}
            >
              {inWatchlist ? "✓ In Watchlist" : "+ Watchlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
