# Instructions détaillées pour mettre à jour l'aperçu du site Veridian

Ce document vous guide pas à pas pour mettre à jour l'aperçu de votre site web Veridian lorsqu'il est partagé sur les réseaux sociaux.

## Option 1 : Modification directe du fichier HTML

Cette méthode est la plus simple si vous avez accès aux fichiers source de votre site web.

### Étapes :

1. Connectez-vous à votre hébergement web (par exemple, via FTP ou le gestionnaire de fichiers de votre hébergeur)
2. Localisez le fichier principal de votre site (généralement `index.html` dans le répertoire racine)
3. Téléchargez ce fichier ou modifiez-le directement sur le serveur
4. Cherchez les balises meta existantes qui commencent par `<meta property="og:...` et `<meta name="twitter:...`
5. Remplacez-les par les balises suivantes (ou ajoutez-les si elles n'existent pas) :

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

6. Sauvegardez le fichier et téléversez-le sur votre serveur si nécessaire

## Option 2 : Utilisation du script d'injection

Si vous ne pouvez pas modifier directement les fichiers HTML, vous pouvez utiliser notre script d'injection.

### Étapes :

1. Téléchargez le fichier `injection-script.js` de ce dépôt
2. Hébergez ce fichier sur votre serveur ou utilisez un service de CDN
3. Ajoutez le script à votre site en insérant la balise suivante juste avant la fermeture de la balise `</head>` :

```html
<script src="chemin/vers/injection-script.js"></script>
```

Si vous utilisez un gestionnaire de balises comme Google Tag Manager, vous pouvez également y ajouter ce script.

## Option 3 : Utilisation d'un plugin WordPress (si applicable)

Si votre site est basé sur WordPress, vous pouvez utiliser un plugin pour gérer les métadonnées OpenGraph.

### Étapes :

1. Connectez-vous à votre tableau de bord WordPress
2. Installez un plugin comme "Yoast SEO" ou "All in One SEO Pack"
3. Configurez les paramètres OpenGraph dans le plugin
4. Téléchargez l'image d'aperçu (`veridian-og-image.svg` ou `veridian-og-image.png`) et utilisez-la comme image par défaut pour les partages sociaux
5. Remplissez les champs de titre et de description avec le contenu suggéré

## Vérification de la mise en œuvre

Après avoir mis en œuvre l'une de ces options, vous devriez vérifier que vos métadonnées fonctionnent correctement :

1. Utilisez l'outil de débogage OpenGraph de Facebook : [https://developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/)
2. Entrez l'URL de votre site et cliquez sur "Analyser"
3. Si les métadonnées ne sont pas mises à jour, cliquez sur "Récupérer les nouvelles informations" pour forcer Facebook à actualiser son cache

## Compatibilité avec différentes plateformes

Pour garantir une compatibilité maximale avec différentes plateformes de médias sociaux :

- Facebook : Utilise principalement les balises OpenGraph (`og:...`)
- Twitter : Utilise les balises Twitter (`twitter:...`) mais peut utiliser les balises OpenGraph si les balises Twitter sont absentes
- LinkedIn : Utilise principalement les balises OpenGraph
- Pinterest : Utilise les balises OpenGraph et les métadonnées standards de HTML

Si vous avez besoin d'aide supplémentaire, n'hésitez pas à nous contacter.
