const RentabilidadPorAnnio  = [
    {
        annio: 2018,
        rentabilidad: 35
    },
    {
        annio: 2019,
        rentabilidad: 23
    },
    {
        annio: 2020,
        rentabilidad: 27
    },
    {
        annio: 2021,
        rentabilidad: 32
    },
    {
        annio: 2022,
        rentabilidad: 25
    }
]

function mediaGeometrica(lista) {
    listaRentabilidad = lista.map(function (object) {
        return object.rentabilidad;
    })

    let productoRentabilidad = 1;

    for(let i = 0; i < listaRentabilidad.length; i++) {
        productoRentabilidad = listaRentabilidad[i] * productoRentabilidad;
    }
    const mediaGeometrica = Math.pow(productoRentabilidad, 1 / listaRentabilidad.length);

    return mediaGeometrica;
};