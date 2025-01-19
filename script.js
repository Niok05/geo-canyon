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

// Exemple : Ajouter un marqueur avec une info-bulle pour un canyon
const marker1 = new mapboxgl.Marker({ color: 'blue' }) // Couleur du marqueur
    .setLngLat([6.9561, 43.8374]) // Coordonnées du canyon de Verdon (longitude, latitude)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // Décalage pour positionner la popup
            .setHTML('<h3>Canyon de Verdon</h3><p>Un des plus beaux canyons d’Europe !</p>')
    ) // Contenu HTML de l'info-bulle
    .addTo(map); // Ajout du marqueur à la carte

// Exemple : Ajouter un deuxième marqueur pour un autre canyon
const marker2 = new mapboxgl.Marker({ color: 'red' })
    .setLngLat([5.5638, 45.3057]) // Coordonnées du canyon des Ecouges
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML('<h3>Canyon des Ecouges</h3><p>Aventure et adrénaline garanties !</p>')
    )
    .addTo(map);

// Vous pouvez ajouter plus de marqueurs en répétant le code ci-dessus pour chaque canyon.
