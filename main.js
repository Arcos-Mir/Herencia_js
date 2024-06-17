/* HERENCIA MOD 3 */

//La herencia permite que se puedan definir nuevas clases basadas de unas ya existentes

//Palabra reservada extends para hacer que una subclase herede propiedades y metodos de una superclase

//superclase
class Animal {
    constructor(nombre,edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    comer(comida) {
        return`${this.nombre} está comiendo ${comida}`;
    }
}

//subclase
class Mascota extends Animal {
    constructor(nombre, edad, duenio) {
        super(nombre,edad);
        this.duenio = duenio;
    }
}

const gato = new Mascota("Pancracio", 3, "Maui");
console.log(gato.comer("croquetas")); //Pancracio está comiendo croquetas


/* Clase principal -> super clase ejercicios del tema de herencia*/
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola soy ${this.nombre}`);
    }
    caminar() {
        console.log('Estoy caminando');
    }
}

let p1 = new Persona('Diego', 'Lopez', 10);
console.log(p1);
p1.saludar();

//subclase
//palabra reservada extends para traer las propiedades y métodos de la super clase

class Alumno extends Persona {
    constructor(nombre, apellido, edad, calificacion) {
        super(nombre, apellido, edad);
        this.calificacion = calificacion;
        this.escuela = "Escuela Niños Héroes";
    }
    /* Todos los métodos de la super clase con heredados */

    //métodos adicionales a los heredados
    reprobar() {
        console.log('Reprobé');
    }
}

let a1 = new Alumno('Julio', 'Alvarez', 50, 9.0);
console.log(a1);
a1.saludar();
a1.caminar();
a1.reprobar();


/* let a2 = new Alumno('Ana', 'Marquez', 25, 10.0);
console.log(a2); */


