import Image from "next/image";
import { gallery } from "@/lib/site-data";
import Reveal from "./Reveal";

export default function Gallery() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-devanagari text-sm font-bold text-gold-dark">
            काम की झलक
          </p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold text-navy sm:text-4xl">
            Our Work
          </h2>
          <p className="mt-3 text-sm text-slate-500">
            प्रस्तुत तस्वीरें केवल कार्य के प्रकार को दर्शाने हेतु हैं।
            <span className="block text-xs text-slate-400">
              (Representative photos of the type of work — for illustration only.)
            </span>
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item, index) => (
            <Reveal
              key={item.titleEn}
              delay={(index % 4) * 90}
              className="group relative h-56 overflow-hidden rounded-lg shadow-sm"
            >
              <Image
                src={item.image}
                alt={item.titleEn}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-devanagari text-sm font-bold text-white">{item.titleHi}</p>
                <p className="text-xs text-slate-300">{item.titleEn}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
