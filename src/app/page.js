"use client";

import { useState, useCallback } from "react";
import SearchBar from "@/components/SearchBar";
import MovieCard from "@/components/MovieCard";
import { AdBannerPlaceholder } from "@/components/AdBanner";
import { getMovieRecommendations, getMoodLabel } from "@/services/moodEngine";
import { enrichWithTMDB } from "@/services/tmdbApi";
import useStore from "@/store/useStore";

const FRIENDS_DATA = [
  {
    name: "John",
    action: "liked",
    movie: "Inception",
    avatar: "🧑‍💻",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Sarah",
    action: "recommends",
    movie: "The Dark Knight",
    avatar: "👩‍🎨",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Mike",
    action: "is watching",
    movie: "Interstellar",
    avatar: "🧑‍🚀",
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "Emma",
    action: "loved",
    movie: "Spirited Away",
    avatar: "👩‍🏫",
    color: "from-green-500 to-emerald-500",
  },
];

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [moodLabel, setMoodLabel] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState(null);

  const { setCachedResults, getCachedResults } = useStore();

  const handleSearch = useCallback(
    async (prompt) => {
      setIsLoading(true);
      setError(null);
      setHasSearched(true);

      try {
        // Check cache first
        const cacheKey = prompt.toLowerCase().trim();
        const cached = getCachedResults(cacheKey);

        if (cached) {
          setMovies(cached.movies);
          setMoodLabel(cached.moodLabel);
          setIsLoading(false);
          return;
        }

        // Get mood-matched recommendations
        const { movies: recommendations, detectedMood } =
          getMovieRecommendations(prompt);
        const label = getMoodLabel(detectedMood);
        setMoodLabel(label);

        // Enrich with TMDB data
        const enriched = await enrichWithTMDB(recommendations);

        setMovies(enriched);
        setCachedResults(cacheKey, { movies: enriched, moodLabel: label });
      } catch (err) {
        console.error("Search failed:", err);
        setError(
          "Something went wrong while finding movies. Please try again."
        );
        setMovies([]);
      } finally {
        setIsLoading(false);
      }
    },
    [getCachedResults, setCachedResults]
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        {/* Background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-[10%] w-2 h-2 bg-accent/30 rounded-full animate-float" />
          <div
            className="absolute top-40 right-[15%] w-1.5 h-1.5 bg-purple-accent/40 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-60 left-[30%] w-1 h-1 bg-blue-accent/30 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-40 right-[25%] w-2.5 h-2.5 bg-accent/20 rounded-full animate-float"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 sm:pt-28 sm:pb-16">
          {/* Title */}
          <div className="text-center space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              MOOD-POWERED DISCOVERY
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight font-[var(--font-display)]">
              <span className="gradient-text">Movie Mood</span>
              <br />
              <span className="text-foreground">Finder</span>
            </h1>
            <p className="text-text-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Tell us how you&apos;re feeling and discover the perfect movie to
              match your mood. No sign-up needed.
            </p>
          </div>

          {/* Search Bar */}
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </div>
      </section>

      {/* Ad placement below hero */}
      <AdBannerPlaceholder className="max-w-7xl px-4" />

      {/* Results Section */}
      {(isLoading || movies.length > 0 || error) && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Mood Label */}
          {moodLabel && !isLoading && (
            <div className="flex items-center gap-3 mb-8 animate-fade-in-up">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <h2 className="text-lg sm:text-xl font-bold text-white whitespace-nowrap">
                {moodLabel}
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="text-center py-12">
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
                {error}
              </div>
            </div>
          )}

          {/* Loading Skeletons */}
          {isLoading && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
              {Array.from({ length: 6 }, (_, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden border border-white/5"
                >
                  <div className="aspect-[2/3] animate-shimmer" />
                  <div className="p-4 space-y-3">
                    <div className="h-4 w-3/4 rounded animate-shimmer" />
                    <div className="h-3 w-1/2 rounded animate-shimmer" />
                    <div className="h-8 w-full rounded-xl animate-shimmer" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Movie Grid */}
          {!isLoading && movies.length > 0 && (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
                {movies.map((movie, index) => (
                  <MovieCard key={movie.id} movie={movie} index={index} />
                ))}
              </div>
              <AdBannerPlaceholder className="mt-12" label="Recommended for You" />
            </>
          )}

          {/* No Results */}
          {!isLoading && hasSearched && movies.length === 0 && !error && (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🎬</div>
              <p className="text-text-muted text-lg">
                No movies found. Try describing your mood differently!
              </p>
            </div>
          )}
        </section>
      )}

      {/* Friends Section Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <AdBannerPlaceholder className="mb-12" />
        
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            🔥 What your friends are watching
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FRIENDS_DATA.map((friend, i) => (
            <div
              key={i}
              className={`animate-fade-in-up opacity-0 stagger-${i + 1} group relative overflow-hidden rounded-2xl border border-white/5 bg-[var(--card-bg)] p-5 hover:border-white/15 transition-all duration-500 cursor-default`}
              style={{ animationFillMode: "forwards" }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${friend.color} flex items-center justify-center text-xl shadow-lg flex-shrink-0`}
                >
                  {friend.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white font-semibold">
                    {friend.name}{" "}
                    <span className="text-text-muted font-normal">
                      {friend.action}
                    </span>
                  </p>
                  <p className="text-accent font-bold text-base mt-1 truncate">
                    {friend.movie}
                  </p>
                </div>
              </div>

              {/* Decorative glow */}
              <div
                className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${friend.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
