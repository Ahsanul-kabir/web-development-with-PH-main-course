function makeRed() {
    document.body.style.backgroundColor = 'red'
}


// handle blue button click by setting function name
const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue; // just say name of the function

function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}