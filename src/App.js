import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddUsers from './components/AddUsers/AddUsers';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user/add" element={<AddUsers />} />
      </Routes>
    </div>
  );
}

export default App;
