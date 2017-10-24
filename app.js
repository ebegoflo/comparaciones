//Escribe una función llamada areArraysSame que tome dos arrays como argumentos.

//Debe devolver verdadero si los dos arrays son iguales y false si son diferentes

var firstArray = [];
var secondArray = [];
var hola = [];

var areArraysSame = function ( firstArray,secondArray){
   if (firstArray.length === secondArray.length){
     for (var i = 0; i < firstArray.length; i++) {
       if ( (firstArray [i] === secondArray[i]) ) {
         hola[i] = 'el indice ' +  i  + ' es correcto';
       } else {
         hola[i] = 'el indice ' +  i  + ' es incorrecto';
       }
     }
     return hola;
   } else {
        return false;
    }
}




console.log (areArraysSame ([1,2,2,5],[1,2,3,5]))
