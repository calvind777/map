var nameLocationWork = [];
var myLocLatLng;
var pointPairs = [];
nameLocationWork.push = function() {
    geocodeAddress(geocoder, arguments[0].location, function(success, location) {
        if(success){
            if (!myLocLatLng && myLocation) {
                geocodeAddress(geocoder, myLocation, function(success, location) {
                    myLocLatLng = [location.lat(), location.lng()];
                });
            }
            pointPairs.push([myLocLatLng,[location.lat(), location.lng()]]);
            setData(pointPairs, false);
            console.log("Added " + arguments[0].location);
        }
    });
    return Array.prototype.push.apply(this, arguments);
};
