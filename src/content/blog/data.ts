export interface BlogCategory {
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  categoryName: string;
  publishDate: string;
  updatedDate?: string;
  readingTime: string;
  excerpt: string;
  tags: string[];
  featured: boolean;
  contentFile: string;
  ogImage?: string;
}

export const categories: BlogCategory[] = [
  {
    slug: "creation-site",
    name: "Création de sites web",
    description: "Guides, comparatifs et conseils pour créer un site web professionnel qui convertit.",
    icon: `<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>`,
    color: "#2563EB",
  },
  {
    slug: "seo",
    name: "SEO & Référencement",
    description: "Stratégies, techniques et bonnes pratiques pour améliorer votre visibilité sur Google et les moteurs IA.",
    icon: `<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>`,
    color: "#059669",
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    description: "Conseils pour créer, optimiser et développer une boutique en ligne rentable.",
    icon: `<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>`,
    color: "#D97706",
  },
  {
    slug: "performance",
    name: "Performance & Vitesse",
    description: "Optimisation technique, Core Web Vitals et bonnes pratiques pour un site ultra-rapide.",
    icon: `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>`,
    color: "#DC2626",
  },
  {
    slug: "design-ux",
    name: "Design & UX/UI",
    description: "Principes de design, tendances et stratégies UX pour des sites qui convertissent.",
    icon: `<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>`,
    color: "#7C3AED",
  },
];

export const articles: BlogArticle[] = [
  // SILO 1: Création de sites web
  {
    slug: "combien-coute-site-web",
    title: "Combien coûte un site web en 2026 ? Guide complet des prix",
    metaTitle: "Combien coûte un site web en 2026 ? Guide complet des prix | DISAYNER",
    metaDescription: "Du site vitrine au e-commerce : tous les prix détaillés pour créer un site web en 2026. Freelance, agence, template — comparatif honnête et transparent.",
    category: "creation-site",
    categoryName: "Création de sites web",
    publishDate: "2026-04-01",
    readingTime: "12 min",
    excerpt: "Du site vitrine à 800€ au e-commerce sur-mesure à 15 000€ — les prix varient énormément. Voici un guide honnête et transparent pour comprendre ce qui influence le coût d'un site web et faire le bon choix.",
    tags: ["Prix", "Budget", "Freelance", "Agence", "Comparatif"],
    featured: true,
    contentFile: "combien-coute-site-web",
  },
  {
    slug: "wordpress-shopify-webflow-quel-cms-choisir",
    title: "WordPress, Shopify ou Webflow : quel CMS choisir pour votre projet ?",
    metaTitle: "WordPress vs Shopify vs Webflow : quel CMS choisir en 2026 ? | DISAYNER",
    metaDescription: "Comparatif complet WordPress, Shopify et Webflow : avantages, inconvénients, prix, cas d'usage. Le guide pour choisir le bon CMS selon votre projet.",
    category: "creation-site",
    categoryName: "Création de sites web",
    publishDate: "2026-03-28",
    readingTime: "10 min",
    excerpt: "WordPress domine le marché, Shopify règne sur le e-commerce, Webflow séduit les designers. Mais lequel est fait pour vous ? Comparatif objectif basé sur notre expérience de 50+ projets.",
    tags: ["WordPress", "Shopify", "Webflow", "CMS", "Comparatif"],
    featured: true,
    contentFile: "wordpress-shopify-webflow-quel-cms-choisir",
  },

  // SILO 2: SEO & Référencement
  {
    slug: "seo-local-premiere-page-google",
    title: "SEO local : comment apparaître en première page Google dans votre ville",
    metaTitle: "SEO local : apparaître en 1ère page Google dans votre ville | DISAYNER",
    metaDescription: "Guide complet du SEO local : Google Business Profile, citations, avis, pages locales. Toutes les étapes pour dominer les résultats de recherche dans votre zone.",
    category: "seo",
    categoryName: "SEO & Référencement",
    publishDate: "2026-03-25",
    readingTime: "11 min",
    excerpt: "93% des recherches locales mènent à une action dans les 24h. Si votre entreprise dépend d'une zone géographique, le SEO local n'est pas un bonus — c'est une nécessité vitale.",
    tags: ["SEO local", "Google Business Profile", "Google Maps", "PME"],
    featured: false,
    contentFile: "seo-local-premiere-page-google",
  },
  {
    slug: "geo-optimiser-site-moteurs-recherche-ia",
    title: "GEO : comment optimiser votre site pour les moteurs de recherche IA",
    metaTitle: "GEO : optimiser votre site pour ChatGPT, Perplexity & Google AI | DISAYNER",
    metaDescription: "Le GEO (Generative Engine Optimization) est le futur du SEO. Découvrez comment faire citer votre site par ChatGPT, Perplexity et Google AI Mode.",
    category: "seo",
    categoryName: "SEO & Référencement",
    publishDate: "2026-03-20",
    readingTime: "9 min",
    excerpt: "ChatGPT, Perplexity, Google AI Mode — les moteurs de recherche IA ne fonctionnent pas comme Google. Le GEO est la nouvelle discipline qui vous rend visible dans les réponses générées par l'IA.",
    tags: ["GEO", "IA", "ChatGPT", "Perplexity", "SoRank"],
    featured: true,
    contentFile: "geo-optimiser-site-moteurs-recherche-ia",
  },

  // SILO 3: E-commerce
  {
    slug: "creer-boutique-shopify-rentable-guide",
    title: "Créer une boutique Shopify rentable : le guide de A à Z",
    metaTitle: "Créer une boutique Shopify rentable en 2026 : guide complet | DISAYNER",
    metaDescription: "De la création à la première vente : guide complet pour lancer une boutique Shopify rentable. Configuration, design, SEO, marketing — tout est couvert.",
    category: "ecommerce",
    categoryName: "E-commerce",
    publishDate: "2026-03-15",
    readingTime: "14 min",
    excerpt: "Shopify propulse plus de 4 millions de boutiques dans le monde. Mais lancer une boutique qui génère réellement des ventes demande plus qu'un template et quelques produits.",
    tags: ["Shopify", "E-commerce", "Boutique en ligne", "Dropshipping"],
    featured: false,
    contentFile: "creer-boutique-shopify-rentable-guide",
  },
  {
    slug: "fiche-produit-ecommerce-erreurs-conversions",
    title: "Fiche produit e-commerce : 10 erreurs qui tuent vos conversions",
    metaTitle: "Fiche produit e-commerce : 10 erreurs qui tuent vos conversions | DISAYNER",
    metaDescription: "Vos fiches produits ne convertissent pas ? Voici les 10 erreurs les plus courantes et comment les corriger pour augmenter vos ventes immédiatement.",
    category: "ecommerce",
    categoryName: "E-commerce",
    publishDate: "2026-03-10",
    readingTime: "9 min",
    excerpt: "Une fiche produit mal conçue peut diviser votre taux de conversion par 3. Descriptions copiées-collées, photos floues, pas d'avis clients — voici les 10 erreurs fatales et comment les corriger.",
    tags: ["Fiche produit", "Conversion", "CRO", "E-commerce"],
    featured: false,
    contentFile: "fiche-produit-ecommerce-erreurs-conversions",
  },

  // SILO 4: Performance & Vitesse
  {
    slug: "core-web-vitals-guide-lighthouse-95",
    title: "Core Web Vitals : le guide complet pour un score Lighthouse de 95+",
    metaTitle: "Core Web Vitals : guide complet pour score Lighthouse 95+ | DISAYNER",
    metaDescription: "LCP, FID, CLS — comprenez les Core Web Vitals et apprenez à atteindre un score Lighthouse de 95+ avec des optimisations concrètes et actionnables.",
    category: "performance",
    categoryName: "Performance & Vitesse",
    publishDate: "2026-03-05",
    readingTime: "11 min",
    excerpt: "Les Core Web Vitals sont un facteur de classement Google depuis 2021. Pourtant, 72% des sites ne passent pas le seuil de performance recommandé. Voici comment atteindre 95+ sur Lighthouse.",
    tags: ["Core Web Vitals", "Lighthouse", "Performance", "LCP", "CLS"],
    featured: false,
    contentFile: "core-web-vitals-guide-lighthouse-95",
  },
  {
    slug: "optimisation-images-web-webp-compression",
    title: "Optimisation des images web : WebP, compression et lazy loading expliqués",
    metaTitle: "Optimisation images web : WebP, compression, lazy loading | DISAYNER",
    metaDescription: "Les images représentent 50% du poids d'une page web. Apprenez à les optimiser avec le format WebP, la compression intelligente et le lazy loading.",
    category: "performance",
    categoryName: "Performance & Vitesse",
    publishDate: "2026-03-01",
    readingTime: "8 min",
    excerpt: "Les images représentent en moyenne 50% du poids total d'une page web. Un site avec des images non optimisées perd des visiteurs, du classement SEO et des conversions.",
    tags: ["Images", "WebP", "Compression", "Lazy loading", "Performance"],
    featured: false,
    contentFile: "optimisation-images-web-webp-compression",
  },

  // SILO 5: Design & UX/UI
  {
    slug: "design-oriente-conversion-principes",
    title: "Design orienté conversion : 7 principes pour un site qui vend",
    metaTitle: "Design orienté conversion : 7 principes pour un site qui vend | DISAYNER",
    metaDescription: "Un beau site ne suffit pas — il faut qu'il convertisse. Découvrez les 7 principes de design orienté conversion utilisés par les sites les plus performants.",
    category: "design-ux",
    categoryName: "Design & UX/UI",
    publishDate: "2026-02-25",
    readingTime: "10 min",
    excerpt: "Un site peut être magnifique et ne générer aucune conversion. Le design orienté conversion place chaque élément visuel au service d'un objectif business. Voici les 7 principes qui changent tout.",
    tags: ["Design", "Conversion", "CRO", "UX", "CTA"],
    featured: false,
    contentFile: "design-oriente-conversion-principes",
  },
  {
    slug: "responsive-design-2026-au-dela-mobile-first",
    title: "Responsive design en 2026 : au-delà du mobile-first",
    metaTitle: "Responsive design en 2026 : au-delà du mobile-first | DISAYNER",
    metaDescription: "Le mobile-first ne suffit plus. Découvrez les nouvelles approches du responsive design en 2026 : container queries, fluid typography, responsive images.",
    category: "design-ux",
    categoryName: "Design & UX/UI",
    publishDate: "2026-02-20",
    readingTime: "9 min",
    excerpt: "62% du trafic web mondial est mobile. Mais le responsive design moderne va bien au-delà du simple mobile-first. Container queries, fluid typography, responsive images — voici ce qui a changé.",
    tags: ["Responsive", "Mobile-first", "CSS", "Container queries", "UX"],
    featured: false,
    contentFile: "responsive-design-2026-au-dela-mobile-first",
  },
];

// Helper functions
export function getAllArticles(): BlogArticle[] {
  return [...articles].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): BlogArticle[] {
  return articles
    .filter((a) => a.category === categorySlug)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}

export function getFeaturedArticles(): BlogArticle[] {
  return articles
    .filter((a) => a.featured)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllCategories(): BlogCategory[] {
  return categories;
}
