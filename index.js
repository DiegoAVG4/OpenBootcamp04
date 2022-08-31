// Una cadena de texto con tu Nombre
let miNombre = "Diego Armando";


// Otra cadena de texto con tu Apellido
let miApellido = "Valderrama Garcia";




// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
const estudiante = miNombre+" "+miApellido;
console.log (estudiante);



// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
const estudiantesMayus = estudiante.toUpperCase();
console.log(estudiantesMayus);



// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
const estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);



// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
var numstr = estudiante.length;
console.log(numstr);



// Una variable que contenga la primera letra del Nombre.
let primera = miNombre.charAt(0);
console.log(primera);


// Otra variable que contenga la última letra del Apellido

// Variante 1: Donde sabemos el final de la cadena **********//
let ultimoStr = miApellido.charAt(16);
console.log(ultimoStr);

// Variante 2: Donde no sabemos el largo de la cadena **********//
console.log(miApellido.split("")[miApellido.length - 1]);

// Una cadena de texto que elimine los espacios de la variable "estudiante"
console.log(estudiante.replaceAll(" ", "",));

// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
console.log(estudiante.startsWith(miNombre));
 
