import React, { useState } from 'react';
import FormErrors from '../../utils/FormErrors';
import Validate from '../../utils/FormValidation';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const VerifyEmail = () => {
  const navigate = useNavigate();

  const { unverifiedAccount, confirmAccount } = useAuth();

  const [confirmCode, setConfirmCode] = useState({
    verificationCode: '',
  });

  const [errors, setErrors] = useState({
    cognito: null,
    blankField: false,
    passwordMatch: false,
  });

  const clearErrorState = () => {
    setErrors({
      cognito: null,
      blankField: false,
      passwordMatch: false,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Form validation
    clearErrorState();
    const error = Validate(event, confirmCode);
    if (error) {
      setErrors({ ...errors, ...error });
    } else {
      // Verify AWS Cognito User Account
      const { verificationCode } = confirmCode;
      try {
        await confirmAccount({ confirmCode: verificationCode });
        navigate('/welcome');
      } catch (error) {
        const err = error.message ? error : { message: error };
        setErrors({ ...errors, cognito: err });
      }
    }
  };

  const onInputChange = (event) => {
    setConfirmCode({
      [event.target.id]: event.target.value,
    });
    document.getElementById(event.target.id).classList.remove('is-danger');
  };

  return (
    <section className='section auth'>
      <div className='container'>
        <h1>Complete Your Registration</h1>
        <FormErrors formerrors={errors} />
        <form onSubmit={handleSubmit}>
          <div className='field'>
            <p className='control'>
              <input
                className='input'
                type='text'
                id='username'
                aria-describedby='userNameHelp'
                placeholder='Enter username'
                value={unverifiedAccount?.username}
                disabled={true}
              />
            </p>
          </div>
          <h1
            style={{
              marginTop: '1em',
              marginBottom: '1em',
            }}
          >
            Please enter the confirmation code sent to your email.
          </h1>
          <div className='field'>
            <p className='control has-icons-left has-icons-right'>
              <input
                className='input'
                type='text'
                id='verificationCode'
                aria-describedby='verificationCodeHelp'
                placeholder='Enter verification code'
                value={confirmCode?.verificationCode}
                onChange={onInputChange}
              />
              <span className='icon is-small is-left'>
                <i className='fas fa-check-circle'></i>
              </span>
            </p>
          </div>
          <div className='field'>
            <p className='control'>
              <button className='button is-success'>Confirm Register</button>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default VerifyEmail;
