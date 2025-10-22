// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

const groupAnagrams = function(strs) {
    let map = new Map();

    for(let strng of strs){

        //Ordenamos la palabra para despues asignarla como clave del elemento del map
        let sortedKey = strng.toLowerCase().split('').sort().join();

        //Verificamos si ya existe una clave con este valor, en caso de que no exista la creamos como array.
        if(!map.has(sortedKey)){
            map.set(sortedKey, [])
        }

        //Usando la clave del elemento agregamos la palabra
        map.get(sortedKey).push(strng);

    }

    return Array.from(map.values());
};

const strings = ["eat","tea","tan","ate","nat","bat"]

console.log(groupAnagrams(strings))