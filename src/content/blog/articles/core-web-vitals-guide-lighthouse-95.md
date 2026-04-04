Depuis 2021, les Core Web Vitals sont un facteur de classement officiel de Google. Pourtant, selon les données du Chrome UX Report, plus de 70% des sites web ne passent pas les seuils recommandés. Résultat : ils perdent des positions, des visiteurs et des conversions sans même le savoir.

Ce guide vous explique chaque métrique, comment la mesurer et surtout comment la corriger pour atteindre un score Lighthouse de 95 et plus.

## Qu'est-ce que les Core Web Vitals ?

Les Core Web Vitals sont trois métriques de performance web définies par Google pour évaluer l'expérience utilisateur réelle d'une page. Elles mesurent trois dimensions fondamentales : la vitesse de chargement, la réactivité aux interactions, et la stabilité visuelle.

Contrairement à d'autres métriques techniques, les Core Web Vitals sont basées sur l'expérience réelle des utilisateurs, pas sur des conditions de laboratoire idéales. Google les collecte via le navigateur Chrome auprès de millions d'utilisateurs réels et les utilise comme signal de classement.

### LCP — Largest Contentful Paint

Le LCP mesure le temps nécessaire pour afficher le plus grand élément visible dans la zone d'écran (viewport). C'est généralement une image hero, une vidéo ou un grand bloc de texte. En termes simples, le LCP répond à la question "quand est-ce que le contenu principal de la page est visible ?"

Les seuils définis par Google sont les suivants : en dessous de 2.5 secondes, c'est bon. Entre 2.5 et 4 secondes, c'est à améliorer. Au-dessus de 4 secondes, c'est mauvais.

Les causes fréquentes d'un mauvais LCP sont les images hero non optimisées (trop lourdes, pas de format WebP, pas de lazy loading inversé), les polices web qui bloquent le rendu, le CSS et JavaScript qui bloquent le rendu initial, un serveur lent (TTFB élevé) et l'absence de CDN.

### INP — Interaction to Next Paint

L'INP (qui a remplacé le FID en mars 2024) mesure la réactivité de votre page aux interactions utilisateur. Quand un visiteur clique sur un bouton, un lien ou un formulaire, combien de temps met la page à répondre visuellement ?

Les seuils sont : en dessous de 200 millisecondes, c'est bon. Entre 200 et 500 millisecondes, c'est à améliorer. Au-dessus de 500 millisecondes, c'est mauvais.

Les causes fréquentes d'un mauvais INP sont le JavaScript lourd qui bloque le thread principal, les event listeners trop nombreux ou trop lourds, les animations JavaScript non optimisées (utilisez CSS transforms plutôt que JavaScript), les traitements synchrones qui bloquent l'interface et les scripts tiers (analytics, chat, popups) qui monopolisent le thread principal.

### CLS — Cumulative Layout Shift

Le CLS mesure la stabilité visuelle de votre page pendant le chargement. Vous connaissez cette expérience frustrante : vous êtes sur le point de cliquer sur un lien, et soudain la page "saute" parce qu'une image ou une publicité vient de se charger au-dessus. C'est exactement ce que le CLS quantifie.

Les seuils sont : en dessous de 0.1, c'est bon. Entre 0.1 et 0.25, c'est à améliorer. Au-dessus de 0.25, c'est mauvais.

Les causes fréquentes d'un mauvais CLS sont les images sans dimensions explicites (width/height), les polices web qui provoquent un flash de texte (FOUT), les publicités ou embeds qui s'injectent dynamiquement, le contenu chargé au-dessus du contenu existant et les animations CSS qui modifient la propriété `height` ou `width`.

## Comment mesurer vos Core Web Vitals

Avant d'optimiser, il faut mesurer. Plusieurs outils gratuits sont à votre disposition.

### Lighthouse (données de laboratoire)

Lighthouse est intégré dans Chrome DevTools. Faites un clic droit sur votre page, sélectionnez "Inspecter", allez dans l'onglet "Lighthouse" et lancez un audit. Vous obtenez un score de 0 à 100 et des recommandations détaillées.

Important : Lighthouse mesure en conditions de laboratoire (votre connexion, votre appareil). Les résultats peuvent différer des données terrain. Utilisez-le pour diagnostiquer et itérer, pas comme vérité absolue.

### PageSpeed Insights (données terrain + labo)

PageSpeed Insights combine les données Lighthouse avec les données réelles du Chrome UX Report. C'est l'outil le plus complet. Entrez votre URL et vous obtenez les deux perspectives : ce que Lighthouse mesure en laboratoire et ce que les vrais utilisateurs vivent sur votre site.

### Google Search Console (données terrain)

Dans Search Console, le rapport "Core Web Vitals" vous montre les pages qui passent ou échouent les seuils, classées par mobile et desktop. C'est la vue la plus pertinente car elle reflète l'expérience des visiteurs réels de votre site.

### Web Vitals Extension Chrome

Cette extension Chrome affiche les Core Web Vitals en temps réel pendant que vous naviguez sur votre site. Pratique pour tester rapidement après chaque optimisation.

## Optimiser le LCP : afficher le contenu plus vite

Le LCP est souvent la métrique la plus facile à améliorer car les causes sont généralement identifiables et les solutions techniques sont bien documentées.

### Optimiser l'image hero

L'image hero (la grande image en haut de page) est l'élément LCP dans 80% des cas. Voici comment l'optimiser.

Convertissez-la en **WebP** (ou AVIF si votre audience le supporte). Le WebP réduit le poids de 25 à 35% par rapport au JPEG à qualité visuelle équivalente. Si vous n'avez pas d'outil pour convertir vos images, utilisez notre compresseur WebP gratuit.

Dimensionnez-la correctement. Une image de 4000x3000 pixels affichée dans un conteneur de 1200x600 pixels est un gaspillage massif de bande passante. Servez l'image à la taille réelle d'affichage, pas plus.

Utilisez le **preload** pour l'image LCP. Ajoutez cette balise dans le `<head>` de votre page pour que le navigateur commence à télécharger l'image hero avant même d'avoir parsé le CSS : `<link rel="preload" as="image" href="/hero.webp">`. Cette seule ligne peut améliorer votre LCP de 200 à 500 millisecondes.

Ne mettez PAS de lazy loading sur l'image hero. Le lazy loading retarde intentionnellement le chargement — c'est l'inverse de ce que vous voulez pour l'élément LCP. Réservez le lazy loading aux images sous la ligne de flottaison.

### Optimiser les polices

Les polices web (Google Fonts, Adobe Fonts, polices auto-hébergées) peuvent bloquer le rendu du texte pendant leur chargement. Si votre élément LCP est un bloc de texte, une police lente à charger retarde directement le LCP.

Utilisez `font-display: swap` dans votre déclaration `@font-face`. Cela dit au navigateur d'afficher le texte immédiatement avec une police système, puis de basculer vers la police custom quand elle est chargée. Le texte apparaît instantanément au lieu d'être invisible pendant 1 à 3 secondes.

Préchargez vos polices critiques avec la balise `<link rel="preload" as="font" type="font/woff2" href="/fonts/mafonte.woff2" crossorigin>` dans le `<head>`.

Limitez le nombre de polices. Chaque police ajoutée est un fichier supplémentaire à télécharger. Deux polices (une pour les titres, une pour le corps) suffisent pour 99% des sites.

### Réduire le TTFB

Le TTFB (Time to First Byte) est le temps que met votre serveur à envoyer le premier octet de la réponse. Si votre serveur est lent, tout le reste est retardé.

Un CDN (Content Delivery Network) comme Cloudflare réduit drastiquement le TTFB en servant votre site depuis des serveurs proches de vos visiteurs. Un visiteur à Marseille recevra votre site depuis un serveur en France, pas depuis un datacenter à l'autre bout du monde.

Le cache serveur est essentiel. Configurez des headers de cache appropriés pour que les pages déjà visitées se chargent instantanément. Les fichiers statiques (CSS, JS, images) devraient avoir un cache d'au moins un an.

## Optimiser l'INP : répondre plus vite aux clics

L'INP est la métrique la plus technique à optimiser car elle touche directement au JavaScript.

### Réduire le JavaScript

Chaque kilooctet de JavaScript doit être téléchargé, parsé et exécuté. Plus vous avez de JavaScript, plus le thread principal est occupé et plus les interactions sont lentes.

Faites un audit de vos scripts. Avez-vous des plugins WordPress actifs qui chargent du JavaScript sur des pages où ils ne sont pas nécessaires ? Un slider sur la page d'accueil qui charge 200 Ko de JavaScript sur toutes les pages ? Un chat widget sur des pages où personne ne chat ?

Chargez le JavaScript non critique en différé avec les attributs `defer` ou `async`. Le JavaScript critique (celui nécessaire pour le rendu initial) doit être inline ou chargé en premier. Le reste peut attendre.

### Découper les tâches longues

Le navigateur ne peut faire qu'une chose à la fois sur le thread principal. Une tâche JavaScript de 300 millisecondes bloque toute interaction pendant 300 millisecondes. Le visiteur clique et rien ne se passe pendant un tiers de seconde — c'est perceptible et frustrant.

Identifiez les tâches longues avec l'onglet Performance de Chrome DevTools. Toute tâche qui dépasse 50 millisecondes est considérée comme longue par Google. La solution est de découper les tâches longues en morceaux plus petits en utilisant `requestAnimationFrame` ou `setTimeout` pour céder le contrôle au thread principal entre chaque morceau.

### Limiter les scripts tiers

Google Analytics, Facebook Pixel, Hotjar, Intercom, plugins de chat, popups de newsletter — chaque script tiers consomme des ressources. Auditez vos scripts tiers et supprimez ceux qui ne sont pas essentiels.

Pour les scripts tiers que vous devez garder, chargez-les après l'interaction initiale avec la page. Par exemple, ne chargez le chat widget qu'après 5 secondes ou au premier scroll. Ne chargez le pixel Facebook qu'après le chargement complet de la page.

## Optimiser le CLS : stabiliser la mise en page

Le CLS est souvent la métrique la plus simple à corriger une fois les causes identifiées.

### Dimensionner toutes les images

Chaque élément `<img>` doit avoir des attributs `width` et `height` explicites, ou un `aspect-ratio` défini en CSS. Cela permet au navigateur de réserver l'espace correct avant le chargement de l'image, évitant le "saut" de mise en page.

En HTML moderne, utilisez `<img src="photo.webp" width="800" height="600" alt="Description">` et en CSS ajoutez `img { max-width: 100%; height: auto; }` pour le responsive. Le navigateur calculera l'espace à réserver grâce au ratio width/height.

### Réserver l'espace pour les embeds

Les iframes (YouTube, Google Maps, widgets tiers) provoquent du CLS si aucun espace n'est réservé avant leur chargement. Encapsulez chaque embed dans un conteneur avec un `aspect-ratio` défini. Par exemple, pour une vidéo YouTube 16:9, utilisez un conteneur avec `aspect-ratio: 16/9` et `width: 100%`.

### Gérer les polices sans FOUT

Le flash de texte non stylé (FOUT — Flash of Unstyled Text) se produit quand le navigateur affiche le texte avec une police système puis bascule vers la police custom. Ce changement de police peut modifier la taille du texte et provoquer du CLS.

La solution la plus simple est d'utiliser `font-display: optional` au lieu de `swap` pour les polices non critiques. Avec `optional`, si la police n'est pas chargée en 100 millisecondes, le navigateur utilise la police système et ne fait jamais la bascule. Zéro CLS garanti, au prix d'un chargement initial potentiellement sans la bonne police. Pour les polices critiques (titres), gardez `font-display: swap` mais préchargez-les.

## Le plan d'action pour atteindre 95+

Voici l'ordre de priorité pour optimiser votre score Lighthouse.

En première semaine, concentrez-vous sur les quick wins : convertissez les images en WebP, ajoutez width/height sur toutes les images, préchargez l'image hero et les polices, ajoutez `font-display: swap` sur vos polices.

En deuxième semaine, passez au JavaScript : auditez et supprimez les scripts inutiles, différez les scripts non critiques avec `defer`, déplacez les scripts tiers en chargement tardif.

En troisième semaine, travaillez le serveur : configurez un CDN (Cloudflare est gratuit), optimisez les headers de cache, activez la compression Gzip ou Brotli.

En continu, mesurez régulièrement avec PageSpeed Insights et Search Console. Chaque nouveau plugin, chaque nouvelle fonctionnalité peut dégrader les performances. L'optimisation n'est pas un projet ponctuel — c'est une discipline continue.

## Conclusion

Les Core Web Vitals ne sont pas qu'un facteur SEO. Un site rapide et stable génère plus de conversions, moins de rebond et une meilleure satisfaction utilisateur. Un gain d'une seconde sur le temps de chargement peut augmenter le taux de conversion de 7% selon les études du secteur.

Commencez par mesurer, identifiez vos faiblesses, corrigez dans l'ordre de priorité. Un score Lighthouse de 95+ est atteignable pour la grande majorité des sites — il suffit de méthodiquement éliminer les problèmes un par un.
