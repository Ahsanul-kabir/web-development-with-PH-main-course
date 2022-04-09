import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {

    return (
        <div>
            <h2>Please Login</h2>
            <div style={{ margin: '20px' }}>
                <button onClick={ }>Google Sign In</button>
            </div>
            <form>
                <input type="text" placeholder='Your name' />
                <br />
                <input type="password" name="" id="" placeholder='Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;