import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Countries from './components/Countries/Countries';
import CountryDetail from './components/CountryDetail/CountryDetail';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Posts from './components/Posts/Posts';
import PostDetail from './PostDetail/PostDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/friends/:friendId" element={<FriendDetail />} />
        {/* nested route start*/}
        <Route path="/posts" element={<Posts />}>
          <Route path=":postId" element={<PostDetail />} />
        </Route>
        {/* nested route end*/}
        <Route path="/countries" element={<Countries />}></Route>
        <Route path="/country/:countryName" element={<CountryDetail />}></Route>
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
