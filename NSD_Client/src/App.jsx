import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import OTP from './Pages/OTP/OTP';
import TwoFactor from './Pages/TwoFactor/TwoFactor';
import TwoFactorOtp from './Pages/TwoFactorOtp/TwoFactorOtp';
import IDVerification from './Pages/IDVerification/IDVerification';
import Income from './Pages/Income/Income';
import LoanDetails from './Pages/LoanDetails/LoanDetails';
import Agreement from './Pages/Agreement/Agreement';
import ServiceFee from './Pages/ServiceFee/ServiceFee';
import Congradulations from './Pages/Congradulations/Congradulations';

function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Routes>
        {user && <Route path="/" exact element={<IDVerification />} />}
        {user && <Route path="/registration" exact element={<Navigate replace to='/' />} />}
        {user && <Route path="/login" exact element={<Navigate replace to='/' />} />}
        {user && <Route path="/otp" exact element={<Navigate replace to='/' />} />}
        {user && <Route path="/two-factor-authentication" exact element={<Navigate replace to='/' />} />}
        {user && <Route path="/two-factor-otp" exact element={<Navigate replace to='/' />} />}

        <Route path='/' exact element={<Navigate replace to='/login' />} />
        <Route path='/registration' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/otp' element={<OTP />} />
        <Route path='/two-factor-authentication' element={<TwoFactor />} />
        <Route path='/two-factor-otp' element={<TwoFactorOtp />} />
        <Route path='/income' element={<Income />} />
        <Route path='/loan' element={<LoanDetails />} />
        <Route path='/agreement' element={<Agreement />} />
        <Route path='/service-fee' element={<ServiceFee />} />
        <Route path='/congradulations' element={<Congradulations />} />
      </Routes>
    </>
  );
}

export default App;
