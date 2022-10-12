let characters = JSON.parse(file).results // [{}, {}, {}, ...]
let input_character_name = document.getElementById("input_character_name")
let container = document.getElementById("container")
let resultados = document.getElementById("resultados")
let titulo = document.getElementById("titulo")

function search_character_button_click() {
    let results = 
    `<div class='titulo'>
        <div>
           <h2>Resultados de la búsqueda</h2>
        </div>
     </div>`
    titulo.innerHTML = results
    results = ""
    var pic = ""
    
    let res_characters = search_characters(input_character_name.value)
    for(let i = 0; i<res_characters.length; i++) {
        pic = pic_name(res_characters[i].name)
      results += `
        <div class='cuadrito'>
          <div class = 'divimg tamano-1'><img class='img' src="${pic}" alt="sin imagen"></div>
          <div class = 'name'>Name: ${res_characters[i].name}</div>
          <div class = 'contenido'>BirthYear: ${res_characters[i].birth_year}</div>
          <div class = 'contenido'>Gender: ${res_characters[i].gender}</div>
          <div class = 'contenido'>Height: ${res_characters[i].height}</div>
          <div class = 'contenido'>Mass: ${res_characters[i].mass}</div>
        </div>
      `
      pic = ""
    }
    if(results.length >0){
       resultados.innerHTML = results
       cambiarClase(container,'hide','render')
    }else{
        clean_resultSet()
        let results =`<div class='titulo'>
                         <div class='cuadrito'>
                            <h3>Sin resultados para: "${input_character_name.value}"</h3>
                         </div>
                      </div>`
        resultados.innerHTML = results
        cambiarClase(container,'hide','render')
    }
  }

function clean_resultSet(){
    cambiarClase(container,'render','hide')
}

// solo encuentra uno
function search_character(character_name) { 
  let longitud_cadena = character_name.length
  for(let i = 0;i<characters.length;i++) {
    if(characters[i].name.substring(0,longitud_cadena) == character_name) {
       return characters[i]
    }
  }
}

// Encuentra todos los que coincidan
function search_characters(character_name) {
  let results = []
  let longitud_cadena = character_name.length
  for(let i = 0;i<characters.length;i++) {
    if(characters[i].name.toLowerCase().includes(character_name.toLowerCase())) {
      results.push(characters[i])
    }
  }
  return results
}

function cambiarClase(elemento,claseQuitar,clasePoner){
    elemento.classList.remove(`${claseQuitar}`)
    elemento.classList.add(`${clasePoner}`)
}

function pic_name(item){
    var regex = new RegExp('\\s');
    var newItem = ''; //item;
    console.log(regex);
    //newItem.replace(regex,'');
    newItem = item.replace(regex,'');
    console.log(item.replace(regex,''));
    console.log(newItem);
    return '../img/'+newItem.toLowerCase()+'.png';
}

class Character {
  constructor(name, gender) {
    
    
  }
  
  obtener_iniciales() {
    
  }
  
}