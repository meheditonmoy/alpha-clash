// function play(){
//     const screenHome = document.getElementById('home-screen');
//     // console.log(screenHome.classList)
//     screenHome.classList.add('hidden');

//     const playgroundScreen = document.getElementById('play-ground')
//     playgroundScreen.classList.remove('hidden')
// }
function contenueGame() {
    const randomNum = setRandomAlphabet();
    console.log('Your alphabate num is :', randomNum);

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = randomNum;

    setBackgroundColor(randomNum);
}

function play() {
    addElementbyId('home-screen');
    removeElementbyId('play-ground');
    contenueGame();
}