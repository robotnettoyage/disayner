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
  categories: string[];            // ["site-vitrine", "seo"] — first = primary
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
    categories: ["e-commerce", "seo"],
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
      "/images/case-studies/monrobotlavevitre/gallery/mon-robot-1.webp",
      "/images/case-studies/monrobotlavevitre/gallery/mon-robot-2.webp",
      "/images/case-studies/monrobotlavevitre/gallery/mon-robot-3.webp",
      "/images/case-studies/monrobotlavevitre/gallery/mon-robot-4.webp",
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
    categories: ["site-vitrine"],
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
      "/images/case-studies/vitor/gallery/vitor-1.webp",
      "/images/case-studies/vitor/gallery/vitor-2.webp",
      "/images/case-studies/vitor/gallery/vitor-3.webp",
      "/images/case-studies/vitor/gallery/vitor-4.webp",
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
    categories: ["site-vitrine"],
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
    gallery: [
      "/images/case-studies/lienunique/gallery/screenshot-1.webp",
    ],
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
    categories: ["landing-page"],
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
    gallery: [
      "/images/case-studies/blockforge/gallery/blockforge-1.webp",
      "/images/case-studies/blockforge/gallery/blockforge-2.webp",
      "/images/case-studies/blockforge/gallery/blockforge-3.webp",
      "/images/case-studies/blockforge/gallery/blockforge-4.webp",
    ],
    heroImage: "/images/case-studies/blockforge/hero.webp",
    metaTitle: "BlockForge Web — Landing page gaming dark UI React + Vite | DISAYNER",
    metaDescription:
      "Étude de cas : création d'un site one-page immersif pour BlockForge Web, agence spécialisée Minecraft. React, Vite, Tailwind CSS, dark UI gaming, blog SEO.",
    order: 4,
    featured: false,
  },

  // ── 5. WAVSITE ───────────────────────────────────────────────────────────────
  {
    slug: "wavsite",
    clientName: "WAVSITE",
    clientWebsite: "https://wav-site.fr",
    categories: ["landing-page"],
    categoryLabel: "Landing page",
    tags: ["HTML/CSS/JS", "Cloudflare Pages", "SEO local", "Blog", "Dark UI"],
    thumbnail: "/images/case-studies/wavsite/thumbnail.webp",
    shortDescription:
      "Création d'un site one-page dark luxury pour une agence web spécialisée studios d'enregistrement rap & hip-hop : pricing, SEO local, blog et formulaire de contact.",
    projectType: "Landing page premium + Blog SEO",
    year: "2026",
    duration: "2 semaines",
    location: "France",
    context: `
      <p>WAVSITE est une agence web de niche positionnée sur un marché très spécifique : la création de sites pour les studios d'enregistrement rap et hip-hop en France et dans la francophonie. Le fondateur souhaitait un site vitrine qui parle directement à sa cible — des gérants de studios qui ont investi dans du matériel pro mais qui n'ont aucune présence digitale.</p>
      <p>Le brief était précis : un site one-page avec une direction artistique dark luxury évoquant l'univers du studio (sombre, premium, sonore), un système de pricing avec trois packs, une section SEO local couvrant les grandes villes françaises, un blog pour capter du trafic organique, et un formulaire de contact qui qualifie les prospects dès la prise de contact.</p>
      <p>L'enjeu : convaincre des gérants de studios — souvent auto-entrepreneurs créatifs peu familiers avec le web — qu'un site professionnel peut transformer leur business, tout en parlant leur langage et en respectant les codes visuels de l'industrie musicale.</p>
    `,
    solution: `
      <p><strong>Direction artistique dark luxury :</strong> Un univers visuel sombre et premium inspiré de l'ambiance des studios d'enregistrement — fond noir, typographie bold et impactante, contrastes forts, accents de couleur dorés et néon. Chaque section est conçue pour évoquer l'énergie et le professionnalisme de l'industrie musicale hip-hop.</p>
      <p><strong>Développement HTML/CSS/JS pur :</strong> Le site a été codé entièrement from scratch en HTML, CSS et JavaScript vanilla — aucun framework, aucune dépendance inutile. Le résultat : un site ultra-léger, rapide et performant, déployé sur Cloudflare Pages avec un temps de chargement sous les 2 secondes.</p>
      <p><strong>Structure de conversion :</strong> Le one-page est structuré comme un tunnel de vente : accroche percutante → problème identifié (section "Pourquoi ton studio en a besoin" avec le constat sans site vs avec site) → solution détaillée (livrables) → preuve sociale (témoignages d'artistes) → pricing clair → FAQ → formulaire. Chaque section pousse naturellement vers l'action.</p>
      <p><strong>Système de pricing musical :</strong> Trois packs adaptés aux stades de développement des studios — Starter (890€), Studio Pro (1 690€) et Label Pack (sur devis). La nomenclature et le wording sont pensés pour l'audience : "ton studio", "tes artistes", "ta ville". Le pack Studio Pro est mis en avant comme le plus choisi.</p>
      <p><strong>SEO local multi-villes :</strong> Une section dédiée couvrant les principales villes françaises (Paris, Lyon, Marseille, Bordeaux, Toulouse, Lille, Nantes) plus Bruxelles et Montréal. Chaque ville est ciblée avec ses requêtes locales spécifiques ("studio rap Paris", "enregistrement hip-hop Lyon"). Cette approche permet de capter du trafic local dans chaque marché.</p>
      <p><strong>Blog SEO :</strong> Un blog complet avec des articles stratégiques ciblant les requêtes de la niche — SEO local pour studios, éléments indispensables d'un site de studio, système de booking en ligne, comparatif de prix, stratégies marketing pour studios. Chaque article est optimisé pour le référencement et redirige vers les offres.</p>
      <p><strong>Formulaire de contact qualifiant :</strong> Un formulaire adapté à l'audience avec des champs spécifiques : prénom, email, nom du studio, ville, budget estimé, et description du projet. Ces informations permettent de qualifier chaque lead avant même le premier échange.</p>
    `,
    deliverables: [
      "Direction artistique dark luxury sur mesure",
      "Développement HTML/CSS/JS from scratch",
      "Site one-page avec 10+ sections de conversion",
      "Système de pricing 3 packs (Starter, Studio Pro, Label Pack)",
      "Section SEO local multi-villes (10+ villes ciblées)",
      "Section livrables détaillée (10 fonctionnalités)",
      "Carrousel de témoignages d'artistes",
      "Section process en 4 étapes",
      "Blog SEO complet avec 5+ articles",
      "Formulaire de contact qualifiant",
      "Section FAQ",
      "Pages légales (mentions légales, confidentialité)",
      "Déploiement Cloudflare Pages + SSL",
      "Optimisation SEO on-page (meta, sitemap, structure Hn)",
    ],
    results: [
      { metric: "10+", label: "Sections de conversion" },
      { metric: "10+", label: "Villes ciblées en SEO local" },
      { metric: "< 2s", label: "Temps de chargement" },
      { metric: "5+",  label: "Articles de blog SEO" },
    ],
    testimonial: undefined,
    gallery: [
      "/images/case-studies/wavsite/gallery/wavsite-1.webp",
      "/images/case-studies/wavsite/gallery/wavsite-2.webp",
      "/images/case-studies/wavsite/gallery/wavsite-3.webp",
      "/images/case-studies/wavsite/gallery/wavsite-4.webp",
    ],
    heroImage: "/images/case-studies/wavsite/hero.webp",
    metaTitle: "WAVSITE — Landing page dark luxury pour studios rap & hip-hop | DISAYNER",
    metaDescription:
      "Étude de cas : création d'un site one-page premium pour WAVSITE, agence web spécialisée studios d'enregistrement. Dark luxury, SEO local, blog, HTML/CSS/JS.",
    order: 5,
    featured: false,
  },

  // ── 6. RÉVÉLIÆNCE ────────────────────────────────────────────────────────────
  {
    slug: "reveliance",
    clientName: "Révéliænce",
    clientWebsite: "https://reveliance.com",
    categories: ["site-vitrine"],
    categoryLabel: "Site vitrine",
    tags: ["WordPress", "Elementor", "Design", "Charte graphique"],
    thumbnail: "/images/case-studies/reveliance/thumbnail.webp",
    shortDescription:
      "Création d'un site vitrine de 10 pages pour une facilitatrice en intelligence collective : direction artistique sur-mesure, identité visuelle élégante et contenu pensé pour la confiance.",
    projectType: "Site vitrine premium + Identité visuelle",
    year: "2026",
    duration: "6 semaines",
    location: "Cherbourg-en-Cotentin, France",
    context: `
      <p>Marie-Hélène Lerouge est facilitatrice en intelligence collective et praticienne narrative, basée à Cherbourg-en-Cotentin. Depuis plus de 15 ans, elle accompagne dirigeants, équipes et organisations dans leurs transformations — mais sa présence digitale ne reflétait pas la finesse et la profondeur de son travail.</p>
      <p>Son activité repose essentiellement sur la confiance, la relation humaine et le bouche-à-oreille. L'enjeu n'était pas d'attirer du trafic en masse, mais de créer un site qui inspire confiance dès le premier regard, qui donne envie de prendre contact, et qui exprime avec justesse la singularité de son approche : un mélange de pratiques narratives, de facilitation collective et d'accompagnement stratégique.</p>
      <p>Le défi principal : traduire en images et en mots un métier profondément humain, subtil et difficile à catégoriser. Le site devait éviter le jargon "coaching corporate" tout en restant crédible auprès de dirigeants, cadres de santé, directeurs d'établissements scolaires et collectivités. Un exercice d'équilibre entre élégance, accessibilité et profondeur.</p>
    `,
    solution: `
      <p><strong>Direction artistique sur-mesure :</strong> Nous avons co-construit avec la cliente une identité visuelle unique qui traduit visuellement sa philosophie — le lien, le soin, la transformation douce. La palette de couleurs associe un bleu profond (#024BAD) symbolisant la confiance et l'ancrage, à un jaune lumineux (#FFDE5B) évoquant l'élan et la clarté. La typographie combine Cormorant Garamond (élégante, incarnée, pour les titres) et Manrope (moderne, lisible, pour le corps de texte).</p>
      <p><strong>Architecture de contenu pensée pour la confiance :</strong> 10 pages structurées autour du parcours de décision du visiteur — de la découverte de l'approche (accueil, à propos) à la compréhension des services (accompagnements avec 9 sous-sections détaillées) jusqu'à la preuve sociale (témoignages, exemples concrets) et la prise de contact. Chaque page est rédigée dans un ton juste : ni trop corporate, ni trop informel — à l'image de la cliente.</p>
      <p><strong>Page accompagnements immersive :</strong> La page centrale du site présente 9 types d'accompagnement (individuels, collectifs, projets éducatifs, co-développement, entretiens annuels, formations, projets maritimes, transitions, enjeux de territoire) avec une navigation par ancres permettant au visiteur de trouver exactement ce qui correspond à sa situation.</p>
      <p><strong>Éléments de réassurance :</strong> Intégration d'un extrait audio d'une interview sur RCF, section témoignages avec des citations marquantes en défilé, section "Pour qui" qui permet à chaque profil cible de se reconnaître immédiatement (dirigeant, cadre de santé, directeur d'établissement, facilitateur, PME/collectivités).</p>
      <p><strong>Développement WordPress + Elementor :</strong> Site développé sur WordPress avec Elementor pour permettre à la cliente de mettre à jour ses contenus en autonomie. Design responsive testé sur tous les appareils, performances optimisées et formulaire de contact simple et accessible.</p>
    `,
    deliverables: [
      "Conception de l'identité visuelle complète (palette, typographie, ton)",
      "Direction artistique et charte graphique",
      "10 pages conçues et rédigées",
      "Page accompagnements avec 9 sous-sections et navigation par ancres",
      "Page exemples d'accompagnements concrets",
      "Page témoignages avec citations clients",
      "Page FAQ",
      "Page contact avec formulaire",
      "Section audio (interview RCF intégrée)",
      "Design responsive mobile-first",
      "Intégration WordPress + Elementor",
      "Formation client à la gestion du contenu",
    ],
    results: [
      { metric: "10",   label: "Pages créées" },
      { metric: "9",    label: "Types d'accompagnement présentés" },
      { metric: "15+",  label: "Années d'expertise mises en valeur" },
      { metric: "100%", label: "Responsive mobile" },
    ],
    testimonial: undefined,
    gallery: [
      "/images/case-studies/reveliance/gallery/screenshot-1.webp",
    ],
    heroImage: "/images/case-studies/reveliance/hero.webp",
    metaTitle: "Révéliænce — Site vitrine premium pour facilitatrice en intelligence collective | DISAYNER",
    metaDescription:
      "Étude de cas : création d'un site vitrine de 10 pages pour Révéliænce, facilitatrice en intelligence collective. Identité visuelle, WordPress, Elementor.",
    order: 6,
    featured: false,
  },

  // ── 7. LOVE AT ME ───────────────────────────────────────────────────────────
  {
    slug: "love-at-me",
    clientName: "Love at Me",
    clientWebsite: "https://loveatme.com",
    categories: ["seo", "e-commerce"],
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
    gallery: [
      "/images/case-studies/love-at-me/gallery/screenshot-1.webp",
    ],
    heroImage: "/images/case-studies/love-at-me/hero.webp",
    metaTitle: "Love at Me — SEO e-commerce multilingue Shopify | DISAYNER",
    metaDescription:
      "Étude de cas : optimisation SEO complète pour Love at Me, marque de mode belge sur Shopify. Multilingue FR/EN/NL, +180% de trafic.",
    order: 7,
    featured: true,
  },

  // ── 3. JM SERVICES ──────────────────────────────────────────────────────────
  {
    slug: "jm-services",
    clientName: "JM Services",
    clientWebsite: "https://jm-services-var.com",
    categories: ["site-vitrine"],
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
    gallery: [
      "/images/case-studies/jm-services/gallery/jm-1.webp",
      "/images/case-studies/jm-services/gallery/jm-2.webp",
      "/images/case-studies/jm-services/gallery/jm-3.webp",
      "/images/case-studies/jm-services/gallery/jm-4.webp",
    ],
    heroImage: "/images/case-studies/jm-services/hero.webp",
    metaTitle: "JM Services — Création de site vitrine paysagiste | DISAYNER",
    metaDescription:
      "Étude de cas : création d'un site vitrine pour JM Services, paysagiste dans le Var. Multi-pages, galerie, SEO local.",
    order: 8,
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
  const categoryLabels: Record<string, string> = {
    'site-vitrine': 'Sites vitrines',
    'e-commerce':   'E-commerce',
    'landing-page': 'Landing pages',
    'seo':          'SEO',
    'refonte':      'Refonte',
    'maintenance':  'Maintenance',
  };
  const cats = new Map<string, number>();
  caseStudies.forEach((cs) => {
    cs.categories.forEach((cat) => {
      cats.set(cat, (cats.get(cat) ?? 0) + 1);
    });
  });
  return Array.from(cats.entries()).map(([value, count]) => ({
    value,
    label: categoryLabels[value] ?? value,
    count,
  }));
}
