import Image from "next/image";
import { services } from "@/lib/site-data";
import { serviceIcons } from "./icons";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-devanagari text-sm font-bold text-gold-dark">
            हमारी सेवाएं
          </p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold text-navy sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-3 text-slate-600">
            स्लैब, कॉलम, बीम और फाउंडेशन — हर तरह के RCC काम के लिए सेंटरिंग व
            शटरिंग का पूरा कार्य, अपने कारीगरों व सामग्री के साथ।
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon as keyof typeof serviceIcons];
            return (
              <Reveal
                key={service.titleEn}
                delay={(index % 3) * 100}
                className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                {service.image ? (
                  <div
                    className={`relative h-40 w-full overflow-hidden ${
                      service.imageFit === "contain" ? "bg-slate-100" : ""
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.titleEn}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className={
                        service.imageFit === "contain"
                          ? "object-contain p-4 transition duration-300 group-hover:scale-105"
                          : "object-cover transition duration-300 group-hover:scale-105"
                      }
                    />
                  </div>
                ) : (
                  <div className="flex h-40 w-full items-center justify-center bg-gradient-to-br from-navy to-navy-light">
                    <Icon className="h-16 w-16 text-gold/85" />
                  </div>
                )}
                <div className="relative p-5">
                  {service.image && (
                    <span className="absolute -top-7 left-5 flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold shadow-md">
                      <Icon className="h-6 w-6" />
                    </span>
                  )}
                  <h3 className="mt-4 font-devanagari text-lg font-bold text-navy">
                    {service.titleHi}
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-wide text-gold-dark">
                    {service.titleEn}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {service.descHi}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
