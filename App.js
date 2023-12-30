console.log('Universidad Virtual - Registro de estudiantes');
const pregunta = require('readline-sync'); // Impóstamos la funcionalidad de la biblioteca descargada.
const {estudiantesRegistrados, mostrarLista} = require('./lista'); // Impotamos las funciones creadas en forma aparte.
let cantidadEstudiantes = pregunta.question("Por favor ingrese la cantidad de estudiantes que se van a registrar: ");
let estudiantes = estudiantesRegistrados(cantidadEstudiantes); // Llamamos a la funcion masando el parametro.
mostrarLista(estudiantes); // LLamamos a la funcion que imprimira lo que tenga que imprimir, es como que desde aca
//pasara a ejecutar alla y luego volviera.




