import React, { useState, useEffect } from "react";
import "./TesseraMenu.css";
// Importez votre image
import tesseraLogo from "../../assets/photo-tessera.jpg";

const menuData = [
  {
    category: "hot-coffee",
    title: "Café Chaud (Hot Coffee)",
    items: [
      { name: "Espresso Simple (Single Shot)", price: 250 },
      { name: "Espresso Double (Double Shot)", price: 350 },
      { name: "Americano Classique", price: 300 },
      { name: "Cappuccino Moka", price: 450 },
      { name: "Latte Vanille", price: 400 },
      { name: "Flat White", price: 400 },
      { name: "Macchiato Caramel", price: 420 },
      { name: "Chocolat Chaud Belge", price: 500 },
      { name: "Café Filtre du Jour", price: 320 },
      { name: "Thé Vert Matcha Latte", price: 550 },
    ],
  },
  {
    category: "cold-drinks",
    title: "Boissons Froides (Cold Drinks)",
    items: [
      { name: "Iced Americano", price: 350 },
      { name: "Iced Latte Noisette", price: 450 },
      { name: "Frapuccino Chocolat Blanc", price: 600 },
      { name: "Smoothie Fruits Rouges", price: 550 },
      { name: "Limonade Fraîche Maison", price: 380 },
      { name: "Thé Glacé Pêche", price: 400 },
      { name: "Cold Brew Classique", price: 480 },
      { name: "Affogato (Glace Vanille + Espresso)", price: 450 },
      { name: "Jus d'Orange Pressé", price: 420 },
      { name: "Eau Minérale (Grande Bouteille)", price: 150 },
    ],
  },
  {
    category: "desserts",
    title: "Desserts",
    items: [
      { name: "Gâteau au Chocolat Fondant", price: 400 },
      { name: "Cheesecake New-Yorkais", price: 450 },
      { name: "Tarte au Citron Meringuée", price: 380 },
      { name: "Muffin Myrtilles", price: 280 },
      { name: "Croissant au Beurre", price: 200 },
      { name: "Pain au Chocolat", price: 250 },
      { name: "Macaron Assortiment (par unité)", price: 150 },
      { name: "Salade de Fruits Frais", price: 300 },
      { name: "Glace Artisanale (2 boules)", price: 350 },
      { name: "Brownie Noix de Pécan", price: 320 },
    ],
  },
];

// --- Custom Hook pour grand écran ---
function useIsLargeScreen(breakpoint = 900) {
  const [isLarge, setIsLarge] = useState(window.innerWidth >= breakpoint);

  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth >= breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isLarge;
}

const TesseraMenu = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);
  const [isLoading, setIsLoading] = useState(true);
  const isLargeScreen = useIsLargeScreen();

  const activeSection = menuData.find(
    (section) => section.category === activeCategory
  );

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="tessera-menu-container loading">
        <div className="loading-spinner">
          {/* Logo pendant le chargement */}
          <div className="logo-loading-container">
            <img 
              src={tesseraLogo} 
              alt="Tessera" 
              className="loading-logo-img"
            />
          </div>
          <div className="loading-text">Chargement du menu...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="tessera-menu-container">
      {/* Header - Votre photo complète comme bannière */}
      <header 
        className="header"
        style={{
          backgroundImage: `url(${tesseraLogo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Pas de contenu supplémentaire - juste votre photo */}
      </header>

      {/* Navigation Mobile */}
      {!isLargeScreen && (
        <nav className="category-nav">
          {menuData.map((section) => (
            <button
              key={section.category}
              className={`category-btn ${
                activeCategory === section.category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(section.category)}
              aria-label={`Voir ${section.title}`}
            >
              {section.title.split("(")[0].trim()}
            </button>
          ))}
        </nav>
      )}

      {/* Contenu */}
      <main className="menu-content">
        {/* Mobile: section unique */}
        {!isLargeScreen && activeSection && (
          <section className="menu-section" key={activeSection.category}>
            <h2 className="section-title">{activeSection.title}</h2>
            {activeSection.items.map((item, idx) => (
              <div className="menu-item-card" key={idx}>
                <div className="item-info">
                  <div className="item-name">{item.name}</div>
                </div>
                <div className="item-price">
                  {item.price.toLocaleString("fr-FR")} DZD
                </div>
              </div>
            ))}
          </section>
        )}

        {/* PC: toutes les sections */}
        {isLargeScreen && (
          <div className="multi-section-view">
            {menuData.map((section) => (
              <section className="menu-section" key={section.category}>
                <h2 className="section-title">{section.title}</h2>
                {section.items.map((item, idx) => (
                  <div className="menu-item-card" key={idx}>
                    <div className="item-info">
                      <div className="item-name">{item.name}</div>
                    </div>
                    <div className="item-price">
                      {item.price.toLocaleString("fr-FR")} DZD
                    </div>
                  </div>
                ))}
              </section>
            ))}
          </div>
        )}
      </main>

      {/* Footer - Sans logo */}
      <footer className="menu-footer">
        <div className="footer-content">
          <div className="footer-note">
            Tous nos produits sont préparés avec des ingrédients frais et de qualité.
          </div>
          <div className="footer-contact">
            Service 7j/7 • 8h-22h • Alger, DZ
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TesseraMenu;