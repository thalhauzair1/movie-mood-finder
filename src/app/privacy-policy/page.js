import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Movie Mood Finder",
  description:
    "Read the privacy policy for Movie Mood Finder. We respect your privacy and explain how we handle your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1 className="text-4xl font-extrabold text-white font-[var(--font-display)] mb-2">
          Privacy Policy
        </h1>
        <p className="text-text-muted mb-10 text-sm">Last updated: April 2026</p>

        <div className="space-y-8 text-text-muted leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
            <p>
              Welcome to Movie Mood Finder (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to
              protecting your privacy. This Privacy Policy explains how we collect, use, and
              safeguard your information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
            <p className="mb-3">We collect minimal information to provide our service:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong className="text-foreground/80">Usage Data:</strong> We may collect anonymous usage information
                such as pages visited, time spent on pages, and search queries. This data is
                aggregated and cannot identify you personally.
              </li>
              <li>
                <strong className="text-foreground/80">Local Storage:</strong> Your watchlist and search cache are
                stored locally in your browser using localStorage. This data never leaves your
                device and is not transmitted to our servers.
              </li>
              <li>
                <strong className="text-foreground/80">Cookies:</strong> We use cookies for analytics and advertising
                purposes through third-party services like Google AdSense and Google Analytics.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Third-Party Services</h2>
            <p className="mb-3">Our website integrates with the following third-party services:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong className="text-foreground/80">The Movie Database (TMDB):</strong> We use the TMDB API to fetch
                movie data, posters, and metadata. Your search queries are sent to TMDB for data
                retrieval. See{" "}
                <a href="https://www.themoviedb.org/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  TMDB&apos;s Privacy Policy
                </a>.
              </li>
              <li>
                <strong className="text-foreground/80">Google AdSense:</strong> We use Google AdSense to display
                advertisements. Google may use cookies and web beacons to serve ads based on your
                prior visits. See{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  Google&apos;s Privacy Policy
                </a>.
              </li>
              <li>
                <strong className="text-foreground/80">Google Analytics:</strong> We use Google Analytics to understand
                how visitors interact with our website. This service collects anonymous data about
                page views, session duration, and user demographics.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>To provide and maintain our movie recommendation service</li>
              <li>To understand and analyze usage trends and preferences</li>
              <li>To display relevant advertisements</li>
              <li>To improve our website and user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Data Security</h2>
            <p>
              We value your data security. Your watchlist data is stored exclusively in your
              browser&apos;s local storage and is never transmitted to our servers. We do not store
              any personally identifiable information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
              <li>Clear your local storage data at any time through your browser settings</li>
              <li>Opt out of personalized advertising through Google&apos;s ad settings</li>
              <li>Use browser extensions to block cookies and tracking</li>
              <li>Contact us with any privacy concerns</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Children&apos;s Privacy</h2>
            <p>
              Our service is not directed to children under 13. We do not knowingly collect
              personal information from children under 13. If you believe a child has provided us
              with personal data, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any
              significant changes by posting the new policy on this page and updating the &quot;Last
              updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please visit our{" "}
              <Link href="/contact" className="text-accent hover:underline">
                Contact page
              </Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
