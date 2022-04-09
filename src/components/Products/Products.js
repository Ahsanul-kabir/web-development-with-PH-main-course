import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h2>knock knock ! who is there</h2>
            <h2>Current User is {user ? user.displayName : 'Nobody'}</h2>
        </div>
    );
};

export default Products;