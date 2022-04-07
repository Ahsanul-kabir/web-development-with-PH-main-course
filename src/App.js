import './App.css';
import app from './firebase.init';
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from 'react';

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      }).catch((error) => {
        console.log('error', error)
      });
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log('error', error)
      });
  }

  return (
    <div className="App">
      {/* { condition ? true : flase} */}
      {
        user.email ? <button onClick={handleSignOut}>Sign out</button>
          :
          <button onClick={handleGoogleSignIn}>Google Sign In</button>
      }
      <h2>Name: {user.displayName}</h2>
      <p>I know your email address: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
