/* ========================================
   TASTEPAL - HOME PAGE JAVASCRIPT
   Featured dishes and dynamic content
   ======================================== */

// Menu Data (shared across pages)
const menuItems = [
    { 
        name: "Classic Cheeseburger", 
        desc: "Juicy beef patty with melted cheddar, fresh lettuce, tomato, and our secret sauce.", 
        price: "$12.99", 
        img: "https://picsum.photos/id/106/300/200", 
        category: "Burgers" 
    },
    { 
        name: "BBQ Bacon Burger", 
        desc: "Smoked bacon, tangy BBQ sauce, crispy onion rings, and pepper jack cheese.", 
        price: "$14.99", 
        img: "https://picsum.photos/id/108/300/200", 
        category: "Burgers" 
    },
    { 
        name: "Margherita Pizza", 
        desc: "Fresh mozzarella, basil, tomatoes, and extra virgin olive oil on thin crust.", 
        price: "$16.99", 
        img: "https://picsum.photos/id/112/300/200", 
        category: "Pizza" 
    },
    { 
        name: "Pepperoni Feast", 
        desc: "Double pepperoni, mozzarella, oregano, and our signature tomato sauce.", 
        price: "$18.99", 
        img: "https://picsum.photos/id/114/300/200", 
        category: "Pizza" 
    },
    { 
        name: "Texas BBQ Ribs", 
        desc: "Slow-cooked pork ribs with smoky BBQ sauce, served with coleslaw.", 
        price: "$24.99", 
        img: "https://picsum.photos/id/116/300/200", 
        category: "BBQ" 
    },
    { 
        name: "Chicken Wings Platter", 
        desc: "Crispy wings tossed in your choice of spicy buffalo or honey glaze.", 
        price: "$13.99", 
        img: "https://picsum.photos/id/121/300/200", 
        category: "Fast Food" 
    }
];

// Featured dishes (first 4 items)
const featuredItems = menuItems.slice(0, 4);

function renderFeaturedDishes() {
    const featuredGrid = document.getElementById('featuredGrid');
    if (!featuredGrid) return;
    
    featuredGrid.innerHTML = featuredItems.map(item => `
        <div class="food-card">
            <img src="${item.img}" alt="${item.name}" loading="lazy">
            <div class="card-content">
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
                <div class="price">${item.price}</div>
                <small>${item.category}</small>
            </div>
        </div>
    `).join('');
}

// Initialize home page
document.addEventListener('DOMContentLoaded', function() {
    renderFeaturedDishes();
});