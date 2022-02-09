function makeRed() {
    document.body.style.backgroundColor = 'red'
}


// handle blue button click by setting function name
const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue; // just say name of the function

function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}


// handle event using anonymous function  // anonymous function =  which function don't have name
greenButton = document.getElementById('make-green-button')
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green'
}

// handle by using add eventLisenter
const goldenButton = document.getElementById('make-goldenRod-button')
goldenButton.addEventListener('click', makeGoldenRod)

function makeGoldenRod() {
    console.log('goldenRod button is clicked')
    document.body.style.backgroundColor = 'goldenRod'
}


// handle by using add eventLisenter's anonymous function
lemonChiffonButton = document.getElementById('make-lemonChiffon-button');
lemonChiffonButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'lemonChiffon';
});


// direct shortcut
document.getElementById('make-lightBlue-button').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})


