// Remplacez par votre clé API Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoibmlvazA1IiwiYSI6ImNtNjM5eHViajB5NHUyanNieHh1aXhmaHEifQ.GM03E2nJ0GbveLxYEFtpfw';

// Créez la carte
const map = new mapboxgl.Map({
    container: 'map', // ID de l'élément HTML où afficher la carte
    style: 'mapbox://styles/mapbox/outdoors-v11', // Style de la carte
    center: [6.4960, 44.5652], // Coordonnées initiales : Embrun (longitude, latitude)
    zoom: 5 // Niveau de zoom initial (5 = vue régionale, 10 = vue locale)
});

// Ajoutez des contrôles de navigation (zoom et rotation)
map.addControl(new mapboxgl.NavigationControl());

// Canyon des Oules de Freissinières
const markerOulesdeFreissinieres = new mapboxgl.Marker({ element: createCustomMarker('green') })  // Marqueur pour le canyon des Oules de Freissinières
    .setLngLat([6.26517, 44.43485]) // Coordonnées du canyon des Oules de Freissinières
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
                <h3>Canyon des Oules de Freissinières</h3>
                <p>Un des plus beaux canyons d’Europe !</p>
                <a href="pages/canyon_des_oules_de_freissinieres.html" target="_blank">Plus d'infos</a>
            `)
    )
    .addTo(map);

// Canyon du Verdon
const markerVerdon = new mapboxgl.Marker({ element: createCustomMarker('red') })  // Marqueur pour le canyon du Verdon
    .setLngLat([6.9561, 43.8374]) // Coordonnées du canyon du Verdon
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
                <h3>Canyon du Verdon</h3>
                <p>Un des plus beaux canyons d’Europe !</p>
                <a href="pages/verdon.html" target="_blank">Plus d'infos</a>
            `)
    )
    .addTo(map);

// Canyon des Ecouges
const markerEcouges = new mapboxgl.Marker({ element: createCustomMarker('green') })  // Marqueur pour le canyon des Ecouges
    .setLngLat([5.5638, 45.3057]) // Coordonnées du canyon des Ecouges
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
                <h3>Canyon des Ecouges</h3>
                <p>Un des plus beaux canyons d’Europe !</p>
                <a href="pages/canyon_des_ecouges.html" target="_blank">Plus d'infos</a>
            `)
    )
    .addTo(map);

// Fonction pour créer un marqueur personnalisé
function createCustomMarker(color) {
    const div = document.createElement('div');
    div.className = 'custom-marker';
    div.style.width = '10px';  // Largeur du marqueur
    div.style.height = '10px'; // Hauteur du marqueur
    div.style.backgroundColor = color; // Couleur dynamique du marqueur (passée en argument)
    div.style.borderRadius = '50%'; // Forme ronde
    div.style.cursor = 'pointer';
    return div;
}

// ----- Code d'authentification et gestion du bouton "S'identifier" / "Mon compte" -----
// Exemple d'authentification simulée (en réalité, vous devriez utiliser des sessions ou des cookies)
let isLoggedIn = true;  // Cette variable peut être mise à true lorsqu'un utilisateur est connecté.

// Fonction pour mettre à jour le bouton selon l'état de la connexion
function updateAuthButton() {
    const authButton = document.getElementById('authButton');
    
    if (isLoggedIn) {
        // Si l'utilisateur est connecté, afficher "Mon compte"
        authButton.textContent = "Mon compte";
    } else {
        // Si l'utilisateur n'est pas connecté, afficher "S'identifier"
        authButton.textContent = "S'identifier";
    }
}

// Appel initial de la fonction pour définir l'état du bouton
updateAuthButton();

// Ajout d'un gestionnaire d'événement pour simuler la connexion/déconnexion
document.getElementById('authButton').addEventListener('click', function() {
    isLoggedIn = !isLoggedIn;  // Inverse l'état de connexion
    updateAuthButton();        // Met à jour le texte du bouton en fonction de l'état
});
