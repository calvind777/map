var map;
function showMap() {
  console.log(myLocLatLng);
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: myLocLatLng[0], lng: myLocLatLng[1]}
  });
  $("#container").toggle();
  $("#map").toggle();
  placeMarkersForFriends();
}

function placeMarkersForFriends() {
  console.log(nameLocationWork);
  for(var i = 0; i < nameLocationWork.length; i++) {
    var employment = nameLocationWork[i].work;
    if(employment){
      var mostRecentLocation = employment[0].location;
      if(mostRecentLocation){
        var latlong = geocodeAddress(geocoder, mostRecentLocation, function(success, location) {
          var marker = new google.maps.Marker({
            position: location,
            map: map,
            title: employment[0].name
          });
        });
      }
    }
  }
}
