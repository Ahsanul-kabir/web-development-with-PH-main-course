import React, { useEffect, useState } from 'react';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));

    }, [])

    return (
        <div>
            <h2>Hello Mello Yello Gello from Countries: {countries.length}</h2>
            <div>
                {
                    countries.map(country => console.log(country))
                }
            </div>
        </div>
    );
};

export default Countries;