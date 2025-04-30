# Modification de l'aperçu du site Veridian

Ce dépôt contient les ressources et les instructions pour modifier l'aperçu de votre site web Veridian lorsqu'il est partagé sur les réseaux sociaux. Voici plusieurs approches pour implémenter ce changement, classées de la plus simple à la plus complexe.

## Solution 1 : Modifier simplement les métadonnées OpenGraph (Approche la plus simple)

Cette approche consiste à modifier les balises meta OpenGraph dans le fichier HTML principal de votre site.

### Étapes :

1. Accédez au fichier HTML principal de votre site (généralement `index.html` ou un fichier similaire)
2. Localisez les balises meta avec les attributs `property="og:..."` et `name="twitter:..."`
3. Remplacez-les par les balises suivantes :

```html
<!-- Métadonnées OpenGraph -->
<meta property="og:title" content="Veridian - Création de sites web pour commerces locaux">
<meta property="og:description" content="Transformez les visiteurs en ligne en clients réels pour votre commerce. Votre site commence ici, gratuitement.">
<meta property="og:type" content="website">
<meta property="og:image" content="https://raw.githubusercontent.com/Christ-Roy/veridian-og-image/main/veridian-og-image.svg">
<meta property="og:url" content="https://veridian.site/">

<!-- Métadonnées Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Veridian - Création de sites web pour commerces locaux">
<meta name="twitter:description" content="Transformez les visiteurs en ligne en clients réels pour votre commerce. Votre site commence ici, gratuitement.">
<meta name="twitter:image" content="https://raw.githubusercontent.com/Christ-Roy/veridian-og-image/main/veridian-og-image.svg">
```

4. Sauvegardez et publiez les modifications

## Solution 2 : Utilisation du script JavaScript

Si vous préférez ne pas modifier directement le fichier HTML, vous pouvez utiliser le script JavaScript fourni dans ce dépôt.

### Étapes :

1. Téléchargez le fichier `update-opengraph.js` de ce dépôt
2. Ajoutez ce script à votre site web (soit dans un fichier séparé, soit intégré dans une balise `<script>`)
3. Assurez-vous que le script s'exécute lorsque la page se charge

```html
<script src="update-opengraph.js"></script>
```

## Solution 3 : Utilisation du template HTML complet

Si vous préférez remplacer complètement les métadonnées, vous pouvez utiliser le template HTML fourni dans ce dépôt.

### Étapes :

1. Consultez le fichier `og-template.html` pour voir la structure complète des métadonnées
2. Adaptez ces balises à votre site web existant

## Test des métadonnées OpenGraph

Pour vérifier que vos métadonnées OpenGraph fonctionnent correctement :

1. Utilisez [l'outil de débogage OpenGraph de Facebook](https://developers.facebook.com/tools/debug/)
2. Entrez l'URL de votre site (https://veridian.site/)
3. Cliquez sur "Actualiser les informations" pour voir comment votre site apparaîtra lorsqu'il sera partagé

## Personnalisation de l'image

Si vous souhaitez personnaliser davantage l'image d'aperçu, vous pouvez modifier le fichier SVG fourni ou créer votre propre image. Il est recommandé d'utiliser les dimensions 1200x630 pixels pour une compatibilité optimale avec la plupart des plateformes de médias sociaux.

## Support et aide

Si vous avez besoin d'aide pour mettre en œuvre ces modifications, n'hésitez pas à ouvrir une issue dans ce dépôt ou à nous contacter directement.
