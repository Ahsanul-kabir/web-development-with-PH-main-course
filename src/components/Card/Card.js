import React from 'react';

const Card = ({ product }) => {
    const { name, price } = product;
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text"><small class="text-muted">price: {price}</small></p>
            </div>
        </div>
    );
};

export default Card;