import React from 'react';
import FormErrors from '../../utils/FormErrors';
import Validate from '../../utils/FormValidation';
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const LogIn = () => {
  const { signIn } = useAuth();

  const navigate = useNavigate();

  const [userDetails, setUserDetails] = React.useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({
    cognito: null,
    blankField: false,
  });

  const clearErrorState = () => {
    setErrors({ cognito: null, blankField: false });
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
        // Sign In with Username and Password
        await signIn({
          username: userDetails?.username,
          password: userDetails?.password,
        });
        navigate('/');
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
        <h1>Log in</h1>
        <FormErrors formerrors={errors} />
        <form onSubmit={handleSubmit}>
          <div className='field'>
            <p className='control'>
              <input
                className='input'
                type='text'
                id='username'
                aria-describedby='usernameHelp'
                placeholder='Enter username or email'
                value={userDetails?.username}
                onChange={onInputChange}
              />
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
                <i className='fas fa-lock' />
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
              <button className='button is-success'>Login</button>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LogIn;
