import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props);
    return (
        <div className='country'>
            <h1>Name: {props.name}</h1>
            <p>Population {props.population}</p>
            <p><small>Area: {props.area}</small></p>
        </div>
    );
};

export default Country;