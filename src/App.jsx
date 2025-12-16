// Dans src/App.jsx

import React from 'react';
// ⚠️ Mise à jour du chemin d'accès correct
import TesseraMenu from './components/TesseraMenu/TesseraMenu.jsx'; 
// Note : Si vous voulez garder la CSS globale de Vite, vous pouvez garder l'import du fichier CSS de base ici.

function App() {
  return (
    // J'ai enlevé la classe App pour éviter les styles par défaut qui pourraient nuire au design.
    <div style={{minHeight: '100vh', backgroundColor: '#FAF0E6'}}> 
      
      {/* C'est là que le menu est affiché */}
      <TesseraMenu />

    </div>
  );
}

export default App;