function graficarSeg(applet, x, origen){
    let n= origen * -1;
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        applet.evalCommand(`Segment((${n},0),(${n},${element}))`);
        applet.evalCommand(`(${n},${element})`);
        n++;
    }
}

function cleanApplet(applet){
    let length = applet.getObjectNumber(); 
    let i=0; 
    let names=new Array(); 

    for(i=0;i<length;i++){ 
        names.push(applet.getObjectName(i)); 
    } 

    for(i=0;i<length;i++){ 
        applet.deleteObject(names); 
    } 
}