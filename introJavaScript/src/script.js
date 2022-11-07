const formulario = document.getElementById('login')
const dbUser = 'emmas'
const dbPass = 'letmein'

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
    let usuario = document.getElementById('usuario').value
    let password = document.getElementById('password').value

    if(validar(usuario,password)){
        console.log('referencia');
        window.location.href='./transacciones.html'
    }
})

function validar (u,p){
    //Se valida que no venga en blanco
    if(u==='' && p===''){
        errores('Datos')
        return false
    }else {
        //si son iguales, deja pasar
        if (u === dbUser && p ===dbPass){
            crear(u)
            return true
        }else if (u !=dbUser){
            blanquear(u,p)
            errores('Usuario')
            return false
        }else if (p != dbPass){
            blanquear(u,p)
            errores('Password')
            return false
        }
    }
}

function errores(tipo){
    let label = document.getElementById(`lbl${tipo}`)
    label.classList.remove('normal');
    label.classList.add('hide');
    let error = document.getElementById(`error${tipo}`)
    error.classList.remove('normal')
    error.classList.add('error')
    if (tipo == 'Datos'){
        error.innerHTML = `Error en los ${tipo}`;
    } else if (tipo == 'Usuario' || tipo =='Password'){
        error.innerHTML = `Error en el ${tipo}`;
    }
    setTimeout(function(){
        error.classList.remove('error');
        error.classList.add('hide');
        label.classList.remove('hide');
        label.classList.add('normal');
    },3000)
    
}

const crear =(user) =>{
    let span = document.createElement('span')
    span.classList.add('lista')
    span.innerHTML = `Bienvenido ${user}`
    let render = document.getElementById('render')
    render.appendChild(span)
}

function blanquear(u,p){
    u = document.getElementById('usuario').value = ''
    p = document.getElementById('password').value = ''
}

// document.querySelector("btn").addEventListener('click',()=>{
//     window.location.href='./index2.html'
// })