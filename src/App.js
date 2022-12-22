import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Sign-up/Signup';
import ForgetPassword from './components/forgetPassword/forgetPassword';
import SendMe from './components/sendMe/sendMe';
import Confirm from './components/Confirm/Confirm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/sendEmail" element={<SendMe />} />
      <Route path="/confirm" element={<Confirm />} />
    </Routes>
  );
}

export default App;
