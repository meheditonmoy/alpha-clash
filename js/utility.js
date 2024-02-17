function addElementbyId(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function removeElementbyId(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('hidden');
}

function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function setRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}

// function makeRandomeAlphabet() {
//     const alphabetString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const alphabets = alphabetString.split('');
//     // console.log(alphabets)


//     const number = Math.random() * 25;
//     const index = Math.round(number);


//     const alphabet = alphabets[index];
//     // console.log(index, alphabet)
//     return alphabet;
// }