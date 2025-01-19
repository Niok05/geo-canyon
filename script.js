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

// Canyon du Verdon
const marker1 = new mapboxgl.Marker({ color: 'blue' })
    .setLngLat([6.9561, 43.8374]) // Coordonnées du canyon du Verdon
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
                <h3>Canyon du Verdon</h3>
                <p>Un des plus beaux canyons d’Europe !</p>
                <a href="verdon.html" target="_blank">Plus d'infos</a>
            `)
    )
    .addTo(map);

// Canyon des Ecouges
const marker2 = new mapboxgl.Marker({ color: 'red' })
    .setLngLat([5.5638, 45.3057]) // Coordonnées du canyon des Ecouges
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
                <h3>Canyon de Verdon</h3>
                <p>Un des plus beaux canyons d’Europe !</p>
                <a href="canyon_des_ecouges.html" target="_blank">Plus d'infos</a>
            `)
    )
    .addTo(map);

// Vous pouvez ajouter plus de marqueurs en répétant le code ci-dessus pour chaque canyon.
