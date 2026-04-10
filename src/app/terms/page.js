import Link from "next/link";

export const metadata = {
  title: "Terms of Service — Movie Mood Finder",
  description:
    "Terms of Service for Movie Mood Finder. Read our terms and conditions for using the movie recommendation platform.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1 className="text-4xl font-extrabold text-white font-[var(--font-display)] mb-2">
          Terms of Service
        </h1>
        <p className="text-text-muted mb-10 text-sm">Last updated: April 2026</p>

        <div className="space-y-8 text-text-muted leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Movie Mood Finder (&quot;the Service&quot;), you accept and agree to
              be bound by these Terms of Service. If you do not agree to these terms, please do not
              use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Description of Service</h2>
            <p>
              Movie Mood Finder is a free, web-based movie recommendation tool that suggests movies
              based on your mood and preferences. The Service uses data from The Movie Database
              (TMDB) to provide movie information including posters, ratings, and descriptions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Use of the Service</h2>
            <p>You agree to use the Service only for lawful purposes. You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
              <li>Use the Service for any unlawful or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to any part of the Service</li>
              <li>Interfere with or disrupt the Service or its servers</li>
              <li>Scrape, crawl, or use automated means to access the Service without permission</li>
              <li>Reproduce, distribute, or create derivative works from the Service content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Intellectual Property</h2>
            <p>
              The Movie Mood Finder website, including its design, code, and original content, is
              owned by us and protected by intellectual property laws. Movie data, posters, and
              metadata are provided by TMDB and are subject to their terms of use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Third-Party Content</h2>
            <p>
              Movie data is provided by The Movie Database (TMDB). We do not control or guarantee
              the accuracy, completeness, or quality of third-party data. Links to external
              streaming platforms are provided for convenience only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Advertising</h2>
            <p>
              The Service displays advertisements provided by Google AdSense and other advertising
              networks. These ads may use cookies and tracking technologies. By using the Service,
              you acknowledge and agree to the display of advertisements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Disclaimer of Warranties</h2>
            <p>
              The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
              either express or implied. We do not guarantee that the Service will be uninterrupted,
              error-free, or secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Limitation of Liability</h2>
            <p>
              In no event shall Movie Mood Finder be liable for any indirect, incidental, special,
              or consequential damages arising from your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective
              immediately upon posting. Your continued use of the Service constitutes acceptance of
              the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Contact</h2>
            <p>
              If you have questions about these Terms, please visit our{" "}
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
