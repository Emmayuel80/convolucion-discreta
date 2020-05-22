// //Variables preasignadas
// const x = [-10,4,0.25,-1,0,2];
// const h = [3,-7,11,9,-5];
// const origen = [2,3];   //Indices indicando cuales son los origenes en cada funcion
// //=================================================
// console.table(convolucionDiscreta(x,h,origen)); //Prueba
//=================================================
//======Funcion que calcula todo===================
function convolucionDiscreta(x,h,origen){
    let multiplicacion = multiplicacionInversa(x,h);
    let resultado = {
        "vector": calcularVector(multiplicacion),
        "origenIndex": calcularOrigen(origen),
        "origen": 0
    };
    resultado.origen = resultado.vector[resultado.origenIndex];
    //=========DEBUG juasjuasjuas=================
    //console.table(multiplicacion)
    //console.table(resultado.vector);
    //console.log(`El origen esta en el indice ${resultado.origenIndex} que corresponde a ${resultado.origen}`);
    //============================================
    return resultado; //Regresa un Objeto con el resultado
}
//=============Modulos=============================
function multiplicacionInversa(x, h){
    //Realiza la multiplicacion algebraica inversa
    let operad = create2DArray(h.length);
    for (let i = 0; i < h.length; i++) {
        for (let g = 0; g < x.length; g++) {
                operad[i][g] = h[i] * x[g];
        }
    }
    return operad;
}

function create2DArray(size){
    //Inicializa los arreglos con arreglos adentro
    let matrix = [];
    for (let i = 0; i < size; i++) {
        matrix[i] = [];        
    }
    return matrix;
}

function calcularVector(multiplicacion){
    //Realiza la suma en diagonal de la matriz
    const HEIGHT = multiplicacion.length;
    const WIDTH = multiplicacion[0].length;
    const vector = [];
    for (let z = 0; z < (WIDTH + (HEIGHT - 1)) ; z++) {
        vector[z] = 0;
    }
    for(let k = 0 ; k <= WIDTH + HEIGHT - 2; k++ ) {
        for(let j = 0 ; j <= k ; j++ ) {
            let i = k - j;
            if( i < HEIGHT && j < WIDTH ) {
                vector[k] += multiplicacion[i][j];
            }
        }
    }
    return vector;
}

function calcularOrigen(origen){
    //Calcula nfy
    let nfy = origen[0] + origen[1];
    return nfy;
}

