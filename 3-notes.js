// 39-3 Location, URL parts, query string, href, hash, assign, reload


// https://developer.mozilla.org/en-US/docs/Web/API/Location

// developer. = sub domain
// mozilla.org = domain = host name
// en-US/docs/Web/API/Location = path
// 5050 = port


// location diye URL er jekono part access korte pari

console.log(loaction);
console.log(window.loaction);
console.log(location.reload())
// console.log(location.reload());
console.log(location.href);
console.log(location.href = 'https://www.facebook.com');
console.log(location.hash = '#test');
console.log(location.assign('https://web.programming-hero.com/'))
console.log(location.search);
console.log(location.search = '?name=jolil&age=15'); // Query string
console.log(location.host);