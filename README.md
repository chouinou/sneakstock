# Sneakstock

## 1. Le contexte

La boutique **Street Feet Paris** vend des sneakers. Aujourd'hui, le gérant suit son stock… sur un cahier. 📓

Il a commandé une application web de gestion de stock. Le designer a déjà livré l'interface (HTML + CSS), mais **rien ne fonctionne** : il n'y a aucune ligne de JavaScript.

**Votre mission :** rendre l'application vivante, uniquement avec JavaScript.

---

## 2. Les fichiers fournis

```
sneakstock/
├── index.html   → la page (NE PAS MODIFIER)
├── style.css    → le design (NE PAS MODIFIER)
├── data.js      → les données de départ (20 produits + historique)
└── script.js    → VOTRE fichier de travail
```

### ⚠️ Règles du projet

1. **Interdit de modifier `index.html` et `style.css`.** Tout passe par JavaScript.
2. Pas de librairie (pas de jQuery, React, etc.) : du JavaScript « pur ».
3. Les **modèles HTML** de ce que vous devez générer sont donnés **en commentaire** dans `index.html`. Lisez-les !
4. Les **classes CSS** utiles sont listées en haut de `style.css`. Vous n'avez qu'à les ajouter ou retirer.
5. Ouvrez la **console (F12)** en permanence. Zéro erreur rouge attendue à la fin.

---

## 3. Les données

`data.js` est chargé **avant** `script.js`. Il vous donne 3 variables :

| Variable | Type | Contenu |
| --- | --- | --- |
| `SHOP_NAME` | `string` | le nom de la boutique |
| `products` | `array` | 20 produits |
| `stockHistory` | `array` | l'historique des mouvements de stock |

### Structure d'un produit

```jsx
{
  id: 1,                    // identifiant unique (nombre)
  ref: "NK-AM90-01",        // référence produit (unique)
  name: "Air Max 90",
  brand: "Nike",
  category: "Lifestyle",    // Running, Lifestyle, Basketball, Ville, Randonnée, Sandales
  gender: "Homme",          // Homme, Femme, Mixte, Enfant
  color: "#f5f5f5",         // couleur (code hexadécimal)
  colorName: "Blanc",
  price: 149.99,            // prix TTC en €
  stock: 12,                // nombre de paires en stock
  threshold: 5,             // seuil d'alerte
  sizes: [40, 41, 42, 43]   // pointures disponibles
}
```

### Structure d'un mouvement de stock

```jsx
{
  id: 1,
  productId: 3,
  productName: "Samba OG",
  type: "in",                        // "in" = entrée, "out" = sortie
  quantity: 10,
  reason: "Livraison fournisseur",
  date: "2026-10-10T09:15:00",       // format ISO
  user: "Admin"
}
```

### La règle métier centrale : le statut d'un produit

| Condition | Statut | Libellé affiché | Classe CSS |
| --- | --- | --- | --- |
| `stock === 0` | `out` | Rupture | `badge--out` |
| `stock <= threshold` | `low` | Stock faible | `badge--low` |
| sinon | `ok` | En stock | `badge--ok` |

---

## 4. Les missions

Les missions sont **classées par difficulté**. Faites-les **dans l'ordre** : chacune s'appuie sur les précédentes.

Chaque mission indique :

- 🎯 **Ce que veut l'utilisateur** (la fonctionnalité)
- 📋 **Les exigences** (ce qui doit marcher)
- ✅ **Les critères de validation** (comment vérifier que c'est fini)

---

### Mission 1 — L'en-tête vivant

🎯 *« Quand j'ouvre l'appli, je veux voir le nom de ma boutique, la date et l'heure. »*

📋 **Exigences**

- Le nom de la boutique s'affiche dans `#shop-name`.
- La date du jour s'affiche dans `#current-date` au format `JJ/MM/AAAA`.
- L'heure s'affiche dans `#current-time` au format `HH:MM:SS` et **avance chaque seconde**.
- L'année en cours s'affiche dans `#footer-year`.
- Créez une fonction `formatPrice(nombre)` qui renvoie un prix au format français : `149,99 €`. Vous l'utiliserez partout.

✅ **Validation :** l'horloge tourne, `formatPrice(1234.5)` renvoie `1 234,50 €`.

---

### Mission 2 — Afficher l'inventaire

🎯 *« Je veux voir tous mes produits dans un tableau. »*

📋 **Exigences**

- Écrivez une fonction `getStatus(product)` qui renvoie `"ok"`, `"low"` ou `"out"`.
- Écrivez une fonction `renderInventory(list)` qui **reçoit une liste** de produits et génère une ligne `<tr>` par produit dans `#inventory-body`, en respectant le modèle donné dans `index.html`.
- Chaque ligne porte un attribut `data-id` avec l'id du produit.
- La colonne « Pointures » affiche la plus petite et la plus grande : `40 → 45`.
- Le badge de statut a la bonne couleur et le bon texte.
- `#result-count` affiche le nombre de lignes affichées.

✅ **Validation :** 20 lignes, 3 badges rouges « Rupture », « 20 produit(s) affiché(s) ».

---

### Mission 3 — Le tableau de bord

🎯 *« En un coup d'œil, je veux connaître l'état de mon stock. »*

📋 **Exigences** — Écrivez une fonction `updateDashboard()` qui remplit :

| Élément | Contenu |
| --- | --- |
| `#stat-products` | nombre de références |
| `#stat-units` | nombre total de paires |
| `#stat-value` | valeur totale du stock (prix × stock) |
| `#stat-low` | nombre de produits en stock faible |
| `#stat-out` | nombre de produits en rupture |
| `#stat-avg-price` | prix moyen d'une paire |

Contrainte : utilisez au moins une fois `reduce()` et au moins une fois `filter()`.

✅ **Validation :** au démarrage → **20** références, **191** paires, **4** stocks faibles, **3** ruptures.

---

### Mission 4 — Les analyses

🎯 *« Je veux savoir quelles catégories et quelles marques pèsent le plus. »*

📋 **Exigences**

- **Répartition par catégorie** (`#category-chart`) : une barre par catégorie avec le nombre de paires. La catégorie la plus remplie a une barre à **100 %**, les autres sont proportionnelles. Triez de la plus grande à la plus petite.
- **Top 5** (`#top-products`) : les 5 produits avec la plus grosse valeur de stock (prix × stock).
- **Marques** (`#brand-chips`) : une « chip » par marque avec son nombre de références, triées par ordre alphabétique.
- **Listes de marques** : remplissez dynamiquement le `<select id="filter-brand">` et le `<datalist id="brand-list">` avec les marques **sans doublon**, triées.

⚠️ Le tri du Top 5 **ne doit pas modifier l'ordre** du tableau `products`.

✅ **Validation :** Lifestyle a la barre la plus longue ; le Top 5 commence par la **Samba OG** (3 000,00 €) ; 14 marques dans les listes.

---

### Mission 5 — Rechercher, filtrer, trier

🎯 *« J'ai beaucoup de produits : je veux retrouver vite ce que je cherche. »*

📋 **Exigences** — Écrivez **une seule fonction** `applyFilters()` qui combine **tous** les critères en même temps :

| Contrôle | Comportement |
| --- | --- |
| `#search` | recherche dans le **nom ou la référence**, insensible à la casse, à chaque frappe |
| `#filter-category` | filtre par catégorie |
| `#filter-brand` | filtre par marque |
| `#filter-status` | filtre par statut (en stock / faible / rupture) |
| `#price-max` | prix maximum ; le texte `#price-max-value` se met à jour en direct |
| `#sort-select` | tri par nom, prix ou stock (croissant / décroissant) |
| `#btn-clear-filters` | remet tous les contrôles à zéro |
- S'il n'y a aucun résultat, affichez `#empty-state` (retirez la classe `hidden`).
- Un clic sur une chip de marque active le filtre de cette marque (un 2e clic l'enlève).

✅ **Validation :** « Running » → 4 produits ; « Nike » + « Stock faible » → 2 produits ; recherche « zzz » → message « Aucun produit ».

---

### Mission 6 — Agir sur le stock depuis le tableau

🎯 *« Je veux ajuster un stock ou supprimer un produit directement dans le tableau. »*

📋 **Exigences**

- Les boutons `+` et `−` modifient le stock de 1. Le stock ne descend **jamais** sous 0.
- Le bouton 🗑️ supprime le produit **après confirmation**.
- Après chaque action, **tout** se met à jour (tableau, statistiques, analyses), **sans perdre les filtres actifs**.
- Écrivez une fonction `showToast(message, type)` qui affiche `#toast` pendant 3 secondes (classes `toast--show`, `toast--success`, `toast--error`).

⚠️ **Contrainte technique imposée :** les lignes sont recréées à chaque affichage. Vous devez utiliser la **délégation d'événements** : **un seul** `addEventListener` sur `#inventory-body`.
👉 Recherchez : `event.target.closest()` et `element.dataset`.

✅ **Validation :** cliquer `+` sur une rupture → le badge passe à « Stock faible » et le compteur de ruptures baisse.

---

### Mission 7 — Ajouter un produit

🎯 *« Je reçois un nouveau modèle, je veux l'ajouter au catalogue. »*

📋 **Exigences**

- **Aperçu en direct** : pendant la saisie, `#product-preview` affiche le nom, la marque, la catégorie, le prix et la couleur.
- **Compteur** de caractères pour la description (`#desc-counter`).
- Boutons « Tout cocher » / « Tout décocher » pour les pointures.
- À l'envoi, la page **ne doit pas se recharger**.

**Règles de validation** (message dans le `.field__error` correspondant + classe `input--error` sur le champ) :

| Champ | Règle |
| --- | --- |
| Nom | obligatoire, 2 caractères minimum |
| Référence | obligatoire, **unique**, au format `XX-XXXX-00` (ex : `NK-AM90-01`) |
| Marque | obligatoire |
| Catégorie | obligatoire |
| Public | un choix obligatoire |
| Prix | nombre strictement positif |
| Quantité | entier ≥ 0 |
| Pointures | au moins une cochée |
- Les erreurs **disparaissent** dès que l'utilisateur corrige le champ.
- Si tout est valide : le produit est ajouté avec un **nouvel id unique**, tout est rafraîchi, un message vert s'affiche dans `#form-feedback` (puis disparaît après 4 s) et le formulaire est vidé.
- Les valeurs numériques doivent être enregistrées comme des **nombres**, pas comme des chaînes.

👉 Recherchez : `FormData`, `event.preventDefault()`, expressions régulières (`RegExp.test()`).

✅ **Validation :** envoi à vide → 8 erreurs ; référence `NK-AM90-01` → « existe déjà » ; une nouvelle marque apparaît dans les filtres après l'ajout.

---

### Mission 8 — Mouvements de stock et historique

🎯 *« Je veux enregistrer mes livraisons et mes ventes, et garder une trace de tout. »*

📋 **Exigences**

- Remplissez `#movement-product` avec tous les produits (`Nom — Réf`). Quand on en choisit un, affichez son stock dans `#movement-current-stock`.
- À l'envoi du formulaire : vérifiez qu'un produit est choisi, que la quantité est un entier ≥ 1, et **refusez une sortie supérieure au stock** (message d'erreur dans `#movement-feedback`).
- Chaque mouvement est ajouté à `stockHistory` avec la date actuelle et le nom de l'utilisateur connecté (`#user-name`).
- L'historique (`#history-list`) affiche les mouvements du **plus récent au plus ancien**, avec la date au format `13/10/2026 14:32`. Il est filtrable avec `#history-filter`.
- Affichez le total des entrées et des sorties (`#history-total-in`, `#history-total-out`).
- `#btn-clear-history` vide l'historique après confirmation.

⚠️ **Contrainte d'architecture :** **toute** modification de stock (formulaire, boutons `+`/`−` de la mission 6, etc.) doit passer par **une seule fonction** :

```jsx
addMovement(productId, type, quantity, reason)
```

Les boutons `+`/`−` créent donc eux aussi un mouvement, avec le motif « Ajustement rapide ».

✅ **Validation :** vendre 50 paires d'un produit qui en a 3 → refusé ; chaque clic sur `+` ajoute une ligne dans l'historique.

---

### Mission 9 — Alertes et modification

🎯 *« Je veux être prévenu des produits à recommander, et pouvoir corriger une fiche produit. »*

📋 **Exigences — Alertes**

- `#alerts-list` affiche une carte par produit en stock faible ou en rupture. Les **ruptures en premier**.
- `#alerts-badge` (dans le menu) affiche le nombre d'alertes et **disparaît** s'il vaut 0.
- Le bouton « Commander 10 » ajoute 10 paires (via `addMovement`, motif « Livraison fournisseur »).
- S'il n'y a aucune alerte, affichez `#alerts-empty`.

📋 **Exigences — Modale de modification**

- Le bouton ✏️ ouvre `#edit-modal` (classe `is-open`), pré-remplie avec le nom, le prix, le stock et le seuil du produit.
- La modale se ferme avec : le bouton ✖, le bouton « Annuler », un clic sur le fond sombre, **et la touche Échap**.
- L'enregistrement valide les valeurs, met à jour le produit et affiche un toast. Un changement de stock doit apparaître dans l'historique.

📋 **Exigence — Architecture**

- Créez une fonction `refreshAll()` qui relance **tous** les affichages. Après chaque action, on n'appelle **qu'elle**.

✅ **Validation :** « Commander 10 » sur une rupture → la carte disparaît, le badge du menu diminue, l'historique affiche +10.

---

### Mission 10 — Ne rien perdre au rechargement

🎯 *« Si je ferme l'onglet, je ne veux pas perdre mon travail. »*

📋 **Exigences**

- Les produits et l'historique sont sauvegardés dans le **`localStorage`** après chaque modification.
- Au démarrage, s'il existe des données sauvegardées, elles **remplacent** celles de `data.js`.
- L'application ne doit **pas planter** si le `localStorage` contient des données invalides.
- `#btn-reset` (après confirmation) efface la sauvegarde et recharge la page avec les données d'origine.
- `#btn-change-user` demande un nom (`prompt`), l'affiche dans `#user-name` et le mémorise.

🤔 **Question à résoudre :** `products` est déclaré avec `const`. Comment le remplir avec les données sauvegardées sans faire `products = ...` ?

✅ **Validation :** ajouter un produit, faire une vente, changer de nom → **F5** → tout est conservé. « Réinitialiser » → retour à 20 produits.

---

## 5. Défis bonus

| Défi | Description | Difficulté |
| --- | --- | --- |
| 🌙 Mode sombre | `#theme-toggle` ajoute/retire la classe `dark` sur `<body>`. Le choix est mémorisé. | ⭐ |
| 📍 Menu actif | Le lien du menu correspondant à la section visible s'active tout seul au scroll (`IntersectionObserver`). | ⭐⭐ |
| ✨ Nouvelle ligne | Après un ajout, la nouvelle ligne clignote (`row--highlight`) et la page défile jusqu'à elle. | ⭐ |
| ⏱️ Debounce | La recherche ne se lance que 300 ms après la dernière frappe. | ⭐⭐ |
| ↕️ Tri par colonne | Un clic sur un en-tête du tableau trie la colonne ; un 2e clic inverse l'ordre ; une flèche ▲▼ indique le tri. | ⭐⭐ |
| ⬇️ Export CSV | `#btn-export` télécharge `stock.csv` avec les produits **actuellement affichés**, lisible dans Excel (séparateur `;`, accents corrects). | ⭐⭐⭐ |
| ⌨️ Raccourcis | `/` → place le curseur dans la recherche, `n` → va au formulaire d'ajout (sauf si on est en train d'écrire dans un champ). | ⭐⭐ |
| 🧱 Classe `Product` | Transformez les produits en instances d'une classe avec les méthodes `getStatus()`, `getValue()`, `addStock(n)`, `removeStock(n)`. | ⭐⭐⭐ |
| 👟 Stock par pointure | Remplacez le stock global par un stock **par pointure** (`{ 40: 2, 41: 5 }`) et adaptez toute l'application. | ⭐⭐⭐⭐ |

---

## Ressources

---

- 📘 MDN — JavaScript : la référence
- 📘 MDN — Manipuler le DOM
- 📘 MDN — Les méthodes de tableau : `map`, `filter`, `reduce`, `find`, `sort`…
- 📘 MDN — localStorage