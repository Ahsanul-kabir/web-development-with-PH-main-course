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
      <Person name='Rubel' naika='Mousumi' />
      <Person name='BappaRaz' naika='Cheka'></Person>
      <Person name='Kuber Maji' naika='Kopila' />
      <Person />
      <h5>New Component...YAY</h5>
      <Friends movie='Singum' phone='0177' />
      <Friends />
    </div>
  );
}

function Person(props) {
  return (
    <div className='person'>
      <h1>{props.name || 'Dipjol'}</h1>
      <p>Naika : {props.naika || 'Sokina Khatun'}</p>
    </div>

    /*     <>
        <h3>Sakib Al Hasan</h3>
        <p>Profession : Cricketer</p>
        </> */
  )
}

function Friends(props) {
  return (
    <div className='container'>
      <h1>{props.movie || 'Khiladi'}</h1>
      <p>Phone: {props.phone}</p>
    </div>
  )
}

export default App;
