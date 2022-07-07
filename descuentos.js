const coupons = [
    {
        name: "DESC1",
        discount: 15
    },
    {
        name: "DESC2",
        discount: 20
    },{
        name: "DESC3",
        discount: 30
    },{
        name: "DESC4",
        discount: 50
    },{
        name: "DESC5",
        discount: 60
    }
    ];

function calcularPrecioConDescuento(precio, descuento) {
    porcentajePrecioConDescuento = 100 - descuento;
    precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function calculatePrice(){
    
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount =  document.getElementById("inputDiscount");
    var discountValue = inputDiscount.value;

    const inputCupon = document.getElementById("inputCupón");
    const couponValue = inputCupon.value;

    const PResult = document.getElementById("p-result");
    const PDescuentoCupon = document.getElementById("p-descuento-cupón");

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };
    
    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon && discountValue == null) {
        alert("El cupón " + couponValue + " no es válido");
    }
    else {
        discountValue = userCoupon.discount;
        PDescuentoCupon.innerText = "El descuento con cupón es del " 
                                                                + discountValue + "%";
    }

    const discountPrice = calcularPrecioConDescuento(priceValue, discountValue);
    PResult.innerText = "El precio con descuento es de : $" + discountPrice;
}
