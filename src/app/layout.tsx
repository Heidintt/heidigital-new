import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://heidigital.com"),
  title: {
    default: "Heidigital – Digital Marketing & AI Insights for Smarter Growth",
    template: "%s | Heidigital",
  },
  description:
    "Heidigital shares practical digital marketing and AI insights, tools, strategies, and resources to help marketers, creators, and businesses grow smarter.",
  keywords: [
    "digital marketing",
    "AI marketing",
    "SEO",
    "Google Ads",
    "Meta Ads",
    "analytics",
    "AI tools",
    "marketing strategy",
    "ChatGPT",
    "Heidigital",
  ],
  authors: [{ name: "Heidi", url: "https://heidigital.com/about" }],
  creator: "Heidi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://heidigital.com",
    siteName: "Heidigital",
    title: "Heidigital – Digital Marketing & AI Insights for Smarter Growth",
    description:
      "Practical digital marketing and AI insights, tools, and resources for smarter growth.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Heidigital – Digital Marketing & AI Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heidigital – Digital Marketing & AI Insights",
    description:
      "Practical digital marketing and AI insights, tools, and resources for smarter growth.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-background text-text-main antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
