var geocoder = new google.maps.Geocoder();
var user = {
    name: "Shivam Thapar",
    location: "San Francisco, CA",
    work: [
        {
            name: "Evernote",
            location: "Redwood City, CA"
        },
        {
            name: "WalmartLabs",
            location: "San Bruno, CA"
        },
        {
            name: "GEEMICHAEL",
            location: "Shanghai, China"
        }
    ]
};

function initMap() {
    geocodeAddress(geocoder, user.location, function(success, location) {
        if(success){
            user.locationCoords = [location.lat(), location.lng()];
        }
    });
    for( var i = 0; i < user.work.length; i++) {
        (function(index){
            geocodeAddress(geocoder, user.work[index].location, function(success, location) {
                user.work[index].locationCoords = [location.lat(), location.lng()];
                if(index === user.work.length - 1) {
                    locationDataLoaded();
                }
            });
        })(i);
    }
}

function geocodeAddress(geocoder, address, callback) {
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            callback(true, results[0].geometry.location);
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
            callback(false, {});
        }
    });
}

function locationDataLoaded() {
    console.log("User location data loaded", user);
}
