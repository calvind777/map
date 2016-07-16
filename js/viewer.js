var WIDTH, HEIGHT;
var camera, renderer, scene, bg;
var earth, mat, geom, tex, ellipse;
var group = new THREE.Object3D();
var rootMesh;

var lines = [];
var balls = [];

var LINECOLOR = 0xaaffff;
var MARKCOLOR = 0xffffff;
var ROOTCOLOR = 0x4488ff;
var HIGHLIGHT = 0x0000ff;
var DOTSIZE = 0.05;
var ELEVATION = 2;
var LINEWIDTH = 1;
var OFFSET = 15;
var controls;

var rot = true;

var raycaster = new THREE.Raycaster();
var mouse = {};

init();

function init() {

    ////////// NEEDED STUFF
    var canvas = document.getElementById("container");
    canvas.setAttribute("style","width:90%");
    canvas.setAttribute("style","height:90%");
    WIDTH = window.innerWidth * 2/3;
    HEIGHT = window.innerHeight;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(30, WIDTH / HEIGHT, 0.0001, 1000);
    camera.position.z = 2.5;
    scene.add(camera);

    // ////////// LIGHT
    var light = new THREE.PointLight(0xffffff, 1, 10000);
    light.position.set(1.1, 1.1, 1.1);
    scene.add(light);
    
    var light = new THREE.AmbientLight( 0xbbbbbb ); // soft white light
    scene.add( light );

    // ////////// GEOMETRY AND MESHES
    geom = new THREE.SphereGeometry(0.5, 100, 100);

    var loader = new THREE.TextureLoader();
    var bgl = loader.load("img/bg.jpg");
    var diffuse = loader.load("img/earthdiffuse.jpg");
    var alpha = loader.load("img/earthalpha.jpg");
    var bump = loader.load("img/earthbump.jpg");
    
    mat = new THREE.MeshPhongMaterial({
        map: diffuse,
        bumpMap: bump,
        bumpScale: 0.02,
        specularMap: alpha,
        specular: new THREE.Color("#111111"),
        wireframe: true,
    });
    earth = new THREE.Mesh(geom, mat);

    bg = new THREE.Mesh(new THREE.SphereGeometry(5), new THREE.MeshBasicMaterial({
        map: bgl,
        side: THREE.DoubleSide
    }));
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(WIDTH, HEIGHT);
    controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    ////////// events
    document.addEventListener("click", disturb, false);
    
    document.body.onkeyup = function(e) {
        if (e.keyCode == 187) {
            rot = !rot; 
        }
    }
    
    canvas.appendChild(renderer.domElement);    

    ///////////// get data
    //TODO: put actual data here
    var sf = [37.774929, -122.41941550000001];
    var locs = [];
    for (var k = 0; k < 20; k++) {
        locs.push([sf,[Math.random() * 360 - 180, Math.random() * 360 - 180]]);
    }

    var works =  {
        work: [
            {locationCoords: [Math.random() * 360 - 180, Math.random() * 360 - 180]},
            {locationCoords: [Math.random() * 360 - 180, Math.random() * 360 - 180]},
            {locationCoords: [Math.random() * 360 - 180, Math.random() * 360 - 180]},
            {locationCoords: [Math.random() * 360 - 180, Math.random() * 360 - 180]},
            {locationCoords: [Math.random() * 360 - 180, Math.random() * 360 - 180]}
        ]};

    setData(locs);

    addToGroup();

    animate();
}

function addToGroup() {
    group = new THREE.Object3D();
    group.add(earth);
    group.add(bg);
    var lineSet = new Set(lines);
    lineSet.forEach(function(x) {
        group.add(x);
    });
    var ballSet = new Set(balls);
    ballSet.forEach(function(x) {
        group.add(x);
    });
    scene.add(group);
}
var isClicked = false;
function disturb(e, click) {
    mouse.x = e.clientX / WIDTH * 2 - 1;
    mouse.y = e.clientY / HEIGHT * -2 + 1;
    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(balls);

    var w = new THREE.Color(MARKCOLOR);
    var y = new THREE.Color(HIGHLIGHT);
    var p = new THREE.Color(ROOTCOLOR);
    if (intersects.length > 0) {
        console.log(intersects);
        var mesh = intersects[0].object;
        isClicked = true;
        if (mesh.material.color.b !== y) {
            balls.forEach(function(b) {
                if (b.position.x == rootMesh.position.x &&
                    b.position.y == rootMesh.position.y &&
                    b.position.z == rootMesh.position.z)
                    b.material.color = p;
                else
                    b.material.color = w;
            });
            mesh.material.color = y;
            
        }



        var vector3 = mesh.position;
            var ltln = vector3ToLatLong(vector3, 0.5);
            console.log(5);
            for (var a = 0; a < nameLocationWork.length ;a++) {
                if (nameLocationWork[a].locationCoords.lat == ltln.lat && nameLocationWork[a].locationCoords.lng == ltln.lng) {
                    clickedCity = nameLocationWork[a].substring(0,nameLocationWork[a].location.indexOf(','));
                    alert(clickedCity);
                }
            }
        rot = false;
    }
}

function getCity(geocoder,latlon,callback) {
    geocoder.geocode({'location': latlon}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            callback(true, results[0]);
        } else {

            callback(false, {});
        }
    });
}



function setData(data) {
    clearData();
    renderData(data);
}

function setHistory(person) {
    clearData();
    var arr = [];
    var works = person.work;
    for (var k = 0; k < works.length - 1; k++) {
        var start = works[k];
        var end = works[k+1];
        arr.push([start, end]);
    }
    console.log(arr);
    renderHistory(arr);
}

function renderHistory(arr) {
    arr.forEach(function(arc) {
        var start = latLongToVector3(arc[0].locationCoords[0], arc[0].locationCoords[1], 0.5, 0);
        var end = latLongToVector3(arc[1].locationCoords[0], arc[1].locationCoords[1], 0.5, 0);
        makeLink(start, end, DOTSIZE, ELEVATION, LINEWIDTH);
    });
    var root = latLongToVector3(arr[0][0].locationCoords[0], arr[0][0].locationCoords[1], 0.5, 0);
    rootMesh = mark(root.x, root.y, root.z, DOTSIZE * 1.5);
    rootMesh.material.color = new THREE.Color(ROOTCOLOR);
    balls.push(rootMesh);
    addToGroup();
}

function clearData() {
    lines.forEach(function(s) {
        scene.remove(s);
    });
    lines = [];
    
    balls.forEach(function(s) {
        scene.remove(s);
    });
    balls = [];
    scene.remove(group);
}

function renderData(arr) {
    arr.forEach(function(arc, i) {
        var start = latLongToVector3(arc[0][0], arc[0][1], 0.5, 0);
        var end = latLongToVector3(arc[1][0], arc[1][1], 0.5, 0);
        var dist = new THREE.Vector3(start.x - end.x,
                                     start.y - end.y,
                                     start.z - end.z);
        makeLink(start, end, DOTSIZE, ELEVATION, LINEWIDTH);
    });
    if (arr.length != 0) {
        var root = latLongToVector3(arr[0][0][0], arr[0][0][1], 0.5, 0);
        rootMesh = mark(root.x, root.y, root.z, 0.05);
        rootMesh.material.color = new THREE.Color(ROOTCOLOR);
    }
    balls.push(rootMesh);
    addToGroup();
}

function makeLink(loc1, loc2, dotsize, elevation, width) {
    balls.push(mark(loc2.x, loc2.y, loc2.z, dotsize));
    for (var k = 0; k < Math.random() * 5; k++) {
        lines.push(draw(loc1, loc2, elevation * Math.random(), width));
        lines.push(draw(loc1, loc2, elevation * Math.random(), width));
        lines.push(draw(loc1, loc2, elevation * Math.random(), width));
        lines.push(draw(loc1, loc2, elevation * Math.random(), width));
        lines.push(draw(loc1, loc2, elevation * Math.random(), width));
    }
}

function draw(v1, v2, elevation, width) {
    var midpoint = new THREE.Vector3((v1.x + v2.x) / 2, (v1.y + v2.y) / 2, (v1.z + v2.z) / 2);
    var scaled = new THREE.Vector3(midpoint.x * elevation, midpoint.y * elevation, midpoint.z * elevation);
    var curveQuad = new THREE.QuadraticBezierCurve3(v1, scaled, v2);
    var cp = new THREE.CurvePath();
    cp.add(curveQuad);
    var curvedLineMaterial =  new THREE.LineBasicMaterial({color: LINECOLOR, linewidth: width});
    var curvedLine = new THREE.Line(cp.createPointsGeometry(20), curvedLineMaterial);
    return curvedLine;
}

function mark(x, y, z, r) {
    var geom = new THREE.SphereGeometry(r * Math.random() , 20, 20);
    var mat = new THREE.MeshLambertMaterial({
        color: MARKCOLOR,
        //transparent: true,
        //opacity: 0.3,
        // emissive: new THREE.Color("#ffffff")
        
    });
    var m = new THREE.Mesh(geom, mat);
    m.position.set(x, y, z);
    return m;
}

function latLongToVector3(lat, lon, radius, height) {
    var phi = (lat)*Math.PI/180;
    var theta = (lon-180)*Math.PI/180;
    
    var x = -(radius+height) * Math.cos(phi) * Math.cos(theta);
    var y = (radius+height) * Math.sin(phi);
    var z = (radius+height) * Math.cos(phi) * Math.sin(theta);
    
    var asdf =  new THREE.Vector3(x,y,z);
    return asdf;
}

function vector3ToLatLong(v, radius) {
    var vx = v.x / radius
    var vy = v.y / radius
    var vz = v.z / radius

    var phi = Math.atan2(vz, Math.sqrt(vx*vx + vy*vy));
    var theta = Math.atan2(vy, vx);

    var lat = phi*180/Math.PI;
    var lon = theta*180/Math.PI + 180;
    
    return new google.maps.LatLng({'lat':lat,'lng':lng});
}

function animate() {
    requestAnimationFrame(animate);
    if (rot)
        group.rotation.y += 0.001;
    renderer.render(scene, camera);
}
