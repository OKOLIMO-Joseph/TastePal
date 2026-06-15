/* ========================================
   TASTEPAL - MENU PAGE JAVASCRIPT
   Complete menu with filtering and search
   ======================================== */

// Full Menu Data
const fullMenuItems = [
    { name: "Classic Cheeseburger", desc: "Beef patty, cheddar, lettuce, tomato, special sauce", price: "$12.99", img: "https://picsum.photos/id/106/300/200", category: "Burgers" },
    { name: "BBQ Bacon Burger", desc: "Smoked bacon, BBQ sauce, onion rings, pepper jack", price: "$14.99", img: "https://picsum.photos/id/108/300/200", category: "Burgers" },
    { name: "Mushroom Swiss Burger", desc: "Sautéed mushrooms, Swiss cheese, garlic aioli", price: "$13.99", img: "https://picsum.photos/id/128/300/200", category: "Burgers" },
    { name: "Margherita Pizza", desc: "Fresh mozzarella, basil, tomatoes, olive oil", price: "$16.99", img: "https://picsum.photos/id/112/300/200", category: "Pizza" },
    { name: "Pepperoni Feast", desc: "Double pepperoni, mozzarella, oregano", price: "$18.99", img: "https://picsum.photos/id/114/300/200", category: "Pizza" },
    { name: "BBQ Chicken Pizza", desc: "Grilled chicken, red onions, cilantro, BBQ sauce", price: "$17.99", img: "https://picsum.photos/id/132/300/200", category: "Pizza" },
    { name: "Texas BBQ Ribs", desc: "Slow-cooked ribs with smoky BBQ sauce", price: "$24.99", img: "https://picsum.photos/id/116/300/200", category: "BBQ" },
    { name: "Smoked Brisket", desc: "Slow-smoked brisket with house rub", price: "$22.99", img: "https://picsum.photos/id/118/300/200", category: "BBQ" },
    { name: "BBQ Chicken Wings", desc: "Crispy wings with BBQ glaze", price: "$13.99", img: "https://picsum.photos/id/121/300/200", category: "BBQ" },
    { name: "Loaded Fries", desc: "Cheese, bacon, jalapeños, ranch drizzle", price: "$7.99", img: "https://picsum.photos/id/127/300/200", category: "Fast Food" },
    { name: "Chicken Tenders", desc: "Crispy tenders with honey mustard", price: "$10.99", img: "https://picsum.photos/id/129/300/200", category: "Fast Food" },
    { name: "Onion Rings", desc: "Beer-battered onion rings with dipping sauce", price: "$6.99", img: "https://picsum.photos/id/130/300/200", category: "Fast Food" },
    { name: "Iced Mocha", desc: "Chilled coffee with chocolate and cream", price: "$5.49", img: "https://picsum.photos/id/10/300/200", category: "Drinks" },
    { name: "Fresh Lemonade", desc: "Homestyle lemonade with mint", price: "$4.29", img: "https://picsum.photos/id/11/300/200", category: "Drinks" },
    { name: "Craft Beer", desc: "Local rotating craft beer selection", price: "$6.99", img: "https://picsum.photos/id/12/300/200", category: "Drinks" },
    { name: "Chocolate Lava Cake", desc: "Warm chocolate cake with ice cream", price: "$8.99", img: "https://picsum.photos/id/22/300/200", category: "Desserts" },
    { name: "New York Cheesecake", desc: "Creamy cheesecake with berry compote", price: "$7.99", img: "https://picsum.photos/id/23/300/200", category: "Desserts" },
    { name: "Tiramisu", desc: "Classic Italian coffee-flavored dessert", price: "$7.49", img: "https://picsum.photos/id/24/300/200", category: "Desserts" }
];

let currentFilter = "all";
let searchQuery = "";

function renderMenu() {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;
    
    const filtered = fullMenuItems.filter(item => {
        const matchCategory = currentFilter === "all" || item.category === currentFilter;
        const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           item.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory && matchSearch;
    });
    
    if (filtered.length === 0) {
        menuGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--primary); margin-bottom: 1rem;"></i>
                <h3>No dishes found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    menuGrid.innerHTML = filtered.map(item => `
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

function initMenuFilters() {
    // Category filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.getAttribute('data-cat');
            renderMenu();
        });
    });
    
    // Search input
    const searchInput = document.getElementById('searchMenu');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            searchQuery = e.target.value;
            renderMenu();
        });
    }
}

// Initialize menu page
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('menuGrid')) {
        renderMenu();
        initMenuFilters();
    }
});