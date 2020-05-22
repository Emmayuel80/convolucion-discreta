//=================================================
//======Funcion que calcula todo===================
function convolucionPeriodica(x,h,origen,periodo){
    const resultado = convolucionDiscreta(x,h,origen);
    let maxLength = periodo;
    let splitResults = create2DArray(Math.floor(resultado.vector.length/maxLength)+1);
    let cont = 0;
    //Generando matriz para separar los terminos
    for (let i = 0; i < Math.floor(resultado.vector.length/maxLength)+1 ; i++) {
        for (let j = 0; j < maxLength; j++) {
                splitResults[i][j] = resultado.vector[cont] ? resultado.vector[cont] : 0;
                cont++;
        }
    }
    //auxiliar para resultados
    let result = [];
    for (let z = 0; z < maxLength ; z++) {
        result[z] = 0;
    }
    //Realizar la suma
    for (let i = 0; i < splitResults.length; i++) {
        for (let g = 0; g < splitResults[0].length; g++) {
            result[g] += splitResults[i][g];
        }
    }
    let finalArray = [0,0,0];
    resultado.vector = finalArray.fill(result).flat();
    resultado.origen = resultado.vector[resultado.origenIndex];
    console.table(resultado);
    return resultado;
}
//=============Modulos=============================

function create2DArray(size){
    //Inicializa los arreglos con arreglos adentro
    let matrix = [];
    for (let i = 0; i < size; i++) {
        matrix[i] = [];        
    }
    return matrix;
}

/* function compararPeriodos(x,periodo){
    if(periodo > x.length) return periodo;
    else return x.length;
} */

