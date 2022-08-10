import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import FormErrors from '../../utils/FormErrors';
import Validate from '../../utils/FormValidation';
import useAuth from '../../hooks/useAuth';

const ChangePassword = () => {
  const navigate = useNavigate();

  const { changePassword } = useAuth();

  const [userDetails, setUserDetails] = React.useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = React.useState({
    cognito: null,
    blankField: false,
    passwordMatch: false,
  });

  const clearErrorState = () => {
    setErrors({ cognito: null, blankField: false, passwordMatch: false });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Form validation
    clearErrorState();
    const error = Validate(event, userDetails);
    if (error) {
      setErrors({ ...errors, ...error });
    } else {
      try {
        // Change User Password
        await changePassword({
          oldPassword: userDetails?.oldPassword,
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
        <h1>Change Password</h1>
        <FormErrors formerrors={errors} />

        <form onSubmit={handleSubmit}>
          <div className='field'>
            <p className='control has-icons-left'>
              <input
                className='input'
                type='password'
                id='oldPassword'
                placeholder='Old password'
                value={userDetails?.oldPassword}
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
              <Link to='/forgotpassword'>Forgot your old password?</Link>
            </p>
          </div>
          <div className='field'>
            <p className='control'>
              <button className='button is-success'>Change Password</button>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ChangePassword;
