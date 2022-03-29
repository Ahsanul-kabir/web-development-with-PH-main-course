import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        { id: 1, name: 'laptop pro', price: '$100' },
        { id: 2, name: 'laptop crw', price: '$200' },
        { id: 2, name: 'laptop grow', price: '$200' },
    ]
    return (
        <div className="card-group">
            {
                products.map((product) => <Card product={product} key={product.id} />)
            }
        </div>
    );
};

export default CardGroup;