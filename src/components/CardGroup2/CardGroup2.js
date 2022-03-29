import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card2/Card2';

const CardGroup2 = () => {
    const products = [
        { id: 1, name: 'laptop pro', price: '$100' },
        { id: 2, name: 'laptop crw', price: '$200' },
        { id: 2, name: 'laptop grow', price: '$200' },
    ]
    return (
        <div>
            <CardGroup>
                {
                    products.map((product) => <Card2 product={product} key={product.id} />)
                }
            </CardGroup>
        </div>
    );
};

export default CardGroup2;