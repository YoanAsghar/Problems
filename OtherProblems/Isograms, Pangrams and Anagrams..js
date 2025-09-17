//Creation of an Array method for reversing its order
Array.prototype.reverse = function(){
    let invertedArray = [];
    for(let i = this.length - 1 ; i >= 0; i--){
    invertedArray.push(this[i])
    }
    return invertedArray
}
    //let myArray = [1, 2, 3, 4, 5]
    //console.log(myArray.reverse()) [5, 4, 3, 2, 1]

//Creation of an string method that returns true if a word its a palindrome and false if it isn't
String.prototype.isPalindrome = function(){
    invertedWord =  [...this].reverse().join('');
    if(this == invertedWord){
        return true;
    }
    return false;
}
    //let word = 'reconocer';
    //console.log(palabra.isPalindrome()); True, as it is a Palindrome

//Creation of an string method that returns true if the word is an isogram and false if it isn't
String.prototype.isIsogram = function(){
    let usedLetters = [];
    let arrayOfLetters = [...this.toLowerCase()];
    console.log(arrayOfLetters);
    for (let element of arrayOfLetters){
        if(usedLetters.includes(element)){
            return false;
        }
        usedLetters.push(element)
        console.log(usedLetters)
    }
    
    return true;
}
    //let isogram = 'Camelo'
    //console.log(isogram.isIsogram()) True, as it is an Isogram

//Creation of a function that returns true if the word is an anagram or false if it isn't

function isAnagram(word1, word2){
    if (word1.toLowerCase().split('').sort().join('') == word2.toLowerCase().split('').sort().join('')){
        return true;
    }
    return false;
}

//console.log(isAnagram('El rap es un arte', 'El arte es un par'))