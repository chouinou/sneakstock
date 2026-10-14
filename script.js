// Dark mode toggle
function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark");
}

const darkmodeBtn = document.getElementById("theme-toggle")
darkmodeBtn.addEventListener('click', toggleDarkMode)

// Mission 1 : Living header
// - missing : actualizing clock

// Shop name
const shopName = document.getElementById("shop-name");
shopName.textContent = SHOP_NAME ;
// Current date
const currentDate = document.getElementById("current-date");
const date = new Date();
currentDate.textContent = date.toDateString();
// Current time
const currentTime = document.getElementById("current-time");
let time = date.toLocaleTimeString();
currentTime.textContent = time ;
// Current year
const currentYear = document.getElementById("footer-year");
let year = date.getFullYear();
currentYear.textContent = year ;
// Format price function
let euro = Intl.NumberFormat('en-FR', {
    style: 'currency',
    currency: 'EUR',
});
function formatPrice(number) {
    return euro.format(number)
}

// Mission 2 : Inventory
function getStatus(object) {
    product_stock = object.stock ;
    console.log(product_stock);
    stock_threshold = object.threshold ;
    console.log(stock_threshold);
    if (product_stock == 0) {
        return "out";
    } else if (product_stock <= stock_threshold) {
        return "low";
    } else {
        return "ok";}
}

// Render inventory
const table_body = document.getElementById("inventory-body") ;
const number_rows = document.getElementById("result-count") ;
function renderInventory(list) {
    let number_of_rows = Object.keys(list).length
    for (let i = 0; i < (number_of_rows); i++) {
        const tr = document.createElement("tr");
        table_body.append(tr) ;
        let big_string =`<td class="ref">${list[i].ref}</td>
                    <td>
                    <div class="product">
                        <span class="product__swatch" style="background: #ffffff"></span>
                        <div>
                        <p class="product__name">${list[i].name}</p>
                        <p class="product__meta">${list[i].gender} · ${list[i].colorName}</p>
                        </div>
                    </div>
                    </td>
                    <td>${list[i].brand}</td>
                    <td>${list[i].category}</td>
                    <td><span class="sizes">${list[i].sizes[0]} → ${list[i].sizes[(list[i].sizes.length - 1)]}</span></td>
                    <td class="num">${formatPrice(list[i].price)}</td>
                    <td class="num">
                    <div class="stepper">
                        <button class="stepper__btn" data-action="decrease">−</button>
                        <span class="stepper__value">${list[i].stock}</span>
                        <button class="stepper__btn" data-action="increase">+</button>
                    </div>
                    </td>
                    <td><span class="badge badge--${getStatus(list[i])}">En stock</span></td>
                    <td class="actions">
                    <button class="icon-btn" data-action="edit" title="Modifier">✏️</button>
                    <button class="icon-btn icon-btn--danger" data-action="delete" title="Supprimer">🗑️</button>
                    </td>`
        table_body.lastChild.innerHTML = big_string;
    }
    number_rows.textContent = `${number_of_rows}`
    
}
renderInventory(products);

// Mission 3 
// ### Mission 3 — Le tableau de bord
// 
// 🎯 *« En un coup d'œil, je veux connaître l'état de mon stock. »*
// 
// 📋 **Exigences** — Écrivez une fonction `updateDashboard()` qui remplit :
// 
// | Élément | Contenu |
// | --- | --- |
// | `#stat-products` | nombre de références |
// | `#stat-units` | nombre total de paires |
// | `#stat-value` | valeur totale du stock (prix × stock) |
// | `#stat-low` | nombre de produits en stock faible |
// | `#stat-out` | nombre de produits en rupture |
// | `#stat-avg-price` | prix moyen d'une paire |
// 
// Contrainte : utilisez au moins une fois `reduce()` et au moins une fois `filter()`.
// 
// ✅ **Validation :** au démarrage → **20** références, **191** paires, **4** stocks faibles, **3** ruptures.

const stat_products = document.getElementById("stat-products") ;
const stat_units = document.getElementById("stat-units") ; 
const stat_value = document.getElementById("stat-value") ;
const stat_low = document.getElementById("stat-low") ;
const stat_out = document.getElementById("stat-out") ;

function updateDashboard() {
    let total_pairs = 0 ;
    let total_money = 0 ;
    let total_alert = 0 ;
    let total_out = 0 ;
    for (let i = 0; i < Object.keys(products).length; i++) {
        total_pairs += products[i].stock ;
        total_money += (products[i].stock * products[i].price) ;
        if (products[i].stock <= products[i].threshold) {
            total_alert += 1 ;
        }
        if (products[i].stock == 0) {
            total_out += 1 ;
        }
        
    }

    stat_products.textContent = Object.keys(products).length;
    stat_units.textContent = total_pairs ;
    stat_value.textContent = formatPrice(total_money) ;
    stat_low.textContent = total_alert ;
    stat_out.textContent = total_out ;



}

updateDashboard();