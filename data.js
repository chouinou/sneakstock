// =========================================================
// SneakStock — données de départ
// Ce fichier est chargé AVANT script.js : les variables
// SHOP_NAME, products et stockHistory sont donc accessibles partout.
// =========================================================

const SHOP_NAME = "Street Feet Paris";

const products = [
  { id: 1,  ref: "NK-AM90-01",  name: "Air Max 90",          brand: "Nike",        category: "Lifestyle",  gender: "Homme",  color: "#f5f5f5", colorName: "Blanc",      price: 149.99, stock: 12, threshold: 5, sizes: [40, 41, 42, 43, 44, 45] },
  { id: 2,  ref: "NK-PEG41-02", name: "Pegasus 41",          brand: "Nike",        category: "Running",    gender: "Femme",  color: "#ff6b9d", colorName: "Rose",       price: 139.99, stock: 3,  threshold: 5, sizes: [36, 37, 38, 39, 40] },
  { id: 3,  ref: "AD-SAMBA-03", name: "Samba OG",            brand: "Adidas",      category: "Lifestyle",  gender: "Mixte",  color: "#111111", colorName: "Noir",       price: 120.00, stock: 25, threshold: 8, sizes: [37, 38, 39, 40, 41, 42, 43, 44] },
  { id: 4,  ref: "AS-KAY30-04", name: "Gel-Kayano 30",       brand: "Asics",       category: "Running",    gender: "Homme",  color: "#1e40af", colorName: "Bleu",       price: 179.90, stock: 0,  threshold: 4, sizes: [41, 42, 43, 44, 45, 46] },
  { id: 5,  ref: "NB-550-05",   name: "550",                 brand: "New Balance", category: "Lifestyle",  gender: "Mixte",  color: "#e5e7eb", colorName: "Gris",       price: 129.99, stock: 18, threshold: 6, sizes: [38, 39, 40, 41, 42, 43] },
  { id: 6,  ref: "NK-AJ1-06",   name: "Air Jordan 1 Mid",    brand: "Nike",        category: "Basketball", gender: "Homme",  color: "#dc2626", colorName: "Rouge",      price: 134.99, stock: 7,  threshold: 5, sizes: [40, 41, 42, 43, 44, 45, 46] },
  { id: 7,  ref: "CV-CHUCK-07", name: "Chuck Taylor All Star", brand: "Converse",  category: "Lifestyle",  gender: "Mixte",  color: "#fefce8", colorName: "Écru",       price: 69.99,  stock: 40, threshold: 10, sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45] },
  { id: 8,  ref: "SL-XT6-08",   name: "XT-6",                brand: "Salomon",     category: "Randonnée",  gender: "Mixte",  color: "#365314", colorName: "Kaki",       price: 189.00, stock: 2,  threshold: 3, sizes: [39, 40, 41, 42, 43, 44] },
  { id: 9,  ref: "DM-1460-09",  name: "1460 Smooth",         brand: "Dr. Martens", category: "Ville",      gender: "Mixte",  color: "#3f1d0b", colorName: "Bordeaux",   price: 199.00, stock: 9,  threshold: 4, sizes: [37, 38, 39, 40, 41, 42, 43, 44] },
  { id: 10, ref: "BK-ARIZ-10",  name: "Arizona",             brand: "Birkenstock", category: "Sandales",   gender: "Mixte",  color: "#a16207", colorName: "Camel",      price: 99.00,  stock: 0,  threshold: 5, sizes: [36, 37, 38, 39, 40, 41, 42, 43] },
  { id: 11, ref: "AD-ULTRA-11", name: "Ultraboost Light",    brand: "Adidas",      category: "Running",    gender: "Homme",  color: "#0f172a", colorName: "Bleu nuit",  price: 189.99, stock: 11, threshold: 5, sizes: [40, 41, 42, 43, 44, 45] },
  { id: 12, ref: "PM-SUEDE-12", name: "Suede Classic",       brand: "Puma",        category: "Lifestyle",  gender: "Femme",  color: "#166534", colorName: "Vert",       price: 79.99,  stock: 14, threshold: 5, sizes: [36, 37, 38, 39, 40, 41] },
  { id: 13, ref: "VN-OLDS-13",  name: "Old Skool",           brand: "Vans",        category: "Lifestyle",  gender: "Enfant", color: "#000000", colorName: "Noir/Blanc", price: 54.99,  stock: 4,  threshold: 6, sizes: [30, 31, 32, 33, 34, 35] },
  { id: 14, ref: "HK-CLIF9-14", name: "Clifton 9",           brand: "Hoka",        category: "Running",    gender: "Femme",  color: "#7dd3fc", colorName: "Bleu ciel",  price: 149.00, stock: 6,  threshold: 4, sizes: [36, 37, 38, 39, 40, 41] },
  { id: 15, ref: "TB-6INCH-15", name: "6-Inch Premium",      brand: "Timberland",  category: "Ville",      gender: "Homme",  color: "#ca8a04", colorName: "Wheat",      price: 209.00, stock: 5,  threshold: 3, sizes: [41, 42, 43, 44, 45, 46] },
  { id: 16, ref: "NK-LBJ21-16", name: "LeBron XXI",          brand: "Nike",        category: "Basketball", gender: "Homme",  color: "#7c3aed", colorName: "Violet",     price: 199.99, stock: 1,  threshold: 3, sizes: [42, 43, 44, 45, 46] },
  { id: 17, ref: "MR-MOAB3-17", name: "Moab 3",              brand: "Merrell",     category: "Randonnée",  gender: "Femme",  color: "#78716c", colorName: "Taupe",      price: 119.90, stock: 10, threshold: 4, sizes: [36, 37, 38, 39, 40, 41] },
  { id: 18, ref: "TV-HURR-18",  name: "Hurricane XLT2",      brand: "Teva",        category: "Sandales",   gender: "Homme",  color: "#334155", colorName: "Anthracite", price: 74.99,  stock: 16, threshold: 5, sizes: [40, 41, 42, 43, 44, 45] },
  { id: 19, ref: "NB-9060-19",  name: "9060",                brand: "New Balance", category: "Lifestyle",  gender: "Mixte",  color: "#d6d3d1", colorName: "Sable",      price: 159.99, stock: 8,  threshold: 5, sizes: [38, 39, 40, 41, 42, 43, 44] },
  { id: 20, ref: "AD-GAZ-20",   name: "Gazelle Indoor",      brand: "Adidas",      category: "Lifestyle",  gender: "Femme",  color: "#2563eb", colorName: "Bleu",       price: 110.00, stock: 0,  threshold: 6, sizes: [36, 37, 38, 39, 40] }
];

// Historique de départ (quelques mouvements déjà enregistrés)
const stockHistory = [
  { id: 1, productId: 3,  productName: "Samba OG",     type: "in",  quantity: 10, reason: "Livraison fournisseur", date: "2026-10-10T09:15:00", user: "Admin" },
  { id: 2, productId: 1,  productName: "Air Max 90",   type: "out", quantity: 2,  reason: "Vente boutique",        date: "2026-10-11T14:40:00", user: "Admin" },
  { id: 3, productId: 4,  productName: "Gel-Kayano 30", type: "out", quantity: 3, reason: "Vente en ligne",        date: "2026-10-12T11:05:00", user: "Admin" }
];
