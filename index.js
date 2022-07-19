let formulario = document.getElementById("formulario");
let inputNombre = document.getElementById("inputNombrePaciente");
let inputGenero = document.getElementById("inputGeneroPaciente");
let inputEdad = document.getElementById("inputEdadPaciente");
let inputPeso = document.getElementById("inputPesoPaciente");
let inputAltura = document.getElementById("inputAlturaPaciente");

let pacientes = [];

class Pacientes {
    constructor(nombre, genero, edad, peso, altura){
        this.nombre = nombre.toUpperCase()
        this.genero = genero
        this.edad = edad
        this.peso = peso
        this.altura = altura
    }
}


formulario.onsubmit = (event) => validarFormulario(event)

function validarFormulario(event) {
    event.preventDefault();
    let nombre = inputNombre.value;
    let genero = inputGenero.value;
    let edad = inputEdad.value;
    let peso = inputPeso.value;
    let altura = inputAltura.value;

    let paciente = new Pacientes(nombre, genero, edad, peso, altura);
    pacientes.push(paciente)
    
    inputNombre.value = "";
    inputGenero.value = "";
    inputEdad.value = "";
    inputPeso.value = "";
    inputAltura.value = "";


    console.log(pacientes)
} 