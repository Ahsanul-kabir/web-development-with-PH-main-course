import logo from './logo.svg';
import './App.css';

const name = 'Ahsanul Kabir';
const singers = [
  { name: 'Dr. Mahfuz', job: 'Singer' },
  { name: 'Eva Rahman', job: 'Singer2' },
  { name: 'Agun', job: 'sopno' },
  { name: 'shuvro', job: 'pathor' }
]

const singerStyle = {
  color: 'white',
  backgroundColor: 'red',
}

function App() {
  const nayoks = ['Rubel', 'BappaDa', 'Kuber', 'Jashim', 'Salman Shah', 'Riyaz', 'Anwar'];
  return (
    <div className="App" >
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }

      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}

      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }

      {/* < Person name={nayoks[0]} naika='Mousumi' />
      <Person name='BappaRaz' naika='Cheka'></Person>
      <Person name='Kuber Maji' naika='Kopila' />
      <Person /> */}
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
      {/* <p>Naika : {props.naika || 'Sokina Khatun'}</p> */}
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
