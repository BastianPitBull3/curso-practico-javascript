function calcularMediaAritmética (lista) {
    let sumaLista = 0;

    for (let i = 0; i < lista.length; i++) {
        sumaLista += lista[i];
    }
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

