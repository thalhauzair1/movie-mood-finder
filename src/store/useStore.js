"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      // Watchlist
      watchlist: [],
      addToWatchlist: (movie) => {
        const exists = get().watchlist.find((m) => m.id === movie.id);
        if (!exists) {
          set({ watchlist: [...get().watchlist, movie] });
        }
      },
      removeFromWatchlist: (movieId) => {
        set({ watchlist: get().watchlist.filter((m) => m.id !== movieId) });
      },
      isInWatchlist: (movieId) => {
        return get().watchlist.some((m) => m.id === movieId);
      },

      // Search results cache
      cachedResults: {},
      setCachedResults: (key, results) => {
        set({
          cachedResults: {
            ...get().cachedResults,
            [key]: { data: results, timestamp: Date.now() },
          },
        });
      },
      getCachedResults: (key) => {
        const entry = get().cachedResults[key];
        if (!entry) return null;
        // Cache for 30 minutes
        if (Date.now() - entry.timestamp > 30 * 60 * 1000) return null;
        return entry.data;
      },

      // Movie detail state (for passing AI reason to detail page)
      selectedMovieReason: null,
      setSelectedMovieReason: (reason) => set({ selectedMovieReason: reason }),
    }),
    {
      name: "movie-mood-finder-storage",
      partialize: (state) => ({
        watchlist: state.watchlist,
        cachedResults: state.cachedResults,
      }),
    }
  )
);

export default useStore;
