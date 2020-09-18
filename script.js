let number;
let counter = 0;
let startTile = document.querySelector('.startTile')
let tiles = document.querySelector('.tiles')

startTile.addEventListener('click', handleStart)

function handleStart() {
    changeTile();
}

function randomNumber() {
    number = Math.floor(Math.random() * 4 + 1)
    return number;
}

function changeTile() {

    document.querySelector(`.tile`).

}
