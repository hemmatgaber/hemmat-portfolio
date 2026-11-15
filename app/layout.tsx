import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#07090e",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hemmatgaber.dev"),
  title: {
    default: "Hemmat Gaber — Mid-Level Frontend Developer (Angular, React, Next.js)",
    template: "%s | Hemmat Gaber",
  },
  description:
    "I'm a Frontend Developer specializing in building scalable, responsive, and maintainable web applications using Angular, React, and modern frontend technologies.",
  keywords: [
    "Hemmat Gaber",
    "Frontend Developer",
    "Angular Developer",
    "Angular 21",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "PrimeNG",
    "NgRx",
    "RxJS",
    "Medical Informatics",
    "Healthcare Platforms",
  ],
  authors: [{ name: "Hemmat Gaber", url: "https://hemmatgaber.dev" }],
  creator: "Hemmat Gaber",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hemmatgaber.dev",
    title: "Hemmat Gaber — Mid-Level Frontend Developer",
    description:
      "Building thoughtful digital experiences through clean engineering. Specializing in scalable enterprise frontend applications.",
    siteName: "Hemmat Gaber Portfolio",
    images: [
      {
        url: "/images/mockup.jpg",
        width: 1200,
        height: 630,
        alt: "Hemmat Gaber — Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hemmat Gaber — Mid-Level Frontend Developer",
    description:
      "Building thoughtful digital experiences through clean engineering. Specializing in scalable enterprise frontend applications.",
    images: ["/images/mockup.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#07090e] text-[#e2e8f0] font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
