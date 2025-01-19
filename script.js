// Remplacez par votre clé API Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoibmlvazA1IiwiYSI6ImNtNjM5eHViajB5NHUyanNieHh1aXhmaHEifQ.GM03E2nJ0GbveLxYEFtpfw';

// Créez la carte
const map = new mapboxgl.Map({
    container: 'map', // ID de l'élément HTML où afficher la carte
    style: 'mapbox://styles/mapbox/satellite-v9', // Style de la carte
    center: [6.4960, 44.5652], // Coordonnées initiales : Embrun (longitude, latitude)
    zoom: 5 // Niveau de zoom initial (5 = vue régionale, 10 = vue locale)
});

// Ajoutez des contrôles de navigation (zoom et rotation)
map.addControl(new mapboxgl.NavigationControl());

// Canyon des Oules de Freissinières

const marker1 = new mapboxgl.Marker({ color: 'blue' })
element: createCustomMarker() // Utilisation de notre fonction pour créer un marqueur personnalisé
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
const marker1 = new mapboxgl.Marker({ color: 'blue' })
element: createCustomMarker() // Utilisation de notre fonction pour créer un marqueur personnalisé
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
const marker2 = new mapboxgl.Marker({ color: 'red' })
element: createCustomMarker() // Utilisation de notre fonction pour créer un marqueur personnalisé
    .setLngLat([5.5638, 45.3057]) // Coordonnées du canyon des Ecouges
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
                <h3>Canyon de Verdon</h3>
                <p>Un des plus beaux canyons d’Europe !</p>
                <a href="pages/canyon_des_ecouges.html" target="_blank">Plus d'infos</a>
            `)
    )
    .addTo(map);

// Vous pouvez ajouter plus de marqueurs en répétant le code ci-dessus pour chaque canyon.

__________
// Fonction pour créer un marqueur personnalisé
function createCustomMarker() {
    const div = document.createElement('div');
    div.className = 'custom-marker';
    div.style.width = '20px';  // Largeur du marqueur
    div.style.height = '20px'; // Hauteur du marqueur
    div.style.backgroundColor = 'blue'; // Couleur du marqueur
    div.style.borderRadius = '50%'; // Forme ronde
    div.style.cursor = 'pointer';
    return div;
}

