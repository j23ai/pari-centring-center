import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "परी सेंटरिंग सेंटर | Pari Centering Center — Centering & Shuttering Work by Our Own Workers",
  description:
    "Pari Centering Center (परी सेंटरिंग सेंटर) — अपने कारीगरों व सामग्री के साथ centering व शटरिंग का पूरा कार्य। Slab, column, beam & foundation centering-shuttering work with our own plywood, MS plates, props, scaffolding & jacks in Maharajganj, U.P. Call/WhatsApp +91 9076560189.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="hi"
      className={`${inter.variable} ${oswald.variable} ${notoDevanagari.variable} antialiased`}
    >
      <body className="min-h-screen bg-white font-body text-slate-800">
        {children}
      </body>
    </html>
  );
}
