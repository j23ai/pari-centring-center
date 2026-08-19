import { BuildingMarkIcon, MapPinIcon, WhatsAppIcon } from "./icons";
import { formatPhone, site, telHref, waHref } from "@/lib/site-data";

export default function ContactCard() {
  return (
    <div>
      <p className="mb-4 text-center font-devanagari text-sm font-bold text-gold-dark lg:text-left">
        संपर्क विवरण / Contact Details
      </p>

      {/* "ATM/debit card" styled contact card */}
      <div
        className="relative mx-auto aspect-[85.6/54] w-full max-w-sm overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-navy to-[#050c1f] p-5 text-white shadow-xl ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-6"
        role="group"
        aria-label="Contact card"
      >
        {/* glow accents */}
        <div className="pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full bg-gold/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-14 -left-8 h-36 w-36 rounded-full bg-gold/10 blur-2xl" />
        {/* diagonal sheen */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.07)_50%,transparent_65%)]" />

        {/* header row */}
        <div className="relative flex items-start justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gold text-navy sm:h-8 sm:w-8">
              <BuildingMarkIcon className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <p className="font-devanagari text-xs font-bold sm:text-sm">{site.brandHi}</p>
              <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-gold sm:text-[9px]">
                {site.brandEn}
              </p>
            </div>
          </div>
          <span className="text-[8px] font-semibold uppercase tracking-[0.15em] text-slate-400 sm:text-[9px]">
            Contact Card
          </span>
        </div>

        {/* chip */}
        <div className="relative mt-5 flex h-7 w-10 items-center justify-center rounded-md bg-gradient-to-br from-gold to-gold-dark shadow-inner sm:mt-6 sm:h-8 sm:w-11">
          <div className="grid h-4 w-7 grid-cols-3 gap-[2px] sm:h-5 sm:w-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="rounded-[1px] bg-navy/50" />
            ))}
          </div>
        </div>

        {/* phone number, styled like a card number */}
        <a
          href={telHref(site.phonePrimary)}
          className="relative mt-4 block w-fit font-mono text-lg font-semibold tracking-[0.1em] text-white transition hover:text-gold sm:mt-5 sm:text-xl"
        >
          {formatPhone(site.phonePrimary)}
        </a>

        {/* bottom row: holder + WhatsApp */}
        <div className="relative mt-4 flex items-end justify-between gap-3 sm:mt-5">
          <div className="min-w-0">
            <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-slate-400 sm:text-[9px]">
              Card Holder
            </p>
            <p className="font-devanagari truncate text-xs font-semibold sm:text-sm">
              {site.proprietorHi}
            </p>
          </div>
          <a
            href={waHref(site.whatsappNumber, "Namaste, mujhe centering ka kaam karwana hai.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-right"
          >
            <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-slate-400 sm:text-[9px]">
              WhatsApp
            </p>
            <p className="flex items-center gap-1 text-xs font-semibold text-gold sm:text-sm">
              <WhatsAppIcon className="h-3.5 w-3.5" />
              +91 {site.whatsappNumber}
            </p>
          </a>
        </div>
      </div>

      {/* address + second number, below the card */}
      <div className="mx-auto mt-5 w-full max-w-sm rounded-xl border border-slate-200 bg-slate-50 p-4">
        <div className="flex items-start gap-2.5 text-sm">
          <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
          <div>
            <p className="font-devanagari font-semibold text-navy">{site.addressHi}</p>
            <p className="mt-1 text-xs text-slate-500">{site.addressEn}</p>
          </div>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          दूसरा नंबर / Second number:{" "}
          <a href={telHref(site.phoneSecondary)} className="font-semibold text-navy hover:text-gold-dark">
            +91 {site.phoneSecondary}
          </a>
        </p>
      </div>
    </div>
  );
}
