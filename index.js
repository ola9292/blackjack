let player = {
    name: 'ola',
    chips: 145
}
let cards = [];
let sum = 0
let hasBlackjack = false;
let isAlive = false;
let message = '';
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
let playerEl = document.getElementById('player-el')

playerEl.textContent = player.name + ':' + '$' + player.chips

function getRandomCard(){
    if( Math.floor(Math.random() * 13) + 1 === 1){
        return 11
    } else if( Math.floor(Math.random() * 13) + 1 > 10){
        return 10
    }else{
        return  Math.floor(Math.random() * 13) + 1
    }
   
}

function start(){
    isAlive = true;
    let firstNumber = getRandomCard()
    let secondNumber = getRandomCard()
    cards = [firstNumber, secondNumber]
    sum = firstNumber + secondNumber;
    renderGame()
}

function renderGame(){
    sumEl.textContent = 'Sum:' + '' + sum 
    cardsEl.textContent = 'Cards:' 
    for(let i=0; i <cards.length; i++){
        cardsEl.textContent += cards[i] + ' '
    }
    if(sum <= 20){
        message = 'do you want to draw a new card?'
    }else if(sum === 21){
        message = 'wohoo! you have got black jack'
        hasBlackjack = true;
    }else{
       message = 'you are out of the game'
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive && hasBlackjack){
        let thirdCard = getRandomCard()
        sum = sum + thirdCard;
        cards.push(thirdCard)
        renderGame()

    }
   
}