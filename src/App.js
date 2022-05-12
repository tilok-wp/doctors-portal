import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appionment from './components/pages/Appionment/Appionment';
import Contact from './components/pages/Contact/Contact';
import About from './components/pages/Home/About/About';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import NotFound from './components/pages/NotFound/NotFound';
import Register from './components/pages/Register/Register';
import Reviews from './components/pages/Reviews/Reviews';
import Header from './components/shared/Header/Header';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appiontment' element={<Appionment></Appionment>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>

  );
}

export default App;
