import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";



export const metadata: Metadata = {
  title: 'Exotica Banjara Hills | Fine Dining in Hyderabad',
  description: 'Discover the magic of Exotica, Hyderabad\'s premier fine-dining destination in Banjara Hills. Authentic North Indian cuisine in a rooftop garden setting.',
  openGraph: {
    "title": "Exotica Banjara Hills | Fine Dining in Hyderabad",
    "description": "Experience refined North Indian flavors at Exotica's rooftop garden restaurant in Banjara Hills.",
    "siteName": "Exotica Banjara Hills",
    "type": "website"
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
