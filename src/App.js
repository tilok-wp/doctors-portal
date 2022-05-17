import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appionment from './components/pages/Appionment/Appionment';
import Contact from './components/pages/Contact/Contact';
import About from './components/pages/About/About';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import NotFound from './components/pages/NotFound/NotFound';
import Register from './components/pages/Register/Register';
import Reviews from './components/pages/Reviews/Reviews';
import Header from './components/shared/Header/Header';
import RequirAuth from './components/pages/Login/RequirAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/pages/Dashboard/Dashboard';
import MyAppoinments from './components/pages/Dashboard/MyAppoinments';
import MyReview from './components/pages/Dashboard/MyReview';
import MyHistory from './components/pages/Dashboard/MyHistory';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appionment' element={
          <RequirAuth><Appionment></Appionment></RequirAuth>
        }></Route>


        <Route path='/dashboard' element={<RequirAuth><Dashboard></Dashboard></RequirAuth>}>

          <Route index element={<MyAppoinments></MyAppoinments>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<MyHistory />}></Route>

        </Route>


        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>

  );
}

export default App;
