//Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco
//debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.
//
//Reglas:
//
//Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
//Cada nombre debe estar en una línea, alineado a la izquierda.
//El marco está construido con * y tiene un borde de una línea de ancho.
//La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.


function createFrame(names){
  // Code here
let MarcoFinal = '';
//Encontrar la palabra mas larga para hacer el marco superior
    let palabraLarga = '';
    names.forEach(element => {
        if(element.length > palabraLarga.length){
            palabraLarga = element
        }
    })

//Crea y escribe el marco superior que va en la primera parte
    let asterisco = '*';
    let marcoSuperior = '****';
  for(let i = 0;i < palabraLarga.length; i++){
    marcoSuperior += asterisco;
}
MarcoFinal += (marcoSuperior + '\n')

  //Escribe cada nombre y le agrega los * al principio y al final
  
    names.forEach(element => {
        let espacio = ' ';
        let nombreEnmarcado = `* ${element} `
        for(let i = element.length; i < marcoSuperior.length - 4; i++){
            nombreEnmarcado += espacio
        }
        nombreEnmarcado = nombreEnmarcado + '*'
        MarcoFinal += nombreEnmarcado + '\n'
    });
    
MarcoFinal += (marcoSuperior)
console.log(MarcoFinal)
return MarcoFinal
}

createFrame(["David", "Victor", "Angel", "Sara", "Jordan", "Leopold"])


