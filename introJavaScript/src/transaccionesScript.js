const formulario = document.getElementById("transacciones");

let saldo = 100;

// formulario.addEventListener("submit", function (evento) {
//   evento.preventDefault();
//   let accion = Number(document.getElementById("btnsaldo").value);
//   pintarContenido(accion);
// });

// formulario.addEventListener("submit", function (evento) {
//   evento.preventDefault();
//   let accion = Number(document.getElementById("btnDepoitar").value);
//   pintarContenido(accion);
// });

// formulario.addEventListener("submit", function (evento) {
//   evento.preventDefault();
//   let accion = Number(document.getElementById("btnRetirar").value);
//   pintarContenido(accion);
// });

// formulario.addEventListener("submit", function (evento) {
//     evento.preventDefault();
//     let accion = Number(document.getElementById("btnSalir").value);
//     pintarContenido(accion);
//   });

let opcion = 1;
// pintarContenido(opcion);

function fnSaldo() {
  //   console.log("txtSaldo");
  opcion = 1;
  pintarContenido(opcion);
}

function fnDepositar() {
  //   console.log("txtDepositar");
  opcion = 1;
  pintarContenido(opcion);
  opcion = 2;
  pintarContenido(opcion);
  //   opcion = 1;
  //   pintarContenido(opcion);
}

function fnSuma() {
  let deposito = Number(document.getElementById("monto").value);
  if (deposito < 1 || deposito === NaN) {
    opcion = 5;
    pintarContenido(opcion);
  } else {
    saldo = saldo + deposito;
    // opcion = 1;
    // pintarContenido(opcion);
    opcion = 7;
    pintarContenido(opcion);
  }
}

function fnRetirar() {
  opcion = 1;
  pintarContenido(opcion);
  opcion = 3;
  pintarContenido(opcion);
}

function fnResta() {
    console.log('resta');
  let retiro = Number(document.getElementById("montoRetiro").value);
  console.log(retiro);
  if (retiro > saldo) {
    opcion = 6;
    pintarContenido(opcion);
  } else {
    saldo = saldo - retiro;
    opcion = 1;
    pintarContenido(opcion);
  }
}

function fnSalir(){
    console.log('salir');
    window.location.href='./index.html'
}

function ocultar(){

}

const pintarContenido = (value) => {
  //span.classList.add("span");
  //   console.log(value);
  if (value === 1) {
    let divRetirar = document.getElementById("retirar")
    divRetirar.classList.remove("span");
    divRetirar.classList.add("hide");
    let divDepositar = document.getElementById("depositar");
    divDepositar.classList.remove("operacion");
    divDepositar.classList.add("hide");
    let divSaldo = document.getElementById("divSaldo");
    divSaldo.classList.remove("hide");
    divSaldo.classList.add("operacion");
    // divSaldo.removeChild('span');
    // let span = document.createElement('span')
    // span.classList.add('texto')
    document.getElementById('span1').innerHTML = `Tu saldo es: ${saldo}`;
    // divSaldo.appendChild(span);
  } else if (value === 2) {
    console.log("entra a 2");
    let divRetirar = document.getElementById("retirar")
    divRetirar.classList.remove("span");
    divRetirar.classList.add("hide");
    let divDepositar = document.getElementById("depositar");
    divDepositar.classList.remove("hide");
    divDepositar.classList.add("operacion");
    //span.innerHTML = `Seleccionaste la moneda <strong>Peso Mexicano</strong>`;
  } else if (value === 3) {
    let divDepositar = document.getElementById("depositar");
    divDepositar.classList.remove("operacion");
    divDepositar.classList.add("hide");
    let divRetirar = document.getElementById("retirar");
    divRetirar.classList.remove("hide");
    divRetirar.classList.add("operacion");
  } else if (value === 4) {
    console.log(value);
  } else if (value === 5) {
    console.log("entra a 5");
    let span = document.getElementById("txtErrorDep");
    console.log(span);
    span.classList.remove("hide");
    span.classList.add("error");
    span.innerHTML = `No se pueden depositar cantidades menores a uno 1, iguales a cero 0 o vacías`;
    setTimeout(function(){
        span.classList.remove('error');
        span.classList.add('hide');
    },3000)
    console.log(span);
  } else if(value ===6){
    let span = document.getElementById("txtSaldo");
    span.classList.remove("hide");
    span.classList.add("error");
    span.innerHTML = `No se pueden retirar cantidades mayores al saldo `;
    setTimeout(function(){
        span.classList.remove('error');
        span.classList.add('hide');
    },3000)
    console.log(span);
  } else if (value === 7) {
    let span = document.getElementById("depositar");
    span.classList.remove("operacion");
    span.classList.add("hide");
    let monto = document.getElementById("montoRetiro").value = '';
    console.log('monto',monto);
    //span.innerHTML = `Seleccionaste la moneda <strong>Peso Mexicano</strong>`;
  }
    else {
    //   span.innerHTML = `Selecciona una moneda`;
    console.log("else");
  }
};
