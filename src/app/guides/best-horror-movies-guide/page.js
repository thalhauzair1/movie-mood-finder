import Link from "next/link";

export const metadata = {
  title: "Best Horror Movies That Actually Scare You — Movie Mood Finder Guide",
  description:
    "A deep dive into the scariest, most effective horror films ever made — categorized by type of fear, viewer tolerance, and what makes each one genuinely terrifying.",
  keywords: [
    "best horror movies",
    "scariest movies ever made",
    "horror films guide",
    "movies that actually scare you",
    "psychological horror films",
    "supernatural horror movies",
    "modern horror films",
  ],
  openGraph: {
    title: "Best Horror Movies That Actually Scare You",
    description:
      "A guide to the scariest, most effective horror films — ranked by the type of fear they deliver.",
  },
};

const films = [
  {
    title: "Hereditary (2018)",
    type: "Psychological / Supernatural",
    scare: "Dread and grief",
    why: "Ari Aster's debut is not a film that jumps at you — it suffocates you. Built on the framework of grief and family dysfunction, it escalates from domestic drama to full-scale nightmare with the inevitability of a Greek tragedy. The performances, particularly Toni Collette's, are extraordinary. This is the film that horror veterans recommend when someone says they haven't been truly scared in years.",
  },
  {
    title: "The Shining (1980)",
    type: "Psychological Horror",
    scare: "Isolation and madness",
    why: "Stanley Kubrick's adaptation of Stephen King's novel is simultaneously the most technically accomplished and the most psychologically disturbing horror film ever made. Jack Nicholson's descent into madness is terrifying precisely because it's gradual and internally logical. The Overlook Hotel becomes one of cinema's most suffocating spaces. No haunted house film has matched it since.",
  },
  {
    title: "Get Out (2017)",
    type: "Societal Horror",
    scare: "Paranoia and systemic threat",
    why: "Jordan Peele's debut operates on multiple levels simultaneously — it's a horror film, a social satire, and a thriller, and it excels at all three. What makes it terrifying is how the horror emerges from something plausible: the protagonist's growing realization that something is deeply wrong, long before he can articulate what. Few recent films have generated as much thoughtful discussion alongside their scares.",
  },
  {
    title: "A Quiet Place (2018)",
    type: "Survival Horror",
    scare: "Tension and silence",
    why: "John Krasinski's film uses its central concept — a world where any sound means death — to create sustained tension unlike anything in modern horror. The film is brilliantly constructed so that the audience holds their breath alongside the characters. Watching this in a theater with strangers who are equally afraid to make noise is one of cinema's great communal experiences.",
  },
  {
    title: "The Conjuring (2013)",
    type: "Supernatural Horror",
    scare: "Classic ghost-story scares",
    why: "James Wan is the best mainstream horror director working today, and The Conjuring is his masterpiece. It functions as a technical clinic in how to build and release tension — every scare is earned, every moment of calm is meaningful. Based on a (contested) true case, the film grounds its supernatural elements in domestic reality, which makes everything land harder.",
  },
  {
    title: "Midsommar (2019)",
    type: "Folk Horror",
    scare: "Wrongness and isolation",
    why: "Ari Aster's second film is horror built in bright daylight, which shouldn't work and yet does, devastatingly. A grieving young woman joins her boyfriend and friends on a trip to a Swedish midsummer festival that gradually reveals itself to be something ancient and horrifying. The film's slow escalation and gorgeous visual design make its horror uniquely effective — you know something is terribly wrong long before you can name it.",
  },
  {
    title: "It Follows (2014)",
    type: "Supernatural Horror",
    scare: "Inescapability and dread",
    why: "One of the most original horror concepts of the decade: a curse that passes through sexual contact, taking the form of a slowly-walking figure only you can see. The film's genius is its simplicity — something is always walking toward you, somewhere, and it will not stop. The retro-80s aesthetic and unconventional soundtrack by Disasterpeace create an atmosphere of constant, low-grade dread.",
  },
];

export default function BestHorrorMoviesGuidePage() {
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
          <div className="text-5xl mb-4">👻</div>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2 py-0.5 text-xs font-medium rounded-full border border-accent/20 text-accent bg-accent/5">Curated List</span>
            <span className="text-xs text-text-muted">7 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-[var(--font-display)] mb-4 leading-tight">
            Best Horror Movies That Actually Scare You
          </h1>
          <p className="text-text-muted text-lg leading-relaxed">
            Not every horror film actually frightens its audience. These ones do — through craft,
            atmosphere, and a genuine understanding of what fear feels like.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6 text-text-muted leading-relaxed">

          <p className="text-base sm:text-lg">
            Horror is the most misunderstood genre in cinema. Most people who say they &quot;don&apos;t like
            horror films&quot; have simply seen the wrong horror films — loud, cheap jump-scare machines
            that mistake shock for dread. The films on this list are different. They build atmosphere,
            they respect their audience&apos;s intelligence, and they use genuine craft to create fear that
            lingers long after the credits roll.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-2">The Films</h2>

          <div className="space-y-8">
            {films.map((film, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[var(--card-bg)] border border-white/5">
                <h3 className="text-lg font-bold text-white">{film.title}</h3>
                <div className="flex flex-wrap gap-2 mt-1 mb-3">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-text-muted">{film.type}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent">Fear: {film.scare}</span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">{film.why}</p>
              </div>
            ))}
          </div>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-white mb-4">How to Choose the Right Horror Film</h2>
            <p>
              Horror isn&apos;t one-size-fits-all. Different films deliver different kinds of fear, and
              knowing your own tolerance and preference is important:
            </p>
            <ul className="list-disc list-inside space-y-3 mt-4 ml-2 text-sm">
              <li><strong className="text-white">For slow-burn psychological dread:</strong> Hereditary, Midsommar, or The Shining.</li>
              <li><strong className="text-white">For effective jump scares and atmosphere:</strong> The Conjuring.</li>
              <li><strong className="text-white">For modern, socially conscious horror:</strong> Get Out.</li>
              <li><strong className="text-white">For sustained tension without much gore:</strong> A Quiet Place or It Follows.</li>
              <li><strong className="text-white">Horror skeptics:</strong> Start with Get Out or A Quiet Place — both are highly accessible.</li>
              <li><strong className="text-white">Horror veterans:</strong> Hereditary and Midsommar are where the real challenge lies.</li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-white mb-4">Why Good Horror Is Worth Watching</h2>
            <p>
              Fear is one of the most powerful emotional experiences cinema can offer — and quality
              horror is one of the few genres that delivers it reliably. The films above aren&apos;t just
              scary; they use fear to explore real human anxieties: grief, isolation, paranoia, loss
              of control, systemic injustice.
            </p>
            <p>
              Watching horror also has a well-documented social dimension. Shared fear bonds people.
              Horror film screenings generate the highest levels of physiological synchrony between
              audience members of any genre — your heart rates actually align. That makes horror films
              uniquely communal experiences, even when watched at home.
            </p>
          </section>

          <div className="mt-10 p-6 rounded-2xl glass-effect border border-accent/20 text-center">
            <p className="text-white font-semibold mb-2">In the mood for something scary tonight?</p>
            <p className="text-text-muted text-sm mb-4">
              Tell us exactly what kind of scare you want and we&apos;ll find the right horror film for your mood.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-accent to-[var(--gradient-end)] text-white rounded-xl font-semibold hover:opacity-90 transition-all duration-300 text-sm"
            >
              Find My Horror Movie →
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-white/10">
          <h2 className="text-xl font-bold text-white mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/guides/mind-bending-movies-guide", icon: "🧠", title: "Mind-Bending Movies That Make You Think" },
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
