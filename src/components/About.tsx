import ContactCard from "./ContactCard";
import { site } from "@/lib/site-data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="bg-white py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-5 lg:items-start lg:gap-14 lg:px-8">
        <Reveal className="lg:col-span-3">
          <p className="font-devanagari text-sm font-bold text-gold-dark">
            हमारे बारे में
          </p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold text-navy sm:text-4xl">
            About Us
          </h2>
          <p className="font-devanagari mt-5 text-lg font-bold text-navy">
            {site.brandHi}
          </p>
          <p className="mt-3 leading-relaxed text-slate-600">
            {site.taglineHi}। हम अपने अनुभवी व कुशल कारीगरों के साथ स्लैब, कॉलम,
            बीम व फाउंडेशन के लिए सेंटरिंग व शटरिंग का पूरा कार्य करते हैं —
            प्लाईवुड, एम.एस. प्लेट, एडजस्टेबल प्रॉप्स, स्कैफोल्डिंग तथा यू जैक
            / बेस जैक सहित सम्पूर्ण सामग्री हमारी ओर से लाई जाती है।
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">
            We carry out complete centering &amp; shuttering work — for slab,
            column, beam and foundation — with our own experienced, skilled
            workers and full material (plywood, MS plates, adjustable props,
            scaffolding, U jacks / base jacks), on time and at fair rates.
          </p>

          <div className="mt-6 rounded-lg border border-gold/40 bg-gold/10 p-4">
            <p className="font-devanagari text-sm font-semibold text-navy">
              {site.noteHi}
            </p>
            <p className="mt-1 text-xs text-slate-500">{site.noteEn}</p>
          </div>

          <p className="mt-6 font-devanagari text-sm font-semibold text-slate-700">
            {site.proprietorHi}
          </p>
          <p className="text-xs text-slate-500">{site.proprietorEn}</p>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-2">
          <ContactCard />
        </Reveal>
      </div>
    </section>
  );
}
