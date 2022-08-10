import React, { useState } from 'react';
import FormErrors from '../../utils/FormErrors';
import Validate from '../../utils/FormValidation';
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ForgotPassword = () => {
  const { sendPasswordResetMail } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState({
    cognito: null,
    blankField: false,
  });

  const clearErrorState = () => {
    setErrors({
      cognito: null,
      blankField: false,
    });
  };

  const forgotPasswordHandler = async (event) => {
    event.preventDefault();

    // Form validation
    clearErrorState();
    const error = Validate(event, { username });
    if (error) {
      setErrors({ ...errors, ...error });
    } else {
      try {
        // Forgot Password
        await sendPasswordResetMail({ username });
        navigate('/forgotpasswordverification');
      } catch (error) {
        const err = error.message ? error : { message: error };
        setErrors({ ...errors, cognito: err });
      }
    }
  };

  const onInputChange = (event) => {
    setUsername(event.target.value);
    document.getElementById(event.target.id).classList.remove('is-danger');
  };

  return (
    <section className='section auth'>
      <div className='container'>
        <h1>Reset your Password</h1>
        <p>
          Please enter the username associated with your account and we'll email
          you a password reset code.
        </p>
        <FormErrors formerrors={errors} />

        <form onSubmit={forgotPasswordHandler}>
          <div className='field'>
            <p className='control has-icons-left has-icons-right'>
              <input
                type='text'
                className='input'
                id='username'
                aria-describedby='emailHelp'
                placeholder='Enter username'
                value={username}
                onChange={onInputChange}
              />
              <span className='icon is-small is-left'>
                <i className='fas fa-user'></i>
              </span>
            </p>
          </div>
          <div className='field'>
            <p className='control'>
              <Link to='/login'>Login instead?</Link>
            </p>
          </div>
          <div className='field'>
            <p className='control'>
              <button className='button is-success'>Send Code</button>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
