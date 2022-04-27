import logo from './logo.svg';
import './App.css';
import { ToastContainer} from 'react-toastify';          

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import NewUserRegistration from './Views/NewUserRegistration';
import Login from './Views/Login';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
          <Route exact path='/login/' element={<Login />} />
          <Route path='/login/UserRegistration' element={<NewUserRegistration />}/>

          </Routes>

        </div>
          <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
