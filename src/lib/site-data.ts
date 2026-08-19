// Central place for this business's real details.
// Source: proprietor's visiting card. Please double-check the proprietor
// name against the physical card — small Devanagari print can be hard to
// read precisely from a photo.
//
// Business model: this is a centering/shuttering CONTRACTOR — we bring our
// own material (plywood, MS plates, props, scaffolding, jacks) AND our own
// skilled workers, and carry out the complete centering & shuttering work
// at the customer's site. This is NOT a material-rental-only business, so
// copy throughout the site should read as a service/work offering, not as
// items available "on rent".

export const site = {
  brandHi: "परी सेंटरिंग सेंटर",
  brandEn: "Pari Centering Center",
  taglineHi: "अपने कारीगरों व सामग्री के साथ सेंटरिंग व शटरिंग का पूरा कार्य",
  taglineEn: "Complete Centering & Shuttering Work — Our Own Workers & Material",

  proprietorHi: "प्रो0 - भवानी / दरोगा सिंह",
  proprietorEn: "Prop. — Bhawani / Daroga Singh",

  phonePrimary: "9076560189",
  phoneSecondary: "8400970189",
  // Dedicated WhatsApp number — separate from the primary call number above.
  whatsappNumber: "8009507981",

  addressHi: "ग्राम व पोस्ट - बारीगांव चौराहा, महराजगंज (उ.प्र.) - 273151",
  addressEn: "Village & Post — Barigaon Chauraha, Maharajganj (U.P.) - 273151",

  noteHi:
    "नोट: हम एक छोटे काम से लेकर बड़े प्रोजेक्ट तक, हर तरह के सेंटरिंग व शटरिंग कार्य के लिए अपने कारीगर व सामग्री साथ लेकर आते हैं।",
  noteEn:
    "Note: From a single small job to a large project, we bring our own workers and material for every kind of centering & shuttering work.",
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
  { label: "हमारी टीम", labelEn: "Our Team", href: "#team" },
  { label: "हमारी सेवाएं", labelEn: "Our Services", href: "#services" },
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
    descHi: "हर तरह की RCC स्लैब के लिए सेंटरिंग व शटरिंग का पूरा कार्य, अपने कारीगरों द्वारा।",
    descEn: "Complete slab centering & shuttering work for all types of RCC slabs, done by our own workers.",
    image:
      "https://images.unsplash.com/photo-1694521787162-5373b598945c?auto=format&fit=crop&w=800&q=80",
    icon: "slab",
  },
  {
    titleHi: "कॉलम शटरिंग",
    titleEn: "Column Shuttering",
    descHi: "सही आकार व मजबूती के साथ कॉलम शटरिंग का कार्य हमारे कारीगरों द्वारा।",
    descEn: "Column shuttering work with proper alignment & strength, done by our workers.",
    image:
      "https://images.unsplash.com/photo-1563166423-482a8c14b2d6?auto=format&fit=crop&w=800&q=80",
    icon: "column",
  },
  {
    titleHi: "बीम शटरिंग",
    titleEn: "Beam Shuttering",
    descHi: "मजबूत सपोर्ट के साथ बीम शटरिंग का कार्य हमारे अनुभवी कारीगरों द्वारा।",
    descEn: "Beam shuttering work with strong support, done by our experienced workers.",
    image:
      "https://images.unsplash.com/photo-1575971637203-d6255d9947a9?auto=format&fit=crop&w=800&q=80",
    icon: "beam",
  },
  {
    titleHi: "फाउंडेशन शटरिंग",
    titleEn: "Foundation Shuttering",
    descHi: "मजबूत व टिकाऊ नींव के लिए फाउंडेशन शटरिंग का पूरा कार्य।",
    descEn: "Complete foundation shuttering work for a solid, lasting base.",
    image:
      "https://images.unsplash.com/photo-1712711649566-16c7cfcf341c?auto=format&fit=crop&w=800&q=80",
    icon: "foundation",
  },
  {
    titleHi: "फ्लोरिंग फिनिशिंग कार्य (पावर ट्रॉवेल)",
    titleEn: "Flooring Finishing Work (Power Trowel)",
    descHi: "कंक्रीट स्लैब को चिकना व मजबूत फिनिश देने के लिए पावर ट्रॉवेल मशीन व कारीगर द्वारा फिनिशिंग कार्य।",
    descEn: "Power trowel finishing work carried out by our operator for a smooth, strong concrete slab finish.",
    // No photo yet — every free-stock "power trowel" photo available is a
    // large gas-engine walk-behind unit, not the shop's actual electric
    // machine, so showing one would misrepresent the equipment. Falls back
    // to the icon tile (see Services.tsx) until a real photo of the
    // electric unit is available; then set this to "/images/<file>.jpg".
    image: null,
    icon: "trowel",
  },
];

type TeamMember = {
  roleHi: string;
  roleEn: string;
  // Individual names are optional — most cards below are role-only
  // placeholders (see note) and shouldn't invent a person.
  nameHi: string | null;
  nameEn: string | null;
  descHi: string;
  descEn: string;
  // Marks the featured/lead card (styled with the gold accent).
  lead?: boolean;
};

// PLACEHOLDER team roster. Only the proprietor entry is real data (reused
// from `site` above, already shown in the About section). The other cards
// are structural placeholders describing a role, not a specific person —
// swap in real names once available. No photo field on purpose: Team.tsx
// renders an initials avatar instead of a stock/AI photo, so nothing here
// misrepresents a real person, same rule as the equipment photos (see
// public/images/README.md). Add a `photo: "/images/team/<file>.jpg"`
// field + wire it into Team.tsx once real photos exist.
export const team: TeamMember[] = [
  {
    roleHi: "प्रोपराइटर",
    roleEn: "Proprietor",
    nameHi: "भवानी / दरोगा सिंह",
    nameEn: "Bhawani / Daroga Singh",
    descHi: "पूरे कार्य की देखरेख व ग्राहकों से सीधा संपर्क।",
    descEn: "Oversees every job and is the direct point of contact for customers.",
    lead: true,
  },
  {
    roleHi: "साइट सुपरवाइज़र",
    roleEn: "Site Supervisor",
    nameHi: null,
    nameEn: null,
    descHi: "साइट पर कार्य की गुणवत्ता व सुरक्षा की निगरानी करते हैं।",
    descEn: "Supervises work quality & safety on site.",
  },
  {
    roleHi: "सीनियर कारीगर",
    roleEn: "Senior Karigar",
    nameHi: null,
    nameEn: null,
    descHi: "स्लैब, कॉलम व बीम शटरिंग में वर्षों का अनुभव रखते हैं।",
    descEn: "Years of hands-on experience in slab, column & beam shuttering.",
  },
  {
    roleHi: "कुशल कारीगर टीम",
    roleEn: "Skilled Karigar Team",
    nameHi: null,
    nameEn: null,
    descHi: "हर प्रोजेक्ट के साथ जाने वाली प्रशिक्षित कारीगरों की टीम।",
    descEn: "A trained crew that travels with every project.",
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
  { hi: "वाजिब मूल्य पर कार्य", en: "Affordable rates" },
  { hi: "ग्राहकों की पूरी संतुष्टि", en: "100% customer satisfaction" },
];

export const highlights = [
  { hi: "क्वालिटी मटेरियल", en: "Quality Material", icon: "shield" },
  { hi: "समय पर डिलीवरी", en: "On-Time Delivery", icon: "clock" },
  { hi: "वाजिब मूल्य", en: "Affordable Rates", icon: "tag" },
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
