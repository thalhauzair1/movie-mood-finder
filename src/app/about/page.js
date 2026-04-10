import Link from "next/link";

export const metadata = {
  title: "About Movie Mood Finder — Discover Movies by How You Feel",
  description:
    "Movie Mood Finder is a free tool that recommends movies based on your mood. Tell us how you feel and discover the perfect film. Built for movie lovers worldwide.",
  openGraph: {
    title: "About Movie Mood Finder",
    description: "Discover how Movie Mood Finder helps you find the perfect movie based on your mood.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1 className="text-4xl sm:text-5xl font-extrabold gradient-text font-[var(--font-display)] mb-8">
          About Movie Mood Finder
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-text-muted leading-relaxed">
          <p className="text-lg text-foreground/90">
            <strong>Movie Mood Finder</strong> is a free movie discovery tool that matches films to
            how you&apos;re feeling. Instead of browsing through endless categories and lists, simply tell
            us your mood — and we&apos;ll recommend the perfect movie for you.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">🎬 How It Works</h2>
          <p>
            Our intelligent mood-matching engine analyzes your natural language input and maps it to
            curated movie recommendations. Whether you&apos;re feeling sad and need motivation, want
            something fun for the family, or crave a mind-bending thriller — we&apos;ve got you covered.
          </p>
          <p>
            Each recommendation comes with a personalized explanation of <em>why</em> that particular
            movie fits your mood, along with real-time data from{" "}
            <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              The Movie Database (TMDB)
            </a>{" "}
            including ratings, posters, overviews, and more.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">✨ Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Mood-based movie recommendations powered by intelligent matching</li>
            <li>Real TMDB data: posters, ratings, release dates, and overviews</li>
            <li>Personal watchlist with local storage persistence</li>
            <li>Detailed movie pages with genres, runtime, and streaming links</li>
            <li>Similar movie suggestions on every detail page</li>
            <li>Fast, responsive, and mobile-friendly design</li>
            <li>No sign-up required — completely free to use</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">🌍 Our Mission</h2>
          <p>
            We believe choosing a movie shouldn&apos;t be stressful. With hundreds of thousands of
            films available across streaming platforms, decision fatigue is real. Movie Mood Finder
            cuts through the noise and helps you find exactly what you&apos;re in the mood for — in
            seconds.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">📊 Data & Attribution</h2>
          <p>
            This product uses the TMDB API but is not endorsed or certified by TMDB. All movie data,
            posters, and metadata are provided by{" "}
            <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              The Movie Database (TMDB)
            </a>.
          </p>

          <div className="mt-12 pt-8 border-t border-white/10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-accent to-[var(--gradient-end)] text-white rounded-xl font-semibold hover:opacity-90 transition-all duration-300"
            >
              Start Discovering Movies →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
