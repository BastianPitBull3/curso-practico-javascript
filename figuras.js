//Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
return lado * 4;
}
//console.log("El perímetro del cuadrado mide: " + perimetroCuadarado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El área del cuadrado mide: " + areaCuadrado + "cm^2");
//console.groupEnd();

//Código del triángulo
console.group("Triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//console.log(
    //"Los lados del triángulo miden: " 
    //+ ladoTriangulo1 + "cm, " 
    //+ ladoTriangulo2 + "cm, " 
    //+ baseTriangulo + "cm, "
//);

//const alturaTriangulo = 5.5;
//console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return Number(lado1) + Number(lado2) + Number(base);
}
//console.log("El perímetro del triángulo mide: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
//console.log("El área del triángulo mide: " + areaTriangulo + "cm^2");

function isosceles(base, lado1, lado2){
    var a , b;
    var altura;
    var resultado;

    if (base < lado1 && lado1 === lado2){
        a = lado1, b = base;
        altura = Math.sqrt(Math.pow(a, 2) - (Math.pow(b, 2) / 4));
    }else {
        altura = null;
    }

    return altura;    
}
console.groupEnd();

//Código del círculo
console.group("Circulos");

//Radio
//const radioCirculo = 4;
//console.log("El radio del circulo mide: " + radioCirculo + "cm");

//Diametro
function diametroCirculo(radio){
    return radio * 2;
}
//console.log("El diametro del circulo mide: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
//
//console.log("PI es: " + PI + "cm");

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//console.log("La circunferencia mide: " + perimetroCirculo + "cm");

//Área
function areaCirculo(radio){
    return PI * (radio * radio);
}
//console.log("El area del circulo mide: " + areaCirculo + "cm^2");
console.groupEnd();


//Aqui interactuamos con el HTML:

 //Funciones para el cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const lado = input.value;

    const perimetro = perimetroCuadrado(lado);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const lado = input.value;

    const area = areaCuadrado(lado);
    alert(area);
}


 // Funciones para el triángulo

 function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputBaseTriangulo");
    const input2 = document.getElementById("inputLadoTriangulo1");
    const input3 = document.getElementById("inputLadoTriangulo2");
    
    const base = input1.value;
    const lado1 = input2.value;
    const lado2 = input3.value;

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("inputBaseTriangulo");
    const input2 = document.getElementById("inputAlturaTriangulo");

    const base = input1.value;
    const altura = input2.value;

    const area = areaTriangulo(base, altura);
    alert(area);
}

function calcularAlturaTriangulo(){
    const input1 = document.getElementById("inputBaseTriangulo");
    const input2 = document.getElementById("inputLadoTriangulo1");
    const input3 = document.getElementById("inputLadoTriangulo2");

    const base = input1.value;
    const lado1 = input2.value;
    const lado2 = input3.value;

    const altura = isosceles(base, lado1, lado2);
    if (altura){
        document.getElementById("inputAlturaTriangulo").value = altura;
        alert("Es un triángulo isósceles \n Altura: " + altura);
    }else{
        document.getElementById("inputAlturaTriangulo").value = null;
        alert("No es un triángulo isósceles");
    }
}

 // Funciones para el círculo

 function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const radio = input.value;

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const radio = input.value;

    const area = areaCirculo(radio);
    alert(area);
}