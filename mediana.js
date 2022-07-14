function calcularMediaAritmética (lista) {

    /*let sumaLista = 0;

    for (let i = 0; i < lista.length; i++) {
        sumaLista += lista[i];
    }*/

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function calcularMediana(lista) {
    const listaSorted = lista.sort();
    
    const mitadLista = parseInt(listaSorted.length / 2);
    
    function esPar(numero) {
        if(numero % 2 === 0) {
            return true;
        }else {
            return false
        };
    }
    let mediana;
    
    if (esPar(listaSorted.length)) {
        const elemento1 = listaSorted[mitadLista - 1];
        const elemento2 = listaSorted[mitadLista];
    
        const promedioElemetos = calcularMediaAritmética([elemento1, elemento2]);
    
        mediana = promedioElemetos;
    }else {
        mediana = listaSorted[mitadLista];
    }
    
    console.log("Lista en orden: " + listaSorted);
    return mediana;
}