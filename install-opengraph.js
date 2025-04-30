/**
 * Script d'installation des métadonnées OpenGraph pour Veridian
 * 
 * Ce script peut être exécuté directement sur votre site pour installer
 * ou mettre à jour les métadonnées OpenGraph sans avoir à modifier manuellement les fichiers.
 * 
 * Instructions d'utilisation :
 * 1. Copiez ce script complet
 * 2. Ouvrez la console développeur de votre navigateur (F12 sur Chrome/Firefox/Edge)
 * 3. Collez ce script dans la console
 * 4. Appuyez sur Entrée pour l'exécuter
 * 5. Suivez les instructions à l'écran
 */

(function() {
  // Configuration des métadonnées
  const CONFIG = {
    // Métadonnées OpenGraph standard
    og: {
      title: "Veridian - Création de sites web pour commerces locaux",
      description: "Transformez les visiteurs en ligne en clients réels pour votre commerce. Votre site commence ici, gratuitement.",
      type: "website",
      image: "https://raw.githubusercontent.com/Christ-Roy/veridian-og-image/main/veridian-og-image.png",
      url: window.location.href.split("?")[0].split("#")[0], // URL de base sans paramètres ni ancres
    },
    // Métadonnées Twitter Card
    twitter: {
      card: "summary_large_image",
      title: "Veridian - Création de sites web pour commerces locaux",
      description: "Transformez les visiteurs en ligne en clients réels pour votre commerce. Votre site commence ici, gratuitement.",
      image: "https://raw.githubusercontent.com/Christ-Roy/veridian-og-image/main/veridian-og-image.png",
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

  // Fonction pour installer toutes les métadonnées
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
    
    // Récupération du titre actuel de la page
    const pageTitle = document.title;
    
    // Si le titre est différent de celui d'OpenGraph, le mettre à jour
    if (pageTitle !== CONFIG.og.title) {
      document.title = CONFIG.og.title;
      actions.push({
        type: 'page',
        key: 'title',
        action: 'updated',
        oldValue: pageTitle,
        newValue: CONFIG.og.title
      });
    }
    
    // Récupération de la méta description actuelle
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      const oldDescription = metaDescription.getAttribute('content');
      if (oldDescription !== CONFIG.og.description) {
        metaDescription.setAttribute('content', CONFIG.og.description);
        actions.push({
          type: 'page',
          key: 'description',
          action: 'updated',
          oldValue: oldDescription,
          newValue: CONFIG.og.description
        });
      }
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      meta.setAttribute('content', CONFIG.og.description);
      document.head.appendChild(meta);
      actions.push({
        type: 'page',
        key: 'description',
        action: 'created',
        newValue: CONFIG.og.description
      });
    }
    
    return actions;
  }
  
  // Fonction pour générer un rapport HTML des actions effectuées
  function generateReport(actions) {
    const now = new Date();
    const dateString = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
    
    let html = `
      <style>
        .og-report {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f8f9fa;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .og-report h1 {
          color: #2c6161;
          border-bottom: 2px solid #ff6e14;
          padding-bottom: 10px;
        }
        .og-report .success {
          background-color: #d4edda;
          color: #155724;
          padding: 10px 15px;
          border-radius: 4px;
          margin: 15px 0;
        }
        .og-report table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
        }
        .og-report th, .og-report td {
          text-align: left;
          padding: 8px 12px;
          border: 1px solid #ddd;
        }
        .og-report th {
          background-color: #f2f2f2;
        }
        .og-report .created {
          color: #28a745;
          font-weight: bold;
        }
        .og-report .updated {
          color: #007bff;
          font-weight: bold;
        }
        .og-report .next-steps {
          background-color: #e2f0ff;
          padding: 15px;
          border-radius: 4px;
          margin-top: 20px;
        }
        .og-report .next-steps h2 {
          margin-top: 0;
          color: #0056b3;
        }
        .og-report .note {
          font-style: italic;
          margin-top: 15px;
          color: #6c757d;
        }
        .og-report .verification {
          margin-top: 20px;
          background-color: #fff3cd;
          border-left: 4px solid #ffc107;
          padding: 10px 15px;
        }
      </style>
      <div class="og-report">
        <h1>Rapport d'installation des métadonnées OpenGraph</h1>
        <p>Installation effectuée le ${dateString}</p>
        <div class="success">
          <strong>Succès!</strong> Les métadonnées OpenGraph ont été installées/mises à jour avec succès.
        </div>
        
        <h2>Détails des modifications</h2>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Propriété</th>
              <th>Action</th>
              <th>Valeur</th>
            </tr>
          </thead>
          <tbody>
    `;
    
    // Ajouter chaque action au rapport
    actions.forEach(action => {
      html += `
        <tr>
          <td>${action.type}</td>
          <td>${action.key}</td>
          <td class="${action.action}">${action.action}</td>
          <td>${action.type === 'page' && action.action === 'updated' ? 
            `<span style="text-decoration: line-through;">${action.oldValue}</span> → ${action.newValue}` : 
            (action.newValue || (action.element && action.element.getAttribute('content')))}</td>
        </tr>
      `;
    });
    
    html += `
          </tbody>
        </table>
        
        <div class="next-steps">
          <h2>Prochaines étapes</h2>
          <ol>
            <li>Ces modifications sont appliquées temporairement à cette page. Pour les rendre permanentes, vous devez modifier votre fichier HTML.</li>
            <li>Copiez le code ci-dessous et remplacez ou ajoutez-le dans la section &lt;head&gt; de votre site web.</li>
            <li>Vérifiez que les métadonnées sont correctement prises en compte en utilisant les outils de validation OpenGraph.</li>
          </ol>
        </div>
        
        <h2>Code à intégrer dans votre site</h2>
        <pre style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; overflow-x: auto;">
&lt;!-- Métadonnées OpenGraph pour l'amélioration de l'aperçu sur les réseaux sociaux --&gt;
&lt;meta property="og:title" content="${CONFIG.og.title}" /&gt;
&lt;meta property="og:description" content="${CONFIG.og.description}" /&gt;
&lt;meta property="og:type" content="${CONFIG.og.type}" /&gt;
&lt;meta property="og:image" content="${CONFIG.og.image}" /&gt;
&lt;meta property="og:url" content="${CONFIG.og.url}" /&gt;

&lt;!-- Métadonnées Twitter Card --&gt;
&lt;meta name="twitter:card" content="${CONFIG.twitter.card}" /&gt;
&lt;meta name="twitter:title" content="${CONFIG.twitter.title}" /&gt;
&lt;meta name="twitter:description" content="${CONFIG.twitter.description}" /&gt;
&lt;meta name="twitter:image" content="${CONFIG.twitter.image}" /&gt;
        </pre>
        
        <div class="verification">
          <h3>Vérifiez vos métadonnées</h3>
          <p>Pour vérifier que vos métadonnées fonctionnent correctement, utilisez les outils suivants :</p>
          <ul>
            <li><a href="https://developers.facebook.com/tools/debug/?q=${encodeURIComponent(CONFIG.og.url)}" target="_blank">Validateur OpenGraph de Facebook</a></li>
            <li><a href="https://cards-dev.twitter.com/validator" target="_blank">Validateur de cartes Twitter</a></li>
            <li><a href="https://www.linkedin.com/post-inspector/inspect/" target="_blank">Inspecteur de liens LinkedIn</a></li>
          </ul>
        </div>
        
        <p class="note">Pour bénéficier pleinement de ces modifications, il est recommandé de les intégrer directement dans votre code source.</p>
      </div>
    `;
    
    return html;
  }
  
  // Fonction pour afficher le rapport dans une fenêtre modale
  function showReportModal(html) {
    // Créer un élément div pour la fenêtre modale
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
    modal.style.zIndex = '9999';
    modal.style.overflow = 'auto';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'flex-start';
    modal.style.padding = '20px';
    
    // Ajouter le contenu HTML
    modal.innerHTML = html;
    
    // Ajouter un bouton de fermeture
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Fermer';
    closeButton.style.position = 'fixed';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.padding = '8px 15px';
    closeButton.style.backgroundColor = '#e74c3c';
    closeButton.style.color = 'white';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '4px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.zIndex = '10000';
    
    // Fonction pour fermer la fenêtre modale
    closeButton.onclick = function() {
      document.body.removeChild(modal);
    };
    
    modal.appendChild(closeButton);
    document.body.appendChild(modal);
  }
  
  // Exécuter l'installation et afficher le rapport
  const actions = installOpenGraphMetadata();
  const reportHtml = generateReport(actions);
  showReportModal(reportHtml);
  
  // Journaliser le résultat dans la console
  console.log('Métadonnées OpenGraph installées avec succès !', actions);
  
  // Retourner le statut pour la vérification
  return {
    success: true,
    actionsCount: actions.length,
    actions: actions
  };
})();
