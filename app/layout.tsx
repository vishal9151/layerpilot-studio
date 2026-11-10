import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Layerpilot Studio — Your frontend team, behind the scenes.",
  description: "White-label React and Next.js frontend engineering for digital agencies."
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
