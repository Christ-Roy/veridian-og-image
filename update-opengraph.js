/**
 * Script pour mettre à jour les métadonnées OpenGraph sur le site Veridian
 * 
 * Ce script met à jour les balises meta OpenGraph dans le fichier HTML principal
 * pour améliorer l'aperçu du site lors du partage sur les réseaux sociaux.
 */

// Fonction pour mettre à jour les métadonnées OpenGraph
function updateOpenGraphMetadata() {
  try {
    // Sélectionner les balises meta existantes
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    
    // Mettre à jour les métadonnées OpenGraph
    if (ogTitle) ogTitle.setAttribute('content', 'Veridian - Création de sites web pour commerces locaux');
    if (ogDescription) ogDescription.setAttribute('content', 'Transformez les visiteurs en ligne en clients réels pour votre commerce. Votre site commence ici, gratuitement.');
    if (ogImage) ogImage.setAttribute('content', 'https://raw.githubusercontent.com/Christ-Roy/veridian-og-image/main/veridian-og-image.svg');
    if (ogUrl) ogUrl.setAttribute('content', 'https://veridian.site/');
    
    // Mettre à jour les métadonnées Twitter
    if (twitterTitle) twitterTitle.setAttribute('content', 'Veridian - Création de sites web pour commerces locaux');
    if (twitterDescription) twitterDescription.setAttribute('content', 'Transformez les visiteurs en ligne en clients réels pour votre commerce. Votre site commence ici, gratuitement.');
    if (twitterImage) twitterImage.setAttribute('content', 'https://raw.githubusercontent.com/Christ-Roy/veridian-og-image/main/veridian-og-image.svg');
    
    console.log('Métadonnées OpenGraph mises à jour avec succès !');
  } catch (error) {
    console.error('Erreur lors de la mise à jour des métadonnées OpenGraph :', error);
  }
}

// Exécuter la fonction de mise à jour
updateOpenGraphMetadata();
