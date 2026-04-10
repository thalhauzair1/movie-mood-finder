import axios from "axios";

const TMDB_BASE = "https://api.themoviedb.org/3";
const TMDB_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const IMAGE_BASE = "https://image.tmdb.org/t/p";

export const getImageUrl = (path, size = "w500") => {
  if (!path) return null;
  return `${IMAGE_BASE}/${size}${path}`;
};

export const getBackdropUrl = (path) => {
  if (!path) return null;
  return `${IMAGE_BASE}/original${path}`;
};

/**
 * Search for a movie by title on TMDB
 */
export async function searchMovie(title) {
  try {
    const { data } = await axios.get(`${TMDB_BASE}/search/movie`, {
      params: {
        api_key: TMDB_KEY,
        query: title,
        language: "en-US",
        page: 1,
      },
    });
    return data.results?.[0] || null;
  } catch (err) {
    console.error(`TMDB search failed for "${title}":`, err.message);
    return null;
  }
}

/**
 * Get movie details by ID
 */
export async function getMovieDetails(movieId) {
  try {
    const { data } = await axios.get(`${TMDB_BASE}/movie/${movieId}`, {
      params: {
        api_key: TMDB_KEY,
        language: "en-US",
        append_to_response: "credits,watch/providers,similar",
      },
    });
    return data;
  } catch (err) {
    console.error(`TMDB details failed for ID ${movieId}:`, err.message);
    return null;
  }
}

/**
 * Fetch TMDB data for a list of movie recommendations
 */
export async function enrichWithTMDB(recommendations) {
  const enriched = await Promise.all(
    recommendations.map(async (rec) => {
      const tmdbData = await searchMovie(rec.title);
      if (!tmdbData) {
        return {
          ...rec,
          id: null,
          poster_path: null,
          backdrop_path: null,
          vote_average: null,
          release_date: null,
          overview: rec.reason,
          genre_ids: [],
        };
      }
      return {
        ...rec,
        id: tmdbData.id,
        poster_path: tmdbData.poster_path,
        backdrop_path: tmdbData.backdrop_path,
        vote_average: tmdbData.vote_average,
        release_date: tmdbData.release_date,
        overview: tmdbData.overview,
        genre_ids: tmdbData.genre_ids || [],
      };
    })
  );

  return enriched.filter((m) => m.id !== null);
}

/**
 * Get trending movies
 */
export async function getTrending() {
  try {
    const { data } = await axios.get(`${TMDB_BASE}/trending/movie/week`, {
      params: { api_key: TMDB_KEY },
    });
    return data.results?.slice(0, 10) || [];
  } catch (err) {
    console.error("TMDB trending failed:", err.message);
    return [];
  }
}
