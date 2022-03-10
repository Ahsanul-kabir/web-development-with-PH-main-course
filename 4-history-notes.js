// 39-4 History api to navigate back, forward, go, history length

// https://developer.mozilla.org/en-US/docs/Web/API/History_API

console.log(history)
console.log(history.length)
console.log(history.back())
console.log(history.forward())

console.log(history.go(-1)) // same as back
console.log(history.go(-3)) // same as back

console.log(history.go(1)) // same as forward

console.log(history.go(0)) // refresh the page