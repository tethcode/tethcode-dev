import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emmanuel Yakubu — Portfolio",
  description:
    "Full-stack portfolio featuring AI, Web3, and Django projects.",
  keywords: [
    "Emmanuel Yakubu",
    "Full-stack Developer",
    "AI",
    "Web3",
    "Django",
    "Portfolio",
    "Software Engineer",
    "Developer Portfolio",
  ],
  authors: [{ name: "Emmanuel Yakubu" }],
  openGraph: {
    title: "Emmanuel Yakubu — Portfolio",
    description:
      "Explore Emmanuel Yakubu's full-stack portfolio featuring cutting-edge projects in AI, Web3, and Django.",
    url: "https://your-portfolio-url.com",
    type: "website",
    images: [
      {
        url: "https://your-portfolio-url.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Emmanuel Yakubu Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle",
    creator: "@yourTwitterHandle",
    title: "Emmanuel Yakubu — Portfolio",
    description:
      "Explore Emmanuel Yakubu's full-stack portfolio featuring cutting-edge projects in AI, Web3, and Django.",
    images: ["https://your-portfolio-url.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Emmanuel Yakubu",
            "url": "https://your-portfolio-url.com",
            "sameAs": [
              "https://www.linkedin.com/in/your-profile",
              "https://github.com/your-profile",
              "https://twitter.com/yourTwitterHandle"
            ],
            "jobTitle": "Full-stack Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Your Company Name"
            },
            "description": "Full-stack portfolio featuring AI, Web3, and Django projects."
          })}
        </script>
        <link rel="icon" href="/profile.jpg" type="image/jpeg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
