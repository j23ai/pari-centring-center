import { MapPinIcon, PhoneIcon, WhatsAppIcon } from "./icons";
import { navLinks, site, telHref, waHref } from "@/lib/site-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-navy text-slate-300 pb-16 lg:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <span className="font-devanagari block text-xl font-bold text-white">
            {site.brandHi}
          </span>
          <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {site.brandEn}
          </span>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
            {site.taglineHi} — {site.taglineEn}
          </p>
          <p className="font-devanagari mt-4 text-sm font-semibold text-slate-300">
            {site.proprietorHi}
          </p>
          <p className="text-xs text-slate-500">{site.proprietorEn}</p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-slate-400 transition hover:text-gold">
                  {link.labelEn}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <div>
                <a href={telHref(site.phonePrimary)} className="block hover:text-gold">
                  +91 {site.phonePrimary}
                </a>
                <a href={telHref(site.phoneSecondary)} className="block hover:text-gold">
                  +91 {site.phoneSecondary}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <div>
                <p className="font-devanagari text-slate-300">{site.addressHi}</p>
                <p className="mt-1 text-xs text-slate-500">{site.addressEn}</p>
              </div>
            </li>
          </ul>
          <a
            href={waHref(site.whatsappNumber, "Namaste, mujhe centering ka kaam karwana hai.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-gold px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-navy transition hover:brightness-95"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp Now
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="text-center text-xs text-slate-500">
          © {year} {site.brandEn} · {site.brandHi} — सर्वाधिकार सुरक्षित
        </p>
        <p className="mt-1.5 text-center text-xs text-slate-400">
          Developed By: <span className="font-semibold text-gold">Jai Singh</span>
        </p>
      </div>
    </footer>
  );
}
