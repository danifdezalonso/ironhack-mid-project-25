var okName = false;
var okEmail = false;
var okPhone = false;
var okMessage = false;

function validateName() {
  let nameUser = document.getElementById("name-form");
  if (!nameUser.value) {
    document.getElementById("errorName").hidden = false;
    nameUser.style.borderColor = "red";
    nameUser.style.borderStyle = "solid";
    okName = false;
  } else {
    console.log(`name validado: ${nameUser.value}`)
    document.getElementById("errorName").hidden = true;
    nameUser.style.borderStyle = "none";
    okName = true;
  }
}

function validateEmail() {
  let emailUser = document.getElementById("email-form");
  if (!emailUser.value) {
    document.getElementById("errorEmail").hidden = false;
    emailUser.style.borderColor = "red";
    emailUser.style.borderStyle = "solid";
    okEmail = false;
  } else {
    console.log(`email validado: ${emailUser.value}`)
    document.getElementById("errorEmail").hidden = true;
    emailUser.style.borderStyle = "none";
    okEmail = true;
  }
}

function validatePhone() {
  let phoneUser = document.getElementById("phone-form");
  if (!phoneUser.value) {
    document.getElementById("errorPhone").hidden = false;
    phoneUser.style.borderColor = "red";
    phoneUser.style.borderStyle = "solid";
    okPhone = false;
  } else {
    console.log(`phone validado: ${phoneUser.value}`)
    document.getElementById("errorPhone").hidden = true;
    phoneUser.style.borderStyle = "none";
    okPhone = true;
  }
}

function validateMessage() {
  let messageUser = document.getElementById("message-form");
  if (!messageUser.value) {
    document.getElementById("errorMessage").hidden = false;
    messageUser.style.borderColor = "red";
    messageUser.style.borderStyle = "solid";
    okMessage = false;
  } else {
    console.log(`name validado: ${messageUser.value}`)
    document.getElementById("errorMessage").hidden = true;
    messageUser.style.borderStyle = "none";
    okMessage = true;
  }
}


//enviar form y limpiar campos
function sendForm() {
  let incompleteForm = document.getElementById("errorSubmit");
  if (okName && okEmail && okPhone && okMessage) {
    incompleteForm.hidden = true;
    toggleModal();
    let nameUser = document.getElementById("name-form"); // no hay una forma mas facil de limpiar los campos?
    let modalName = document.getElementById("form-name-show").textContent = "Enviado! Gracias " + nameUser.value;
    nameUser.value = "";
    let emailUser = document.getElementById("email-form");
    emailUser.value = "";
    let phoneUser = document.getElementById("phone-form");
    phoneUser.value = "";
    let messageUser = document.getElementById("message-form");
    messageUser.value = "";
   

  } else {
    incompleteForm.hidden = false;
    incompleteForm.style.borderColor = "red";
  }
}


//guardar el nombre y ponerlo en el modal
