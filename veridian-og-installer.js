/*
 * Script d'installation des métadonnées OpenGraph pour Veridian
 * -------------------------------------------------------------
 * Ce script est conçu pour être ajouté à votre site web en une seule ligne de code.
 * Il mettra à jour automatiquement les métadonnées OpenGraph pour améliorer l'aperçu
 * de votre site lorsqu'il est partagé sur les réseaux sociaux.
 *
 * Pour l'utiliser, ajoutez simplement cette ligne à la fin de la section <head> de votre site :
 * <script src="https://raw.githubusercontent.com/Christ-Roy/veridian-og-image/main/veridian-og-installer.js"></script>
 */

(function() {
    // Configuration des métadonnées
    const CONFIG = {
        // Métadonnées OpenGraph standard
        og: {
            title: "Veridian - Création de sites web pour commerces locaux",
            description: "Transformez les visiteurs en ligne en clients réels pour votre commerce. Votre site commence ici, gratuitement.",
            type: "website",
            image: "https://raw.githubusercontent.com/Christ-Roy/veridian-og-image/main/veridian-og-final.png",
            url: window.location.href.split("?")[0].split("#")[0], // URL de base sans paramètres ni ancres
        },
        // Métadonnées Twitter Card
        twitter: {
            card: "summary_large_image",
            title: "Veridian - Création de sites web pour commerces locaux",
            description: "Transformez les visiteurs en ligne en clients réels pour votre commerce. Votre site commence ici, gratuitement.",
            image: "https://raw.githubusercontent.com/Christ-Roy/veridian-og-image/main/veridian-og-final.png",
        }
    };

    // Fonction pour créer ou mettre à jour une balise meta
    function updateMetaTag(type, name, content) {
        let selector = type === 'property' ? `meta[property="${name}"]` : `meta[name="${name}"]`;
        let meta = document.querySelector(selector);
        
        // Si la balise existe, mettre à jour son contenu
        if (meta) {
            meta.setAttribute('content', content);
            return { action: 'updated', element: meta };
        } 
        // Sinon, créer une nouvelle balise
        else {
            meta = document.createElement('meta');
            meta.setAttribute(type === 'property' ? 'property' : 'name', name);
            meta.setAttribute('content', content);
            document.head.appendChild(meta);
            return { action: 'created', element: meta };
        }
    }

    // Installer toutes les métadonnées OpenGraph
    function installOpenGraphMetadata() {
        const actions = [];
        
        // Installation des métadonnées OpenGraph
        for (const [key, value] of Object.entries(CONFIG.og)) {
            actions.push({
                type: 'og',
                key: key,
                ...updateMetaTag('property', `og:${key}`, value)
            });
        }
        
        // Installation des métadonnées Twitter
        for (const [key, value] of Object.entries(CONFIG.twitter)) {
            actions.push({
                type: 'twitter',
                key: key,
                ...updateMetaTag('name', `twitter:${key}`, value)
            });
        }
        
        // Journaliser le résultat dans la console
        console.log('[Veridian] Métadonnées OpenGraph installées avec succès !');
        
        return actions;
    }

    // Exécuter l'installation des métadonnées
    document.addEventListener('DOMContentLoaded', function() {
        installOpenGraphMetadata();
    });
    
    // Si le DOM est déjà chargé, installer immédiatement
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
        installOpenGraphMetadata();
    }
})();
