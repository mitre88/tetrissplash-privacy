import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TetrisSplash — Classic Tetris Puzzle Game for iPhone",
  description:
    "TetrisSplash is a beautiful Tetris-style puzzle game for iPhone. Stack blocks, clear lines, and beat your high score. No ads, no tracking, pure fun.",
  openGraph: {
    title: "TetrisSplash — Classic Tetris Puzzle Game for iPhone",
    description:
      "Stack blocks, clear lines, beat your high score. A clean, beautiful Tetris-style game for iPhone with no ads and no tracking.",
    type: "website",
    siteName: "TetrisSplash",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TetrisSplash — Classic Tetris Puzzle Game",
    description:
      "Stack blocks, clear lines, beat your high score. Beautiful Tetris-style puzzle game for iPhone.",
  },
  keywords: [
    "tetris",
    "puzzle game",
    "iOS game",
    "iPhone game",
    "block game",
    "TetrisSplash",
    "arcade game",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
