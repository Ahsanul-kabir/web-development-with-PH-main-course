import logo from './logo.svg';
import './App.css';

const name = 'Ahsanul Kabir';
const singer = { name: 'Dr. Mahfuz', job: 'Singer' };
const singer2 = { name: 'Eva Rahman', job: 'Singer' };

const singerStyle = {
  color: 'white',
  backgroundColor: 'red',
}

function App() {
  return (
    <div className="App">
      <Person />
      <Person />
      <Person />
      <Person />
      <h5>New Component...YAY</h5>
      <Friends />
      <Friends />
    </div>
  );
}

function Person() {
  return (
    <div className='person'>
      <h1>Sakib Al Hasan</h1>
      <p>Profession : Cricketer</p>
    </div>

    /*     <>
        <h3>Sakib Al Hasan</h3>
        <p>Profession : Cricketer</p>
        </> */
  )
}

function Friends() {
  return (
    <div className='container'>
      <h1>Ajan Dev Gan</h1>
      <p>Actor</p>
    </div>
  )
}

export default App;
