import { team } from "@/lib/site-data";
import Reveal from "./Reveal";

// Turns "Bhawani / Daroga Singh" or "Site Supervisor" into "BS" / "SS" —
// an abstract initials avatar, not a photo standing in for a real person
// (see the `team` comment in site-data.ts for why).
function initials(text: string) {
  const words = text.match(/[A-Za-z]+/g) ?? [];
  const first = words.at(0)?.[0];
  const last = words.length > 1 ? words.at(-1)?.[0] : undefined;
  return ((first ?? "") + (last ?? "")).toUpperCase() || "?";
}

export default function Team() {
  return (
    <section id="team" className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-devanagari text-sm font-bold text-gold-dark">
            हमारी टीम
          </p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold text-navy sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-3 text-sm text-slate-500">
            फिलहाल आद्याक्षर दिखाए गए हैं, असली फोटो जल्द जोड़ी जाएंगी।
            <span className="block text-xs text-slate-400">
              (Initials shown for now — real team photos coming soon.)
            </span>
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <Reveal
              key={member.roleEn}
              delay={(index % 4) * 90}
              className={`rounded-lg border bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                member.lead ? "border-gold/50" : "border-slate-200"
              }`}
            >
              <div
                className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full font-heading text-xl font-extrabold ring-2 ring-offset-2 ${
                  member.lead
                    ? "bg-gold text-navy ring-gold"
                    : "bg-navy text-gold ring-slate-200"
                }`}
              >
                {initials(member.nameEn ?? member.roleEn)}
              </div>

              {member.nameHi && (
                <p className="font-devanagari mt-4 text-base font-bold text-navy">
                  {member.nameHi}
                </p>
              )}
              {member.nameEn && (
                <p className="text-xs text-slate-500">{member.nameEn}</p>
              )}

              <p
                className={`font-devanagari text-sm font-bold text-gold-dark ${
                  member.nameHi ? "mt-1" : "mt-4"
                }`}
              >
                {member.roleHi}
              </p>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {member.roleEn}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {member.descHi}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
