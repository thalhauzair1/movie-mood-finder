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

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Problem We Solve</h2>
          <p>
            Choosing what to watch is harder than it should be. Streaming platforms offer hundreds of
            thousands of titles, but their recommendation algorithms are built on what you&apos;ve watched
            before — not how you feel right now. You might love sci-fi films in general, but tonight
            you&apos;re exhausted and need something calm and quiet. The algorithm doesn&apos;t know that.
          </p>
          <p>
            Genre categories don&apos;t help much either. &quot;Drama&quot; encompasses everything from a devastating
            war film to a gentle coming-of-age story. &quot;Comedy&quot; includes both sharp intellectual wit and
            lowbrow slapstick. Browsing by genre tells you almost nothing about whether a film is
            right for your current emotional state.
          </p>
          <p>
            Movie Mood Finder takes a different approach. We ask you to describe how you feel — in
            plain, natural language — and our system maps your words to curated recommendations that
            genuinely suit your moment. Not what you usually like. What you need right now.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">How It Works</h2>
          <p>
            Our mood-matching engine analyzes your natural language input and identifies the emotional
            state behind it. Are you stressed and need something calming? Feeling low and looking for
            motivation? In a great mood and ready for something high-energy? Craving something that
            will genuinely scare you?
          </p>
          <p>
            The system maps these emotional states to carefully curated film selections across twelve
            distinct mood categories. Each recommendation comes with a personalized explanation of
            <em> why</em> that specific film fits your current mood — not just a genre label, but an
            honest description of what the film delivers emotionally and why it&apos;s suited to where
            you are right now.
          </p>
          <p>
            Movie data, posters, ratings, and overviews are sourced in real time from{" "}
            <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              The Movie Database (TMDB)
            </a>
            , ensuring every recommendation reflects accurate, current information.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">The Mood Categories</h2>
          <p>
            We currently support twelve mood categories, each mapped to a carefully curated selection
            of films:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-foreground/80">Motivation &amp; Uplift</strong> — for when you&apos;re feeling low and need a push</li>
            <li><strong className="text-foreground/80">Fun &amp; Laughter</strong> — comedies and feel-good films for high-energy moments</li>
            <li><strong className="text-foreground/80">Calm &amp; Peaceful</strong> — gentle, soothing films for stress and anxiety</li>
            <li><strong className="text-foreground/80">Romance</strong> — love stories for date nights and romantic evenings</li>
            <li><strong className="text-foreground/80">Adventure &amp; Thrills</strong> — action and adventure for when you need excitement</li>
            <li><strong className="text-foreground/80">Mind-Bending</strong> — cerebral sci-fi and psychological films for curious minds</li>
            <li><strong className="text-foreground/80">Horror &amp; Scares</strong> — the best fright films for brave viewers</li>
            <li><strong className="text-foreground/80">Nostalgia</strong> — classics and coming-of-age stories for reflective moods</li>
            <li><strong className="text-foreground/80">Inspiring True Stories</strong> — biographical films and real-world triumphs</li>
            <li><strong className="text-foreground/80">Family Friendly</strong> — films for all ages to enjoy together</li>
            <li><strong className="text-foreground/80">Thriller &amp; Mystery</strong> — suspenseful films with twists and tension</li>
            <li><strong className="text-foreground/80">War &amp; Drama</strong> — powerful films about conflict and courage</li>
          </ul>
          <p>
            The system also handles mixed moods — if your description overlaps two categories, we blend
            the top recommendations from both for a result that reflects your specific combination of
            feelings.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Mood-based movie recommendations powered by intelligent matching</li>
            <li>Real TMDB data: posters, ratings, release dates, and overviews</li>
            <li>Personal watchlist with local storage persistence — no account required</li>
            <li>Detailed movie pages with genres, runtime, and streaming search links</li>
            <li>Similar movie suggestions on every detail page</li>
            <li>Mood shortcut buttons for quick one-click discovery</li>
            <li>Pre-built discovery pages for nine common moods</li>
            <li>Fast, responsive, and mobile-friendly design</li>
            <li>No sign-up, no paywall — completely free to use</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Our Movie Guides</h2>
          <p>
            Beyond the mood-matching tool, we publish in-depth guides to help you navigate the world
            of film with more confidence. Our guides cover everything from the psychology of mood-based
            movie selection to curated lists for specific occasions — date nights, family movie nights,
            horror marathons, and more.
          </p>
          <p>
            Each guide is written with real depth and specificity, going beyond surface-level
            &quot;best of&quot; lists to explain <em>why</em> particular films work for particular moods
            and what to expect from each one.
          </p>
          <Link href="/guides" className="text-accent hover:underline">
            Browse all movie guides →
          </Link>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Our Mission</h2>
          <p>
            We believe choosing a movie shouldn&apos;t be stressful. With hundreds of thousands of
            films available across streaming platforms, decision fatigue is real. Movie Mood Finder
            cuts through the noise and helps you find exactly what you&apos;re in the mood for — in
            seconds.
          </p>
          <p>
            We also believe that the best movie experiences happen when the film matches not just
            your genre preferences, but your current emotional state. A film that might bore you
            on one evening can move you profoundly on another. Our mission is to help you find
            the right film at the right moment — every time.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Data &amp; Attribution</h2>
          <p>
            This product uses the TMDB API but is not endorsed or certified by TMDB. All movie data,
            posters, and metadata are provided by{" "}
            <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              The Movie Database (TMDB)
            </a>
            . We are grateful to the TMDB community for maintaining such a comprehensive and
            well-documented dataset.
          </p>
          <p>
            Watchlist data is stored locally in your browser using localStorage and is never
            transmitted to our servers. We collect no personally identifiable information.
          </p>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-accent to-[var(--gradient-end)] text-white rounded-xl font-semibold hover:opacity-90 transition-all duration-300"
            >
              Start Discovering Movies →
            </Link>
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 px-8 py-3 border border-white/10 text-white rounded-xl font-semibold hover:bg-white/5 transition-all duration-300"
            >
              Browse Guides →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
