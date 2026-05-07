import Link from "next/link";

export const metadata = {
  title: "Best Feel-Good Movies for When You're Down — Movie Mood Finder",
  description:
    "Curated list of the best uplifting, heartwarming, and motivating movies to watch when you're feeling sad, low, or need a boost. Films that actually make you feel better.",
  keywords: [
    "feel good movies",
    "uplifting movies",
    "motivating movies",
    "movies when sad",
    "movies to cheer you up",
    "heartwarming films",
    "best inspirational movies",
  ],
  openGraph: {
    title: "Best Feel-Good Movies for When You're Down",
    description:
      "Curated uplifting and heartwarming films that help when you need a boost.",
  },
};

const movies = [
  {
    title: "The Pursuit of Happyness (2006)",
    why: "Few films capture the raw difficulty of life's lowest points as honestly as this one — and fewer still turn that honesty into something genuinely inspiring. Will Smith's performance is a masterclass in quiet determination. By the final scene, viewers who came in feeling hopeless often leave feeling like they can face whatever is in front of them.",
    mood: "Sad and unmotivated",
  },
  {
    title: "Soul (2020)",
    why: "Pixar's most philosophically rich film asks a deceptively simple question: what makes a life worth living? Soul doesn't answer it with platitudes — it shows you. When everything feels empty or purposeless, this film is a gentle, gorgeous reminder to find the spark in ordinary moments.",
    mood: "Feeling empty or lost",
  },
  {
    title: "Good Will Hunting (1997)",
    why: "A film about healing, potential, and the courage it takes to let people in. Matt Damon and Robin Williams share scenes of such emotional intimacy that watching them feels like therapy. If you're carrying something heavy and hiding it, this film sees you.",
    mood: "Emotionally closed off or hurting",
  },
  {
    title: "Rocky (1976)",
    why: "The original underdog story remains one of cinema's most potent mood-lifters because its triumph isn't about winning — it's about getting back up. You don't need to care about boxing to feel the finale as a visceral emotional victory. Very few films match Rocky's ability to make you want to stand up and fight.",
    mood: "Feeling defeated or knocked down",
  },
  {
    title: "Little Miss Sunshine (2006)",
    why: "This film follows a family of beautiful failures on a road trip, and its genius is in how it reframes failure as something to embrace rather than hide. By the end, it has made a quiet, radical argument: that loving imperfectly and showing up anyway is more than enough. Equal parts funny and moving.",
    mood: "Feeling like a failure",
  },
  {
    title: "The Secret Life of Walter Mitty (2013)",
    why: "A visually breathtaking film about a man who has spent his whole life imagining adventures instead of living them — until he does. Ben Stiller directs with surprising restraint and genuine warmth. If you've been playing life too safely, this film is the nudge you need.",
    mood: "Stuck in a rut or dreaming of more",
  },
  {
    title: "Paddington 2 (2017)",
    why: "Don't let the premise fool you — this is one of the most emotionally generous films of the last decade. Paddington's unflinching belief in the goodness of people is not naive; it's a philosophy. Watching it when you're down doesn't just cheer you up — it makes you want to be kinder.",
    mood: "Feeling cynical or world-weary",
  },
  {
    title: "Coco (2017)",
    why: "Pixar's love letter to family, memory, and the people we carry with us long after they're gone. The final act delivers an emotional payoff that is, quite simply, one of the most moving sequences in animated film history. Have tissues ready.",
    mood: "Missing someone or feeling disconnected from family",
  },
];

export default function BestFeelGoodMoviesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-text-muted hover:text-white text-sm mb-8 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Guides
          </Link>
          <div className="text-5xl mb-4">💪</div>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2 py-0.5 text-xs font-medium rounded-full border border-accent/20 text-accent bg-accent/5">Curated List</span>
            <span className="text-xs text-text-muted">7 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-[var(--font-display)] mb-4 leading-tight">
            Best Feel-Good Movies for When You&apos;re Down
          </h1>
          <p className="text-text-muted text-lg leading-relaxed">
            These films don&apos;t pretend life is easy. They acknowledge difficulty, sit with it for
            a while, and then — through story, character, and craft — remind you why it&apos;s worth
            pushing through.
          </p>
        </div>
      </section>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6 text-text-muted leading-relaxed text-base sm:text-lg">

          <p>
            There&apos;s a difference between a &quot;happy&quot; movie and a &quot;feel-good&quot; movie. Happy movies are
            light and fun — perfect when you&apos;re already in a good mood. Feel-good movies are something
            different: they meet you where you are, even in a dark place, and carry you somewhere better.
          </p>
          <p>
            The films on this list were chosen specifically for moments when you&apos;re feeling low,
            unmotivated, sad, or emotionally drained. Each one has a track record of genuinely moving
            viewers — not through cheap sentimentality, but through honest, human storytelling.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-2">The Films</h2>

          <div className="space-y-8">
            {movies.map((movie, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[var(--card-bg)] border border-white/5">
                <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                  <h3 className="text-lg font-bold text-white">{movie.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 whitespace-nowrap flex-shrink-0">
                    Best for: {movie.mood}
                  </span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">{movie.why}</p>
              </div>
            ))}
          </div>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-white mb-4">What Makes a Film Genuinely Feel-Good?</h2>
            <p>
              The best uplifting films share a key trait: they earn their optimism. They don&apos;t skip
              over the hard parts — they go through them. That&apos;s what separates a film like{" "}
              <em>The Pursuit of Happyness</em> from a generic inspirational story. You feel the
              difficulty, so the breakthrough means something real.
            </p>
            <p>
              When choosing a feel-good film, look for:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-2">
              <li>A protagonist who faces genuine obstacles — not token ones</li>
              <li>Emotional honesty rather than toxic positivity</li>
              <li>A resolution that feels earned rather than convenient</li>
              <li>Humor that doesn&apos;t undercut the emotional weight</li>
              <li>Characters you actually root for</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-white mb-4">How to Watch These Films for Maximum Effect</h2>
            <p>
              When you&apos;re feeling low, your instinct might be to put on something &quot;easy&quot; — something
              that doesn&apos;t demand much. But the films that actually help are often the ones that ask
              you to engage a little. Let yourself get drawn into the story rather than keeping it
              at arm&apos;s length.
            </p>
            <p>
              Consider watching alone with no distractions, or with one trusted person. Give the film
              room to work on you. And if you find yourself feeling something — let yourself feel it.
              The emotional release that comes from crying at a good movie is real and measurable;
              it&apos;s not weakness, it&apos;s relief.
            </p>
          </section>

          <div className="mt-10 p-6 rounded-2xl glass-effect border border-accent/20 text-center">
            <p className="text-white font-semibold mb-2">Need a more specific recommendation?</p>
            <p className="text-text-muted text-sm mb-4">
              Tell our mood finder exactly how you&apos;re feeling and get a personalized pick in seconds.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-accent to-[var(--gradient-end)] text-white rounded-xl font-semibold hover:opacity-90 transition-all duration-300 text-sm"
            >
              Find My Movie →
            </Link>
          </div>
        </div>

        {/* Related */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <h2 className="text-xl font-bold text-white mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/guides/how-to-pick-a-movie-by-mood", icon: "🎭", title: "How to Pick a Movie Based on Your Mood" },
              { href: "/guides/romantic-movies-for-date-night", icon: "❤️", title: "The Ultimate Romantic Movie Guide" },
            ].map((g) => (
              <Link key={g.href} href={g.href} className="flex items-center gap-4 p-4 rounded-xl bg-[var(--card-bg)] border border-white/5 hover:border-accent/30 transition-all duration-300 group">
                <span className="text-2xl">{g.icon}</span>
                <span className="text-sm font-medium text-white group-hover:text-accent transition-colors">{g.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
