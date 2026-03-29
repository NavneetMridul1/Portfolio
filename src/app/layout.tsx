import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Navneet Kumar Mridul | Software Engineer",
  description:
    "Portfolio of Navneet Kumar Mridul - software engineer building scalable full-stack products with strong backend architecture and DSA discipline.",
  metadataBase: new URL("https://navneet-portfolio.dev"),
  openGraph: {
    title: "Navneet Kumar Mridul | Software Engineer",
    description:
      "Scalable full-stack engineering portfolio featuring product-focused projects, impact-driven experience, and competitive problem-solving.",
    type: "website",
    url: "https://navneet-portfolio.dev",
    siteName: "Navneet Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Navneet Kumar Mridul | Software Engineer",
    description:
      "Scalable full-stack engineering portfolio featuring product-focused projects, impact-driven experience, and competitive problem-solving.",
  },
  alternates: {
    canonical: "https://navneet-portfolio.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background-elevated focus:px-3 focus:py-2 focus:text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
