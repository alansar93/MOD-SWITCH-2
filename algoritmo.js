const CANT_CAMAS = document.querySelector("#cantidad-camas");
const CANT_DIAS = document.querySelector("#cantidad-dias")
const INGRESO_DIA = document.querySelector("#dia-ingreso")
const SERVICIOS_EXTRAS = document.querySelector("#servicios-extras")
const PARRAFO = document.querySelector("p");

function numCamas() {
  switch (CANT_CAMAS.value) {
    case "1":
      PARRAFO.innerHTML += "<li>Usted eligio " + (CANT_CAMAS.value) + " cama</li>";
      break;
    case "2":
      PARRAFO.innerHTML += "<li>Usted eligio " + (CANT_CAMAS.value) + " camas</li>";
      break;
  }
}

function cantDias() {
  switch (CANT_DIAS.value) {
    case "1":
      PARRAFO.innerHTML += "<li>Usted va a permanecer en nuestro hotel " + (CANT_DIAS.value) + " dia</li>";
      break;
    case "3":
      PARRAFO.innerHTML += "<li>Usted va a permanecer en nuestro hotel " + (CANT_DIAS.value) + " dias</li>";
      break;
    case "7":
      PARRAFO.innerHTML += "<li>Usted va a permanecer en nuestro hotel " + (CANT_DIAS.value) + " dias</li>";
      break;
  }
}

function diaIngreso() {
  switch (INGRESO_DIA.value) {
    case "lunes":
      PARRAFO.innerHTML += "<li>Usted va a ingresar el dia " + (INGRESO_DIA.value) + "</li>";
      break;
    case "miercoles":
      PARRAFO.innerHTML += "<li>Usted va a ingresar el dia " + (INGRESO_DIA.value) + "</li>";
      break;
    case "sabado":
      PARRAFO.innerHTML += "<li>Usted va a ingresar el dia " + (INGRESO_DIA.value) + "</li>";
      break;
  }
}

function serviciosExtras() {
  switch (SERVICIOS_EXTRAS.value) {
    case "Desayuno":
      PARRAFO.innerHTML += "<li>Usted cuenta unicamente con " + (SERVICIOS_EXTRAS.value) + "</li>";
      break;
    case "Desayuno y Almuerzo":
      PARRAFO.innerHTML += "<li>Usted cuenta con " + (SERVICIOS_EXTRAS.value) + "</li>";
      break;
    case "Desayuno, Almuerzo y Cena":
      PARRAFO.innerHTML += "<li>Usted cuenta con " + (SERVICIOS_EXTRAS.value) + "</li>";
      break;
}
}
