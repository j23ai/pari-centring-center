import { PhoneIcon, WhatsAppIcon } from "./icons";
import { site, telHref, waHref } from "@/lib/site-data";

export default function FloatingContact() {
  return (
    <div className="animate-mobile-bar-in fixed inset-x-0 bottom-0 z-40 flex border-t border-white/10 bg-navy lg:hidden">
      <a
        href={telHref(site.phonePrimary)}
        className="flex flex-1 items-center justify-center gap-2 border-r border-white/10 py-3.5 text-sm font-bold text-white transition active:bg-white/10"
      >
        <PhoneIcon className="h-4 w-4" />
        Call Now
      </a>
      <a
        href={waHref(site.whatsappNumber, "Namaste, mujhe centering material rent par chahiye.")}
        target="_blank"
        rel="noopener noreferrer"
        className="animate-pulse-ring flex flex-1 items-center justify-center gap-2 bg-gold py-3.5 text-sm font-bold text-navy transition active:brightness-95"
      >
        <WhatsAppIcon className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  );
}
