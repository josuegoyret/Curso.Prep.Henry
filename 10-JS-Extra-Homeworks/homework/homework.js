// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var A = [];
  for (var clave in objeto) {
    A.push([clave, objeto[clave]]);
  }
  return A;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var alfabeto ='abcdefghijklmnñopqrstuvwxyz';
  var objetoResultado = {};
  for (var i = 0; i < alfabeto.length; i++) {
    var k = 0;
    for (var j = 0; j < string.length; j++) {
      if (string[j] === alfabeto[i]) {
        k = k + 1;
      }
    }
    if (k > 0) {
    objetoResultado[alfabeto[i]] = k;
    }
  }
  return objetoResultado;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var arrayCaracteres = s.split('');
  var palabraOrdenada = '';
  for (i = 0; i < arrayCaracteres.length; i++) {
    if (arrayCaracteres[i] === arrayCaracteres[i].toUpperCase()) {
      palabraOrdenada = palabraOrdenada + arrayCaracteres[i];
    }
  }
  for (j = 0; j < arrayCaracteres.length; j++) {
    if (arrayCaracteres[j] === arrayCaracteres[j].toLowerCase()) {
      palabraOrdenada = palabraOrdenada + arrayCaracteres[j];
    }
  }
  return palabraOrdenada;

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var arrayPalabras = str.split(' ');
  var arrayPalabrasReversed = [];
  for (var i = 0; i < arrayPalabras.length; i++) {
    var stringReversed = '';
    for (var j = arrayPalabras[i].length - 1; j >= 0; j--) {
      stringReversed = stringReversed + arrayPalabras[i][j];
    }
    arrayPalabrasReversed.push(stringReversed);
  }
  var result = arrayPalabrasReversed.join(' ');
  return result;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var str1 = numero.toString();
  var arreglo = str1.split("");
  var arregloreverse = arreglo.reverse();
  var str2 = arregloreverse.join("");
  var numeroInvertido = parseInt(str2);

  if (numeroInvertido === numero) {
    return 'Es capicua';
  }

  return 'No es capicua';

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var arrayCaracteres = cadena.split('');
  var nuevaCadena = '';
  for (var i = 0; i < arrayCaracteres.length; i++) {
    if (arrayCaracteres[i] !== 'a' && arrayCaracteres[i] !== 'b' && arrayCaracteres[i] !== 'c') {
        nuevaCadena = nuevaCadena + arrayCaracteres[i];
    }
  }
  return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  //creo un arreglo de objetos cuyas propiedades son la string de arr y el numero de caracteres
  var arregloObjetos = [];

  for (i = 0; i < arr.length; i++) {
    var objetoi = {
      palabra: arr[i],
      num: arr[i].length
    };
    arregloObjetos.push(objetoi);
  }

  //ahora ordeno los objetos en el nuevo arreglo, en orden creciente, de acuerdo al valor en "num" (numero caracteres)
  //uso el metodo sort
  arregloObjetos.sort(function ( a, b) {
    if (a.num > b.num) {
      return 1;
    }
    if (a.num < b.num) {
      return -1;
    }
    return 0;
  }); 

  //armo un nuevo arreglo con las palabras de acuerdo al orden en que quedaron los objetos
  var palabrasOrdenadas = [];

  for (var j = 0; j < arregloObjetos.length; j++) {
    palabrasOrdenadas.push(arregloObjetos[j].palabra);
  }

  //devuelvo el resultado
  return palabrasOrdenadas;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arreglo3 = [];
  for (var i = 0; i < arreglo1.length; i++) {
    for (var j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        arreglo3.push(arreglo1[i]);
      }
    }
  }
  return arreglo3;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

