"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getMovieDetails, getImageUrl, getBackdropUrl } from "@/services/tmdbApi";
import { formatRating, getYear } from "@/utils/helpers";
import useStore from "@/store/useStore";

const STREAMING_PLATFORMS = [
  { name: "Netflix", color: "bg-red-600", icon: "N" },
  { name: "Prime Video", color: "bg-blue-600", icon: "P" },
  { name: "Disney+", color: "bg-blue-800", icon: "D+" },
  { name: "Hulu", color: "bg-green-600", icon: "H" },
  { name: "Apple TV+", color: "bg-gray-700", icon: "🍎" },
];

export default function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist,
    selectedMovieReason,
  } = useStore();

  const inWatchlist = movie ? isInWatchlist(movie.id) : false;

  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);
        const data = await getMovieDetails(id);
        if (data) {
          setMovie(data);
        } else {
          setError("Movie not found.");
        }
      } catch (err) {
        setError("Failed to load movie details.");
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchMovie();
  }, [id]);

  const handleWatchlistToggle = () => {
    if (!movie) return;
    if (inWatchlist) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
        release_date: movie.release_date,
        overview: movie.overview,
        reason: selectedMovieReason,
      });
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-accent/30 border-t-accent rounded-full animate-spin" />
          <p className="text-text-muted">Loading movie details...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !movie) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-5xl">😕</div>
          <p className="text-text-muted text-lg">{error || "Movie not found."}</p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-accent text-white rounded-xl font-semibold hover:opacity-90 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const backdropUrl = getBackdropUrl(movie.backdrop_path);
  const posterUrl = getImageUrl(movie.poster_path, "w500");

  return (
    <div className="min-h-screen">
      {/* Backdrop Hero */}
      <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        {backdropUrl ? (
          <img
            src={backdropUrl}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[var(--card-bg)] to-background" />
        )}
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />

        {/* Back button */}
        <Link
          href="/"
          className="absolute top-6 left-6 glass-effect px-4 py-2 rounded-xl text-sm font-medium text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2 z-10"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </Link>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-48 sm:-mt-56 z-10 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Poster + Sidebar Ads */}
          <div className="flex-shrink-0 w-full lg:w-64 space-y-6">
            <div className="w-48 sm:w-64 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
              {posterUrl ? (
                <img
                  src={posterUrl}
                  alt={movie.title}
                  className="w-full aspect-[2/3] object-cover"
                />
              ) : (
                <div className="w-full aspect-[2/3] bg-[var(--card-bg)] flex items-center justify-center text-text-muted">
                  No Poster
                </div>
              )}
            </div>
            
          </div>

          {/* Right Column: Details */}
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-[var(--font-display)] leading-tight">
                {movie.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-text-muted">
                <span className="flex items-center gap-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#fbbf24"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span className="text-yellow-400 font-bold">
                    {formatRating(movie.vote_average)}
                  </span>
                </span>
                <span className="w-1 h-1 rounded-full bg-text-muted" />
                <span>{getYear(movie.release_date)}</span>
                {movie.runtime > 0 && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-text-muted" />
                    <span>
                      {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Genres */}
            {movie.genres?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="px-3 py-1 text-xs font-medium rounded-full border border-white/10 bg-white/5 text-text-muted"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            )}

            {/* AI Explanation */}
            {selectedMovieReason && (
              <div className="glass-effect rounded-2xl p-5 border border-accent/20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-accent text-sm font-semibold">
                    🎯 Why this movie?
                  </span>
                </div>
                <p className="text-foreground/90 text-sm leading-relaxed italic">
                  &ldquo;{selectedMovieReason}&rdquo;
                </p>
              </div>
            )}

            {/* Overview */}
            <div>
              <h2 className="text-lg font-bold text-white mb-2">Overview</h2>
              <p className="text-text-muted leading-relaxed text-sm sm:text-base">
                {movie.overview || "No overview available."}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={handleWatchlistToggle}
                className={`px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                  inWatchlist
                    ? "bg-accent/20 text-accent border border-accent/30 hover:bg-accent/30"
                    : "bg-gradient-to-r from-accent to-[var(--gradient-end)] text-white hover:opacity-90 shadow-lg shadow-[var(--accent-glow)]"
                }`}
              >
                {inWatchlist ? (
                  <>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    In Watchlist
                  </>
                ) : (
                  <>
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
                    Add to Watchlist
                  </>
                )}
              </button>
            </div>

            {/* Where to Watch */}
            <div className="pt-4">
              <h2 className="text-lg font-bold text-white mb-4">
                📺 Where to Watch
              </h2>
              <div className="flex flex-wrap gap-3">
                {STREAMING_PLATFORMS.map((platform) => (
                  <a
                    key={platform.name}
                    href={`https://www.google.com/search?q=watch+${encodeURIComponent(movie.title)}+on+${encodeURIComponent(platform.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-[var(--card-bg)] hover:border-white/20 hover:bg-[var(--card-hover)] transition-all duration-300"
                  >
                    <span
                      className={`w-7 h-7 rounded-lg ${platform.color} flex items-center justify-center text-xs font-bold text-white`}
                    >
                      {platform.icon}
                    </span>
                    <span className="text-sm text-text-muted group-hover:text-white transition-colors">
                      {platform.name}
                    </span>
                  </a>
                ))}
              </div>
              <p className="text-xs text-text-muted/60 mt-3">
                Click a platform to search for availability.
              </p>
            </div>
          </div>
        </div>

        {/* Similar Movies */}
        {movie.similar?.results?.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-bold text-white mb-6">
              Similar Movies
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {movie.similar.results.slice(0, 6).map((similar) => (
                <Link
                  key={similar.id}
                  href={`/movie/${similar.id}`}
                  className="group rounded-xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-[2/3] overflow-hidden">
                    {similar.poster_path ? (
                      <img
                        src={getImageUrl(similar.poster_path, "w300")}
                        alt={similar.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-[var(--card-bg)] flex items-center justify-center text-text-muted text-xs">
                        No Poster
                      </div>
                    )}
                  </div>
                  <div className="p-2 bg-[var(--card-bg)]">
                    <p className="text-xs font-medium text-white truncate">
                      {similar.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
