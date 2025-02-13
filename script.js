let easyMode = false;
let mediumMode = false;
let hardMode = false;
let score = 0;
let correctGuesses = 0;
let timerValue = 0;

let currentWord_ = null;
let letterMapping = {};
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

document.querySelector('.btn-start-game-easy').addEventListener('click', ()=>{
easyMode = true;
    document.querySelector('.start-container').remove();
    document.querySelector('.game-container').classList.remove('hide');
    setInterval(()=>{
        timerValue += 1;
        document.querySelector('.time').innerText = timerValue;
    },1000)
    generateLetterMapping();
    displayMapping();
    let currentWord = generateWord();
    document.getElementById('word-display').innerText = currentWord;
    currentWord_ = currentWord; 
    checkForEndOfGame();
})

document.querySelector('.btn-start-game-medium').addEventListener('click', ()=>{
  mediumMode = true;
    document.querySelector('.start-container').remove();
    document.querySelector('.game-container').classList.remove('hide');
    setInterval(()=>{
        timerValue += 1;
        document.querySelector('.time').innerText = timerValue;
    },1000)
    generateLetterMapping();
    displayMapping();
    let currentWord = generateWord();
    document.getElementById('word-display').innerText = currentWord;
    currentWord_ = currentWord; 
    checkForEndOfGame();
})

document.querySelector('.btn-start-game-hard').addEventListener('click', ()=>{
hardMode = true;
    document.querySelector('.start-container').remove();
    document.querySelector('.game-container').classList.remove('hide');
    setInterval(()=>{
        timerValue += 1;
        document.querySelector('.time').innerText = timerValue;
    },1000)
    generateLetterMapping();
    displayMapping();
    let currentWord = generateWord();
    document.getElementById('word-display').innerText = currentWord;
    currentWord_ = currentWord; 
    checkForEndOfGame();
})

function generateLetterMapping() {
    alphabet.split('').forEach(letter => {
        letterMapping[letter] = Math.floor(Math.random() * 100) + 1;
    });
}

function displayMapping() {
    const table = document.getElementById('mapping-table');
    for (let letter in letterMapping) {
        table.innerHTML += `<tr><td>${letter}</td><td>${letterMapping[letter]}</td></tr>`;
    }
}

function generateWord() {
    if(easyMode){
        const words= ['or', 'and', 'tee', 'tip', 'bot', 'all','in'];
        return words[Math.floor(Math.random() * words.length)];
    }
    if(mediumMode){
        const words  = ['fish', 'duck', 'nine', 'word', 'soup'];
        return words[Math.floor(Math.random() * words.length)];
    }
    if(hardMode){
        const words = ['string', 'sting', 'apple', 'dragon'];
        return words[Math.floor(Math.random() * words.length)];
    }

}



function getWordValue(word) {
    return word.split('').map(letter => letterMapping[letter]).join('');
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value;
    const correctAnswer = getWordValue(currentWord_);
    

    if(correctAnswer === userAnswer){
        score += 10;
        document.querySelector('.points').innerText = score;
        correctGuesses += 1;

    }

    if(correctAnswer !== userAnswer){
        score -= 5;
        document.querySelector('.points').innerText = score;
    }
    let currentWord = generateWord();
document.getElementById('word-display').innerText = currentWord;
currentWord_ = currentWord; 
document.getElementById('answer').value = '';
}

function checkForEndOfGame(){
    setInterval(()=>{
if(timerValue >= 10){
document.querySelector('.game-container').remove();
document.querySelector('.results-container').classList.remove('hide');
document.querySelector('.results').innerText = correctGuesses;
document.querySelector('.results-score').innerText = score;

}
    },1000)
}