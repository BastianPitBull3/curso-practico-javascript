//const precioOriginal = 100;
//const descuento = 15;

function calcularPrecioConDescuento(precio, descuento) {
    porcentajePrecioConDescuento = 100 - descuento;
    precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function calculatePrice(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount =  document.getElementById("inputDiscount")
    const discountValue = inputDiscount.value;

    const discountPrice = calcularPrecioConDescuento(priceValue, discountValue);

    const PResult = document.getElementById("p-result");
    PResult.innerText = "El precio con descuento es de : $" + discountPrice;
}
