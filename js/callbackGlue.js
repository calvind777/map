var nameLocationWork = [];
var myLocLatLng;
var pointPairs = [];

function myLocCallback(loc) {
    geocodeAddress(geocoder, loc, function(success, location) {
        myLocLatLng = [location.lat(), location.lng()];
        console.log("Got myLocation");
    });
}

var locked = false;

nameLocationWork.push = function() {
    while (locked) {
        setTimeout(function() {}, 250);
    }
    locked = true;
    geocodeAddress(geocoder, arguments[0].location, function(success, location) {
        if(success){
            pointPairs.push([myLocLatLng,[location.lat(), location.lng()]]);
            setData(pointPairs, false);
            console.log("Added " + arguments[0].location);
        } else {
            setTimeout(function() {}, 500);
            return nameLocationWork.push(arguments[0]);
        }
    });
    locked = false;
    return Array.prototype.push.apply(this, arguments);
};
