let number;
let counter = 0;
let startButton = document.querySelector('.startButton')
let tiles = document.querySelector('.tiles')

startButton.addEventListener('click', handleStart)

function handleStart() {
    number = Math.floor(Math.random() * 4 + 1)

    tiles.classList.add(`tile${number}`)
}
