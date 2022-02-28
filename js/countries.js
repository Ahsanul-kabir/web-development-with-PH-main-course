const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
loadCountries();

const displayCountries = counties => {
    // for (const country of counties) {
    //     console.log(country);
    // }
    const countriesDiv = document.getElementById('countries');
    counties.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        div.classList.add('country')
        h3.innerText = country.name.common;
        div.appendChild(h3);
        const p = document.createElement('p');
        p.innerText = `Capital: ${country.capital}`;
        div.appendChild(p);
        countriesDiv.appendChild(div);
    });
}
