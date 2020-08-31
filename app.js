document.addEventListener('DOMContentLoaded', () => {

// available cards
const cardArray = [
    {
        name: 'city',
        img: 'images/city-q-c-100-100-8.jpg'
    },
    {
        name: 'bread',
        img: 'images/food-q-c-100-100-10.jpg'
    },
    {
        name: 'sunset',
        img: 'images/nature-q-c-100-100-5.jpg'
    },
    {
        name: 'orchid',
        img: 'images/nature-q-c-100-100-7.jpg'
    },
    {
        name: 'bar',
        img: 'images/nightlife-q-c-100-100-7.jpg'
    },
    {
        name: 'ladies',
        img: 'images/people-q-c-100-100-4.jpg'
    },
    {
        name: 'dj',
        img: 'images/technics-q-c-100-100-2.jpg'
    },
    {
        name: 'bus',
        img: 'images/transport-q-c-100-100-4.jpg'
    },
    {
        name: 'city',
        img: 'images/city-q-c-100-100-8.jpg'
    },
    {
        name: 'bread',
        img: 'images/food-q-c-100-100-10.jpg'
    },
    {
        name: 'sunset',
        img: 'images/nature-q-c-100-100-5.jpg'
    },
    {
        name: 'orchid',
        img: 'images/nature-q-c-100-100-7.jpg'
    },
    {
        name: 'bar',
        img: 'images/nightlife-q-c-100-100-7.jpg'
    },
    {
        name: 'ladies',
        img: 'images/people-q-c-100-100-4.jpg'
    },
    {
        name: 'dj',
        img: 'images/technics-q-c-100-100-2.jpg'
    },
    {
        name: 'bus',
        img: 'images/transport-q-c-100-100-4.jpg'
    },
]

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid');
const result = document.querySelector('#result');
const cardsChosen = [];
const cardsChosenId = [];
const cardsRevealed = [];

//create card board
function createBoard(cardArray) {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/purple-square.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
}

// flip the chosen card
function flipCard() {
    const cardId = this.getAttribute('data-id');
    const cards
    this.setAttribute('src', cardArray[cardId].img);
    cardsChosen.push
}

// check for match
function checkForMatch(cardsChosen) {


}

createBoard(cardArray);

});