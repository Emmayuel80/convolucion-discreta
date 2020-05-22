var ggbApp = new GGBApplet({"width": 800, "height": 600, "showToolBar": false, "showAlgebraInput": false, "showMenuBar": false, "id": "xnApplet"}, true);
window.addEventListener("load", function() { 
    ggbApp.inject('xnGraph');
});

var ggbApp2 = new GGBApplet({"width": 800, "height": 600, "showToolBar": false, "showAlgebraInput": false, "showMenuBar": false, "id": "hnApplet"}, true);
window.addEventListener("load", function() { 
    ggbApp2.inject('hnGraph');
});

var ggbApp3 = new GGBApplet({"width": 800, "height": 600, "showToolBar": false, "showAlgebraInput": false, "showMenuBar": false, "id": "ynApplet"}, true);
window.addEventListener("load", function() { 
    ggbApp3.inject('ynGraph');
});