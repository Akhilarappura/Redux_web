import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SiginIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from './Components/Header'



const App = () => {
  return(
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/sign-in' element={<SignIn />} />
    <Route path='/sign-out' element={<SignUp />} />
    <Route path='/profile' element={<Profile />} />
  </Routes>
  </BrowserRouter>
  );
   
}

export default App;