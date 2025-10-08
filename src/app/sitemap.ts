
// -- types --
type SitemapItem = {
  title: string;
  href: string;
  description: string;
};

type Cta = {
  label: string;
  href: string;
};

// Base shape for most sections
type SitemapSectionBase = {
  heading: string;
  intro?: string;
};

// Variants (union)
type SectionWithItems = SitemapSectionBase & {
  items: SitemapItem[];
};

type SectionWithCta = SitemapSectionBase & {
  cta: Cta;
  items?: SitemapItem[]; // optional if some CTA sections also have items
};

// A simple link-only section example
type SectionLinkOnly = {
  heading: string;
  href: string;
};

// Union of all possible section shapes.
type SitemapSection = SectionWithItems | SectionWithCta | SectionLinkOnly;

// -- data (example) --
// This data is now correctly typed as SitemapSection[]
export const sitemap: SitemapSection[] = [
  {
    heading: "Products",
    intro: "Explore our products",
    items: [
      { title: "Vibrator", href: "/vibrator", description: "Powerful wand" },
      { title: "Ring", href: "/ring", description: "Comfort fit" },
    ],
  },
  {
    heading: "About",
    href: "/about",
  },
  {
    heading: "Get Started",
    intro: "Start here",
    cta: { label: "Shop now", href: "/shop" },
  },
];

// -- helpers / type guards --
export function hasItems(section: SitemapSection): section is SectionWithItems {
  // Type guard to check for the 'items' property
  return (section as SectionWithItems).items !== undefined;
}

export function hasCta(section: SitemapSection): section is SectionWithCta {
  // Type guard to check for the 'cta' property
  return (section as SectionWithCta).cta !== undefined;
}

export function isLinkOnly(section: SitemapSection): section is SectionLinkOnly {
    // Type guard for link-only sections
    return !hasItems(section) && !hasCta(section) && "href" in section;
}
