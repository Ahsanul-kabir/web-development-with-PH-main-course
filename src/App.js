import './App.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from './firebase.init';


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

function App() {

  const handleEmailBlur = event => {
    console.log(event.target.value);
  }

  const handlePasswordBlur = event => {
    console.log(event.target.value);
  }

  const handleFormSubmit = event => {
    console.log('form submitted');
    event.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <input onBlur={handleEmailBlur} type="email" name="" id="" />
        <br />
        <input onBlur={handlePasswordBlur} type="password" name="" id="" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
