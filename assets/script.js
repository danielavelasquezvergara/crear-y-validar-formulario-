function validar() {

   let nombre, apellidos, correo, usuario, clave, telefono;
   nombre = document.getElementById("nombre").value;
   apellidos = document.getElementById("apellidos").value;
   correo = document.getElementById("correo").value;
   usuario = document.getElementById("usuario").value;
   clave = document.getElementById("pass").value;
   telefono = document.getElementById("telefono").value;

   // Validacion de campos vacios
   if (nombre === "" || 
        apellidos === "" ||
        correo === "" ||
        usuario === "" ||
        clave === "" ||
        telefono === "") {
       alert("Todos los campos son obligatorios");
       return false;
   }

   // Validar longitud de caracteres
   if (nombre.length >= 30) {
       alert ("El campo nombre no debe superar los 30 caracteres");
       return false;
   }

    if (apellidos.length >= 80) {
        alert ("El campo apellido no debe superar los 80 caracteres");
        return false;
    }    

    if (correo.length >= 100) {
        alert ("El campo correo no debe superar los 100 caracteres");
        return false;
    }    

    if (usuario.length >= 20) {
        alert ("El campo usuario no debe superar los 20 caracteres");
        return false;
    }    

    if (telefono.length >= 15) {
        alert ("El campo telefono no debe superar los 15 caracteres");
        return false;
    }    

    // Validando tipo de dato
    if( (typeof nombre) !== 'string') {
        alert("El campo nombre debe ser solo letras");
        return false;
    }

    alert("Hola " + nombre + " bienvenido a mi formulario");

    return true;

}
