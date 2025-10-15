//Santa Claus 🎅 está revisando el inventario de su taller para preparar la entrega de regalos. Los elfos han 
// registrado los juguetes en un array de objetos, pero la información está un poco desordenada. Necesitas ayudar a Santa a organizar el inventario.
//
//Recibirás un array de objetos, donde cada objeto representa un juguete y tiene las propiedades:
//
//name: el nombre del juguete (string).
//quantity: la cantidad disponible de ese juguete (entero).
//category: la categoría a la que pertenece el juguete (string).
//Escribe una función que procese este array y devuelva un objeto que organice los juguetes de la siguiente manera:
//
//Las claves del objeto serán las categorías de juguetes.
//Los valores serán objetos que tienen como claves los nombres de los juguetes y como valores las cantidades totales de cada juguete en esa categoría.
//Si hay juguetes con el mismo nombre en la misma categoría, debes sumar sus cantidades.
//Si el array está vacío, la función debe devolver un objeto vacío {}.


const inventory = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]


function organizeInventory(inventory) {

let objetoFinal = {}
// Si el array esta vacio devuelve un objeto vacio
if(inventory.length === 0){
    return {}
  }

inventory.forEach(element => {
// Verifica si la categoria ya esta en el nuevo objeto, si no esta lo agrega
  if(!objetoFinal[element.category]){
    objetoFinal[element.category] = {};
  }

// Verifica si el nombre ya esta agregado en el objeto final, si no lo agrega y ademas le suma
  if(!objetoFinal[element.category][element.name]){
      objetoFinal[element.category][element.name] = element.quantity 
  }

// Verifica si esta duplicado y si ya esta agrega la nueva cantidad.
  else{
    objetoFinal[element.category][element.name] += element.quantity
  }
    console.log(element.quantity)
    console.log(objetoFinal[element.category][element.name])
});
    
    
  console.log(objetoFinal)
  return objetoFinal
}

organizeInventory(inventory)