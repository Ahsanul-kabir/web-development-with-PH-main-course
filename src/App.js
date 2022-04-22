import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddUsers from './components/AddUsers/AddUsers';
import Home from './components/Home/Home';
import UpdateUser from './components/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user/add" element={<AddUsers />} />
        <Route path="/update/:id" element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;
