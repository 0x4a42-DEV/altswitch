import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteOrigin } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin()),
  title: {
    default: "AltSwitch — SaaS & Open-Source Alternatives Directory",
    template: "%s | AltSwitch",
  },
  description:
    "Independent directory of SaaS and open-source software alternatives, with pricing notes and tradeoffs.",
  openGraph: {
    title: "AltSwitch — SaaS & Open-Source Alternatives Directory",
    description:
      "Independent directory of SaaS and open-source software alternatives, with pricing notes and tradeoffs.",
    type: "website",
    siteName: "AltSwitch",
  },
  twitter: {
    card: "summary_large_image",
    title: "AltSwitch — SaaS & Open-Source Alternatives Directory",
    description:
      "Independent directory of SaaS and open-source software alternatives.",
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
        {/* Impact site-verification meta from the HubSpot Affiliates application.
            Declined 2026-11-03. Kept: this is not a referral link, and no other Impact program is wired. */}
        <meta
          name="impact-site-verification"
          {...{ value: "898fa29e-d673-410a-92f7-17c569a25290" }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
