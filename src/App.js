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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>

        <div className="container">
          <h3>Hello Dude, React! how are you?</h3>
        </div>

        <div className="music">
          <p>{name + 7}</p>
          <p style={singerStyle}>Singer Name: {singer.name} & Job: {singer.job}</p>
          <p style={{ color: 'blue', backgroundColor: 'aquamarine' }}>Singer Name: {singer2.name} & Job: {singer2.job}</p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
