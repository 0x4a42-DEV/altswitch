import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "AltSwitch — SaaS & Open-Source Alternatives",
    template: "%s | AltSwitch",
  },
  description:
    "Discover better, cheaper, and open-source alternatives to popular SaaS tools like Notion, Slack, Jira, Salesforce, and more.",
  openGraph: {
    title: "AltSwitch — SaaS & Open-Source Alternatives",
    description:
      "Find SaaS and open-source alternatives to the tools you already use.",
    type: "website",
    siteName: "AltSwitch",
  },
  twitter: {
    card: "summary_large_image",
    title: "AltSwitch",
    description: "SaaS & open-source alternatives directory",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
