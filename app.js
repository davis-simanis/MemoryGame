document.addEventListener('DOMContentLoaded', () => {

// available cards
const imageArray = [
    {
        img: 'images/city-q-c-100-100-8.jpg'
    },
    {
        img: 'images/food-q-c-100-100-10.jpg'
    },
    {
        img: 'images/nature-q-c-100-100-5.jpg'
    },
    {
        img: 'images/nature-q-c-100-100-7.jpg'
    },
    {
        img: 'images/nightlife-q-c-100-100-7.jpg'
    },
    {
        img: 'images/people-q-c-100-100-4.jpg'
    },
    {
        img: 'images/technics-q-c-100-100-2.jpg'
    },
    {
        img: 'images/transport-q-c-100-100-4.jpg'
    }
];

const cardsArray = [];
initializeCards(imageArray, cardsArray);

const grid = document.querySelector('.grid');
const result = document.querySelector('#result');
let cardsChosen = [];
const cardsMatched = [];

//create card board
function createBoard(cardsArray) {
    cardsArray.forEach( card => {
        const domCard = document.createElement('img');
        domCard.setAttribute('src', card.getDisplayImage());
        domCard.setAttribute('id', `card${card.getId()}`);
        domCard.addEventListener('click', checkForMatch);
        grid.appendChild(domCard);
    })
}

function updateDisplayImage(array) {

    array.forEach(card => {
        domCard = document.querySelector(`#card${card.getId()}`);
        domCard.setAttribute('src', card.getDisplayImage())
    });

}

function updateScore(){
    const result = document.querySelector('#result');
    result.textContent = cardsMatched.length;
}

// check for match
function checkForMatch() {
    const domCard = this;
    const card = getCard(domCard.getAttribute('id').slice(4));
    card.flip();
    cardsChosen.push(card);

    updateDisplayImage(cardsChosen);

    if(cardsChosen.length === 2) {
        setTimeout(() => {
            if (cardsChosen[0].image === cardsChosen[1].image) {
                cardsChosen[0].markMatched();
                cardsChosen[1].markMatched();
                cardsMatched.push(cardsChosen[0]);
                updateScore();
            } else {
                cardsChosen[0].flipBack();
                cardsChosen[1].flipBack();
            }
            updateDisplayImage(cardsChosen);
            cardsChosen = [];
        },
        400);
    }
}

function getCard(cardId) {
    let result = 'Card is not found';

    cardsArray.forEach(card => {
        if (card.getId() == cardId) {
            result = card;
        }
    });

    return result;
}

function initializeCards(imageArray, cardsArray) {
    for (let i = 0; i < imageArray.length; i++) {
        const pairFirstCardId = i;
        const pairSecondCardId = (imageArray.length * 2) - 1 - i;

        cardsArray[pairFirstCardId] = new Card(pairFirstCardId, imageArray[i].img);
        cardsArray[pairSecondCardId] = new Card(pairSecondCardId, imageArray[i].img);
    }

    cardsArray.sort(() => 0.8 - Math.random());
};

createBoard(cardsArray);

});

class Card {
    imageAfterMatched = 'images/blank-square.jpg';
    imageBeforeMatched = 'images/purple-square.jpg';
    displayImage = '';
    image = '';
    id = '';

    constructor(id, image)  {
        this.id = id;
        this.image = image;
        this.displayImage = this.imageBeforeMatched;
    }

    getDisplayImage() {
        return this.displayImage;
    }

    getImage() {
        return this.image;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    setImage(image) {
        this.image = image;
    }

    flip() {
        this.displayImage = this.image;
    }

    flipBack() {
        this.displayImage = this.imageBeforeMatched
    }

    markMatched() {
        this.displayImage = this.imageAfterMatched;
    }
}