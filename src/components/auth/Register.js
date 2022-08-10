import React from 'react';
import FormErrors from '../../utils/FormErrors';
import Validate from '../../utils/FormValidation';
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export const Register = () => {
  const navigate = useNavigate();

  const { signUp } = useAuth();

  const [userDetails, setUserDetails] = React.useState({
    username: '',
    email: '',
    password: '',
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Form validation
    clearErrorState();
    const error = Validate(event, userDetails);
    if (error) {
      setErrors({ ...errors, ...error });
    } else {
      // Create New AWS Cognito User Account
      const { username, email, password } = userDetails;
      try {
        await signUp({ username, email, password });
        navigate('/verifyemail');
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
        <h1>Register</h1>
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
                value={userDetails?.username}
                onChange={onInputChange}
              />
            </p>
          </div>
          <div className='field'>
            <p className='control has-icons-left has-icons-right'>
              <input
                className='input'
                type='email'
                id='email'
                aria-describedby='emailHelp'
                placeholder='Enter email'
                value={userDetails?.email}
                onChange={onInputChange}
              />
              <span className='icon is-small is-left'>
                <i className='fas fa-envelope'></i>
              </span>
            </p>
          </div>
          <div className='field'>
            <p className='control has-icons-left'>
              <input
                className='input'
                type='password'
                id='password'
                placeholder='Password'
                value={userDetails?.password}
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
                placeholder='Confirm password'
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
              <Link to='/forgotpassword'>Forgot password?</Link>
            </p>
          </div>
          <div className='field'>
            <p className='control'>
              <button className='button is-success'>Register</button>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

// export default Register;
