var nameLocationWork = [];
var myLocLatLng;
var pointPairs = [];
nameLocationWork.push = function() {
    if (!myLocLatLng && myLocation) {
        geocodeAddress(geocoder, myLocation, function(success, location) {
            myLocLatLng = [location.lat(), location.lng()];
        });
        console.log("Got myLocation");
    }
    geocodeAddress(geocoder, arguments[0].location, function(success, location) {
        if(success){
            pointPairs.push([myLocLatLng,[location.lat(), location.lng()]]);
            setData(pointPairs, false);
            console.log("Added " + arguments[0].location);
        } else {
            setTimeout(function() {}, 500)
            return nameLocationWork.push(arguments[0]);
        }
    });
    return Array.prototype.push.apply(this, arguments);
};
