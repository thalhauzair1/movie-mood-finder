/**
 * Mood Engine - Maps natural language mood descriptions to movie recommendations
 * No AI API required - uses curated keyword matching
 */

const moodDatabase = [
  {
    mood: "sad_motivation",
    keywords: ["sad", "down", "depressed", "unmotivated", "lonely", "heartbroken", "low", "blue", "empty", "hopeless", "grief", "lost", "broken"],
    boostKeywords: ["motivation", "motivate", "inspire", "uplift", "hope", "better", "cheer", "positive"],
    movies: [
      { title: "The Pursuit of Happyness", reason: "A powerful story about perseverance through life's toughest moments — proof that dedication pays off.", similar_to: "Rocky" },
      { title: "Soul", reason: "A beautiful reminder to find meaning and joy in everyday life when everything feels empty.", similar_to: "Inside Out" },
      { title: "Good Will Hunting", reason: "A deeply emotional film about healing, self-discovery, and unlocking your true potential.", similar_to: "Dead Poets Society" },
      { title: "The Secret Life of Walter Mitty", reason: "An inspiring journey that shows it's never too late to start living the life you've dreamed of.", similar_to: "Forrest Gump" },
      { title: "Rocky", reason: "The ultimate underdog story — when life knocks you down, you get back up and fight.", similar_to: "Creed" },
      { title: "Little Miss Sunshine", reason: "Heartwarming proof that imperfection and family love can carry you through anything.", similar_to: "Juno" },
    ]
  },
  {
    mood: "happy_fun",
    keywords: ["happy", "fun", "excited", "joyful", "cheerful", "good mood", "celebrate", "party", "laugh", "comedy", "funny", "silly", "goofy", "lighthearted"],
    boostKeywords: [],
    movies: [
      { title: "The Grand Budapest Hotel", reason: "A whimsical, visually stunning comedy that's pure cinematic joy from start to finish.", similar_to: "Moonrise Kingdom" },
      { title: "Ferris Bueller's Day Off", reason: "The ultimate feel-good movie about seizing the day and having the time of your life.", similar_to: "The Breakfast Club" },
      { title: "Superbad", reason: "Hilarious and endlessly quotable — perfect for keeping the good vibes rolling.", similar_to: "Booksmart" },
      { title: "Paddington 2", reason: "Pure, concentrated sunshine in movie form. Impossible not to smile.", similar_to: "Paddington" },
      { title: "Coco", reason: "A vibrant celebration of family, music, and remembering what truly matters.", similar_to: "Encanto" },
      { title: "School of Rock", reason: "Jack Black at his most infectious. You'll be laughing and air-guitaring the whole time.", similar_to: "Pitch Perfect" },
    ]
  },
  {
    mood: "anxious_calm",
    keywords: ["anxious", "stressed", "nervous", "overwhelmed", "worried", "restless", "tense", "panic", "calm", "relax", "peaceful", "soothing", "chill", "zen", "unwind", "tired"],
    boostKeywords: ["calm", "relax", "peace", "soothing", "gentle"],
    movies: [
      { title: "My Neighbor Totoro", reason: "Pure, gentle magic that wraps you in warmth like a cozy blanket on a rainy day.", similar_to: "Spirited Away" },
      { title: "The Secret Garden", reason: "A quiet, restorative story about healing and finding peace in nature's beauty.", similar_to: "A Little Princess" },
      { title: "Chef", reason: "A warm, low-stakes journey of rediscovering passion, with incredible food scenes that soothe the soul.", similar_to: "Julie & Julia" },
      { title: "Midnight in Paris", reason: "A dreamy, romantic stroll through time that melts away stress with every scene.", similar_to: "Before Sunrise" },
      { title: "The Secret Life of Walter Mitty", reason: "Breathtaking landscapes and a gentle pace that makes the world feel bigger and calmer.", similar_to: "Into the Wild" },
      { title: "Spirited Away", reason: "Miyazaki's masterpiece takes you to a magical world where worries dissolve into wonder.", similar_to: "Howl's Moving Castle" },
    ]
  },
  {
    mood: "romantic",
    keywords: ["romantic", "love", "romance", "couple", "date", "crush", "relationship", "girlfriend", "boyfriend", "valentine", "passionate", "soulmate", "tender"],
    boostKeywords: [],
    movies: [
      { title: "La La Land", reason: "A dazzling love letter to dreamers and the bittersweet beauty of love and ambition.", similar_to: "Moulin Rouge!" },
      { title: "Pride and Prejudice", reason: "The slow-burn romance that defined an entire genre — absolutely electric chemistry.", similar_to: "Sense and Sensibility" },
      { title: "The Notebook", reason: "A timeless love story that proves true love endures through every challenge life throws.", similar_to: "A Walk to Remember" },
      { title: "Before Sunrise", reason: "Two strangers, one magical night in Vienna — intimate, real, and unforgettable.", similar_to: "Before Sunset" },
      { title: "Crazy Rich Asians", reason: "Glamorous, heartfelt, and genuinely funny — a modern romance with style.", similar_to: "To All the Boys I've Loved Before" },
      { title: "About Time", reason: "A beautiful exploration of love and family that will make you cherish every moment.", similar_to: "Love Actually" },
    ]
  },
  {
    mood: "adventure_excitement",
    keywords: ["adventure", "exciting", "thrill", "action", "adrenaline", "epic", "explore", "journey", "quest", "brave", "courageous", "bold", "wild", "travel"],
    boostKeywords: [],
    movies: [
      { title: "Mad Max: Fury Road", reason: "Non-stop, jaw-dropping action that redefines what an adrenaline rush on screen can be.", similar_to: "John Wick" },
      { title: "Indiana Jones: Raiders of the Lost Ark", reason: "The original adventure classic — whip-cracking fun from the first frame to the last.", similar_to: "The Mummy" },
      { title: "The Lord of the Rings: The Fellowship of the Ring", reason: "An epic journey that makes you want to grab a sword and join the fellowship.", similar_to: "The Hobbit" },
      { title: "Spider-Man: Into the Spider-Verse", reason: "Visually groundbreaking and emotionally thrilling — anyone can wear the mask.", similar_to: "The Incredibles" },
      { title: "Top Gun: Maverick", reason: "Heart-pounding aerial sequences that will have you gripping your seat.", similar_to: "Mission: Impossible - Fallout" },
      { title: "Jurassic Park", reason: "Dinosaurs brought to life with wonder and terror — a timeless spectacle.", similar_to: "King Kong" },
    ]
  },
  {
    mood: "mind_bending",
    keywords: ["mind", "think", "thought", "intellectual", "smart", "deep", "philosophical", "complex", "twist", "brain", "puzzle", "confusing", "weird", "trippy", "inception", "interstellar", "matrix", "sci-fi", "science fiction", "futuristic"],
    boostKeywords: ["lighter", "light", "fun", "accessible"],
    movies: [
      { title: "Inception", reason: "A mind-bending masterpiece that blurs the line between dreams and reality with stunning precision.", similar_to: "Tenet" },
      { title: "Interstellar", reason: "A breathtaking journey through space and time that explores love as a universal force.", similar_to: "Arrival" },
      { title: "The Matrix", reason: "The original reality-questioning blockbuster that changed cinema forever. Red pill or blue pill?", similar_to: "Dark City" },
      { title: "Arrival", reason: "A profoundly moving sci-fi film about language, time, and the choices that define us.", similar_to: "Contact" },
      { title: "Everything Everywhere All at Once", reason: "A wildly inventive multiverse adventure that's equally mind-bending and heartwarming.", similar_to: "The Matrix" },
      { title: "Eternal Sunshine of the Spotless Mind", reason: "A hauntingly beautiful exploration of memory, love, and what it means to truly know someone.", similar_to: "Being John Malkovich" },
    ]
  },
  {
    mood: "scary_horror",
    keywords: ["scary", "horror", "terrifying", "spooky", "creepy", "halloween", "ghost", "monster", "nightmare", "dark", "fear", "frightening", "gore", "zombie", "supernatural"],
    boostKeywords: [],
    movies: [
      { title: "Get Out", reason: "A brilliant, socially conscious horror that will have you questioning everything around you.", similar_to: "Us" },
      { title: "The Conjuring", reason: "Masterful tension and genuine scares — the gold standard of modern supernatural horror.", similar_to: "Insidious" },
      { title: "A Quiet Place", reason: "Breathlessly tense. Every silence is loaded with dread, every sound could mean death.", similar_to: "Bird Box" },
      { title: "Hereditary", reason: "Deeply unsettling and emotionally devastating — a horror film that haunts long after viewing.", similar_to: "Midsommar" },
      { title: "The Shining", reason: "Kubrick's masterpiece of psychological horror. All work and no play makes for cinema perfection.", similar_to: "The Others" },
      { title: "It Follows", reason: "A uniquely terrifying concept executed with atmospheric brilliance and retro style.", similar_to: "The Ring" },
    ]
  },
  {
    mood: "nostalgic",
    keywords: ["nostalgic", "nostalgia", "childhood", "remember", "past", "old times", "classic", "retro", "vintage", "throwback", "90s", "80s", "growing up", "memories"],
    boostKeywords: [],
    movies: [
      { title: "Stand By Me", reason: "The defining coming-of-age film — a perfect capture of friendship and the end of innocence.", similar_to: "The Sandlot" },
      { title: "The Breakfast Club", reason: "Five strangers, one detention, endless quotable moments. A timeless portrait of teen life.", similar_to: "Pretty in Pink" },
      { title: "E.T. the Extra-Terrestrial", reason: "Spielberg's magical childhood classic that still makes grown adults cry tears of joy.", similar_to: "Hook" },
      { title: "Toy Story", reason: "The film that started it all. A reminder that the toys you loved might have loved you back.", similar_to: "Toy Story 2" },
      { title: "Back to the Future", reason: "The ultimate feel-good adventure that never gets old no matter how many times you watch.", similar_to: "Ghostbusters" },
      { title: "Home Alone", reason: "Pure childhood wish fulfillment wrapped in slapstick genius and holiday warmth.", similar_to: "Mrs. Doubtfire" },
    ]
  },
  {
    mood: "inspiring_true",
    keywords: ["true story", "inspiring", "biography", "real", "documentary", "historical", "achievement", "overcoming", "triumph", "based on", "legend", "hero", "heroic"],
    boostKeywords: [],
    movies: [
      { title: "The Shawshank Redemption", reason: "The ultimate testament to hope, patience, and the indomitable human spirit.", similar_to: "The Green Mile" },
      { title: "Schindler's List", reason: "A devastating and essential film about humanity's capacity for both evil and extraordinary courage.", similar_to: "The Pianist" },
      { title: "Hidden Figures", reason: "An uplifting true story of brilliant women who broke barriers at NASA and changed history.", similar_to: "The Help" },
      { title: "12 Years a Slave", reason: "A harrowing and necessary portrait of resilience against unimaginable cruelty.", similar_to: "Django Unchained" },
      { title: "The Imitation Game", reason: "A gripping true story of genius, secrecy, and the man who helped win WWII.", similar_to: "A Beautiful Mind" },
      { title: "Bohemian Rhapsody", reason: "A celebratory ride through Freddie Mercury's legendary life and soaring music.", similar_to: "Rocketman" },
    ]
  },
  {
    mood: "family_friendly",
    keywords: ["family", "kids", "children", "wholesome", "everyone", "appropriate", "clean", "sweet", "gentle", "all ages", "animated", "cartoon", "disney", "pixar"],
    boostKeywords: [],
    movies: [
      { title: "Up", reason: "Opens with one of cinema's most beautiful love stories, then soars into a colorful adventure.", similar_to: "WALL-E" },
      { title: "Finding Nemo", reason: "A heartfelt underwater adventure about a father's love and the courage to let go.", similar_to: "Finding Dory" },
      { title: "The Lion King", reason: "A timeless masterpiece about courage, responsibility, and the circle of life.", similar_to: "Moana" },
      { title: "Shrek", reason: "Hilarious for kids, brilliantly layered for adults. A fairy tale like no other.", similar_to: "Shrek 2" },
      { title: "Monsters, Inc.", reason: "A monster world powered by children's screams — creative, funny, and surprisingly touching.", similar_to: "Inside Out" },
      { title: "Kung Fu Panda", reason: "Stunning animation and genuine wisdom wrapped in non-stop laughs and epic kung fu.", similar_to: "How to Train Your Dragon" },
    ]
  },
  {
    mood: "dark_thriller",
    keywords: ["thriller", "suspense", "mystery", "crime", "detective", "investigation", "murder", "serial killer", "whodunit", "dark", "gritty", "noir", "intense", "edge of seat", "tense"],
    boostKeywords: [],
    movies: [
      { title: "Se7en", reason: "A dark, gripping descent into the mind of a serial killer. Every revelation hits harder.", similar_to: "Zodiac" },
      { title: "Gone Girl", reason: "A razor-sharp psychological thriller that will make you question everything you think you know.", similar_to: "The Girl on the Train" },
      { title: "Prisoners", reason: "Unbearably tense — a father's desperate search pushes moral boundaries to the breaking point.", similar_to: "Mystic River" },
      { title: "Parasite", reason: "A genre-defying masterpiece that shifts from dark comedy to heart-stopping thriller seamlessly.", similar_to: "Oldboy" },
      { title: "Zodiac", reason: "David Fincher's obsessive true-crime procedural that gets under your skin and stays there.", similar_to: "Mindhunter" },
      { title: "Shutter Island", reason: "A psychological maze that keeps you guessing until the devastating final reveal.", similar_to: "The Sixth Sense" },
    ]
  },
  {
    mood: "war_drama",
    keywords: ["war", "military", "soldier", "battle", "army", "combat", "patriotic", "veteran", "world war", "troops", "navy", "warrior"],
    boostKeywords: [],
    movies: [
      { title: "Saving Private Ryan", reason: "The most visceral and emotionally powerful war film ever made. Utterly unforgettable.", similar_to: "Band of Brothers" },
      { title: "1917", reason: "A breathtaking one-shot experience that puts you directly in the trenches of WWI.", similar_to: "Dunkirk" },
      { title: "Dunkirk", reason: "Nolan's masterfully crafted ticking-clock war epic. Tension that never lets up.", similar_to: "1917" },
      { title: "Hacksaw Ridge", reason: "An incredible true story of courage without violence — a medic who saved 75 men.", similar_to: "We Were Soldiers" },
      { title: "Apocalypse Now", reason: "A haunting, surreal journey into the heart of darkness of the Vietnam War.", similar_to: "Platoon" },
      { title: "Full Metal Jacket", reason: "Kubrick's unflinching look at war's psychological toll. Dual-act brilliance.", similar_to: "Jarhead" },
    ]
  },
];

const genericFallback = [
  { title: "The Shawshank Redemption", reason: "Universally loved — a timeless story of hope, friendship, and resilience.", similar_to: "The Green Mile" },
  { title: "Forrest Gump", reason: "A heartwarming journey through decades of American history with a lovable protagonist.", similar_to: "The Curious Case of Benjamin Button" },
  { title: "Inception", reason: "A mind-bending thriller that's both intellectually stimulating and emotionally gripping.", similar_to: "Interstellar" },
  { title: "The Dark Knight", reason: "The superhero film that transcends the genre — a masterclass in tension and character.", similar_to: "Batman Begins" },
  { title: "Parasite", reason: "A genre-defying modern classic that's darkly funny, shocking, and brilliantly crafted.", similar_to: "Snowpiercer" },
  { title: "Spirited Away", reason: "A magical, visually stunning adventure that appeals to every age and mood.", similar_to: "Howl's Moving Castle" },
];

/**
 * Analyzes a prompt and returns matching movie recommendations
 * @param {string} prompt - User's mood/feeling description
 * @returns {{ movies: Array, detectedMood: string }}
 */
export function getMovieRecommendations(prompt) {
  if (!prompt || prompt.trim().length === 0) {
    return { movies: genericFallback, detectedMood: "general" };
  }

  const normalizedPrompt = prompt.toLowerCase().trim();
  const scores = [];

  for (const entry of moodDatabase) {
    let score = 0;

    // Check primary keywords
    for (const keyword of entry.keywords) {
      if (normalizedPrompt.includes(keyword)) {
        score += 2;
      }
    }

    // Check boost keywords
    for (const keyword of entry.boostKeywords) {
      if (normalizedPrompt.includes(keyword)) {
        score += 1;
      }
    }

    if (score > 0) {
      scores.push({ mood: entry.mood, score, movies: entry.movies });
    }
  }

  if (scores.length === 0) {
    // Try fuzzy matching - check if any movie title is mentioned
    for (const entry of moodDatabase) {
      for (const movie of entry.movies) {
        if (normalizedPrompt.includes(movie.title.toLowerCase()) || normalizedPrompt.includes(movie.similar_to?.toLowerCase())) {
          return { movies: entry.movies, detectedMood: entry.mood };
        }
      }
    }
    return { movies: genericFallback, detectedMood: "general" };
  }

  // Sort by score (highest first)
  scores.sort((a, b) => b.score - a.score);

  // If multiple moods matched with similar scores, merge top results
  if (scores.length > 1 && scores[1].score >= scores[0].score * 0.6) {
    const merged = [...scores[0].movies.slice(0, 4), ...scores[1].movies.slice(0, 3)];
    const unique = merged.filter((v, i, a) => a.findIndex(t => t.title === v.title) === i);
    return { movies: unique.slice(0, 6), detectedMood: `${scores[0].mood} + ${scores[1].mood}` };
  }

  return { movies: scores[0].movies, detectedMood: scores[0].mood };
}

/**
 * Returns mood emoji/label for display
 */
export function getMoodLabel(moodKey) {
  const labels = {
    sad_motivation: "💪 Motivation Boost",
    happy_fun: "🎉 Fun & Laughter",
    anxious_calm: "🧘 Calm & Peaceful",
    romantic: "❤️ Love & Romance",
    adventure_excitement: "🚀 Adventure & Thrills",
    mind_bending: "🧠 Mind-Bending",
    scary_horror: "👻 Horror & Scares",
    nostalgic: "🕰️ Nostalgic Vibes",
    inspiring_true: "⭐ Inspiring True Stories",
    family_friendly: "👨‍👩‍👧‍👦 Family Friendly",
    dark_thriller: "🔍 Thriller & Mystery",
    war_drama: "⚔️ War & Drama",
    general: "🎬 Editor's Picks",
  };
  
  if (moodKey.includes("+")) {
    const parts = moodKey.split(" + ");
    return `${labels[parts[0]] || "🎬"} meets ${labels[parts[1]] || "🎬"}`;
  }
  
  return labels[moodKey] || "🎬 Movies for You";
}
