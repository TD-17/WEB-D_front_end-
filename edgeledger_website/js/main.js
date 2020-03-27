function initMap()
{
    const loc={lat: 26.912434, lng:75.787270};
    const map= new google.maps.Map(document.querySelector('.map')
    ,{
        zoom: 14,
        center: loc
    });
    const marker = new google.maps.Marker({position: loc, map: map});
}