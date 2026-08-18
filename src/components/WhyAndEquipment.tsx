import { equipment, whyChooseUs } from "@/lib/site-data";
import { CheckCircleIcon, equipmentIcons } from "./icons";
import Reveal from "./Reveal";

export default function WhyAndEquipment() {
  return (
    <section id="why" className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal className="rounded-xl bg-navy p-8 text-white lg:col-span-2">
            <p className="font-devanagari text-sm font-bold text-gold">
              क्यों चुनें हमें
            </p>
            <h3 className="mt-2 font-heading text-2xl font-extrabold sm:text-3xl">
              Why Choose Us?
            </h3>
            <ul className="mt-6 space-y-4">
              {whyChooseUs.map((item) => (
                <li key={item.en} className="flex items-start gap-3">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <span className="font-devanagari block text-sm font-semibold text-white">
                      {item.hi}
                    </span>
                    <span className="block text-xs text-slate-400">{item.en}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={150}
            id="equipment"
            className="rounded-xl border border-slate-200 bg-white p-8 lg:col-span-3"
          >
            <p className="font-devanagari text-sm font-bold text-gold-dark">
              उपकरण व सामग्री
            </p>
            <h3 className="mt-2 font-heading text-2xl font-extrabold text-navy sm:text-3xl">
              Equipment &amp; Materials
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {equipment.map((item) => {
                const Icon = equipmentIcons[item.icon as keyof typeof equipmentIcons];
                return (
                  <div
                    key={item.nameEn}
                    className="flex flex-col items-center justify-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-6 text-center transition hover:-translate-y-0.5 hover:border-gold hover:bg-gold/10"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="font-devanagari text-sm font-bold text-navy">{item.nameHi}</p>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {item.nameEn}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
