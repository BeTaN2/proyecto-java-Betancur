
/* let nombre = prompt("Por favor, ingresa tu nombre:");
alert("Hola, " + nombre + "! Bienvenido.");

/* array de objetos 
let personas = [
    { nombre: "Juan", edad: 30 },
    { nombre: "María", edad: 25 },
    { nombre: "Carlos", edad: 35 }
];

/*Acceder a los objetos dentro del array  
console.log(personas[0].nombre); 
console.log(personas[1].edad);   

/*  Modificar un objeto dentro del array
personas[1].edad = 40;

/*  nuevo objeto al array
let nuevaPersona = { nombre: "Laura", edad: 28 };
personas.push(nuevaPersona);

/*Recorrer el array 
for (let i = 0; i < personas.length; i++) {
    console.log(personas[i].nombre + " tiene " + personas[i].edad + " años.");
}


/* Acceder a las propiedades mediante variables 
let propiedad = "nombre";
console.log(personas[1][propiedad]); 
*/
/* json */
let Listatareas = {
    "titulo" : "Lista de tareas",
    "tareas" : [
        {
        "descripcion": "Comprar comestibles",
        "completada": false
      },
      {
        "descripcion": "Hacer ejercicio",
        "completada": true
      },
      {
        "descripcion": "Estudiar para el examen",
        "completada": false
      }
    ]
}
let titulo = Listatareas.titulo;
let tareas = Listatareas.tareas;

console.log("Titilo" + titulo)
console.log("Tareas" + tareas)

function obtener_localstorage(){
    let persona = JSON.parse (localStorage.getItem ("persona")) 
    console.log(persona)
}

function guardar_localstorage (){
    let persona = {
        nombre : "Juan",
        edad: 30,
        ciudad: "Nueva York",
        casado: false,
        hobbies: ["lectura", "senderismo"]
    }
}
localStorage.setItem ("nombre", JSON.stringify(persona));

/* dom */
let nombreInput = document.getElementById("nombreInput");
let saludarButton = document.getElementById("saludarButton");
let mensajeSaludo = document.getElementById("mensajeSaludo");

// Agregar un evento 
saludarButton.addEventListener("click", function() {
    let nombre = nombreInput.value;
    if (nombre) {
        mensajeSaludo.textContent = "¡Hola, " + nombre + "!";
    } else {
        mensajeSaludo.textContent = "Por favor, ingresa tu nombre.";
    }
});


/* calculadora */
function sumar() {
    let x = parseInt(document.getElementById('n1').value);
    let y = parseInt(document.getElementById('n2').value);
    document.getElementById('resultado').innerHTML = x + y
}

function resta() {
    let d = parseInt(document.getElementById('n3').value);
    let c = parseInt(document.getElementById('n4').value);
    document.getElementById('-resultado').innerHTML = d - c
}

function divicion() {
    let n = parseInt(document.getElementById('n5').value);
    let m = parseInt(document.getElementById('n6').value);
    document.getElementById('÷resultado').innerHTML = n / m
}

function multiplicacion() {
    let k = parseInt(document.getElementById('n7').value);
    let l = parseInt(document.getElementById('n8').value);
    document.getElementById('*resultado').innerHTML = k * l
}