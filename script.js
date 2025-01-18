mapboxgl.accessToken = 'VOTRE_CLE_API'; // Remplacez par votre clé API Mapbox
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [2.3522, 48.8566], // Coordonnées de Paris
    zoom: 10
});
