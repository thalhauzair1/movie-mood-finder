/**
 * Debounce function
 */
export function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Extract year from date string
 */
export function getYear(dateStr) {
  if (!dateStr) return "N/A";
  return dateStr.split("-")[0];
}

/**
 * Format rating to one decimal
 */
export function formatRating(rating) {
  if (!rating && rating !== 0) return "N/A";
  return Number(rating).toFixed(1);
}

/**
 * Genre ID to name mapping
 */
const genreMap = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

export function getGenreName(id) {
  return genreMap[id] || "Unknown";
}

export function getGenreNames(ids) {
  if (!ids || ids.length === 0) return [];
  return ids.map((id) => genreMap[id]).filter(Boolean);
}

/**
 * Truncate text
 */
export function truncate(str, maxLength = 120) {
  if (!str) return "";
  if (str.length <= maxLength) return str;
  return str.substring(0, maxLength).trim() + "...";
}
