// ─────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for language-agnostic business facts — phone,
// links, layout. Translated copy (services, testimonials, hours, nav
// labels) lives in src/i18n/translations.ts instead.
// Replace the PLACEHOLDER values with real business details; nothing
// else in the codebase needs to change.
// ─────────────────────────────────────────────────────────────────────────

export const business = {
  name: "Fly Unisex Salon",
  area: "Yousufguda",
  city: "Hyderabad",
  addressLine: "Near Street Mary's College, Yousufguda, Hyderabad, Telangana",

  phoneDisplay: "+91 97018 81430",
  phoneTel: "tel:+919701881430",
  whatsapp: "https://wa.me/919701881430",

  instagram: "https://www.instagram.com/flyunisexsalon.raj430/",
  justdial:
    "https://www.justdial.com/Hyderabad/Fly-Unisex-Salon-Near-Street-Marys-College-Yousufguda/040PXX40-XX40-230819003920-H5X6_BZDET",
  mapsDirections:
    "https://www.google.com/maps/search/?api=1&query=17.436941727903,78.427631125994",
  mapsEmbed:
    "https://maps.google.com/maps?q=17.436941727903,78.427631125994&z=16&output=embed",
};

// Bento card size per service category, in the same order as each language's
// services.items in translations.ts — layout is language-agnostic.
export const serviceLayout: ("lg" | "md" | "sm")[] = ["lg", "sm", "md", "sm", "md"];

// Anchor targets for the nav, in the same order as dict.nav's services/gallery/reviews/visit.
export const navAnchors = ["#services", "#gallery", "#reviews", "#visit"];
