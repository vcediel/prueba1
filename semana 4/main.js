
/*alert("Hola mundo");*/
/*console.log("hola mundo");
document.write("Imprimir dato en la web");
document.write("<br/> Imprimir dato en la web 2");*/

/*Tipo de datos
string// num // boolean// arreglos //objetos
null
NaN  */

/*Tpo de variables y constantes
var // let // const*/
/*
let nombre = "Maria";
let apellido ="perez";
let resultado = nombre + " " +apellido;
console.log (resultado);/*impresion por medio de consola*/
/*document.write("<br/>" ,resultado); /* impresion en la pagina web*/
/*alert("el resultado del nombre es "+resultado); /* ventana emergente*/
/*console.log("Esto es una cadena");
console.log("14.3");
console.log(12);
console.log([12,2,45]);
console.log({"username": "oscar", "puntaje":14.5, "horas":25})*/

/*operaciones  sobre cadenas de texto*/
let texto="hola esto es una cadena";
let tt=texto.length;
document.write(tt);
console.log(tt);
alert(tt);

/*Cortar una cadena*/
document.write(texto);
let corte=texto.substr(7);
document.write("<br/> corte de cadena de texto: ",corte);
console.log(corte);

/*cortar una cadena a partir de una posicion*/
let corte2=texto.substr(0,6);
document.write("<br/> corte de cadena de texto: ",corte2);

/*Encontrar un caracter y establecer la posicion de una cadena*/
let pos=texto.indexOf("a");
document.write("<br/>la posicion del caracter esta en: ",pos);

let pos2=texto.lastIndexOf("a");
document.write("<br/>la posicion del caracter esta en: ",pos2);

/*remplazar una cadena por otra*/
let remplazo=texto.replace(texto, "hoy es Lunes 13 de septiembre")
document.write("<br/>reemplazo: ",remplazo);

let remplazo2=texto.replace("hola", "ola")
document.write("<br/>reemplazo: ",remplazo2);

/*convertir una cadenade texto en mayuscula*/
let convertir= texto.toUpperCase();
document.write("<br/>transformar texto: ",convertir);

let convertir2= texto.toLocaleLowerCase();
document.write("<br/>TRansformars texto: ",convertir2);

const pi=3.141516;
let num1 = 15;
let num2 = 5;
let suma =  num1+num2;
let resta = num1-num2;
let multiplicacion = num1*num2;
let division = num1/num2;
let divparteentera = num1%num2;
let potencia = Math.pow(num1,num2);

document.write("<br/> suma: ",suma);
document.write("<br/> resta: ",resta);
document.write("<br/> multiplicacion: ",multiplicacion);
document.write("<br/> division: ",division);
document.write("<br/> divparteentera: ",divparteentera);
document.write("<br/> potencia: ",potencia);

let texto2="Oscar";
let numero5=5;
document.write(texto2+numero5);

//operadores relacionales
let num10= 60;
let num20= 75;

let estado = num10>num20;
console.log(estado);
document.write("<br/> el resultado es: ",estado);

let password="oscar123";
let intentos= 1;
let input="oscar123";
let validar= password==input;
document.write("<br/> es: " , validar);

/*Instrucciones condicionales*/
if ((validar ==true)&&(intentos==1)){
    alert("has digitado correctamente la contraseña");
}else{
    alert("la contraseña es incorrecta, intenta de nuevo");
}

let score=70;
if (score>30 && score<60){
    console.log("debes seguir intentando");
}else if (score>15){
    console.log("estamos mejorando");
}else{
    console.log("deves revisar");
}

/*instrucciones con CASE*/
/* let tipo_tarjeta="tarjeta credito";
switch(tipo_tarjeta){
    case "tarjeta debito":
        console.log("vas a pagar con tarjet debito");
        break;
    case "tarjeta credito":
        console.log("vas a pagar con tarjet debito");
        break;
    default:
        console.log("tarjeta no valida"); */
}

