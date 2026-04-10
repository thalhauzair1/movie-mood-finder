export const metadata = {
  title: "Contact Us — Movie Mood Finder",
  description:
    "Get in touch with the Movie Mood Finder team. We'd love to hear your feedback, suggestions, or questions.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1 className="text-4xl font-extrabold text-white font-[var(--font-display)] mb-4">
          Contact Us
        </h1>
        <p className="text-text-muted mb-10 text-lg leading-relaxed">
          Have a question, suggestion, or found a bug? We&apos;d love to hear from you. Fill out the
          form below and we&apos;ll get back to you as soon as possible.
        </p>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-foreground/80 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-xl bg-[var(--card-bg)] border border-white/10 text-white placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-foreground/80 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-xl bg-[var(--card-bg)] border border-white/10 text-white placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="contact-subject" className="block text-sm font-medium text-foreground/80 mb-2">
              Subject
            </label>
            <select
              id="contact-subject"
              name="subject"
              className="w-full px-4 py-3 rounded-xl bg-[var(--card-bg)] border border-white/10 text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
            >
              <option value="feedback">General Feedback</option>
              <option value="bug">Bug Report</option>
              <option value="suggestion">Feature Suggestion</option>
              <option value="business">Business Inquiry</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-foreground/80 mb-2">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={6}
              className="w-full px-4 py-3 rounded-xl bg-[var(--card-bg)] border border-white/10 text-white placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all resize-none"
              placeholder="Tell us what's on your mind..."
            />
          </div>

          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-accent to-[var(--gradient-end)] text-white rounded-xl font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-[var(--accent-glow)]"
          >
            Send Message
          </button>
        </form>

        <div className="mt-16 pt-8 border-t border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Other Ways to Reach Us</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[var(--card-bg)] border border-white/5">
              <p className="text-sm font-semibold text-white mb-1">📧 Email</p>
              <p className="text-text-muted text-sm">contact@moviemoodfinder.com</p>
            </div>
            <div className="p-5 rounded-2xl bg-[var(--card-bg)] border border-white/5">
              <p className="text-sm font-semibold text-white mb-1">🐦 Social Media</p>
              <p className="text-text-muted text-sm">Follow us @moviemoodfinder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
