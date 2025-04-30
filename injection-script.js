/**
 * Script d'injection pour les métadonnées OpenGraph
 * 
 * Ce script peut être utilisé avec un gestionnaire de balises ou injecté directement
 * dans la page pour modifier les métadonnées OpenGraph sans avoir à modifier
 * les fichiers source.
 */

(function() {
  // Fonction pour créer ou mettre à jour une balise meta
  function setMetaTag(property, content, isName = false) {
    // Chercher une balise meta existante
    let meta;
    if (isName) {
      meta = document.querySelector(`meta[name="${property}"]`);
    } else {
      meta = document.querySelector(`meta[property="${property}"]`);
    }
    
    // Si la balise existe, mettre à jour son contenu
    if (meta) {
      meta.setAttribute("content", content);
    }
    // Sinon, créer une nouvelle balise
    else {
      meta = document.createElement("meta");
      if (isName) {
        meta.setAttribute("name", property);
      } else {
        meta.setAttribute("property", property);
      }
      meta.setAttribute("content", content);
      document.head.appendChild(meta);
    }
  }
  
  // Définir les métadonnées OpenGraph
  setMetaTag("og:title", "Veridian - Création de sites web pour commerces locaux");
  setMetaTag("og:description", "Transformez les visiteurs en ligne en clients réels pour votre commerce. Votre site commence ici, gratuitement.");
  setMetaTag("og:type", "website");
  setMetaTag("og:image", "https://raw.githubusercontent.com/Christ-Roy/veridian-og-image/main/veridian-og-image.svg");
  setMetaTag("og:url", "https://veridian.site/");
  
  // Définir les métadonnées Twitter
  setMetaTag("twitter:card", "summary_large_image", true);
  setMetaTag("twitter:title", "Veridian - Création de sites web pour commerces locaux", true);
  setMetaTag("twitter:description", "Transformez les visiteurs en ligne en clients réels pour votre commerce. Votre site commence ici, gratuitement.", true);
  setMetaTag("twitter:image", "https://raw.githubusercontent.com/Christ-Roy/veridian-og-image/main/veridian-og-image.svg", true);
  
  console.log("Métadonnées OpenGraph injectées avec succès !");
})();
