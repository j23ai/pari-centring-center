// Central place for this business's real details.
// Source: proprietor's visiting card. Please double-check the proprietor
// name and the rental note below against the physical card — small
// Devanagari print can be hard to read precisely from a photo.

export const site = {
  brandHi: "परी सेंटरिंग सेंटर",
  brandEn: "Pari Centering Center",
  taglineHi: "सेंटरिंग व शटरिंग सामान किराए पर उपलब्ध",
  taglineEn: "Centering & Shuttering Material on Rent",

  proprietorHi: "प्रो0 - भवानी / दरोगा सिंह",
  proprietorEn: "Prop. — Bhawani / Daroga Singh",

  phonePrimary: "9076560189",
  phoneSecondary: "8400970189",
  // Dedicated WhatsApp number — separate from the primary call number above.
  whatsappNumber: "8009507981",

  addressHi: "ग्राम व पोस्ट - बारीगांव चौराहा, महराजगंज (उ.प्र.) - 273151",
  addressEn: "Village & Post — Barigaon Chauraha, Maharajganj (U.P.) - 273151",

  noteHi: "नोट: हमारे यहाँ एक चेक से भी सेंटरिंग किराए पर दिया जाता है।",
  noteEn: "Note: Centering material is given on rent here, even for a single set.",
} as const;

export const telHref = (num: string) => `tel:+91${num}`;
export const waHref = (num: string, text?: string) =>
  `https://wa.me/91${num}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

// Groups a 10-digit number like a card number, e.g. "9076 560 189".
export const formatPhone = (num: string) =>
  `${num.slice(0, 4)} ${num.slice(4, 7)} ${num.slice(7)}`;

export const navLinks = [
  { label: "होम", labelEn: "Home", href: "#home" },
  { label: "हमारे बारे में", labelEn: "About", href: "#about" },
  { label: "किराए की सामग्री", labelEn: "Rental Items", href: "#services" },
  { label: "उपकरण", labelEn: "Equipment", href: "#equipment" },
  { label: "क्यों चुनें", labelEn: "Why Us", href: "#why" },
  { label: "संपर्क करें", labelEn: "Contact", href: "#contact" },
];

type ServiceItem = {
  titleHi: string;
  titleEn: string;
  descHi: string;
  descEn: string;
  image: string | null;
  icon: string;
  // "contain" (with a neutral backdrop) suits a product cutout on a
  // plain background; default "cover" suits a full-bleed site photo.
  imageFit?: "cover" | "contain";
};

export const services: ServiceItem[] = [
  {
    titleHi: "स्लैब सेंटरिंग",
    titleEn: "Slab Centering",
    descHi: "हर तरह की RCC स्लैब के लिए सेंटरिंग सामान किराए पर।",
    descEn: "Centering material on rent for all types of RCC slabs.",
    image:
      "https://images.unsplash.com/photo-1694521787162-5373b598945c?auto=format&fit=crop&w=800&q=80",
    icon: "slab",
  },
  {
    titleHi: "कॉलम शटरिंग",
    titleEn: "Column Shuttering",
    descHi: "सही आकार व मजबूती के साथ कॉलम शटरिंग सामग्री।",
    descEn: "Column shuttering material with proper alignment & strength.",
    image:
      "https://images.unsplash.com/photo-1563166423-482a8c14b2d6?auto=format&fit=crop&w=800&q=80",
    icon: "column",
  },
  {
    titleHi: "बीम शटरिंग",
    titleEn: "Beam Shuttering",
    descHi: "मजबूत सपोर्ट के साथ बीम शटरिंग सामान किराए पर उपलब्ध।",
    descEn: "Beam shuttering material on rent with strong support.",
    image:
      "https://images.unsplash.com/photo-1575971637203-d6255d9947a9?auto=format&fit=crop&w=800&q=80",
    icon: "beam",
  },
  {
    titleHi: "फाउंडेशन शटरिंग",
    titleEn: "Foundation Shuttering",
    descHi: "मजबूत नींव के लिए फाउंडेशन फॉर्मवर्क सामग्री।",
    descEn: "Foundation formwork material for a solid, lasting base.",
    image:
      "https://images.unsplash.com/photo-1712711649566-16c7cfcf341c?auto=format&fit=crop&w=800&q=80",
    icon: "foundation",
  },
  {
    titleHi: "फ्लोरिंग मशीन (पावर ट्रॉवेल)",
    titleEn: "Flooring / Power Trowel Machine",
    descHi: "कंक्रीट स्लैब को चिकना व मजबूत फिनिश देने के लिए पावर ट्रॉवेल मशीन किराए पर उपलब्ध।",
    descEn: "Power trowel machine on rent for a smooth, strong finish on concrete slabs.",
    // No photo yet — every free-stock "power trowel" photo available is a
    // large gas-engine walk-behind unit, not the shop's actual electric
    // machine, so showing one would misrepresent the equipment. Falls back
    // to the icon tile (see Services.tsx) until a real photo of the
    // electric unit is available; then set this to "/images/<file>.jpg".
    image: null,
    icon: "trowel",
  },
];

export const equipment = [
  { nameHi: "प्लाईवुड", nameEn: "Plywood", icon: "plywood" },
  { nameHi: "एम.एस. प्लेट", nameEn: "MS Plates", icon: "msPlate" },
  { nameHi: "एडजस्टेबल प्रॉप्स", nameEn: "Adjustable Props", icon: "prop" },
  { nameHi: "स्कैफोल्डिंग", nameEn: "Scaffolding", icon: "scaffold" },
  { nameHi: "यू जैक / बेस जैक", nameEn: "U Jack / Base Jack", icon: "jack" },
];

export const whyChooseUs = [
  { hi: "अनुभवी व भरोसेमंद सेवा", en: "Experienced & trusted service" },
  { hi: "अच्छी क्वालिटी का सामान", en: "Good quality material" },
  { hi: "मजबूत व सुरक्षित सेंटरिंग", en: "Strong & safe centering" },
  { hi: "समय पर डिलीवरी", en: "On-time delivery" },
  { hi: "वाजिब किराया", en: "Affordable rent" },
  { hi: "ग्राहकों की पूरी संतुष्टि", en: "100% customer satisfaction" },
];

export const highlights = [
  { hi: "क्वालिटी मटेरियल", en: "Quality Material", icon: "shield" },
  { hi: "समय पर डिलीवरी", en: "On-Time Delivery", icon: "clock" },
  { hi: "वाजिब किराया", en: "Affordable Rent", icon: "tag" },
  { hi: "स्थानीय भरोसा", en: "Locally Trusted", icon: "users" },
];

export const gallery = [
  {
    titleHi: "स्लैब सेंटरिंग कार्य",
    titleEn: "Slab Centering Work",
    image:
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=700&q=80",
  },
  {
    titleHi: "कॉलम व बीम शटरिंग",
    titleEn: "Column & Beam Shuttering",
    image:
      "https://plus.unsplash.com/premium_photo-1681690860636-3d96ea7a593b?auto=format&fit=crop&w=700&q=80",
  },
  {
    titleHi: "साइट पर सेंटरिंग सामान",
    titleEn: "Centering Material On Site",
    image:
      "https://images.unsplash.com/photo-1587052694737-a972e4186288?auto=format&fit=crop&w=700&q=80",
  },
  {
    titleHi: "फाउंडेशन व निर्माण कार्य",
    titleEn: "Foundation & Construction Work",
    image:
      "https://plus.unsplash.com/premium_photo-1681690860621-57d749a22f34?auto=format&fit=crop&w=700&q=80",
  },
];

export const heroImage =
  "https://plus.unsplash.com/premium_photo-1681823089588-5ad065dc85cd?auto=format&fit=crop&w=1600&q=80";
