import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div>
            <h2>This is Orders : {products.length}</h2>
            <h2>Cart has : {cart.length}</h2>
        </div>
    );
};

export default Orders;