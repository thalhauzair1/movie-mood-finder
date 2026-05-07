import Link from "next/link";

export const metadata = {
  title: "The Complete Family Movie Night Guide — Movie Mood Finder",
  description:
    "How to choose movies the whole family will enjoy. Our guide covers age groups, picking films everyone loves, and our top picks for family movie night.",
  keywords: [
    "family movie night",
    "best family movies",
    "movies for kids and adults",
    "family film recommendations",
    "best animated movies",
    "movies for all ages",
    "wholesome family films",
  ],
  openGraph: {
    title: "The Complete Family Movie Night Guide",
    description:
      "How to choose movies the whole family will enjoy, plus top picks for every age group.",
  },
};

const picks = [
  {
    title: "Up (2009)",
    ages: "All ages (5+)",
    why: "The first ten minutes of Up contain one of the most moving sequences in the history of cinema — and then it becomes a colorful adventure story about an old man and a boy scout. Pixar's genius is in making films that work differently for different age groups simultaneously. Young children see the adventure; parents feel the weight of the prologue in ways that linger for days.",
  },
  {
    title: "The Lion King (1994)",
    ages: "All ages (4+)",
    why: "Disney's masterpiece of the 1990s holds up remarkably well. The music by Hans Zimmer and Elton John is iconic; the story, borrowed from Shakespeare's Hamlet, carries genuine emotional heft. Every generation discovers it anew. One of the few films that parents and children consistently rank equally highly — and for entirely different reasons.",
  },
  {
    title: "Spirited Away (2001)",
    ages: "6 and up",
    why: "Hayao Miyazaki's Oscar-winning film is the rare animated movie that feels genuinely other-worldly. Its story — a ten-year-old girl navigating a spirit world to rescue her parents — is endlessly imaginative and surprisingly emotionally sophisticated. Younger children are captivated by the visuals; older viewers are moved by its themes of identity, work, and memory.",
  },
  {
    title: "Kung Fu Panda (2008)",
    ages: "All ages (5+)",
    why: "Consistently underrated as a piece of filmmaking, Kung Fu Panda delivers genuinely funny comedy, stunning action sequences, and unexpected emotional wisdom in a package that every member of the family can engage with. Jack Black's Po is one of animated film's great protagonists: bumbling, lovable, and ultimately finding his own path.",
  },
  {
    title: "Paddington 2 (2017)",
    ages: "All ages (4+)",
    why: "Sequels rarely surpass their originals; Paddington 2 does so with ease. A masterclass in warm-hearted storytelling, it features one of the most technically accomplished animated/live-action sequences in cinema and a cast of British talent giving performances that wink at adults while delighting children. Hugh Grant is particularly inspired. Universally beloved for good reason.",
  },
  {
    title: "Finding Nemo (2003)",
    ages: "All ages (4+)",
    why: "A story about a father's love and a son's need for independence, wrapped in an underwater adventure of visual splendor. The Pixar team created something that functions simultaneously as a children's adventure and a meditation on overprotective parenting. The voice work by Albert Brooks and Ellen DeGeneres remains some of the best in animated film.",
  },
  {
    title: "Coco (2017)",
    ages: "5 and up",
    why: "Pixar's most culturally specific film is also one of its most universal. Set during Mexico's Día de los Muertos, it tells the story of a boy who enters the Land of the Dead in pursuit of his dream of becoming a musician. The final scene produces tears in almost every viewer, regardless of age. It also opens rich conversations about family, memory, and honoring those we've lost.",
  },
];

export default function FamilyMovieNightGuidePage() {
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
          <div className="text-5xl mb-4">🍿</div>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2 py-0.5 text-xs font-medium rounded-full border border-accent/20 text-accent bg-accent/5">Guide</span>
            <span className="text-xs text-text-muted">6 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-[var(--font-display)] mb-4 leading-tight">
            The Complete Family Movie Night Guide
          </h1>
          <p className="text-text-muted text-lg leading-relaxed">
            Finding a film that a 7-year-old, a 14-year-old, and two parents will all genuinely enjoy
            is one of the great logistical challenges of family life. Here&apos;s how to do it.
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6 text-text-muted leading-relaxed">

          <p className="text-base sm:text-lg">
            The ideal family film doesn&apos;t talk down to children and doesn&apos;t bore adults. It works on
            multiple levels: surface-level adventure or comedy for younger viewers, and richer
            emotional or thematic content for older ones. The films in this guide have been chosen
            specifically because they achieve this balance — they are genuinely great films that
            happen to be accessible to all ages.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How to Choose a Family Film</h2>
            <p>
              Before you start browsing, ask these three questions:
            </p>
            <div className="space-y-4 mt-4">
              <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-white/5">
                <p className="font-semibold text-white mb-1">What&apos;s the youngest person&apos;s age and sensitivity level?</p>
                <p className="text-sm">This sets your upper bound on intensity. A 5-year-old who scares easily means avoiding anything with menacing villains, intense peril, or themes of death — even in animated films. A confident 8-year-old has far more range.</p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-white/5">
                <p className="font-semibold text-white mb-1">What&apos;s the energy level tonight?</p>
                <p className="text-sm">After a long day, a calm, beautiful film like My Neighbor Totoro or Paddington 2 works better than an action-heavy adventure. Match the film to the room&apos;s energy.</p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-white/5">
                <p className="font-semibold text-white mb-1">Is this a regular night or a special occasion?</p>
                <p className="text-sm">Holiday movie nights warrant the classics you return to every year. Regular weeknight family film? Pick something you haven&apos;t seen before — discovery is part of the experience.</p>
              </div>
            </div>
          </section>

          <h2 className="text-2xl font-bold text-white mt-10 mb-2">Our Family Movie Picks</h2>

          <div className="space-y-8">
            {picks.map((film, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[var(--card-bg)] border border-white/5">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                  <h3 className="text-lg font-bold text-white">{film.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent flex-shrink-0">{film.ages}</span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">{film.why}</p>
              </div>
            ))}
          </div>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-white mb-4">Making Movie Night a Ritual</h2>
            <p>
              The best family movie nights aren&apos;t just about the film — they&apos;re about the ritual.
              A few small additions can transform a regular viewing into a genuinely memorable event:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-2 text-sm">
              <li>Let children help choose the film from a shortlist of pre-vetted options — ownership increases engagement</li>
              <li>Make the snacks part of the experience: themed food, or just everyone&apos;s favorites</li>
              <li>Turn off phones and commit to watching together rather than half-watching</li>
              <li>Have a brief discussion afterward — even young children have surprisingly rich reactions to good films</li>
              <li>Establish a regular slot (Friday nights work well) so it becomes something to look forward to</li>
            </ul>
          </section>

          <div className="mt-10 p-6 rounded-2xl glass-effect border border-accent/20 text-center">
            <p className="text-white font-semibold mb-2">Can&apos;t decide? We&apos;ll pick for you.</p>
            <p className="text-text-muted text-sm mb-4">
              Tell us who&apos;s watching and what kind of evening you want and we&apos;ll find the perfect film.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-accent to-[var(--gradient-end)] text-white rounded-xl font-semibold hover:opacity-90 transition-all duration-300 text-sm"
            >
              Find Our Family Movie →
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-white/10">
          <h2 className="text-xl font-bold text-white mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/guides/best-feel-good-movies", icon: "💪", title: "Best Feel-Good Movies for When You're Down" },
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
