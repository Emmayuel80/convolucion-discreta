function calculateFinita(){
    var x = math.evaluate(document.getElementById("textSecuenciaXnFinita").value.split(","));
    var h = math.evaluate(document.getElementById("textSecuenciaHnFinita").value.split(","));
    var origen = [];
    origen[0] = math.evaluate(document.getElementById("indiceXnFinita").value);
    origen[1] = math.evaluate(document.getElementById("indiceHnFinita").value);
    var resultado = convolucionDiscreta(x,h,origen);
    console.table(x,h,origen)
    cleanApplet(xnApplet);
    cleanApplet(hnApplet);
    cleanApplet(ynApplet);
    graficarSeg(xnApplet,x,origen[0]);
    graficarSeg(hnApplet,h,origen[1]);
    graficarSeg(ynApplet,resultado.vector,resultado.origenIndex);
    document.getElementById("resultado").innerText = `y(n)={${resultado.vector}} con origen en ${resultado.origen}`;
}