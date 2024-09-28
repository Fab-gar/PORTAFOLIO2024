
document.addEventListener("DOMContentLoaded", function() {
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);
let form = id("contact-form");
let nombre = id("nombre"),
  email = id("mail"),
  mensaje= id("message"),
  msjError = classes("error");
  sendBtn = id("button"),
  resetBtn = id("reset-btn");


  console.log(nombre, email, mensaje);

  
  let motor = (id, serial, mensaje) => {

    if (id.value.trim() === "") {
        msjError[serial].innerHTML = mensaje; 
    } 
    
    else {
        msjError[serial].innerHTML = ""
    }
  };


  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
  
    motor(nombre, 0, "El nombre de usuario no puede estar en blanco");
    motor(email, 1, "El correo electrónico no puede estar en blanco");
    motor(mensaje, 2, "El mensaje no puede estar en blanco");
});

resetBtn.addEventListener("click", (e) => {
    e.preventDefault();
    nombre.value = "";
    email.value = "";
    mensaje.value = "";
    for (let i = 0; i < msjError.length; i++) {
        msjError[i].innerHTML = "";
    }
    if (nombre.value.trim() !== "" && email.value.trim() !== "" && mensaje.value.trim() !== "") {
        alert(
            "Nombre: " + nombre.value + "\n" +
            "Email: " + email.value + "\n" +
            "Mensaje: " + mensaje.value
        );
    }
    

})})

const btn = document.getElementById('buttonn');

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_dzsfgxg';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});
