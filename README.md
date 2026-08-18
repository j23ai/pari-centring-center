# Shuttring — परी सेंटरिंग सेंटर (Pari Centering Center)

A one-page Next.js site for a centering/shuttering material rental
business, styled after a reference landing-page design and populated
with the business's real details from its visiting card.

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What to double-check before publishing

The visiting card photo was hard to OCR perfectly in a couple of
spots. Everything lives in [`src/lib/site-data.ts`](src/lib/site-data.ts)
— please verify against the physical card:

- **Rental note** (`noteHi`) — the exact wording of "हमारे यहाँ ... से
  सेंटरिंग किराए पर दिया जाता है" was reconstructed from a small,
  partly blurry line; confirm the exact phrase.

Confirmed directly (no longer OCR guesses): proprietor is Bhawani /
Daroga Singh (भवानी / दरोगा सिंह); phone numbers and pin code
(273151, Maharajganj, U.P.) were legible and used as printed; address
is Village & Post – Barigaon Chauraha (बारीगांव चौराहा), Maharajganj
(U.P.) – 273151.

Note: `phonePrimary` (call) and `whatsappNumber` (WhatsApp links) are
intentionally different numbers — that's not a typo, it was set that
way on request.

## Photos

The hero, service-card and "Our Work" gallery photos are stock
construction photography (Unsplash), used as placeholders since no
real site photos were supplied — captions are generic ("Slab
Centering Work" etc.), not claims about specific completed jobs. Swap
`heroImage`, `services[].image` and `gallery[].image` in
`src/lib/site-data.ts` for the shop's own photos of their material and
site work whenever you have them — that will make the site far more
convincing to local customers than stock photos.

The "Flooring / Power Trowel Machine" rental item uses a photo cropped
from an AI-generated marketing graphic — see
[`public/images/README.md`](public/images/README.md) for the source
and an important caveat: it shows a petrol-powered trowel, not the
blue electric one from earlier photos of this shop's equipment.

## Structure

- `src/lib/site-data.ts` — all business copy: name, contact, address,
  services, equipment list, nav links, images.
- `src/components/` — one file per section (`Navbar`, `Hero`, `About`,
  `Services`, `WhyAndEquipment`, `Highlights`, `Gallery`, `CtaBanner`,
  `Footer`) plus `icons.tsx` for the inline SVG icon set.
- `src/app/page.tsx` — assembles the sections; `src/app/layout.tsx` —
  fonts (Oswald for headings, Inter for body, Noto Sans Devanagari for
  Hindi) and page metadata.

Every phone number is a live `tel:`/`wa.me` link (WhatsApp opens with
a prefilled Hindi message), so Call / WhatsApp buttons work as soon as
you deploy.
# pari-centring-center
