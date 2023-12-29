let botonale = document.getElementById("ale"); // genera aleatoriamente
let boton = document.getElementById("gen"); // genera por teclado
let res = document.getElementById("res");// resultado
let Media = document.getElementById("Media");
let Varianza = document.getElementById("Varianza");


var GenerarNumeros=function(){
    let n1=parseInt(document.getElementById("n1").value);
    let numeros= [];
    for (let i = 0; i < n1; i++) {
        numeros.push(Math.floor(Math.random()*(9999-0+1))+1);
    }
    res.innerHTML=`${numeros}`;
    return numeros;
}
var calcularMedVar = function () {
    let numeros=GenerarNumeros();
    let sumatoria = 0;
    let suma=0;
    for (let i = 0; i < numeros.length; i++) {
        suma+=numeros[i];
    }
    let media=suma/numeros.length;
    console.log(numeros);
    console.log("MEDIA:"+media);
    Media.innerHTML= `${media}`;
    for (let i = 0; i < numeros.length; i++) {
      sumatoria += Math.pow(numeros[i] - media, 2);
    }
    console.log("VARIANZA:"+ (sumatoria / numeros.length));
    let varianza= sumatoria / numeros.length;
    Varianza.innerHTML=`${varianza}`;
}
//aleatorio
var GenerarAleatorios=function(){
    var arreglo = [];
    var n=Math.floor(Math.random()*(9999-0+1))+1;
    var cantidad=0;
    for (var i = 0; i < n; i++) {
      var numeroAleatorio = Math.floor(Math.random() * (1000 - 0 + 1) + 0);
      arreglo.push(numeroAleatorio);
      cantidad=i;
    }
    res.innerHTML=`Cantidad de numeros generados: ${cantidad} \n ${arreglo} `; // Agrega los numeros generados al html
    return arreglo;
}
var calcularAle = function () {
    let numeros=GenerarAleatorios();
    let sumatoria = 0;
    let suma=0;
    /*Media Inicio */
    for (let i = 0; i < numeros.length; i++) {
        suma+=numeros[i];
    }
    let media=suma/numeros.length;
    /*Media fin */
    console.log(numeros); // imprime el arreglo de numeros aleatorios por consola
    console.log("MEDIA:"+media); // imprime la media por consola
    Media.innerHTML= `${media}`; // agrega la media a html
    

    /*Varianza inicio */
    for (let i = 0; i < numeros.length; i++) {
      sumatoria += Math.pow(numeros[i] - media, 2);
    }
    console.log("VARIANZA:"+ (sumatoria / numeros.length));
    let varianza= sumatoria / numeros.length;
    /*Varianza Fin*/
    Varianza.innerHTML=`${varianza}`;// agrega la varianza a html
}
boton.addEventListener('click',calcularMedVar);
botonale.addEventListener('click',calcularAle)
