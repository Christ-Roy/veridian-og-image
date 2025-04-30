# Amélioration de l'aperçu du site Veridian

Ce dépôt contient les ressources et les outils nécessaires pour améliorer l'aperçu de votre site web Veridian lorsqu'il est partagé sur les réseaux sociaux.

## Problème résolu

Actuellement, lorsque votre site web est partagé sur les réseaux sociaux ou d'autres plateformes, l'aperçu affiché utilise :
- **Titre** : "veridian-local-boost"
- **Description** : "Lovable Generated Project"
- **Image** : Une image générique de Lovable

Cet aperçu ne représente pas correctement l'identité et la proposition de valeur de Veridian.

## Solution

Les ressources de ce dépôt permettent de mettre à jour les métadonnées OpenGraph de votre site pour afficher :
- **Titre** : "Veridian - Création de sites web pour commerces locaux"
- **Description** : "Transformez les visiteurs en ligne en clients réels pour votre commerce. Votre site commence ici, gratuitement."
- **Image** : Une image représentative de votre landing page

## Options d'implémentation

Nous vous proposons plusieurs méthodes d'implémentation, classées de la plus simple à la plus complète.

### Option 1 : Installation en une ligne (la plus simple)

Ajoutez simplement cette ligne à la fin de la section `<head>` de votre site web :

```html
<script src="https://raw.githubusercontent.com/Christ-Roy/veridian-og-image/main/veridian-og-installer.js"></script>
```

Cette méthode injecte automatiquement les métadonnées OpenGraph dans votre site.

### Option 2 : Ajout manuel des balises meta

Copiez et collez ce bloc de code dans la section `<head>` de votre site web :

```html
<!-- Métadonnées OpenGraph pour l'amélioration de l'aperçu sur les réseaux sociaux -->
<meta property="og:title" content="Veridian - Création de sites web pour commerces locaux" />
<meta property="og:description" content="Transformez les visiteurs en ligne en clients réels pour votre commerce. Votre site commence ici, gratuitement." />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://raw.githubusercontent.com/Christ-Roy/veridian-og-image/main/veridian-og-final.png" />
<meta property="og:url" content="http://veridian.site/" />

<!-- Métadonnées Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Veridian - Création de sites web pour commerces locaux" />
<meta name="twitter:description" content="Transformez les visiteurs en ligne en clients réels pour votre commerce. Votre site commence ici, gratuitement." />
<meta name="twitter:image" content="https://raw.githubusercontent.com/Christ-Roy/veridian-og-image/main/veridian-og-final.png" />
```

### Option 3 : Utilisation de l'outil interactif

Nous avons créé un outil interactif qui vous guide pas à pas dans l'installation des métadonnées OpenGraph.

1. Accédez à [cet outil](https://rawcdn.githack.com/Christ-Roy/veridian-og-image/main/veridian-og-updater.html)
2. Suivez les instructions à l'écran pour installer les métadonnées

## Vérification de l'installation

Une fois les métadonnées installées, vous pouvez vérifier qu'elles fonctionnent correctement en utilisant ces outils :

- [Validateur OpenGraph de Facebook](https://developers.facebook.com/tools/debug/?q=http://veridian.site/)
- [Validateur de cartes Twitter](https://cards-dev.twitter.com/validator)
- [Inspecteur de liens LinkedIn](https://www.linkedin.com/post-inspector/inspect/)

## Structure du dépôt

- `veridian-og-installer.js` : Script d'installation en une ligne
- `veridian-og-updater.html` : Outil interactif d'installation
- `veridian-og-image.html` : Modèle HTML pour l'image d'aperçu
- `veridian-og-final.png` : Image optimisée pour l'aperçu OpenGraph
- `install-opengraph.js` : Script complet d'injection des métadonnées

## Recommandation selon le principe 80/20

Selon le principe de Pareto (80/20), l'option 1 (installation en une ligne) représente 20% de l'effort pour obtenir 80% des résultats. C'est la méthode que nous recommandons pour une mise en œuvre rapide et efficace.

Si vous souhaitez une personnalisation plus poussée ou une intégration plus permanente, l'option 2 (ajout manuel des balises) est préférable.

## Support et assistance

Si vous avez besoin d'aide pour mettre en œuvre ces solutions, n'hésitez pas à :

1. Consulter les instructions détaillées dans le fichier `update-instructions.md`
2. Ouvrir une issue sur ce dépôt GitHub
3. Contacter directement notre équipe de support

## À propos de l'image d'aperçu

L'image d'aperçu fournie dans ce dépôt a été créée en se basant sur la landing page actuelle de Veridian. Elle respecte les dimensions recommandées pour les images OpenGraph (1200x630 pixels) pour une compatibilité optimale avec toutes les plateformes.
