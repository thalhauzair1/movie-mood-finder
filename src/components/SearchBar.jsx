"use client";

import { useState, useCallback, useRef, useEffect } from "react";

const EXAMPLE_PROMPTS = [
  "I feel sad but want motivation",
  "Something like Interstellar but lighter",
  "A fun movie for the whole family",
  "I need a good thriller to keep me on edge",
  "Something romantic for date night",
  "Nostalgic 90s childhood vibes",
];

export default function SearchBar({ onSearch, isLoading }) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const debounceRef = useRef(null);

  const handleSubmit = useCallback(
    (e) => {
      e?.preventDefault();
      if (query.trim() && !isLoading) {
        onSearch(query.trim());
      }
    },
    [query, isLoading, onSearch]
  );

  const handleChange = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const handlePromptClick = useCallback(
    (prompt) => {
      setQuery(prompt);
      onSearch(prompt);
    },
    [onSearch]
  );

  // Debounced auto-search
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (query.trim().length >= 10) {
      debounceRef.current = setTimeout(() => {
        // Only auto-search for long enough queries
      }, 500);
    }
    return () => clearTimeout(debounceRef.current);
  }, [query]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Search Input */}
      <form onSubmit={handleSubmit} className="relative group">
        <div
          className={`relative rounded-2xl transition-all duration-500 ${
            isFocused
              ? "shadow-2xl shadow-[var(--accent-glow)]"
              : "shadow-lg shadow-black/30"
          }`}
        >
          {/* Glow border */}
          <div
            className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[var(--accent)] via-[var(--purple-accent)] to-[var(--blue-accent)] opacity-0 transition-opacity duration-500 blur-sm ${
              isFocused ? "opacity-40" : "group-hover:opacity-20"
            }`}
          />

          <div className="relative flex items-center bg-[var(--card-bg)] rounded-2xl border border-white/10 overflow-hidden">
            {/* Search icon */}
            <div className="pl-5 text-text-muted">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </div>

            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={handleChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="How are you feeling today?"
              className="flex-1 bg-transparent text-white placeholder:text-text-muted px-4 py-5 text-base focus:outline-none"
              id="mood-search-input"
            />

            <button
              type="submit"
              disabled={isLoading || !query.trim()}
              className="mr-2 px-6 py-2.5 bg-gradient-to-r from-[var(--accent)] to-[var(--gradient-end)] text-white font-semibold rounded-xl text-sm hover:opacity-90 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
              id="mood-search-button"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="opacity-25"
                    />
                    <path
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      className="opacity-75"
                    />
                  </svg>
                  Finding...
                </>
              ) : (
                "Discover"
              )}
            </button>
          </div>
        </div>
      </form>

      {/* Example Prompts */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {EXAMPLE_PROMPTS.map((prompt, i) => (
          <button
            key={i}
            onClick={() => handlePromptClick(prompt)}
            disabled={isLoading}
            className="px-4 py-2 text-xs sm:text-sm rounded-full border border-white/10 text-text-muted hover:text-white hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 disabled:opacity-40"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
}
