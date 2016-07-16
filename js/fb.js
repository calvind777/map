// This is called with the results from from FB.getLoginStatus().
function statusChangeCallback(response) {
    //  console.log('statusChangeCallback');
    //  console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        testAPI();
    } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        document.getElementById('status').innerHTML = 'Please log ' +
            'into this app.';
    } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        document.getElementById('status').innerHTML = 'Please log ' +
            'into Facebook.';
    }
}


function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

window.fbAsyncInit = function() {
    FB.init({
        appId      : '752555141554262',
        cookie     : true,  // enable cookies to allow the server to access 
        // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.5' // use graph api version 2.5
    });

    // Now that we've initialized the JavaScript SDK, we call 
    // FB.getLoginStatus().  This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide.  They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    //
    // These three cases are handled in the callback function.

    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });

};


(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var myLocation;
var nameLocationWork = [];
var employerLocations = [];
function testAPI() {
    
    FB.api('/me', 
           {fields: 'work,location'},
           function(response) {
               myLocation = response.location.name;
           });

    FB.api('/me/friends', function(response) {
        //console.log(response);
        //format: [{name:yourname, location:yourlocation, work:yourwork}, {name:yourname, location:yourlocation, work:yourwork}, etc]
        for (var a = 0; a < response.data.length; a ++) {
            var id = response.data[a].id;
            var name = response.data[a].name;

            getWork(id,name);

        }

    });

    setTimeout(function() {
        var myLocLatLng;
        var arcs = [];
        geocodeAddress(geocoder, myLocation, function(success, location) {
            if(success){
                myLocLatLng = [location.lat(), location.lng()];
            }
        });
        setTimeout(function(){}, 250);
        nameLocationWork.forEach(function(e, i) {
            setTimeout(function(){
                geocodeAddress(geocoder, e.location, function(success, location) {
                    if(success){
                        arcs.push([myLocLatLng, [location.lat(), location.lng()]]);
                    }
                });
                console.log("index; ", i);
                if (i === nameLocationWork.length - 1) {
                    console.log("arcs", arcs);
                    setData(arcs);
                }
            }, 250*i);
        });
        console.log(nameLocationWork);
    }, 1500);

}
var fail = 0;
var tot = 0;
function getWork(id,personName) {
    FB.api(id, {fields: 'work,location,name'}, function(response) {
        var name = response.name;
        var employers = [];
        //console.log({'MY FRIEND':response});
        if (response.work != null) {
            for (var b = 0; b < response.work.length;b++) {
                
                
                
                var employer = response.work[b].employer.name;
                // console.log(response.work[b]);
                if (response.work[b].location == null) {
                    fail = fail + 1;
                    employers.push({'name':employer, 'location': null});
                }
                else {
                    employers.push({'name':employer, 'location': response.work[b].location.name});
                }
                tot = tot+1;

                // console.log(employers);
                
                
            }
            nameLocationWork.push({'name':name, 'location':response.location.name, 'work':employers});
            // console.log(tot);
            // for (var c = 0; c < employerLocations.length;c++) {
            // 	employers[c].location = employerLocations[c];
            // }
	    			// employerLocations = [];
    		}
    		// console.log(fail);
    });
}
