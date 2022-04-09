import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import useFirebase from '../../hooks/useFirebase';
import app from '../../firebase.init';
import { getAuth } from 'firebase/auth';

const auth = getAuth(app);

const Home = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h2>This is Home</h2>
            <h2>Current User is {user ? user.displayName : 'Nobody'}</h2>
        </div>
    );
};

export default Home;