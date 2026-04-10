import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Movie Mood Finder — Find Movies Based on Your Mood",
  description:
    "Discover movies using mood-based recommendations. Tell us how you feel and we'll find the perfect movie for you. What movie should I watch? Movies based on mood.",
  keywords: [
    "what movie should I watch",
    "movies based on mood",
    "movie recommendations",
    "mood movie finder",
    "find movies by feeling",
    "movie suggestions",
  ],
  metadataBase: new URL("https://moviemoodfinder.com"),
  openGraph: {
    title: "Movie Mood Finder — Find Movies Based on Your Mood",
    description:
      "Tell us how you feel and discover the perfect movie for your mood.",
    type: "website",
    url: "/",
    siteName: "Movie Mood Finder",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Movie Mood Finder",
    "url": "https://moviemoodfinder.com",
    "description": "AI-powered movie discovery based on mood and emotions.",
    "applicationCategory": "EntertainmentApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
