import Link from "next/link";

export const metadata = {
  title: "Best Romantic Movies for Date Night — Movie Mood Finder Guide",
  description:
    "The ultimate curated list of romantic movies for date night — from timeless classics to modern love stories. Find the perfect film to set the mood for love.",
  keywords: [
    "romantic movies for date night",
    "best romance movies",
    "love movies",
    "date night films",
    "romantic films",
    "movies for couples",
    "best romantic movies all time",
  ],
  openGraph: {
    title: "Best Romantic Movies for Date Night",
    description:
      "The ultimate curated list of romantic movies — from timeless classics to modern love stories.",
  },
};

const picks = [
  {
    title: "Before Sunrise (1995)",
    tagline: "The gold standard of romantic cinema",
    why: "Two strangers meet on a train and spend one night walking through Vienna talking about life, love, and everything in between. Richard Linklater's masterpiece captures the electric feeling of new connection with startling authenticity. No other film better depicts those rare conversations where you feel like you've known someone forever within hours of meeting them. A perfect date-night film because it will make you want to have exactly this kind of conversation with the person next to you.",
  },
  {
    title: "La La Land (2016)",
    tagline: "A dazzling love letter to dreamers",
    why: "Damien Chazelle's Oscar-winning musical is one of the most visually stunning romantic films ever made. Ryan Gosling and Emma Stone have chemistry that lights up every scene. What makes La La Land exceptional for date nights is its emotional honesty — it doesn't give you a fairy tale ending, it gives you something realer and more bittersweet, which tends to generate far more interesting conversation afterward.",
  },
  {
    title: "Pride and Prejudice (2005)",
    tagline: "The definitive slow-burn romance",
    why: "The chemistry between Keira Knightley and Matthew Macfadyen is genuinely electric — powered by restraint, tension, and all the things unsaid. Keira Knightley's Elizabeth Bennet is one of cinema's great romantic heroines: sharp, proud, and ultimately vulnerable. The rain scene alone justifies the film's place on this list. Perfect for those who love a romance where two people have to overcome their own stubbornness to find each other.",
  },
  {
    title: "About Time (2013)",
    tagline: "Romantic and quietly devastating",
    why: "This Richard Curtis gem is ostensibly a romance but reveals itself to be something much richer — a meditation on appreciating the life you have. Domhnall Gleeson and Rachel McAdams are wonderfully matched, and the film's emotional final act transforms it from a charming rom-com into something genuinely profound. Rarely does a film make you want to treasure the ordinary as much as this one does.",
  },
  {
    title: "Crazy Rich Asians (2018)",
    tagline: "Modern glamour with real heart",
    why: "Glossy, fun, and emotionally grounded in a way the trailer doesn't quite convey. Constance Wu's Rachel Chu is a genuinely compelling protagonist navigating not just a romance but an entire cultural world alien to her. The film is joyful to look at, genuinely funny, and delivers its emotional beats with precision. An excellent choice when you want something romantic that doesn't sacrifice entertainment for sentiment.",
  },
  {
    title: "The Notebook (2004)",
    tagline: "The definitive tear-jerker romance",
    why: "Whatever you think of the genre, The Notebook earns its status. Ryan Gosling and Rachel McAdams have chemistry so powerful that their off-screen relationship started during filming. The dual-timeline structure gives the love story unusual weight and context. This is the film for date nights when you want to cry together — which, it turns out, is one of the most bonding experiences couples can share.",
  },
  {
    title: "When Harry Met Sally (1989)",
    tagline: "The smartest rom-com ever made",
    why: "Nora Ephron and Rob Reiner's film asks whether men and women can ever be just friends — and answers it over twelve years of friendship, near-misses, and finally love. It's witty, warm, and endlessly quotable. The fake-orgasm scene is iconic for good reason. If you and your date haven't seen this, it should be mandatory viewing before any further relationship milestones.",
  },
];

export default function RomanticMoviesDateNightPage() {
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
          <div className="text-5xl mb-4">❤️</div>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2 py-0.5 text-xs font-medium rounded-full border border-accent/20 text-accent bg-accent/5">Curated List</span>
            <span className="text-xs text-text-muted">6 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-[var(--font-display)] mb-4 leading-tight">
            The Ultimate Romantic Movie Guide for Date Night
          </h1>
          <p className="text-text-muted text-lg leading-relaxed">
            The right romantic film doesn&apos;t just entertain — it creates a shared emotional
            experience that makes the evening more memorable. Here are the films that actually deliver.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6 text-text-muted leading-relaxed">

          <p className="text-base sm:text-lg">
            Choosing a romantic film for a date night carries some pressure — you want something that
            creates a mood, not something that provokes a cringe or derails the evening. The films
            below are chosen because they work on multiple levels: they&apos;re emotionally engaging,
            beautifully crafted, and — crucially — generate the kind of conversation that makes an
            evening genuinely memorable.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-2">The Films</h2>

          <div className="space-y-8">
            {picks.map((film, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[var(--card-bg)] border border-white/5">
                <h3 className="text-lg font-bold text-white">{film.title}</h3>
                <p className="text-accent text-sm italic mb-3">{film.tagline}</p>
                <p className="text-text-muted text-sm leading-relaxed">{film.why}</p>
              </div>
            ))}
          </div>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-white mb-4">How to Choose Between These Films</h2>
            <p>
              With seven excellent options, the choice comes down to the mood you want to set and
              the kind of person you&apos;re watching with. A few questions to guide you:
            </p>
            <ul className="list-disc list-inside space-y-3 mt-4 ml-2 text-sm">
              <li><strong className="text-white">Want to laugh?</strong> When Harry Met Sally or Crazy Rich Asians.</li>
              <li><strong className="text-white">Want to feel deeply?</strong> About Time or Before Sunrise.</li>
              <li><strong className="text-white">Want to cry together?</strong> The Notebook, without question.</li>
              <li><strong className="text-white">Want something visually stunning?</strong> La La Land or Pride and Prejudice.</li>
              <li><strong className="text-white">First date?</strong> Something lighter — Crazy Rich Asians or When Harry Met Sally. Save the emotional heavyweights for later.</li>
              <li><strong className="text-white">Established couple?</strong> Before Sunrise or About Time — films that make you appreciate what you already have.</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-white mb-4">What Makes a Great Date-Night Film?</h2>
            <p>
              Not all romantic films are equally suited for date nights. The best ones share a few
              characteristics: they&apos;re engaging enough that you&apos;re not bored, but not so intense that
              you forget there&apos;s a real person next to you. They create emotional moments that feel
              shared rather than isolating. And they generate conversation — either during or after
              — because they&apos;ve said something true about love, relationships, or the human condition.
            </p>
            <p>
              Films to potentially avoid on first dates: anything with explicit infidelity as a
              central theme, films with ambiguous or unhappy endings, and anything that runs longer
              than 2.5 hours (unless you&apos;re absolutely certain it&apos;s a favorite of both of you).
            </p>
          </section>

          <div className="mt-10 p-6 rounded-2xl glass-effect border border-accent/20 text-center">
            <p className="text-white font-semibold mb-2">Looking for something more specific?</p>
            <p className="text-text-muted text-sm mb-4">
              Describe your evening and we&apos;ll find the perfect romantic film for the exact mood you want to set.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-accent to-[var(--gradient-end)] text-white rounded-xl font-semibold hover:opacity-90 transition-all duration-300 text-sm"
            >
              Find My Movie →
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-white/10">
          <h2 className="text-xl font-bold text-white mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/guides/best-feel-good-movies", icon: "💪", title: "Best Feel-Good Movies for When You're Down" },
              { href: "/guides/family-movie-night-guide", icon: "🍿", title: "The Complete Family Movie Night Guide" },
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
