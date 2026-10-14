// ### Mission 1 — L'en-tête vivant

// 🎯 *« Quand j'ouvre l'appli, je veux voir le nom de ma boutique, la date et l'heure. »*

// 📋 **Exigences**

// - Le nom de la boutique s'affiche dans `#shop-name`.
// - La date du jour s'affiche dans `#current-date` au format `JJ/MM/AAAA`.
// - L'heure s'affiche dans `#current-time` au format `HH:MM:SS` et **avance chaque seconde**.
// - L'année en cours s'affiche dans `#footer-year`.
// - Créez une fonction `formatPrice(nombre)` qui renvoie un prix au format français : `149,99 €`. Vous l'utiliserez partout.

// ✅ **Validation :** l'horloge tourne, `formatPrice(1234.5)` renvoie `1 234,50 €`.

// ---



// Dark mode toggle
function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark");
}

const darkmodeBtn = document.getElementById("theme-toggle")
darkmodeBtn.addEventListener('click', toggleDarkMode)