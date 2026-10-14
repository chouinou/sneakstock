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
// ### Mission 2 — Afficher l'inventaire
// - Écrivez une fonction `getStatus(product)` qui renvoie `"ok"`, `"low"` ou `"out"`.

// - Écrivez une fonction `renderInventory(list)` qui **reçoit une liste** de produits et génère une ligne `<tr>` par produit dans `#inventory-body`, en respectant le modèle donné dans `index.html`.

// - Chaque ligne porte un attribut `data-id` avec l'id du produit.

// - La colonne « Pointures » affiche la plus petite et la plus grande : `40 → 45`.

// - Le badge de statut a la bonne couleur et le bon texte.

// - `#result-count` affiche le nombre de lignes affichées.

// ✅ **Validation :** 20 lignes, 3 badges rouges « Rupture », « 20 produit(s) affiché(s) ».

// Get statuts of a product

// ici product = object
// object = { 
//      id: 1,  
//      ref: "NK-AM90-01",  
//      name: "Air Max 90",
//      brand: "Nike",
//      category: "Lifestyle",  
//      gender: "Homme",  color: "#f5f5f5", colorName: "Blanc",      price: 149.99, stock: 12, threshold: 5, sizes: [40, 41, 42, 43, 44, 45] }

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