import Link from "next/link";

export const metadata = {
  title: "Movie Guides — Expert Tips for Choosing the Perfect Film",
  description:
    "Browse our movie guides for expert recommendations, curated lists, and tips on finding the perfect movie for every mood, occasion, and audience.",
  keywords: [
    "movie guides",
    "how to pick a movie",
    "best movies by mood",
    "movie recommendations guide",
    "what to watch",
  ],
  openGraph: {
    title: "Movie Guides — Expert Tips for Choosing the Perfect Film",
    description:
      "Browse our movie guides for expert recommendations and curated lists.",
  },
};

const guides = [
  {
    slug: "how-to-pick-a-movie-by-mood",
    title: "How to Pick a Movie Based on Your Mood",
    description:
      "Struggling to decide what to watch? This complete guide explains how matching a film to your emotional state leads to a far better viewing experience.",
    category: "Guide",
    readTime: "6 min read",
    icon: "🎭",
  },
  {
    slug: "best-feel-good-movies",
    title: "Best Feel-Good Movies for When You're Down",
    description:
      "A curated list of uplifting, heartwarming, and motivating films that have helped millions of viewers feel better on their worst days.",
    category: "Curated List",
    readTime: "7 min read",
    icon: "💪",
  },
  {
    slug: "romantic-movies-for-date-night",
    title: "The Ultimate Romantic Movie Guide for Date Night",
    description:
      "From timeless classics to modern masterpieces, these are the romantic films that set the perfect mood for a memorable evening.",
    category: "Curated List",
    readTime: "6 min read",
    icon: "❤️",
  },
  {
    slug: "best-horror-movies-guide",
    title: "Best Horror Movies That Actually Scare You",
    description:
      "A deep dive into the scariest, most effective horror films ever made — ranked by what kind of fear they deliver and who they're best suited for.",
    category: "Curated List",
    readTime: "7 min read",
    icon: "👻",
  },
  {
    slug: "family-movie-night-guide",
    title: "The Complete Family Movie Night Guide",
    description:
      "How to choose films everyone in the family will enjoy, plus our top recommendations for kids, teens, and parents watching together.",
    category: "Guide",
    readTime: "6 min read",
    icon: "🍿",
  },
  {
    slug: "mind-bending-movies-guide",
    title: "Mind-Bending Movies That Make You Think",
    description:
      "A guide to the most intellectually rewarding films ever made — cerebral sci-fi, psychological thrillers, and reality-questioning masterpieces.",
    category: "Curated List",
    readTime: "7 min read",
    icon: "🧠",
  },
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-medium tracking-wide mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            MOVIE GUIDES
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-[var(--font-display)] mb-4">
            Expert Movie <span className="gradient-text">Guides</span>
          </h1>
          <p className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From finding the perfect movie for your mood to curated lists for every occasion —
            our guides help you discover films you&apos;ll love every time.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group flex flex-col p-6 rounded-2xl bg-[var(--card-bg)] border border-white/5 hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{guide.icon}</div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 text-xs font-medium rounded-full border border-accent/20 text-accent bg-accent/5">
                  {guide.category}
                </span>
                <span className="text-xs text-text-muted">{guide.readTime}</span>
              </div>
              <h2 className="text-lg font-bold text-white group-hover:text-accent transition-colors mb-2 leading-snug">
                {guide.title}
              </h2>
              <p className="text-sm text-text-muted leading-relaxed flex-1">
                {guide.description}
              </p>
              <div className="flex items-center gap-2 mt-4 text-accent text-sm font-medium">
                Read guide
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
        <div className="glass-effect rounded-2xl p-8 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to Find Your Movie?
          </h2>
          <p className="text-text-muted mb-6 leading-relaxed">
            Skip the guides and go straight to our mood-based movie finder. Tell us how you&apos;re feeling
            and we&apos;ll recommend the perfect film in seconds.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-accent to-[var(--gradient-end)] text-white rounded-xl font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-[var(--accent-glow)]"
          >
            Find My Movie →
          </Link>
        </div>
      </section>
    </div>
  );
}
