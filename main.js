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

class Empleado extends Persona {
    constructor(nombre, apellido, edad, antiguedad, salario) {
        super(nombre, apellido, edad)
        this.antiguedad = antiguedad;
        this.salario = salario;
        this.ahorro = 10000;
    }
    gastar(cantidad) {
        this.ahorro = this.ahorro - cantidad;
    }
}

let empleado = new Empleado('Carla', 'Aguirre', 30, 5, 1000);
console.log(empleado);
empleado.saludar();
empleado.caminar();
empleado.gastar(500);


//tercer nivel de herencia

class Profesor extends Empleado {
    constructor(nombre, apellido, edad, antiguedad, salario, materia) {
        super(nombre, apellido, edad, antiguedad, salario)
        this.materia = materia;
    }
    darClase() {
        console.log('bla, bla, bla');
    }
}

let profe1 = new Profesor('Carlos', 'Lozano', 30, 10, 111, 'matemáticas');
console.log(profe1);
profe1.saludar();
profe1.gastar(2000);
profe1.darClase();
