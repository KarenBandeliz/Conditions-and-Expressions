// Ejercicio 1. Tienes una lista de nombres: 

var names = ["Maria", "Antony", "Joy", "Juan"];

// Parte 1. Escriba una función para insertar un nombre al final de la lista. Agregue su propio nombre al final de la lista.

names.push("Karen");
console.log(names);

// Parte 2. Escribe una función que tome un nombre y verifique si la lista tiene ese nombre. Debería devolver un booleano - verdadero/falso.

console.info( names.includes( 'Karen' ) ); // true
console.info( names.includes( 'Pedro' ) ); // false

// Parte 3. Escribe una función que tome una lista de nombres. Esta función debería comparar la lista tomada en la names lista que tiene actualmente. La función debe devolver una matriz con los nombres que están en ambas listas.

var names2 = ["Karen", "Ramses", "Giselle", "Antony", "Joy"];

var equalsNames = [];

names.forEach(element => {
    names2.forEach(element2 => {
        if(element === element2){
            equalsNames.push(element2);
        }
    });
});
console.log(equalsNames);  

//parte 4. Escriba una función que tome una lista de nombres y devuelva una lista de números enteros con la longitud de los nombres en el mismo orden en que se recibieron. Sugerencia para usar la función de push.
function listInt(){
    var longitud=[];
    for( let i=0; i<names.length; i++){
        longitud.push (names[i].length);
        }
        console.log(names);
        console.log(longitud);
    }

//Exercise #2. What do the following expressions evaluate to?

/* false || (true && false);
true || (11 + 12);
(31 + 22) || true;
true && (1 + 7);
false && (3 + 4);
(1 + 2) && true;
(32 * 4) >= 129;
false !== !true;
true === 4;
false === (847 === '847');
false === (887 == '887');
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; */



//Ejercicio #3. Escribe una función que registre si un número está entre 0 y 25 (inclusive), entre 26 y 100 (inclusive), mayor que 100 o menor que 0.

function range(){

var numberRange=25;   
    
if(numberRange>0&&numberRange<=25){
        console.log(numberRange+" is between 0 and 25");
    }else if(numberRange>25&&numberRange<=100){
        console.log(numberRange+" is between 26 and 100");
    }else if(numberRange>100){
        console.log(numberRange+" is greater than 100");
    }else if(numberRange<0){
        console.log(numberRange+" is less than 0");
    }
    
    }

//Ejercicios adicionales
//¿Qué se muestra en la consola cuando f es console.log'd?

var a;
var b = null;
var c = undefined;
var d = 4;
var e = 'five';
var f = a || b || c || d || e;

console.log(f); 
//Imprime 4 en consola
    