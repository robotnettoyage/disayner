// ─── Case Studies — Single source of truth ────────────────────────────────────
// To add a new case study: add one entry to the `caseStudies` array below.
// The `context` and `solution` fields accept raw HTML strings.
// IMPORTANT: these fields are rendered via Astro's set:html — safe only because
// this data is entirely internal (never user-generated).

export interface CaseStudy {
  // Identity
  slug: string;                    // URL slug: "vitor" → /realisations/vitor
  clientName: string;              // "Miroiterie VITOR"
  clientLogo?: string;             // Path to logo image (optional)
  clientWebsite: string;           // "https://miroiterie-vitor.com"

  // Classification
  category: "site-vitrine" | "e-commerce" | "landing-page" | "seo" | "refonte" | "maintenance";
  categoryLabel: string;           // "Site vitrine" (display label)
  tags: string[];                  // ["WordPress", "Elementor", "SEO", "Google Ads"]

  // Hub card
  thumbnail: string;               // Path to thumbnail image
  shortDescription: string;        // 1-2 sentences for the hub card

  // Case study page content
  projectType: string;             // "Site vitrine multi-pages + Google Ads"
  year: string;                    // "2025"
  duration: string;                // "6 semaines"
  location: string;                // "Haute-Savoie, France"

  // Sections (HTML strings — internal data only)
  context: string;
  solution: string;

  // Key deliverables
  deliverables: string[];

  // Results (optional)
  results?: {
    metric: string;                // "+180%"
    label: string;                 // "Trafic organique"
  }[];

  // Testimonial (optional)
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };

  // Gallery screenshots (optional)
  gallery?: string[];

  // Hero image
  heroImage: string;

  // SEO
  metaTitle: string;
  metaDescription: string;

  // Display order (lower = first)
  order: number;

  // Featured on homepage?
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  // ── 1. MONROBOTLAVEVITRE ────────────────────────────────────────────────────
  {
    slug: "monrobotlavevitre",
    clientName: "MonRobotLaveVitre",
    clientWebsite: "https://monrobotlavevitre.fr",
    category: "e-commerce",
    categoryLabel: "E-commerce",
    tags: ["WordPress", "WooCommerce", "Elementor", "SEO", "CRO"],
    thumbnail: "/images/case-studies/monrobotlavevitre/thumbnail.webp",
    shortDescription:
      "Création d'une boutique e-commerce de A à Z et stratégie SEO complète : de 0 à 1 590 clics/mois et 30 200 impressions en 6 mois, 100% organique.",
    projectType: "Création e-commerce + Stratégie SEO complète",
    year: "2025",
    duration: "6 mois (accompagnement continu)",
    location: "France",
    context: `
      <p>Une marque spécialisée dans les robots lave-vitres automatiques pour particuliers souhaitait lancer sa présence en ligne sur le marché français. Aucun site existant, aucun domaine, aucune visibilité — le projet partait de zéro.</p>
      <p>L'objectif était clair : créer une boutique e-commerce complète, positionner la marque sur un marché de niche concurrentiel, et générer du trafic qualifié uniquement via le référencement naturel — sans budget publicitaire.</p>
      <p>Le défi principal résidait dans la concurrence SEO : des acteurs établis (Amazon, Darty, Boulanger) dominaient les résultats de recherche sur les requêtes principales. Il fallait une stratégie de contenu intelligente pour capter du trafic long-tail et construire une autorité thématique progressive.</p>
    `,
    solution: `
      <p>Nous avons pris en charge l'intégralité du projet : achat du nom de domaine, choix de l'hébergement, installation et configuration de WordPress avec WooCommerce, design du thème avec Elementor et création d'un template produit personnalisé connecté via champs ACF.</p>
      <p><strong>Création de la boutique :</strong> 30 pages produits ont été créées avec des fiches détaillées et optimisées pour le SEO et la conversion (CRO). Chaque fiche comprend une description unique, des caractéristiques techniques structurées, un guide d'utilisation, et des éléments de réassurance (garantie, livraison, retours). Les pages catégories (robots, accessoires, pièces détachées) ont été structurées avec du contenu SEO dédié.</p>
      <p><strong>Stratégie SEO :</strong> Nous avons construit une architecture de site pensée pour le référencement dès le premier jour. Structure en silos thématiques, maillage interne entre fiches produits, catégories et articles de blog, balisage Hn rigoureux, schema JSON-LD Product sur chaque fiche, et optimisation des meta titles et descriptions sur l'ensemble du site.</p>
      <p><strong>Contenus :</strong> Rédaction d'articles de blog optimisés ciblant les requêtes informationnelles et comparatives (guides d'achat, comparatifs, erreurs à éviter, conseils d'entretien). Ces contenus servent de points d'entrée SEO qui redirigent naturellement vers les pages produits via le maillage interne.</p>
      <p><strong>Optimisation technique :</strong> Performance Lighthouse optimisée, compression des images en WebP, lazy loading, configuration du cache, sitemap XML, robots.txt, inscription Google Search Console et suivi régulier des performances.</p>
    `,
    deliverables: [
      "Création du site e-commerce de A à Z (domaine, hébergement, WordPress/WooCommerce)",
      "Design et intégration complète avec Elementor",
      "Template produit personnalisé connecté via ACF",
      "30 pages produits avec fiches SEO et CRO optimisées",
      "Pages catégories avec contenu SEO dédié",
      "Architecture en silos thématiques",
      "Maillage interne stratégique",
      "Schema JSON-LD Product sur chaque fiche",
      "Rédaction d'articles de blog SEO (guides, comparatifs)",
      "Optimisation technique (performance, cache, images WebP)",
      "Configuration Google Search Console + suivi",
      "Stratégie SEO long-tail et autorité thématique",
    ],
    results: [
      { metric: "1 590", label: "Clics/mois (depuis 0)" },
      { metric: "30,2k", label: "Impressions Google" },
      { metric: "5,3%",  label: "CTR moyen" },
      { metric: "7,8",   label: "Position moyenne" },
    ],
    testimonial: undefined,
    gallery: [
      "/images/case-studies/monrobotlavevitre/gallery/gsc-performance.webp",
    ],
    heroImage: "/images/case-studies/monrobotlavevitre/hero.webp",
    metaTitle: "MonRobotLaveVitre — Création e-commerce + SEO de 0 à 1 590 clics/mois | DISAYNER",
    metaDescription:
      "Étude de cas : création d'une boutique e-commerce WordPress/WooCommerce et stratégie SEO complète. De 0 à 1 590 clics mensuels en 6 mois, 100% organique.",
    order: 1,
    featured: true,
  },

  // ── 2. VITOR ──────────────────────────────────────────────────────────────────
  {
    slug: "vitor",
    clientName: "Miroiterie VITOR",
    clientWebsite: "https://miroiterie-vitor.com",
    category: "site-vitrine",
    categoryLabel: "Site vitrine",
    tags: ["WordPress", "Elementor", "SEO", "Google Ads"],
    thumbnail: "/images/case-studies/vitor/thumbnail.webp",
    shortDescription:
      "Refonte complète pour une miroiterie en Haute-Savoie : site multi-pages, portfolio interactif et campagnes Google Ads.",
    projectType: "Site vitrine multi-pages + Google Ads",
    year: "2025",
    duration: "8 semaines",
    location: "Haute-Savoie, France",
    context: `
      <p>La Miroiterie VITOR est une entreprise familiale spécialisée dans la menuiserie aluminium et la miroiterie en Haute-Savoie. Leur ancien site, développé sur Wix, ne reflétait ni la qualité de leurs prestations ni leur positionnement premium.</p>
      <p>Le site était lent, mal structuré pour le SEO, et ne générait quasiment aucune demande de devis en ligne. L'entreprise perdait des opportunités face à des concurrents mieux positionnés sur Google.</p>
      <p>L'objectif : créer un site professionnel qui inspire confiance, présente clairement tous les services (miroiterie, menuiserie alu, miroirs LED sur-mesure) et génère des demandes qualifiées via Google.</p>
    `,
    solution: `
      <p>Nous avons réalisé une refonte complète du site en migrant de Wix vers WordPress/Elementor sur Hostinger. Le nouveau site comprend plus de 10 pages de services détaillées, un portfolio de réalisations interactif et un formulaire de contact connecté à Microsoft 365 via OAuth2.</p>
      <p>Chaque page a été conçue avec une structure SEO rigoureuse : balisage Hn optimisé, meta titles et descriptions uniques, schema JSON-LD LocalBusiness, sitemap XML et configuration Google Search Console.</p>
      <p>En parallèle, nous avons mis en place 4 campagnes Google Ads Search avec une stratégie de mots-clés ciblée sur les services principaux et les zones géographiques prioritaires. Les annonces incluent des sitelinks, des formulaires de prospects et des extensions d'appel.</p>
      <p>Le site a également été configuré avec un certificat SSL, une solution email professionnelle Microsoft 365 (via FluentSMTP OAuth2) et un système de gestion de contenu permettant au client de mettre à jour ses réalisations en autonomie.</p>
    `,
    deliverables: [
      "Migration Wix → WordPress/Elementor",
      "10+ pages de services détaillées",
      "Portfolio réalisations avec lightbox",
      "Formulaire de contact connecté Microsoft 365",
      "Optimisation SEO on-page complète",
      "Schema JSON-LD LocalBusiness",
      "4 campagnes Google Ads Search",
      "Configuration SSL, DNS et email professionnel",
      "Formation client à la gestion du contenu",
    ],
    results: [
      { metric: "10+",   label: "Pages de services créées" },
      { metric: "4",     label: "Campagnes Google Ads actives" },
      { metric: "95+",   label: "Score Lighthouse" },
      { metric: "Top 5", label: "Positions Google locales" },
    ],
    testimonial: {
      quote:
        "Célio a su capter l'essence de notre marque et la traduire en un design épuré et moderne. Le SEO a immédiatement commencé à porter ses fruits — notre trafic a doublé en 3 mois.",
      author: "Marc V.",
      role: "Fondateur, Miroiterie VITOR",
    },
    gallery: [
      "/images/case-studies/vitor/gallery/1.webp",
      "/images/case-studies/vitor/gallery/2.webp",
    ],
    heroImage: "/images/case-studies/vitor/hero.webp",
    metaTitle: "Miroiterie VITOR — Création de site vitrine & Google Ads | DISAYNER",
    metaDescription:
      "Étude de cas : refonte complète du site de la Miroiterie VITOR. Migration Wix → WordPress, SEO, Google Ads. Résultats et méthodologie détaillés.",
    order: 2,
    featured: true,
  },

  // ── 3. LIENUNIQUE ────────────────────────────────────────────────────────────
  {
    slug: "lienunique",
    clientName: "Lien Unique",
    clientWebsite: "https://lienunique.fr",
    category: "site-vitrine",
    categoryLabel: "Site vitrine",
    tags: ["WordPress", "Elementor", "Stripe", "Animations", "Dark UI"],
    thumbnail: "/images/case-studies/lienunique/thumbnail.webp",
    shortDescription:
      "Création d'un site vitrine premium avec dark UI, animations immersives et système de paiement Stripe pour un service de pages link-in-bio sur-mesure.",
    projectType: "Site vitrine premium + intégration Stripe",
    year: "2025",
    duration: "4 semaines",
    location: "France",
    context: `
      <p>Lien Unique est un service de création de pages link-in-bio 100% personnalisées — une alternative premium à Linktree et aux solutions génériques. Le fondateur souhaitait un site à la hauteur de son positionnement : du sur-mesure, pas du template.</p>
      <p>Le brief était ambitieux : un design immersif avec un univers visuel sombre et cinématique (dark UI), des animations poussées qui marquent dès la première seconde, un système de paiement intégré pour commander directement en ligne, et un back-end complet permettant d'héberger et de gérer les pages link-in-bio livrées aux clients.</p>
      <p>Le défi principal était de combiner une expérience visuelle spectaculaire (qui prouve le savoir-faire en design) avec un parcours de conversion fluide (du premier scroll jusqu'au paiement Stripe). Le site devait être lui-même la meilleure démonstration du service vendu : si la vitrine est belle, le client sait que sa propre page le sera aussi.</p>
    `,
    solution: `
      <p><strong>Direction artistique dark UI :</strong> Nous avons conçu un univers visuel immersif avec un fond sombre, des étoiles filantes animées, des effets de profondeur et des micro-interactions sur chaque élément. L'objectif : créer un effet "wow" immédiat qui démarque le service de la concurrence et prouve visuellement la qualité du design proposé aux clients.</p>
      <p><strong>Animations premium :</strong> Chaque section du site intègre des animations travaillées — transitions au scroll, apparitions progressives, effets de parallaxe, hover states élaborés sur les cards de tarifs et les exemples de réalisations. Le tout reste fluide et performant grâce à une optimisation rigoureuse.</p>
      <p><strong>Intégration Stripe :</strong> Le parcours d'achat a été intégré directement dans le site avec Stripe comme solution de paiement. Les trois offres (Essentiel, Sur-mesure, Express 24H) sont présentées dans des cards de pricing claires, et le paiement se fait en quelques clics sans quitter le site.</p>
      <p><strong>Système back-end de gestion :</strong> Au-delà du site vitrine, nous avons mis en place un système complet en back-end pour héberger les pages link-in-bio livrées aux clients. Chaque page est accessible via une URL unique et gérée depuis l'administration WordPress.</p>
      <p><strong>Page réalisations dynamique :</strong> Une page portfolio présentant les vraies pages link-in-bio livrées aux clients, alimentée dynamiquement. Chaque réalisation est cliquable et renvoie vers la page live — la meilleure preuve de qualité possible.</p>
    `,
    deliverables: [
      "Direction artistique dark UI complète",
      "Animations immersives (étoiles filantes, parallaxe, transitions)",
      "Intégration WordPress + Elementor",
      "Système de paiement Stripe (3 offres de pricing)",
      "Back-end complet d'hébergement des pages link-in-bio",
      "Page réalisations dynamique avec pages clients live",
      "Design responsive et optimisé mobile",
      "Pages de vente pour chaque offre (Essentiel, Sur-mesure, Express)",
      "Formulaire de commande personnalisé",
      "Blog intégré",
    ],
    results: [
      { metric: "3",        label: "Offres de pricing intégrées" },
      { metric: "< 2s",     label: "Temps de chargement" },
      { metric: "100%",     label: "Mobile responsive" },
      { metric: "Dark UI",  label: "Design immersif unique" },
    ],
    testimonial: undefined,
    gallery: [],
    heroImage: "/images/case-studies/lienunique/hero.webp",
    metaTitle: "Lien Unique — Site vitrine dark UI premium + Stripe | DISAYNER",
    metaDescription:
      "Étude de cas : création d'un site vitrine immersif pour Lien Unique, service de pages link-in-bio sur-mesure. Dark UI, animations, intégration Stripe.",
    order: 3,
    featured: false,
  },

  // ── 4. BLOCKFORGE ────────────────────────────────────────────────────────────
  {
    slug: "blockforge",
    clientName: "BlockForge Web",
    clientWebsite: "https://block-forge.fr",
    category: "landing-page",
    categoryLabel: "Landing page",
    tags: ["React", "Vite", "Tailwind CSS", "Cloudflare Pages", "SEO", "Blog"],
    thumbnail: "/images/case-studies/blockforge/thumbnail.webp",
    shortDescription:
      "Création d'un site one-page immersif pour une agence web spécialisée Minecraft : dark UI gaming, animations avancées, système de pricing et blog SEO.",
    projectType: "Landing page premium + Blog SEO",
    year: "2026",
    duration: "3 semaines",
    location: "France",
    context: `
      <p>BlockForge Web est une agence spécialisée dans la création de sites web pour les serveurs Minecraft francophones. Le fondateur souhaitait un site à l'image de son positionnement : premium, immersif et crédible dans l'univers gaming — à des années-lumière des templates WordPress génériques que proposent ses concurrents.</p>
      <p>Le brief était exigeant : un site one-page avec une direction artistique dark UI inspirée de l'univers Minecraft, des animations fluides qui captent l'attention dès le premier scroll, un système de pricing clair avec trois offres, un portfolio de réalisations filtrable, une section équipe, un blog SEO complet, et un formulaire de contact avancé — le tout déployé sur Cloudflare Pages pour des performances maximales.</p>
      <p>Le défi : créer un site qui impressionne une audience de gamers exigeants et techniquement éduqués, tout en restant performant (score Lighthouse 90+) malgré les nombreuses animations et interactions.</p>
    `,
    solution: `
      <p><strong>Direction artistique gaming :</strong> Nous avons conçu un univers visuel dark UI complet inspiré de Minecraft — fond sombre, palette de couleurs reprenant les teintes iconiques du jeu (vert émeraude, violet netherite, bleu diamond), effets de particules, typographie bold et agressive. Chaque section a sa propre identité visuelle tout en restant cohérente avec l'ensemble.</p>
      <p><strong>Développement React + Vite :</strong> Le site a été développé entièrement from scratch en React avec Vite comme bundler et Tailwind CSS pour le styling. Aucun template, aucun thème — chaque composant a été codé sur-mesure. Le choix de React + Vite permet des performances optimales avec un bundle léger et un chargement quasi-instantané.</p>
      <p><strong>Animations immersives :</strong> Chaque section intègre des animations travaillées — transitions au scroll, hover states élaborés sur les cartes de pricing et le portfolio, effets de parallaxe, compteurs animés, et micro-interactions sur les éléments interactifs. Le tout reste fluide grâce à l'utilisation exclusive de propriétés GPU-accélérées (transform, opacity).</p>
      <p><strong>Système de pricing gaming :</strong> Trois packs clairement présentés (Cobblestone, Diamond, Netherite) avec une nomenclature Minecraft qui parle directement à l'audience cible. Chaque carte détaille les fonctionnalités incluses avec un système visuel de checkmarks, et le pack recommandé est mis en avant visuellement.</p>
      <p><strong>Portfolio filtrable :</strong> Une section réalisations avec des cartes projets filtrables par type de serveur (Survival, Faction, Skyblock, Mini-jeux, Roleplay). Chaque carte affiche les technologies utilisées et les métriques du serveur.</p>
      <p><strong>Tableau comparatif :</strong> Une section "Pourquoi choisir BlockForge" avec un tableau comparatif honnête entre templates gratuits, freelances généralistes et BlockForge — un outil de conversion redoutable qui positionne clairement l'offre face à la concurrence.</p>
      <p><strong>Blog SEO :</strong> Un blog complet intégré au site avec des articles optimisés pour le référencement, des catégories et des slugs SEO-friendly. L'objectif : capter du trafic organique sur les requêtes liées à la création de sites Minecraft.</p>
      <p><strong>Formulaire de contact avancé :</strong> Un formulaire dynamique avec sélection du pack, champs adaptés à l'audience gaming (pseudo, nom du serveur, Discord), sélection du type de serveur et estimation de budget. Pensé pour qualifier les leads dès la prise de contact.</p>
      <p><strong>Déploiement Cloudflare Pages :</strong> Site déployé sur Cloudflare Pages avec CDN mondial, SSL automatique et déploiement continu via Git. Temps de chargement inférieur à 2 secondes partout dans le monde.</p>
    `,
    deliverables: [
      "Direction artistique dark UI gaming complète",
      "Développement React + Vite + Tailwind CSS from scratch",
      "Site one-page avec 10+ sections",
      "Animations immersives et micro-interactions",
      "Système de pricing 3 packs (Cobblestone, Diamond, Netherite)",
      "Portfolio de réalisations filtrable par catégorie",
      "Tableau comparatif concurrence",
      "Section process en 5 étapes",
      "Section équipe avec profils gaming",
      "Section FAQ avec filtres par catégorie",
      "Section témoignages clients",
      "Blog SEO complet avec catégories",
      "Formulaire de contact avancé avec qualification",
      "Pages légales (mentions légales, confidentialité)",
      "Déploiement Cloudflare Pages + SSL",
      "Optimisation SEO on-page complète",
    ],
    results: [
      { metric: "10+",     label: "Sections one-page" },
      { metric: "90+",     label: "Score Lighthouse" },
      { metric: "< 2s",    label: "Temps de chargement" },
      { metric: "Dark UI", label: "Direction artistique gaming" },
    ],
    testimonial: undefined,
    gallery: [],
    heroImage: "/images/case-studies/blockforge/hero.webp",
    metaTitle: "BlockForge Web — Landing page gaming dark UI React + Vite | DISAYNER",
    metaDescription:
      "Étude de cas : création d'un site one-page immersif pour BlockForge Web, agence spécialisée Minecraft. React, Vite, Tailwind CSS, dark UI gaming, blog SEO.",
    order: 4,
    featured: false,
  },

  // ── 5. LOVE AT ME ───────────────────────────────────────────────────────────
  {
    slug: "love-at-me",
    clientName: "Love at Me",
    clientWebsite: "https://loveatme.com",
    category: "seo",
    categoryLabel: "SEO",
    tags: ["Shopify", "SEO", "Multilingue", "FR/EN/NL"],
    thumbnail: "/images/case-studies/love-at-me/thumbnail.webp",
    shortDescription:
      "Optimisation SEO complète sur ~560 pages pour une marque de mode belge multilingue.",
    projectType: "SEO e-commerce multilingue",
    year: "2025",
    duration: "Mission one-shot",
    location: "Belgique",
    context: "<p>À compléter.</p>",
    solution: "<p>À compléter.</p>",
    deliverables: [
      "Optimisation meta sur 278 produits",
      "2 935 alt texts optimisés",
      "Schema JSON-LD produits",
      "Hreflang FR/EN/NL",
      "LCP optimisé (21.6s → 1.1s)",
    ],
    results: [
      { metric: "+180%", label: "Trafic organique" },
      { metric: "278",   label: "Produits optimisés" },
      { metric: "1.1s",  label: "LCP (avant : 21.6s)" },
    ],
    heroImage: "/images/case-studies/love-at-me/hero.webp",
    metaTitle: "Love at Me — SEO e-commerce multilingue Shopify | DISAYNER",
    metaDescription:
      "Étude de cas : optimisation SEO complète pour Love at Me, marque de mode belge sur Shopify. Multilingue FR/EN/NL, +180% de trafic.",
    order: 5,
    featured: true,
  },

  // ── 3. JM SERVICES ──────────────────────────────────────────────────────────
  {
    slug: "jm-services",
    clientName: "JM Services",
    clientWebsite: "https://jm-services-var.com",
    category: "site-vitrine",
    categoryLabel: "Site vitrine",
    tags: ["WordPress", "Elementor", "SEO"],
    thumbnail: "/images/case-studies/jm-services/thumbnail.webp",
    shortDescription:
      "Création d'un site multi-pages pour un paysagiste dans le Var avec galerie et formulaire.",
    projectType: "Site vitrine complet",
    year: "2025",
    duration: "4 semaines",
    location: "Var (83), France",
    context: "<p>À compléter.</p>",
    solution: "<p>À compléter.</p>",
    deliverables: [
      "Site multi-pages complet",
      "Galerie réalisations avec lightbox",
      "Formulaire de contact personnalisé",
      "SEO local optimisé",
    ],
    heroImage: "/images/case-studies/jm-services/hero.webp",
    metaTitle: "JM Services — Création de site vitrine paysagiste | DISAYNER",
    metaDescription:
      "Étude de cas : création d'un site vitrine pour JM Services, paysagiste dans le Var. Multi-pages, galerie, SEO local.",
    order: 6,
    featured: true,
  },
];

// ─── Helper functions ─────────────────────────────────────────────────────────

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies.sort((a, b) => a.order - b.order);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((cs) => cs.featured).sort((a, b) => a.order - b.order);
}

export function getCategories(): { value: string; label: string; count: number }[] {
  const cats = new Map<string, { label: string; count: number }>();
  caseStudies.forEach((cs) => {
    const existing = cats.get(cs.category);
    if (existing) {
      existing.count++;
    } else {
      cats.set(cs.category, { label: cs.categoryLabel, count: 1 });
    }
  });
  return Array.from(cats.entries()).map(([value, { label, count }]) => ({
    value,
    label,
    count,
  }));
}
