import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — TetrisSplash",
  description:
    "Privacy Policy for TetrisSplash. We collect zero personal data. High scores are stored locally on your device and never leave your phone.",
  robots: {
    index: true,
    follow: true,
  },
};

const LAST_UPDATED = "March 4, 2026";
const APP_NAME = "TetrisSplash";
const CONTACT_EMAIL = "support@tetrissplash.app";

interface Section {
  title: string;
  content: string[];
}

const sections: Section[] = [
  {
    title: "1. Information We Collect",
    content: [
      "TetrisSplash does not collect any personal information.",
      "The app stores your high scores locally on your device using Apple's UserDefaults framework. This data never leaves your device and is not accessible to us or any third party.",
      "We do NOT collect: your name, email address, location, contacts, device identifiers, usage analytics, crash reports sent to us, or any other personal data.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "Since we collect no personal information, there is nothing to use, share, or process.",
      "Your high scores are stored solely on your device to provide you with a persistent leaderboard experience. This data is managed entirely by iOS and is removed when you uninstall the app.",
    ],
  },
  {
    title: "3. Data Storage and Security",
    content: [
      "All game data (high scores) is stored locally on your iPhone using Apple's UserDefaults, a standard iOS storage mechanism.",
      "This data is sandboxed to the app and is protected by iOS's built-in security model. We have no servers that store your data and no ability to access it remotely.",
      "If you delete the app, all locally stored data is permanently removed from your device.",
    ],
  },
  {
    title: "4. Third-Party Services",
    content: [
      "TetrisSplash does not integrate any third-party SDKs, analytics services, advertising networks, or tracking tools.",
      "We do not use: Google Analytics, Firebase, Crashlytics, Mixpanel, Amplitude, Facebook SDK, or any similar services.",
      "The app is distributed through the Apple App Store. Apple may collect certain diagnostic and usage data as part of their standard App Store operations, subject to Apple's own Privacy Policy.",
    ],
  },
  {
    title: "5. Advertising and In-App Purchases",
    content: [
      "TetrisSplash contains no advertisements.",
      "TetrisSplash contains no in-app purchases.",
      "There are no premium features, subscriptions, or paid content of any kind.",
    ],
  },
  {
    title: "6. Children's Privacy",
    content: [
      "TetrisSplash is suitable for all ages. Because we collect no personal data whatsoever, the app is safe for children to use.",
      "We do not knowingly collect personal information from anyone, including children under 13.",
    ],
  },
  {
    title: "7. Changes to This Policy",
    content: [
      "We may update this Privacy Policy if we add new features that change our data practices. Any changes will be posted on this page with an updated effective date.",
      "We will not reduce your privacy protections without clear notice.",
    ],
  },
  {
    title: "8. Contact Us",
    content: [
      `If you have questions or concerns about this Privacy Policy, please contact us at: ${CONTACT_EMAIL}`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] font-sans">
      {/* Navigation */}
      <nav className="border-b border-white/5 px-6 py-4">
        <div className="mx-auto max-w-5xl flex items-center justify-between">
          <Link href="/" className="text-lg font-bold text-white tracking-tight">
            Tetris<span className="text-cyan-400">Splash</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            &larr; Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            Last updated: {LAST_UPDATED}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Effective date: {LAST_UPDATED}
          </p>
        </div>

        {/* Summary callout */}
        <div className="mt-10 rounded-2xl border border-green-400/20 bg-green-400/5 p-6">
          <div className="flex items-start gap-3">
            <span className="text-green-400 text-xl mt-0.5">✓</span>
            <div>
              <p className="text-green-400 font-semibold text-sm mb-1">
                Short version: We collect nothing.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {APP_NAME} is a self-contained game. Your high scores are
                stored only on your device. We have no servers, no accounts,
                no analytics, and no tracking of any kind.
              </p>
            </div>
          </div>
        </div>

        {/* Intro */}
        <p className="mt-10 text-base leading-7 text-gray-300">
          This Privacy Policy describes how <strong className="text-white">{APP_NAME}</strong>{" "}
          (&quot;we&quot;, &quot;our&quot;, or &quot;the app&quot;) handles information when you
          use our iOS application. We are committed to protecting your privacy and being fully
          transparent about our practices.
        </p>

        {/* Sections */}
        {sections.map((section) => (
          <section key={section.title} className="mt-12">
            <h2 className="text-xl font-semibold text-white sm:text-2xl border-b border-white/5 pb-3">
              {section.title}
            </h2>
            <div className="mt-4 space-y-3">
              {section.content.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base leading-7 text-gray-400"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}

        {/* Divider and footer */}
        <hr className="mt-16 border-white/5" />
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
