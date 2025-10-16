// ¡Es hora de poner el árbol de Navidad en casa! 🎄 
// Pero 
// este año queremos que sea especial. Vamos a crear una 
// función que recibe la altura del árbol 
// (un entero positivo entre 1 y 100) y un 
// carácter especial para decorarlo.

// La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:

// El árbol está compuesto de triángulos de caracteres especiales.
// Los espacios en blanco a los lados del árbol 
// se representan con guiones bajos _.
// Todos los árboles tienen un tronco de dos líneas, 
// representado por el carácter #.
// El árbol siempre debe tener la misma longitud por 
// cada lado.
// Debes asegurarte de que el árbol tenga la forma 
// correcta usando saltos de línea \n para cada línea.
// Ejemplos:


function createXmasTree(height, ornament) {
  let piezaDeArbol = ornament;
  let barraBaja = '_'
  let largoTotal = 2 * (height - 1) + 1; // 9 for the example
  let largoDeLado = (largoTotal - 1) / 2; // 4 for the example
  let arbolCompletado = ""
  

  for(let i = 0; i <= largoDeLado - 2;i++){
        barraBaja += '_'
    }
let barraBajaTotal = barraBaja;

  for(let i = 0;i < height; i++){ 
    //console.log(`${barraBaja}${piezaDeArbol}${barraBaja}\n`)
    arbolCompletado += `${barraBaja}${piezaDeArbol}${barraBaja}\n`
    barraBaja = barraBaja.slice(0, -1)
    piezaDeArbol += ornament
    piezaDeArbol += ornament
    
  }
  arbolCompletado += `${barraBajaTotal}#${barraBajaTotal}\n`
  arbolCompletado += `${barraBajaTotal}#${barraBajaTotal}`
  return(arbolCompletado)
  

}

console.log(createXmasTree(7, '*'))