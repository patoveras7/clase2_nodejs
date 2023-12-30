const pregunta = require('readline-sync');// La biblioteca tiene que estar importada en CADA archivo en que vayamos a interactuar con el usuario.
const estudiantesRegistrados = (cantidadEstudiantes) => { //Inicializamos una funcion flecha a la que no le pasamos parametros, solo inicia en blanco y ya dentro contiene su logica. 
    let estudiantes = [];//ESTA ES LA FORMA DE CREAR ARRAY EN JAVASCRIPT  
    for(let i=0; i<cantidadEstudiantes; i++){
    let nombreEstudiante = pregunta.question(`Por favor ingrese el nombre del estudiante ${i} `); // A traves de la biblioteca importada interactuamos con el usuario (scanner.nextline/int/char o prompt en el navegador.)
    let edadEstudiante = pregunta.question(`Por favor ingrese la edad del estudiante ${nombreEstudiante} `);
    let estudiante = { //Creacion del Objeto con {} 
        nombre : nombreEstudiante,
        edad: edadEstudiante
    };
    estudiantes [i] = estudiante;
    }
    console.log('Loading.. wait a minute please.')
    return estudiantes; 
}

const mostrarLista = (estudiantes) =>{
    console.log("Los estudiantes inscriptos son los siguientes: ")
   for(let i=0; i<estudiantes.length; i++){//Es posible usar el .length para TODO.
   console.log("Estudiante con Nombre: " + estudiantes[i].nombre + " y con edad: " + estudiantes[i].edad)
}

}

module.exports = {estudiantesRegistrados, mostrarLista};