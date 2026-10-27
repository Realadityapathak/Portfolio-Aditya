import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/components/ui/ToastProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-adityapathak.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aditya Pathak — Software Engineer",
    template: "%s | Aditya Pathak",
  },
  description:
    "Full-stack software engineer building real products. MCA graduate, former Celebal intern, open to relocation.",
  keywords: [
    "Aditya Pathak",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "Socket.io",
    "Celebal Technologies",
    "Portfolio",
  ],
  authors: [{ name: "Aditya Pathak", url: siteUrl }],
  creator: "Aditya Pathak",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Aditya Pathak — Software Engineer",
    description:
      "Portfolio of a full-stack developer building live apps with Next.js, React, Node, and MongoDB.",
    siteName: "Aditya Pathak Portfolio",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Aditya Pathak — Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Pathak — Software Engineer",
    description:
      "Full-stack software engineer building real products. MCA graduate, former Celebal intern.",
    images: ["/og.jpg"],
    creator: "@realadityapathak",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
  },
};

import MotionProvider from "@/components/ui/MotionProvider";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      "name": "Aditya Pathak",
      "jobTitle": "Software Engineer",
      "url": siteUrl,
      "sameAs": [
        "https://github.com/Realadityapathak",
        "https://www.linkedin.com/in/realadityapathak",
      ],
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Lovely Professional University",
        },
        {
          "@type": "EducationalOrganization",
          "name": "Guru Nanak College",
        },
      ],
      "knowsAbout": [
        "Full-Stack Web Development",
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express",
        "Socket.io",
        "MongoDB",
        "Stripe API",
        "Sanity CMS",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "Aditya Pathak — Software Engineer Portfolio",
      "publisher": {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased noise bg-ink text-warm selection:bg-lime/25 selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-2.5 focus:bg-lime focus:text-black focus:font-display focus:font-bold focus:rounded-xl focus:shadow-glow focus:outline-none"
        >
          Skip to main content
        </a>
        <MotionProvider>
          {children}
        </MotionProvider>
        <ToastProvider />
      </body>
    </html>
  );
}
