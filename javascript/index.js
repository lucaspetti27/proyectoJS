alert ("Bienvenido! a continuacion vas a poder solicitar tu tarjeta de credito. Haz click en aceptar para continuar");

let bancoTarjeta= prompt ("Cual tarjeta desea solicitar? Visa o Mastercard?");

if (bancoTarjeta == "Visa" || bancoTarjeta == "Mastercard" ) {
    let correo= prompt ("Ingrese su correo electronico para ser notificado");
    while(correo == ""){
        correo= prompt("Porfavor, ingrese un correo valido")
        }
    alert ("Muchas gracias, su solicitud esta en proceso. Cuando su tarjeta " +bancoTarjeta+ " este lista sera notificado a su correo: "+correo);
} else {
    while (bancoTarjeta != "Visa" || bancoTarjeta != "Mastercard"){
        bancoTarjeta = prompt("El nombre es incorrecto, porfavor seleccione una opcion valida: Visa o Mastercard");
        if (bancoTarjeta == "Visa" || bancoTarjeta == "Mastercard") {
            let correo= prompt ("Ingrese su correo electronico para ser notificado");
            while(correo == ""){
            correo= prompt("Porfavor, ingrese un correo valido")
            }
            alert ("Muchas gracias, su solicitud esta en proceso. Cuando su tarjeta " +bancoTarjeta+ " este lista sera notificado a su correo: "+correo);
            } 
    };  
};