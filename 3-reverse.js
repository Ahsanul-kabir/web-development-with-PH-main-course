// 22-3 Explore string nature and reverse a string

const greetings = 'Hello, how are you?';

function reverseString(text) {
    let reverse = '';
    for (const letter of text) {
        reverse = letter + reverse;
    }
}
const reversed = reverseString(greetings);
console.log(reversed);


// ** string immutable(non changeable) but Array is changeable