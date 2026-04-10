import { notFound } from "next/navigation";
import Link from "next/link";
import { getMovieRecommendations, getMoodLabel } from "@/services/moodEngine";
import { enrichWithTMDB, getImageUrl } from "@/services/tmdbApi";
import { formatRating, getYear } from "@/utils/helpers";

const MOOD_ROUTES = {
  sad: { query: "I feel sad but want motivation", title: "Movies for When You're Feeling Sad", description: "Feeling low? These uplifting movies will boost your mood and remind you that brighter days are ahead. Curated picks for when you need motivation and hope." },
  happy: { query: "I'm happy and want fun comedy", title: "Fun Movies for a Good Mood", description: "Keep the good vibes going! These feel-good comedies and lighthearted films are perfect when you're already happy and want to stay that way." },
  romantic: { query: "romantic movie for date night", title: "Best Romantic Movies for Date Night", description: "Looking for the perfect romantic movie? From timeless love stories to modern rom-coms, these films will set the mood for love." },
  scary: { query: "scary horror movie", title: "Scariest Horror Movies to Watch", description: "Ready to be terrified? These spine-chilling horror films deliver genuine scares, supernatural thrills, and sleepless nights." },
  adventure: { query: "exciting adventure movie", title: "Best Adventure Movies for Thrill Seekers", description: "Craving action and excitement? These epic adventure films will take you on breathtaking journeys filled with adrenaline." },
  thriller: { query: "dark thriller mystery", title: "Best Thriller Movies That Keep You Guessing", description: "Love edge-of-your-seat suspense? These gripping thrillers deliver shocking twists, intense mystery, and relentless tension." },
  family: { query: "family friendly movie for everyone", title: "Best Family Movies to Watch Together", description: "Looking for a movie the whole family can enjoy? These heartwarming, age-appropriate films are perfect for family movie night." },
  "mind-bending": { query: "mind bending sci-fi", title: "Mind-Bending Movies That Will Blow Your Mind", description: "Love movies that make you think? These cerebral sci-fi and psychological films will challenge your perception of reality." },
  nostalgic: { query: "nostalgic childhood classic", title: "Nostalgic Movies That Take You Back", description: "Take a trip down memory lane with these beloved classics that defined childhood. Perfect for reliving the magic of simpler times." },
};

export function generateStaticParams() {
  return Object.keys(MOOD_ROUTES).map((mood) => ({ mood }));
}

export async function generateMetadata({ params }) {
  const { mood } = await params;
  const route = MOOD_ROUTES[mood];
  if (!route) return {};

  return {
    title: `${route.title} — Movie Mood Finder`,
    description: route.description,
    keywords: [
      `${mood} movies`,
      `movies when you feel ${mood}`,
      "movie recommendations",
      "what movie should I watch",
      "movies based on mood",
      `best ${mood} movies`,
    ],
    openGraph: {
      title: route.title,
      description: route.description,
    },
  };
}

export default async function DiscoverMoodPage({ params }) {
  const { mood } = await params;
  const route = MOOD_ROUTES[mood];

  if (!route) {
    notFound();
  }

  const { movies: recommendations, detectedMood } = getMovieRecommendations(route.query);
  const label = getMoodLabel(detectedMood);

  let movies = [];
  try {
    movies = await enrichWithTMDB(recommendations);
  } catch (e) {
    console.error("TMDB enrichment failed:", e);
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-3xl mb-4">{label.split(" ")[0]}</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-[var(--font-display)] mb-4">
            {route.title}
          </h1>
          <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {route.description}
          </p>
        </div>
      </section>

      {/* Ad placement */}
      <div className="max-w-4xl mx-auto px-4 my-6">
        <div className="border border-dashed border-white/10 rounded-xl bg-white/[0.02] px-4 py-6 text-center">
          <p className="text-text-muted/40 text-xs uppercase tracking-widest">Advertisement</p>
        </div>
      </div>

      {/* Movie Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {movies.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {movies.map((movie, i) => (
                <Link
                  key={movie.id}
                  href={`/movie/${movie.id}`}
                  className="group flex gap-4 p-4 rounded-2xl bg-[var(--card-bg)] border border-white/5 hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5"
                >
                  <div className="flex-shrink-0 w-24 sm:w-28 rounded-xl overflow-hidden">
                    {movie.poster_path ? (
                      <img
                        src={getImageUrl(movie.poster_path, "w300")}
                        alt={movie.title}
                        className="w-full aspect-[2/3] object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full aspect-[2/3] bg-[var(--card-hover)] flex items-center justify-center text-text-muted text-xs">
                        No Poster
                      </div>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col justify-center min-w-0">
                    <h2 className="text-base font-bold text-white group-hover:text-accent transition-colors line-clamp-1">
                      {movie.title}
                    </h2>
                    <div className="flex items-center gap-2 mt-1 text-xs text-text-muted">
                      {movie.vote_average > 0 && (
                        <span className="flex items-center gap-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="#fbbf24" stroke="none">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                          {formatRating(movie.vote_average)}
                        </span>
                      )}
                      <span>{getYear(movie.release_date)}</span>
                    </div>
                    <p className="text-xs text-text-muted/70 mt-2 leading-relaxed line-clamp-2 italic">
                      &ldquo;{movie.reason}&rdquo;
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom ad */}
            <div className="max-w-4xl mx-auto mt-12">
              <div className="border border-dashed border-white/10 rounded-xl bg-white/[0.02] px-4 py-6 text-center">
                <p className="text-text-muted/40 text-xs uppercase tracking-widest">Advertisement</p>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-16 text-text-muted">
            <p>Movies are loading. Please try again.</p>
          </div>
        )}
      </section>

      {/* SEO content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-white mb-4">
          How We Pick {route.title.replace("Best ", "the Best ")}
        </h2>
        <div className="text-text-muted space-y-4 leading-relaxed text-sm">
          <p>
            At Movie Mood Finder, we understand that choosing a movie is deeply personal — it depends
            on how you&apos;re feeling in the moment. Our mood-matching engine analyzes your emotional
            state and matches it with films that have been carefully curated by movie enthusiasts.
          </p>
          <p>
            Each recommendation includes a personalized explanation of why that specific movie fits
            your current mood, powered by real-time data from The Movie Database (TMDB). We consider
            critical ratings, audience reception, genre fit, and emotional tone to ensure every
            suggestion resonates with how you feel.
          </p>
          <p>
            Whether you&apos;re looking for a pick-me-up after a tough day, an adrenaline-pumping
            adventure, or a cozy family movie night — Movie Mood Finder has you covered. Try our{" "}
            <Link href="/" className="text-accent hover:underline">
              mood search
            </Link>{" "}
            to discover your next favorite film.
          </p>
        </div>
      </section>

      {/* Related moods */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-xl font-bold text-white mb-6">Explore Other Moods</h2>
        <div className="flex flex-wrap gap-3">
          {Object.entries(MOOD_ROUTES)
            .filter(([key]) => key !== mood)
            .map(([key, val]) => (
              <Link
                key={key}
                href={`/discover/${key}`}
                className="px-4 py-2 text-sm rounded-full border border-white/10 text-text-muted hover:text-white hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
              >
                {val.title.replace("Best ", "").replace(" to Watch", "").replace(" That ", " ")}
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
