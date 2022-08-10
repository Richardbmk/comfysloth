import React from 'react';
import FormErrors from '../../utils/FormErrors';
import Validate from '../../utils/FormValidation';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ForgotPasswordVerification = () => {
  const navigate = useNavigate();

  const { resetPassword, resetPasswordAccount } = useAuth();

  const [userDetails, setUserDetails] = React.useState({
    username: resetPasswordAccount?.username,
    verificationCode: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = React.useState({
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

  const passwordVerificationHandler = async (event) => {
    event.preventDefault();

    // Form validation
    clearErrorState();
    const error = Validate(event, userDetails);
    if (error) {
      setErrors({ ...errors, ...error });
    } else {
      try {
        // Forgot Password
        await resetPassword({
          username: userDetails?.username,
          code: userDetails?.verificationCode,
          newPassword: userDetails?.newPassword,
        });
        navigate('/changepasswordconfirmation');
      } catch (error) {
        const err = error.message ? error : { message: error };
        setErrors({ ...errors, cognito: err });
      }
    }
  };

  const onInputChange = (event) => {
    setUserDetails({
      ...userDetails,
      [event.target.id]: event.target.value,
    });
    document.getElementById(event.target.id).classList.remove('is-danger');
  };

  return (
    <section className='section auth'>
      <div className='container'>
        <h1>Set new password</h1>
        <p>
          Please enter the verification code sent to your email address below,
          your email address and a new password.
        </p>
        <FormErrors formerrors={errors} />

        <form onSubmit={passwordVerificationHandler}>
          <div className='field'>
            <p className='control has-icons-left has-icons-right'>
              <input
                type='text'
                className='input'
                id='username'
                aria-describedby='emailHelp'
                placeholder='Enter username'
                value={userDetails?.username}
                onChange={onInputChange}
              />
              <span className='icon is-small is-left'>
                <i className='fas fa-user'></i>
              </span>
            </p>
          </div>
          <div className='field'>
            <p className='control has-icons-left has-icons-right'>
              <input
                className='input'
                type='text'
                id='verificationCode'
                aria-describedby='verificationCodeHelp'
                placeholder='Enter verification code'
                value={userDetails?.verificationCode}
                onChange={onInputChange}
              />
              <span className='icon is-small is-left'>
                <i className='fas fa-check-circle'></i>
              </span>
            </p>
          </div>
          <hr />
          <div className='field'>
            <p className='control has-icons-left'>
              <input
                type='password'
                className='input'
                id='newPassword'
                placeholder='New password'
                value={userDetails?.newPassword}
                onChange={onInputChange}
              />
              <span className='icon is-small is-left'>
                <i className='fas fa-lock'></i>
              </span>
            </p>
          </div>
          <div className='field'>
            <p className='control has-icons-left'>
              <input
                className='input'
                type='password'
                id='confirmPassword'
                placeholder='Confirm new password'
                value={userDetails?.confirmPassword}
                onChange={onInputChange}
              />
              <span className='icon is-small is-left'>
                <i className='fas fa-lock'></i>
              </span>
            </p>
          </div>
          <div className='field'>
            <p className='control'>
              <button className='button is-success'>
                Confirm New Password
              </button>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgotPasswordVerification;
