import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
// import { LoadingSpinner } from './components/auth/LoadingSpinner';
import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Checkout,
  Error,
  PrivateRoute,
  AuthWrapper,
} from './pages';
// Amplify auth implementation
import { Register } from './components/auth/Register';
import LogIn from './components/auth/LogIn';
import ForgotPassword from './components/auth/ForgotPassword';
import ForgotPasswordVerification from './components/auth/ForgotPasswordVerification';
import ChangePassword from './components/auth/ChangePassword';
import ChangePasswordConfirm from './components/auth/ChangePasswordConfirm';
import Welcome from './components/auth/Welcome';
import VerifyEmail from './components/auth/VerifyEmail';
import useAuth from './hooks/useAuth';

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route
            path='/forgotpasswordverification'
            element={<ForgotPasswordVerification />}
          />
          <Route
            path='/changepassword'
            element={
              <PrivateRoute>
                <ChangePassword />
              </PrivateRoute>
            }
          />
          <Route
            path='/changepasswordconfirmation'
            element={<ChangePasswordConfirm />}
          />
          <Route path='/verifyemail' element={<VerifyEmail />} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<SingleProduct />} />
          <Route
            path='/checkout'
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
