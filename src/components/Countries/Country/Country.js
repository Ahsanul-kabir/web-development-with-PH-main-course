import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country);
    const { name, population, area, flag } = props.country; // destructuring
    return (
        <div className='country'>
            <h1>Name: {name.common}</h1>
            <p>Population {population}</p>
            <p><small>Area: {area}</small></p>
            <p><small>Region: {props.country.region}</small></p>
        </div>
    );
};

export default Country;