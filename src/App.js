import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Services from './Pages/Home/Services/Services';
import About from './Pages/About/About';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={ } />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
