import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "AI Job Assistance | Smart Job Description Analysis, Resume & Career Tools",
  description:
    "Boost your career with AI-powered job assistance. Analyze job descriptions, create tailored resumes, generate personalized cover letters, and gain actionable insights to land your dream job faster.",
  keywords: [
    "AI job assistance",
    "job description analysis",
    "AI resume builder",
    "AI cover letter generator",
    "career tools",
    "job search tools",
    "AI career insights",
    "personalized job applications",
    "resume optimization",
    "AI job matching",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-white ${onest.className}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
