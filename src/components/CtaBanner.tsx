import { site, waHref } from "@/lib/site-data";
import { WhatsAppIcon } from "./icons";
import Reveal from "./Reveal";

export default function CtaBanner() {
  return (
    <section className="bg-gold">
      <Reveal className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-8 text-center sm:flex-row sm:text-left lg:px-8">
        <div>
          <p className="font-devanagari text-lg font-extrabold text-navy sm:text-xl">
            आपके प्रोजेक्ट के लिए सेंटरिंग व शटरिंग का कार्य करवाना है?
          </p>
          <p className="mt-1 text-sm font-medium text-navy/80">
            Need centering &amp; shuttering work done for your project?
            Contact us for skilled workers and quick site service.
          </p>
        </div>
        <a
          href={waHref(site.whatsappNumber, "Namaste, mujhe centering ka kaam karwana hai.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-2 rounded-md bg-navy px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-navy/90"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Chat Now
        </a>
      </Reveal>
    </section>
  );
}
