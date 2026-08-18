import { highlights } from "@/lib/site-data";
import { highlightIcons } from "./icons";
import Reveal from "./Reveal";

export default function Highlights() {
  return (
    <section className="bg-navy py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 lg:grid-cols-4 lg:px-8">
        {highlights.map((item, index) => {
          const Icon = highlightIcons[item.icon as keyof typeof highlightIcons];
          return (
            <Reveal key={item.en} delay={index * 90} className="flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <p className="font-devanagari text-sm font-bold text-white">{item.hi}</p>
                <p className="text-xs uppercase tracking-wide text-slate-400">{item.en}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
