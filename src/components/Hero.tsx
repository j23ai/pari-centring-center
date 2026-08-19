import Image from "next/image";
import { heroImage, site, waHref } from "@/lib/site-data";
import { WhatsAppIcon } from "./icons";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Centering and shuttering work in progress at a construction site"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
        <div>
          <Reveal>
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-bold text-gold">
              <span className="font-devanagari tracking-normal">मजबूत सहारा। सही आकार।</span>
              <span className="text-gold/60">—</span>
              <span className="uppercase tracking-[0.25em]">Strong Support. Perfect Shape.</span>
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-4 font-heading text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              <span className="font-devanagari block text-3xl font-bold text-white sm:text-4xl">
                {site.brandHi}
              </span>
              <span className="mt-2 block text-gold">Centering &amp; Shuttering</span>
              <span className="block">Work By Our Own Workers</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-5 max-w-xl text-base text-slate-200 sm:text-lg">
              {site.taglineHi} — प्लाईवुड, एम.एस. प्लेट, एडजस्टेबल प्रॉप्स, स्कैफोल्डिंग व
              जैक सहित सम्पूर्ण सामग्री व अनुभवी कारीगरों के साथ सेंटरिंग व शटरिंग का
              पूरा कार्य आपके साइट पर।
            </p>
            <p className="mt-2 max-w-xl text-sm text-slate-400">
              Complete centering &amp; shuttering work — done at your site with
              our own material (plywood, MS plates, adjustable props,
              scaffolding and jacks) and skilled workers.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-md bg-gold px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-navy transition hover:-translate-y-0.5 hover:brightness-95 active:translate-y-0"
              >
                हमारी सेवाएं देखें
              </a>
              <a
                href={waHref(site.whatsappNumber, "Namaste, mujhe centering ka kaam karwana hai.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md border border-white/30 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-white/10 active:translate-y-0"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp Now
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
