var usuarios = [];

class Usuario {
    constructor (nombre, apellido){
        this.nombre= nombre;
        this.apellido= apellido;
        this.tarjetas= [];
    }
}
class Tarjeta {
    constructor (banco,marca) {
        this.banco= banco
        this.marca = marca
    }
}
function crearUsuario (){
    let nombre= prompt ("Ingrese su nombre")
    let apellido = prompt ("Ingrese su apellido")
    let usuario = new Usuario(nombre,apellido);
    usuarios.push(usuario);
    let banco = prompt("Ingrese el banco al cual pertenece su tarjeta")
    let marca = prompt("Ingrese la marca de su tarjeta","Mastercard,Visa");
    let tarjetaCred = new Tarjeta(banco,marca);
    usuario.tarjetas.push(tarjetaCred)
    let agregarTarjeta = confirm("Desea agregar otra tarjeta?");
    while (agregarTarjeta){
        banco = prompt("Ingrese el banco al cual pertenece su tarjeta")
        marca = prompt("Ingrese la marca de su tarjeta","Mastercard,Visa");
        tarjetaCred = new Tarjeta(banco,marca);
        usuario.tarjetas.push(tarjetaCred)
        agregarTarjeta= confirm("Desea agregar otra?")
    }
}


alert ("Bienvenido, a continuacion debera crear su usuario:")
crearUsuario();
let generadorDeUsuarios= confirm("Desea crear otro usuario?");
while (generadorDeUsuarios){
    crearUsuario();
    generadorDeUsuarios= confirm("Desea crear otro usuario?");
}
alert("Tu proceso de registro termino. Podes ver los datos cargados en el console.log")
console.log (usuarios);