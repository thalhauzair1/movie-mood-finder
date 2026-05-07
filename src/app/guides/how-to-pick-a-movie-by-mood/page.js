import Link from "next/link";

export const metadata = {
  title: "How to Pick a Movie Based on Your Mood — Movie Mood Finder Guide",
  description:
    "Learn how to choose the perfect movie for your current emotional state. This guide explains mood-based movie selection and why it leads to a better viewing experience.",
  keywords: [
    "how to pick a movie",
    "movies based on mood",
    "what movie should I watch",
    "choosing a movie",
    "movie for your mood",
    "film recommendations by mood",
  ],
  openGraph: {
    title: "How to Pick a Movie Based on Your Mood",
    description:
      "Learn how to choose the perfect movie for your current emotional state.",
  },
};

export default function HowToPickMovieByMoodPage() {
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
          <div className="text-5xl mb-4">🎭</div>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2 py-0.5 text-xs font-medium rounded-full border border-accent/20 text-accent bg-accent/5">Guide</span>
            <span className="text-xs text-text-muted">6 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-[var(--font-display)] mb-4 leading-tight">
            How to Pick a Movie Based on Your Mood
          </h1>
          <p className="text-text-muted text-lg leading-relaxed">
            The single most important factor in whether you enjoy a movie isn&apos;t its rating,
            its director, or even its genre — it&apos;s whether it matches how you feel right now.
          </p>
        </div>
      </section>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-invert max-w-none space-y-8 text-text-muted leading-relaxed text-base sm:text-lg">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Why Mood Matters More Than Genre</h2>
            <p>
              Most people choose movies by genre — they browse &quot;action&quot; or &quot;comedy&quot; or &quot;drama&quot; and
              pick something with good reviews. But this approach ignores a critical variable: your
              current emotional state.
            </p>
            <p>
              A 9/10 rated psychological thriller can feel exhausting and unpleasant if you&apos;ve just
              come home from a stressful day. A silly comedy might feel hollow if you&apos;re in the
              mood for something with emotional depth. The same movie you loved last year might feel
              completely wrong tonight.
            </p>
            <p>
              Research in media psychology consistently shows that we engage with stories differently
              depending on our emotional baseline. When we&apos;re sad, we gravitate toward films that
              validate our feelings or inspire us to feel better. When we&apos;re happy and energized,
              we want films that match and amplify that energy. Choosing against your mood creates
              friction — and friction kills enjoyment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Mood-Movie Matrix: A Practical Framework</h2>
            <p>
              Before choosing a movie, spend 30 seconds honestly assessing how you feel. Here&apos;s a
              simple framework that maps emotional states to the types of films that tend to resonate
              most:
            </p>

            <div className="space-y-4 my-6">
              {[
                { mood: "Sad or emotionally drained", rec: "Uplifting dramas and inspirational true stories — films like The Pursuit of Happyness or Soul that acknowledge pain but ultimately affirm life. Avoid heavy dramas that will compound sadness." },
                { mood: "Happy and energized", rec: "Comedies, fun adventures, and feel-good films that match your high energy. This is the perfect time for blockbusters, ensemble comedies, or Pixar films." },
                { mood: "Stressed or anxious", rec: "Low-stakes, visually beautiful, and calm-paced films. Studio Ghibli films like My Neighbor Totoro or gentle dramas like Chef work exceptionally well here. Avoid thrillers or high-octane action." },
                { mood: "Restless and craving excitement", rec: "Action, adventure, and thriller films that deliver on adrenaline. This is the ideal state for watching Mad Max: Fury Road or Top Gun: Maverick." },
                { mood: "Reflective or thoughtful", rec: "Mind-bending sci-fi, philosophical dramas, and slow-burn thrillers. Films like Arrival, Eternal Sunshine of the Spotless Mind, or Parasite reward an engaged, contemplative mind." },
                { mood: "Nostalgic or missing the past", rec: "Coming-of-age classics, childhood favorites, or films from a decade that feels meaningful to you. Stand By Me, Back to the Future, or any film that transports you to a simpler time." },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-[var(--card-bg)] border border-white/5">
                  <p className="font-semibold text-white mb-1">{item.mood}</p>
                  <p className="text-text-muted text-sm">{item.rec}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The &quot;Emotional Complement vs. Emotional Mirror&quot; Choice</h2>
            <p>
              When you&apos;re feeling a strong emotion, you have two valid approaches for movie selection:
            </p>
            <p>
              <strong className="text-white">The Mirror approach</strong> — watch a film that reflects exactly how you feel.
              If you&apos;re feeling sad and lonely, a film like Lost in Translation or Her validates
              that emotion and can help you process it. The catharsis of seeing your inner state
              reflected on screen can be deeply healing.
            </p>
            <p>
              <strong className="text-white">The Complement approach</strong> — watch a film that gently pulls you in a
              different direction. If you&apos;re sad but don&apos;t want to wallow, an uplifting film like
              Rocky or The Secret Life of Walter Mitty can shift your emotional state without
              feeling forced or hollow.
            </p>
            <p>
              Neither approach is universally better. The key is being honest with yourself: do you
              need to feel understood right now, or do you need a nudge toward a better headspace?
              That single question will guide you to the right movie far more reliably than any
              genre filter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Practical Tips for Better Movie Selection</h2>
            <ul className="list-disc list-inside space-y-3 ml-2">
              <li>
                <strong className="text-white">Check your energy level, not just your emotion.</strong> You might be in a &quot;happy&quot;
                mood but exhausted — that calls for something breezy and low-stakes, not a 3-hour epic.
              </li>
              <li>
                <strong className="text-white">Consider who you&apos;re watching with.</strong> A film that&apos;s perfect for
                your solo mood might be completely wrong for a mixed group. Group dynamics shift the equation.
              </li>
              <li>
                <strong className="text-white">Think about where you want to end up emotionally.</strong> A great movie
                doesn&apos;t just match your starting mood — it takes you somewhere. Decide whether you
                want to feel energized, moved, amused, or thoughtful by the time the credits roll.
              </li>
              <li>
                <strong className="text-white">Avoid decision fatigue by narrowing first.</strong> Browsing all of Netflix
                when you&apos;re already tired makes the decision harder. Start with your mood, then
                apply genre, then length. That order matters.
              </li>
              <li>
                <strong className="text-white">Trust your instincts over aggregate ratings.</strong> A film with a 7.2
                that sounds exactly right for tonight will almost certainly be more enjoyable than
                a 9.0 that feels wrong for your current state.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Why Most Recommendation Algorithms Get This Wrong</h2>
            <p>
              Streaming platforms recommend films based on what you&apos;ve watched before — your
              viewing history. This &quot;collaborative filtering&quot; approach is decent at surface-level
              preferences (you like sci-fi, here&apos;s more sci-fi) but completely blind to your
              current emotional state.
            </p>
            <p>
              The algorithm doesn&apos;t know that you watched action films for the past month but
              tonight you&apos;re feeling melancholy and need something quieter. It doesn&apos;t know you&apos;re
              watching alone after a breakup, or that you&apos;re hosting a mixed-age family gathering,
              or that you just need something genuinely funny rather than &quot;critically acclaimed.&quot;
            </p>
            <p>
              Mood-based discovery starts from where you are right now — not where you&apos;ve been.
              That&apos;s a fundamentally more human approach to finding a movie.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Getting Started</h2>
            <p>
              The simplest way to apply everything in this guide is to describe your current mood in
              plain language and let that drive your search. You don&apos;t need to categorize yourself
              perfectly — just be honest about how you feel and what you want to feel afterward.
            </p>
            <p>
              Our{" "}
              <Link href="/" className="text-accent hover:underline">mood-based movie finder</Link>{" "}
              is built exactly for this. Type something like &quot;I&apos;m exhausted and need something
              calming&quot; or &quot;I feel nostalgic for childhood films&quot; and it maps your words directly to
              curated recommendations. No browsing, no algorithm guessing — just movies matched to
              your moment.
            </p>
          </section>

        </div>

        {/* Related Guides */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <h2 className="text-xl font-bold text-white mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/guides/best-feel-good-movies", icon: "💪", title: "Best Feel-Good Movies for When You're Down" },
              { href: "/guides/mind-bending-movies-guide", icon: "🧠", title: "Mind-Bending Movies That Make You Think" },
            ].map((g) => (
              <Link key={g.href} href={g.href} className="flex items-center gap-4 p-4 rounded-xl bg-[var(--card-bg)] border border-white/5 hover:border-accent/30 transition-all duration-300 group">
                <span className="text-2xl">{g.icon}</span>
                <span className="text-sm font-medium text-white group-hover:text-accent transition-colors">{g.title}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-accent to-[var(--gradient-end)] text-white rounded-xl font-semibold hover:opacity-90 transition-all duration-300"
          >
            Find My Movie by Mood →
          </Link>
        </div>
      </article>
    </div>
  );
}
