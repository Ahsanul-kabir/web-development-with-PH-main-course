import './App.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from './firebase.init';


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

function App() {
  return (
    <div className="App">
      <form>
        <input type="text" />
        <input type="password" name="" id="" />
      </form>
    </div>
  );
}

export default App;
