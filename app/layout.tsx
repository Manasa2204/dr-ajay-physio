import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dr. Ajay Krishna Mantrarajam | Elite Rehabilitation",
  description:
    "Dr. Ajay Krishna Mantrarajam — Chief Physiotherapist & Head of Reyowel Rehabilitation, Visakhapatnam & Srikakulam. Expert in Neuro, Orthopedic, Cardiac & Oncology Physiotherapy with 10+ years and 5000+ patients treated.",
  keywords:
    "physiotherapist Visakhapatnam, physiotherapy Vizag, neurorehabilitation, stroke rehabilitation, orthopedic physiotherapy, Reyowel Rehabilitation, Dr Ajay Krishna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} font-sans antialiased bg-[#f5f0e8]`}
      >
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
