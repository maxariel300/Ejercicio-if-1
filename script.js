const USUARIO_NOMBRE_RESGISTRADO = "potato";
const USUARIO_CONTRASENIA_REGISTRADA = "111";
const USUARIO_NOMBRE_RESGISTRADO_2 = "ñato";
const USUARIO_CONTRASENIA_REGISTRADA_2 = "juto";

const inputUsuario = document.querySelector("#usuario-nombre");
const inputContrasenia = document.querySelector("#usuario-contresenia");
const pResultado = document.querySelector("#resultado");

let usuarioNombreIngresado = "def nombre";
let usuarioContraseniaIngresada = "def contrasenia";

function verificar() {
    usuarioNombreIngresado = inputUsuario.value;
    usuarioContraseniaIngresada = inputContrasenia.value;
    if ((usuarioNombreIngresado == USUARIO_NOMBRE_RESGISTRADO && usuarioContraseniaIngresada == USUARIO_CONTRASENIA_REGISTRADA) || (usuarioNombreIngresado == USUARIO_NOMBRE_RESGISTRADO_2 && usuarioContraseniaIngresada == USUARIO_CONTRASENIA_REGISTRADA_2)) {
        pResultado.innerHTML = "usuario y contraseña correctos"+ usuarioNombreIngresado;
    } else {
        pResultado.innerHTML = "usuario y contraseña incorrectos";
        pResultado.style.color = "red";
    }
    
}