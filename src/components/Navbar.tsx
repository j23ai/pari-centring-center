"use client";

import { useState } from "react";
import { CloseIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from "./icons";
import { navLinks, site, telHref, waHref } from "@/lib/site-data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="animate-nav-in sticky top-0 z-50 bg-navy text-white shadow-lg shadow-black/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gold text-navy sm:h-11 sm:w-11">
            <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" aria-hidden="true">
              <path
                d="M4 20V9l8-5 8 5v11"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path d="M8 20v-6h8v6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              <path d="M4 12h16" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-devanagari text-base font-bold tracking-wide text-white sm:text-lg">
              {site.brandHi}
            </span>
            <span className="block whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.1em] text-gold sm:text-[11px] sm:tracking-[0.2em]">
              {site.brandEn}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wide text-slate-200 transition hover:text-gold"
            >
              {link.labelEn}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={telHref(site.phonePrimary)}
            className="flex items-center gap-2 text-right"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-navy">
              <PhoneIcon className="h-4 w-4" />
            </span>
            <span className="leading-tight">
              <span className="block text-[11px] text-slate-300">Call / WhatsApp</span>
              <span className="block text-sm font-bold">+91 {site.phonePrimary}</span>
            </span>
          </a>
          <a
            href={waHref(site.whatsappNumber, "Namaste, mujhe centering material rent par chahiye.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-gold px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-navy transition hover:brightness-95"
          >
            Enquire Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white transition active:scale-90 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="relative block h-5 w-5">
            <MenuIcon
              className={`absolute inset-0 h-5 w-5 transition-all duration-200 ${
                open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <CloseIcon
              className={`absolute inset-0 h-5 w-5 transition-all duration-200 ${
                open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="animate-menu-in border-t border-white/10 bg-navy px-4 pb-4 lg:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-semibold uppercase tracking-wide text-slate-200 hover:bg-white/5 hover:text-gold"
              >
                {link.labelEn}
                <span className="ml-2 font-devanagari normal-case tracking-normal text-slate-400">
                  · {link.label}
                </span>
              </a>
            ))}
          </nav>
          <div className="mt-3 flex gap-3">
            <a
              href={telHref(site.phonePrimary)}
              className="flex flex-1 items-center justify-center gap-2 rounded-md border border-white/20 py-2.5 text-sm font-semibold"
            >
              <PhoneIcon className="h-4 w-4" /> Call
            </a>
            <a
              href={waHref(site.whatsappNumber)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-md bg-gold py-2.5 text-sm font-bold text-navy"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
