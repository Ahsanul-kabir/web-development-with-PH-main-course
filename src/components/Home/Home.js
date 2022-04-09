import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h2>This is Home</h2>
            <h2>Current User is {user ? user.displayName : 'Nobody'}</h2>
        </div>
    );
};

export default Home;