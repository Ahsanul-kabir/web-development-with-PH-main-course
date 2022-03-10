// 39-5 (advanced) Cookies, dev tool application tab, get cookie value
// cookie can be 2 types 1. sort term 2. long term

const getCookie = name => {
    const cookie = document.cookie;
    const allCookie = cookie.split('; ');
    const findCookie = allCookie.find(c => c.includes(name));
    if (findCookie) {
        'country=US'
        const cookieNameValue = findCookie.split('=');
        return cookieNameValue[1];
    }
}