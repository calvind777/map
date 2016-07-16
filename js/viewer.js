var camera, renderer, scene, bg;
var earth, mat, geom, tex, ellipse;
var group;

var stuff = [];

var LINECOLOR = 0x33ccff;
var MARKCOLOR = 0xffffff;

var controls;

var rot = true;

init();

function init() {

    ////////// NEEDED STUFF
    var canvas = document.getElementById("container");
    canvas.setAttribute("style","width:90%");
    canvas.setAttribute("style","height:90%");
    var WIDTH = window.innerWidth;
    var HEIGHT = window.innerHeight;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(30, WIDTH / HEIGHT, 0.0001, 1000);
    camera.position.z = 3;
    camera.rotation.z = -.5;
    scene.add(camera);

    // ////////// LIGHT
    var light = new THREE.PointLight(0xffffff, 1, 10000);
    light.position.set(1.1, 1.1, 1.1);
    scene.add(light);
    
    var light = new THREE.AmbientLight( 0xbbbbbb ); // soft white light
    scene.add( light );

    // ////////// GEOMETRY AND MESHES
    geom = new THREE.SphereGeometry(0.5, 20, 20);

    var loader = new THREE.TextureLoader();
    var bg = loader.load("img/bg.jpg");
    var diffuse = loader.load("img/earthdiffuse.jpg");
    var alpha = loader.load("img/earthalpha.jpg");
    var bump = loader.load("img/earthbump.jpg");
    
    mat = new THREE.MeshPhongMaterial({
        map: diffuse,
        bumpMap: bump,
        bumpScale: 0.02,
        specularMap: alpha,
        specular: new THREE.Color("#111111"),
    });
    earth = new THREE.Mesh(geom, mat);

    bg = new THREE.Mesh(new THREE.SphereGeometry(5), new THREE.MeshBasicMaterial({
        map: bg,
        side: THREE.DoubleSide
    }));
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(WIDTH, HEIGHT);
    controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    document.body.onkeyup = function(e) {
        if (e.keyCode == 187) {
            rot = !rot; 
        }
    }
    
    canvas.appendChild(renderer.domElement);    

    ///////////// get data
    var locs = setData([], true);

    renderData(locs);

    group = new THREE.Object3D();
    group.add(earth);
    stuff.forEach(function(x) {
        group.add(x);
    });

    group.add(bg);
    scene.add(group);
    
    animate();
}

function setData(data, debug) {
    if (debug) {
        var cities = [
            [37.774929, -122.41941550000001],
            [42.3600825, -71.05888010000001],
            [31.230416, 121.473701]
        ];

        for (var k = 0; k < 10; k++) {
            cities.push([Math.random() * 360 - 180, Math.random() * 360 - 180]);
        }

        var locs = [];

        for (var k = 1; k < cities.length; k++) {
            locs.push([cities[0], cities[k]]);
        }
        return locs;
    }
    stuff.forEach(function(s) {
        scene.remove(s);
    });
    stuff = [];
    return data;
}

function renderData(arr) {
    arr.forEach(function(arc) {
        var start = latLongToVector3(arc[0][0], arc[0][1], 0.5, 0);
        var end = latLongToVector3(arc[1][0], arc[1][1], 0.5, 0);
        var dist = new THREE.Vector3(start.x - end.x,
                                     start.y - end.y,
                                     start.z - end.z);
        var magdist = Math.sqrt(dist.x*dist.x, dist.y*dist.y, dist.z* dist.z);
        console.log(magdist);
        makeLink(start, end, 0.02, magdist * 10, 10);
    });
}

function makeLink(loc1, loc2, dotsize, elevation, width) {
    stuff.push(mark(loc1.x, loc1.y, loc1.z, dotsize));
    stuff.push(mark(loc2.x, loc2.y, loc2.z, dotsize));
    stuff.push(draw(loc1, loc2, elevation, width));
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
    var geom = new THREE.SphereGeometry(r, 20, 20);
    var mat = new THREE.MeshBasicMaterial({
        color: MARKCOLOR
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


function animate() {
    requestAnimationFrame(animate);
    if (rot)
        group.rotation.y += 0.01;
    renderer.render(scene, camera);
}
