import React, { useState } from 'react';
import './TesseraMenu.css'; // Assume CSS is in this file

// --- Menu Data Structure ---
const menuData = [{
        category: 'hot-coffee',
        title: 'Café Chaud (Hot Coffee)',
        items: [
            { name: 'Espresso', price: 250 },
            { name: 'Cappuccino', price: 350 },
            { name: 'Latte', price: 400 },
        ],
    },
    {
        category: 'cold-drinks',
        title: 'Boissons Froides (Cold Drinks)',
        items: [
            { name: 'Iced Coffee', price: 400 },
            { name: 'Iced Latte', price: 450 },
        ],
    },
    {
        category: 'desserts',
        title: 'Desserts',
        items: [
            { name: 'Gâteau au Chocolat (Chocolate Cake)', price: 300 },
            { name: 'Croissant', price: 200 },
        ],
    },
];

const TesseraMenu = () => {
    const [activeCategory, setActiveCategory] = useState(menuData[0].category);

    // Filter items based on the active category
    const activeSection = menuData.find(section => section.category === activeCategory);

    return ( <
        div className = "tessera-menu-container" >

        { /* --- Header Section --- */ } <
        header className = "header" >
        <
        div className = "logo-icon" > 🦋 < /div> <
        div className = "logo-text" > TESSERA < /div> <
        div className = "tagline" > COFFEE SHOP < /div> <
        /header>

        { /* --- Navigation Section --- */ } <
        nav className = "category-nav" > {
            menuData.map((section) => ( <
                button key = { section.category }
                className = { `category-btn ${activeCategory === section.category ? 'active' : ''}` }
                onClick = {
                    () => setActiveCategory(section.category) } >
                { section.title.split('(')[0].trim() } { /* Show only the French name in the tab */ } <
                /button>
            ))
        } <
        /nav>

        { /* --- Menu Content --- */ } <
        main className = "menu-content" >
        <
        section className = "menu-section" >
        <
        h2 className = "section-title" > { activeSection.title } < /h2> {
            activeSection.items.map((item, index) => ( <
                div className = "menu-item-card"
                key = { index } >
                <
                div className = "item-info" >
                <
                div className = "item-name" > { item.name } < /div> <
                /div> <
                div className = "item-price" > { item.price }
                DZD < /div> <
                /div>
            ))
        } <
        /section> <
        /main> <
        /div>
    );
};

export default TesseraMenu;