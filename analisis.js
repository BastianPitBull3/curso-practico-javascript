//Helpers

function isPair(number) {
    return (number % 2 === 0);
};

function calcularMediaAritmética (lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )
    
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
};

//Calculador de medianas

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
    if(isPair(lista.length)) {
        const personaMitad1 = lista[mitad -1];
        const personaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmética([personaMitad1, personaMitad2]);

        return mediana;
        ;
    }else {
        personaMitad = lista[mitad];
        return personaMitad;
        ;
    }
};

//Mediana General

const salariosMex = mexico.map(
    function(persona) {
        return persona.salary;
    }
);

const salariosMexSorted = salariosMex.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralMex = medianaSalarios(salariosMexSorted);

//Mediana TOP 10%

const spliceStart = Math.ceil((salariosMexSorted.length * 90) / 100);
const spliceCount =parseInt(salariosMexSorted.length - spliceStart);

const salariosTop10Mex = salariosMexSorted.splice(spliceStart, spliceCount);
const medianaTop10Mex = medianaSalarios(salariosTop10Mex);

console.log({
    medianaGeneralMex, 
    medianaTop10Mex
    //salariosTop10Mex

});
