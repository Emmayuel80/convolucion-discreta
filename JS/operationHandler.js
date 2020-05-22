function calculateFinita(){
    var x,h;
    var origen = [];
    try{
    x = math.evaluate(document.getElementById("textSecuenciaXnFinita").value.split(","));
    h = math.evaluate(document.getElementById("textSecuenciaHnFinita").value.split(","));
    origen[0] = math.evaluate(document.getElementById("indiceXnFinita").value) * -1;
    origen[1] = math.evaluate(document.getElementById("indiceHnFinita").value) * -1;
    } catch(e){
        document.getElementById("errorFinita").innerText = e.message;
    }
    if(x && h && origen){
    let resultado = convolucionDiscreta(x,h,origen);
    imprimirResultado(x,h,origen,resultado);
    document.getElementById("errorFinita").innerText = "";
    cambiarTab("tabConvInfinita", "tab1");
    }
}

function calculatePeriodica(){
    var x,h,periodo;
    var origen = [];
    try{
    x = math.evaluate(document.getElementById("textSecuenciaXnPeriodica").value.split(","));
    h = math.evaluate(document.getElementById("textSecuenciaHnPeriodica").value.split(","));
    origen[0] = math.evaluate(document.getElementById("indiceXnPeriodica").value) * -1;
    origen[1] = math.evaluate(document.getElementById("indiceHnPeriodica").value) * -1;
    periodo = math.evaluate(document.getElementById("periodoHnPeriodica").value);
    } catch(e){
        document.getElementById("errorPeriodica").innerText = e.message;
    }
    if(x && h && origen && periodo){
    let resultado = convolucionPeriodica(x,h,origen,periodo);
    imprimirResultado(x,h,origen,resultado);
    document.getElementById("errorPeriodica").innerText = "";
    cambiarTab("tabConvPeriodica", "tab2");
    }
}

function calculateCircular(){
    var x,h;
    var origen = [];
    var periodos = [];
    try{
    x = math.evaluate(document.getElementById("textSecuenciaXnCircular").value.split(","));
    h = math.evaluate(document.getElementById("textSecuenciaHnCircular").value.split(","));
    origen[0] = math.evaluate(document.getElementById("indiceXnCircular").value) * -1;
    origen[1] = math.evaluate(document.getElementById("indiceHnCircular").value) * -1;
    periodos[0] = math.evaluate(document.getElementById("periodoXnCircular").value);
    periodos[1] = math.evaluate(document.getElementById("periodoHnCircular").value);
    } catch(e){
        document.getElementById("errorCircular").innerText = e.message;
    }
    if(x && h && origen && periodos){
    let resultado = convolucionCircular(x,h,origen,periodos);
    imprimirResultado(x,h,origen,resultado);
    document.getElementById("errorCircular").innerText = "";
    cambiarTab("tabConvCircular", "tab3");
    }
}

function imprimirResultado(x,h,origen,resultado){
    cleanApplet(xnApplet);
    cleanApplet(hnApplet);
    cleanApplet(ynApplet);
    graficarSeg(xnApplet,x,origen[0]);
    graficarSeg(hnApplet,h,origen[1]);
    graficarSeg(ynApplet,resultado.vector,resultado.origenIndex);
    document.getElementById("resultado").innerText = `y(n)={${resultado.vector}} con origen en ${resultado.origen}`;
}

function cambiarTab(tabActual, noTab) {
    document.getElementById(noTab).className = "mdl-layout__tab";
    document.getElementById(tabActual).className = "mdl-layout__tab-panel";
    document.getElementById("tab4").className = "mdl-layout__tab is-active";
    document.getElementById("tabGraficas").className = "mdl-layout__tab-panel is-active";
}