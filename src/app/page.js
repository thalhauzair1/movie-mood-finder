"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import MovieCard from "@/components/MovieCard";
import { getMovieRecommendations, getMoodLabel } from "@/services/moodEngine";
import { enrichWithTMDB } from "@/services/tmdbApi";
import useStore from "@/store/useStore";

const MOOD_SHORTCUTS = [
  { label: "I'm feeling sad", query: "I feel sad and need something uplifting", icon: "💪" },
  { label: "Date night", query: "romantic movie for date night", icon: "❤️" },
  { label: "Family movie", query: "family friendly movie for everyone", icon: "🍿" },
  { label: "Something scary", query: "scary horror movie", icon: "👻" },
  { label: "Can't stop thinking", query: "mind bending sci-fi thriller", icon: "🧠" },
  { label: "Feel nostalgic", query: "nostalgic childhood classic", icon: "🕰️" },
  { label: "Thrill seeker", query: "exciting action adventure movie", icon: "🚀" },
  { label: "Make me laugh", query: "funny comedy movie", icon: "😂" },
];

const EDITORIAL_PICKS = [
  {
    title: "How to Pick a Movie by Mood",
    description: "Why your emotional state matters more than genre when choosing what to watch.",
    href: "/guides/how-to-pick-a-movie-by-mood",
    icon: "🎭",
  },
  {
    title: "Best Feel-Good Movies",
    description: "Films that honestly acknowledge difficulty — and then carry you somewhere better.",
    href: "/guides/best-feel-good-movies",
    icon: "💪",
  },
  {
    title: "Mind-Bending Movies Guide",
    description: "Cerebral sci-fi and psychological films that stay with you for days.",
    href: "/guides/mind-bending-movies-guide",
    icon: "🧠",
  },
  {
    title: "Romantic Movies for Date Night",
    description: "Films that set the right mood and generate the best conversations afterward.",
    href: "/guides/romantic-movies-for-date-night",
    icon: "❤️",
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

      {/* Mood Shortcuts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
          Quick mood picks
        </h2>
        <div className="flex flex-wrap gap-3">
          {MOOD_SHORTCUTS.map((shortcut, i) => (
            <button
              key={i}
              onClick={() => handleSearch(shortcut.query)}
              disabled={isLoading}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-[var(--card-bg)] hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 text-sm text-text-muted hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{shortcut.icon}</span>
              {shortcut.label}
            </button>
          ))}
        </div>
      </section>

      {/* Editorial Guides Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Movie Guides
          </h2>
          <Link
            href="/guides"
            className="text-sm text-accent hover:underline flex items-center gap-1"
          >
            View all guides
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {EDITORIAL_PICKS.map((pick, i) => (
            <Link
              key={i}
              href={pick.href}
              className="group flex flex-col p-5 rounded-2xl border border-white/5 bg-[var(--card-bg)] hover:border-accent/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5"
            >
              <span className="text-3xl mb-3">{pick.icon}</span>
              <h3 className="text-sm font-bold text-white group-hover:text-accent transition-colors mb-2 leading-snug">
                {pick.title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed flex-1">
                {pick.description}
              </p>
              <span className="text-accent text-xs font-medium mt-3 flex items-center gap-1">
                Read guide
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* About section with written content for crawlability */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Why Mood-Based Movie Discovery Works
        </h2>
        <div className="text-text-muted space-y-4 leading-relaxed text-sm sm:text-base text-left">
          <p>
            The most important factor in whether you enjoy a film isn&apos;t its genre, its Rotten Tomatoes
            score, or how many awards it won. It&apos;s whether it matches how you&apos;re feeling right now.
            A brilliant psychological thriller can feel exhausting on a day you&apos;re already stressed.
            A silly comedy can feel hollow when you need something with emotional weight.
          </p>
          <p>
            Movie Mood Finder is built around this insight. Instead of browsing endless genre categories,
            you simply describe your current mood in natural language — and our recommendation engine
            maps it to curated film picks that are actually suited to how you feel. Every recommendation
            includes a personalized explanation of why that specific film fits your moment.
          </p>
          <p>
            All movie data is sourced in real time from{" "}
            <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              The Movie Database (TMDB)
            </a>
            , giving you accurate ratings, posters, and overviews for every recommendation.
            No sign-up required. Completely free.
          </p>
        </div>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 mt-8 text-sm text-accent hover:underline"
        >
          Learn more about how it works →
        </Link>
      </section>
    </div>
  );
}
