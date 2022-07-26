const textContainer = document.querySelector('.text-container')
const words = document.querySelector('.words')
const characters = document.querySelector('.characters')
const countBtn =  document.querySelector('.count')
const resetBtn = document.querySelector('.reset')
let wordNumber = document.getElementById('word-number')
let characterNumber = document.getElementById('character-number')

function wordCount(){

    // method 1
//     let numWords = 0;
//     const text = textContainer.value
//     for(let i = 0; i < text.length ; i++){
//         var currentCharacter = text[i]
//         // we use empty spaces to mark the end of one word
//         if(currentCharacter == " "){
//             numWords += 1
//         }
//     }
//     // total words = number of spaces + 1
//    numWords += 1
//     console.log(numWords)
      
    //    method 2
    const text = textContainer.value
    // we use .split to turn text into a string
    const turnString = text.split(' ')
    let numWords = 0;
    let numCharacters = text.length;
    for(let i = 0; i < turnString.length; i++){
        if(turnString[i] != ""){
            numWords += 1
        }
    }
    wordNumber.innerHTML = numWords
    characterNumber.innerHTML = numCharacters;
    
}
countBtn.addEventListener('click', wordCount)

function resetCount(){
    textContainer.value = ""
    wordNumber.innerHTML = "0";
    characterNumber.innerHTML = "0";
}
resetBtn.addEventListener('click', resetCount)
const str = " the quick brown fox jumps over the lazy dog"
const stringer = str.split(' ')
