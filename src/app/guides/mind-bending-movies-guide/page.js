import Link from "next/link";

export const metadata = {
  title: "Mind-Bending Movies That Make You Think — Movie Mood Finder Guide",
  description:
    "A guide to the most intellectually rewarding films ever made — cerebral sci-fi, psychological thrillers, and reality-questioning masterpieces that stay with you for days.",
  keywords: [
    "mind bending movies",
    "movies that make you think",
    "cerebral films",
    "best sci-fi movies",
    "psychological thriller films",
    "complex movies with twists",
    "intellectual movies",
    "thought provoking films",
  ],
  openGraph: {
    title: "Mind-Bending Movies That Make You Think",
    description:
      "A guide to cerebral sci-fi, psychological thrillers, and reality-questioning films that reward an engaged mind.",
  },
};

const films = [
  {
    title: "Inception (2010)",
    concept: "Dreams within dreams",
    difficulty: "Accessible",
    why: "Christopher Nolan's most purely entertaining film is also a technical and narrative marvel. The concept of extracting information from dreams by navigating layered subconscious realities is explained clearly enough to follow while remaining complex enough to reward repeated viewing. The final shot — a spinning top whose fate remains deliberately ambiguous — sparked more post-film discussion than almost any scene in modern cinema.",
  },
  {
    title: "Arrival (2016)",
    concept: "Language, time, and determinism",
    difficulty: "Moderate",
    why: "Denis Villeneuve's film about a linguist tasked with communicating with alien visitors operates on a surface level as a tense first-contact story, and on a deeper level as a meditation on language, time, and the nature of grief. Its final act restructures everything that came before it in a way that is genuinely moving rather than merely clever. The film's central idea — that language shapes how we experience time — stays with you long after viewing.",
  },
  {
    title: "The Matrix (1999)",
    concept: "Simulated reality",
    difficulty: "Accessible",
    why: "The Wachowskis' landmark film introduced mainstream audiences to philosophical concepts rooted in Descartes, Baudrillard, and Buddhist thought through the vessel of an action blockbuster. The central question — what if your entire perceived reality was a computer simulation? — sparked serious philosophical discussion in academic circles. Over 25 years later, simulation theory is taken seriously by physicists and philosophers alike. The Matrix started that conversation.",
  },
  {
    title: "Eternal Sunshine of the Spotless Mind (2004)",
    concept: "Memory, identity, and love",
    difficulty: "Moderate",
    why: "Charlie Kaufman and Michel Gondry's film presents a future in which a company can erase specific memories on request. When Joel discovers his ex-girlfriend Clementine has erased him, he undergoes the same procedure — only to realize, as his memories are deleted, that he wants to keep them. The film is structured in reverse chronological order inside a collapsing consciousness, which sounds difficult but is actually deeply intuitive and emotionally devastating.",
  },
  {
    title: "Interstellar (2014)",
    concept: "Relativity, time dilation, and love",
    difficulty: "Moderate",
    why: "Nolan's most ambitious film tackles general relativity, black holes, and the many-worlds interpretation through the emotional framework of a father's love for his daughter. It is scientifically rigorous enough that physicist Kip Thorne (who consulted on the film) published academic papers based on concepts visualized in it. The fifth-dimensional sequence remains one of the most visually inventive representations of theoretical physics ever committed to film.",
  },
  {
    title: "Everything Everywhere All at Once (2022)",
    concept: "Multiverse and meaning",
    difficulty: "Accessible",
    why: "The Daniels' Oscar-winning film deploys the multiverse concept not as science fiction but as a metaphor for the overwhelming paralysis of infinite possibility. Its chaotic, maximalist style conceals a quietly devastating argument about the importance of choosing one life and loving the people in it. The film's central emotional insight — that the mundane version of our lives might be the most meaningful — has resonated with audiences across every demographic.",
  },
  {
    title: "Memento (2000)",
    concept: "Memory, identity, and unreliable narrators",
    difficulty: "Challenging",
    why: "Nolan's breakthrough film tells its story in reverse chronological order, following a man with no short-term memory who tattoos important facts onto his body to navigate a murder investigation. The formal conceit isn't a gimmick — it forces the audience into the same disoriented relationship with information as the protagonist. When the full picture finally emerges, it's both intellectually satisfying and profoundly unsettling.",
  },
];

export default function MindBendingMoviesGuidePage() {
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
          <div className="text-5xl mb-4">🧠</div>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2 py-0.5 text-xs font-medium rounded-full border border-accent/20 text-accent bg-accent/5">Curated List</span>
            <span className="text-xs text-text-muted">7 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-[var(--font-display)] mb-4 leading-tight">
            Mind-Bending Movies That Make You Think
          </h1>
          <p className="text-text-muted text-lg leading-relaxed">
            The films on this list don&apos;t just entertain — they change how you think about time, reality,
            consciousness, and what it means to be human. Some are accessible; some demand your full attention.
            All are worth it.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6 text-text-muted leading-relaxed">

          <p className="text-base sm:text-lg">
            There is a specific pleasure in watching a film that respects your intelligence — that
            trusts you to follow complex ideas without over-explaining them, and rewards your attention
            with revelations that feel genuinely earned. The films below are the best examples of this
            kind of cinema: intellectually ambitious works that use the tools of genre filmmaking
            (sci-fi, thriller, drama) to explore ideas that philosophers and scientists have wrestled
            with for centuries.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-2">The Films</h2>

          <div className="space-y-8">
            {films.map((film, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[var(--card-bg)] border border-white/5">
                <h3 className="text-lg font-bold text-white">{film.title}</h3>
                <div className="flex flex-wrap gap-2 mt-1 mb-3">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-text-muted">Theme: {film.concept}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full border ${
                    film.difficulty === "Accessible"
                      ? "bg-green-500/10 border-green-500/20 text-green-400"
                      : film.difficulty === "Moderate"
                      ? "bg-yellow-500/10 border-yellow-500/20 text-yellow-400"
                      : "bg-red-500/10 border-red-500/20 text-red-400"
                  }`}>{film.difficulty}</span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">{film.why}</p>
              </div>
            ))}
          </div>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-white mb-4">How to Watch Mind-Bending Films</h2>
            <p>
              These films reward focus. A few practical suggestions:
            </p>
            <ul className="list-disc list-inside space-y-3 mt-4 ml-2 text-sm">
              <li><strong className="text-white">Watch without distractions.</strong> Mind-bending films rely on structural complexity — missing 10 minutes while on your phone can collapse the entire experience.</li>
              <li><strong className="text-white">Don&apos;t look for explanations during the film.</strong> Let confusion exist; it&apos;s often intentional. Many of these films are designed so that the confusion resolves retroactively.</li>
              <li><strong className="text-white">Discuss afterward.</strong> These films generate some of the best post-movie conversations of any genre. Have someone to watch with if possible.</li>
              <li><strong className="text-white">Rewatch.</strong> Every film on this list reveals new layers on second viewing. Knowing the twist of Memento or Eternal Sunshine makes the entire construction visible in a completely different way.</li>
              <li><strong className="text-white">Start accessible if you&apos;re new to the genre.</strong> Inception and The Matrix are both highly accessible entry points that deliver the genre&apos;s pleasures without demanding extreme patience.</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-white mb-4">Why These Films Matter</h2>
            <p>
              The best mind-bending films aren&apos;t complex for its own sake — the complexity is in
              service of ideas that genuinely matter. Arrival asks whether we would choose a life
              knowing its full shape ahead of time. Eternal Sunshine asks whether painful memories
              are worth keeping. The Matrix asks whether comfortable illusion is preferable to
              difficult truth.
            </p>
            <p>
              These are real philosophical questions, and cinema — more than any other medium — has
              the power to make them visceral rather than abstract. When a film makes you feel the
              weight of a philosophical question rather than merely think about it, that&apos;s the
              medium working at its best.
            </p>
          </section>

          <div className="mt-10 p-6 rounded-2xl glass-effect border border-accent/20 text-center">
            <p className="text-white font-semibold mb-2">Ready to have your mind blown?</p>
            <p className="text-text-muted text-sm mb-4">
              Tell us you want something mind-bending and we&apos;ll find the perfect film for tonight.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-accent to-[var(--gradient-end)] text-white rounded-xl font-semibold hover:opacity-90 transition-all duration-300 text-sm"
            >
              Find My Mind-Bending Movie →
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-white/10">
          <h2 className="text-xl font-bold text-white mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/guides/best-horror-movies-guide", icon: "👻", title: "Best Horror Movies That Actually Scare You" },
              { href: "/guides/how-to-pick-a-movie-by-mood", icon: "🎭", title: "How to Pick a Movie Based on Your Mood" },
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
