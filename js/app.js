"use strict";
/**
 * document.querySelectorAll  Para seleccionar los artículos
 * document.querySelector Para los botones
 * nodo.nextElementSibling
 * nodo.firstElementChild
 *
 * nodo.addEventListener
 *
 * for(){
 * }
 *
 * while(){
 * }
 *
 * do{
 * }while();
 */

//Variables
//Capturo las etiquetas "ARTICLE"
const a1 = document.querySelectorAll(".a1");
const a2 = document.querySelectorAll(".a2");
const a3 = document.querySelectorAll(".a3");

let numbers = [1, 2, 3];

//FUNCIÓN FOR
const ordenarFor = (evento) => {
  evento.preventDefault(a1); //EVITO EVENTO (ej. REDIRECCIÓN DE ENLACE <a>)

  //CAPTURAR EL NODO PÁRRAFO DONDE ESCRIBIR EL TEXTO
  let p1 = a1[1].firstElementChild.nextElementSibling;
  let p2 = p1.nextElementSibling;

  p1.innerHTML =
    '<h6 style=" color:red;font-wieght:bold">For: orden ascendente</h6>'; //  \"\"  PARA ESCAPAR CARACTERES (\ al siguiente)
  for (let i = 0; i < numbers.length; i++) {
    p1.innerHTML += `<div>Posición ${i}:${numbers[i]}</div>`;
  }
  p2.innerHTML =
    '<h6 style=" color:red;font-wieght:bold">For: orden descendente</h6>'; //  \"\"  PARA ESCAPAR CARACTERES
  for (let i = numbers.length - 1; i >= 0; i--) {
    p2.innerHTML += `<div>Posición ${i}:${numbers[i]}</div>`;
  }
};

//FUNCIÓN WHILE
const ordenarWhile = (event) => {
  event.preventDefault(); //EVITO EVENTO (ej. REDIRECCIÓN DE ENLACE <a>)
  let numbers = [1, 2, 3];
  let x = 0;
  while (x < numbers.length) {
    console.log(`Posición ascendente ${x}:${numbers[x]}`);
    x = x + 1;
  } //x++
  // console.log(x)
  x = numbers.length - 1;

  while (x >= 0) {
    console.log(`Posición descendente ${x}:${numbers[x]}`);
    x--;
  }
};

//FUNCIÓN DO...WHILE
const ordenarDoWhile = (eventx) => {
  eventx.preventDefault(); //EVITO EVENTO (ej. REDIRECCIÓN DE ENLACE <a>)
  let numbers = [1, 2, 3];
  //E6 for of
    // for(let valor of numbers){
    //     alert(valor)
    // }

  //Método forEach
    numbers.forEach(
        (valor,indice,array) => { console.log(`${valor}-${indice}-Array[${array}]`)
        }
    );

  let x = -1;

  do {
    console.log(`Posición ascendente ${x}:${numbers[x]}`);
    x = x + 1; //x++
  } while (x < numbers.length);

  x = numbers.length - 1;

  do {
    console.log(`Posición descendente ${x}:${numbers[x]}`);
    x--;
  } while (x >= 0);
};

//ESCUCHAR BOTÓN FOR
document.querySelector("#b1").addEventListener("click", ordenarFor);

//ESCUCHAR BOTÓN WHILE
document.querySelector("#b2").addEventListener("click", ordenarWhile);

//ESCUCHAR BOTÓN DO...WHILE
document.querySelector("#b3").addEventListener("click", ordenarDoWhile);
