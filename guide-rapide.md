# Guide Rapide - Amélioration de l'aperçu du site Veridian

Ce guide rapide vous explique comment améliorer l'aperçu de votre site web Veridian lorsqu'il est partagé sur les réseaux sociaux, en quelques étapes simples.

## Avant/Après

### Aperçu actuel :
- **Titre** : "veridian-local-boost"
- **Description** : "Lovable Generated Project"
- **Image** : Image générique de Lovable

### Nouvel aperçu :
- **Titre** : "Veridian - Création de sites web pour commerces locaux"
- **Description** : "Transformez les visiteurs en ligne en clients réels pour votre commerce. Votre site commence ici, gratuitement."
- **Image** : Image représentative de votre landing page

## Installation en 2 minutes (avec déploiement automatique Netlify)

Puisque votre site est auto-déployé sur Netlify lors d'une modification GitHub, nous allons modifier directement les fichiers source sur GitHub :

### Méthode 1 : Modification du fichier HTML principal (Recommandée)

1. Accédez à votre dépôt GitHub (Christ-Roy/veridian-local-boost)
2. Naviguez vers votre fichier HTML principal (généralement `index.html` ou `public/index.html`)
3. Cliquez sur le bouton "Edit" (crayon) pour modifier le fichier
4. Localisez la section `<head>` du fichier
5. Ajoutez ces balises juste avant la balise de fermeture `</head>` :

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

6. Ajoutez un message de commit (ex: "Ajouter les métadonnées OpenGraph pour améliorer l'aperçu social")
7. Cliquez sur "Commit changes"
8. Netlify détectera automatiquement le changement et déploiera votre site mis à jour

### Méthode 2 : Ajout du script d'installation (Alternative)

Si vous préférez ne pas modifier directement le HTML, vous pouvez ajouter notre script d'installation :

1. Accédez à votre dépôt GitHub
2. Naviguez vers votre fichier HTML principal
3. Cliquez sur "Edit" pour modifier le fichier
4. Ajoutez cette ligne juste avant la balise de fermeture `</head>` :

```html
<script src="https://cdn.jsdelivr.net/gh/Christ-Roy/veridian-og-image@main/veridian-og-installer.js"></script>
```

5. Ajoutez un message de commit et validez les changements
6. Netlify déploiera automatiquement votre site mis à jour

## Vérification

Après le déploiement automatique par Netlify (généralement quelques minutes), vous pouvez vérifier que vos modifications fonctionnent en utilisant :

1. [Vérificateur OpenGraph de Facebook](https://developers.facebook.com/tools/debug/?q=http://veridian.site/)
2. [Validateur de cartes Twitter](https://cards-dev.twitter.com/validator)

Si vous ne voyez pas les changements immédiatement, cliquez sur "Actualiser les informations" dans les outils de validation pour forcer la mise à jour du cache.

## Support

Si vous rencontrez des difficultés, n'hésitez pas à consulter la documentation complète dans le [README](https://github.com/Christ-Roy/veridian-og-image) ou à ouvrir une issue sur GitHub.
