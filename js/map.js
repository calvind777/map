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
  nameLocationWork.forEach(function(e, i) {
      var employment = nameLocationWork[i].work;
      if(employment){
        var mostRecentLocation = employment[0].location;
        setTimeout(function(){
            geocodeAddress(geocoder, e.location, function(success, location) {
              if(success){
                var marker = new google.maps.Marker({
                  position: location,
                  map: map,
                  title: employment[0].name
                });
              }
            });
        }, 500*(i+1));
     }
  });
}
