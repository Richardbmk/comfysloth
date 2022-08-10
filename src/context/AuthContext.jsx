import React, { useEffect, useState } from 'react';
import { Auth, Hub } from 'aws-amplify';

export const AuthContext = React.createContext({
  user: null,
  unverifiedAccount: null,
  resetPasswordAccount: null,
  userLoading: true,
  signIn: async () => Promise,
  signOut: async () => Promise,
  signUp: async () => Promise,
  confirmAccount: async () => Promise,
  sendPasswordResetMail: async () => Promise,
  resendConfirmCode: async () => Promise,
  resetPassword: async () => Promise,
  changePassword: async () => Promise,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [resetPasswordAccount, setResetPasswordAccount] = useState({
    username: '',
  });
  const [unverifiedAccount, setUnverifiedAccount] = useState({
    username: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    fetchAuthUser();
    // listening for auth change events
    setupAuthSubscription();
    return () => {
      Hub.remove('auth', fetchAuthUser);
    };
  }, []);

  /**
   * fetch currently logged-in user using AWS Auth library
   * @returns {Promise<void>}
   */
  const fetchAuthUser = async () => {
    try {
      console.log('fetchAuthUser');
      const fetchedUser = await Auth.currentAuthenticatedUser();
      setUserLoading(false);
      setUser(fetchedUser);
    } catch (err) {
      setUserLoading(false);
      setUser(null);
    }
  };

  /**
   * subscription for auth event changes
   */
  const setupAuthSubscription = () => {
    Hub.listen('auth', async ({ payload: { event, data } }) => {
      console.log('Auth Status Changed Event: ', event);
      console.log('Auth Status Changed Data: ', data);
      switch (event) {
        case 'signIn':
          await fetchAuthUser();
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'signIn_failure':
        case 'signUp_failure':
          if (user) {
            setUser(null);
          }
          break;
        case 'signUp':
        case 'forgotPassword':
        case 'forgotPasswordSubmit':
        case 'forgotPasswordSubmit_failure':
        case 'forgotPassword_failure':
          break;
        default:
          await fetchAuthUser();
      }
    });
  };

  /**
   * log user in
   * @param username
   * @param password
   */
  const signIn = async ({ username, password }) => {
    await Auth.signIn({ username, password });
  };

  /**
   * create new user account
   * @param username
   * @param email
   * @param password
   */
  const signUp = async ({ username, email, password }) => {
    await Auth.signUp({
      username,
      password,
      attributes: {
        email: email,
      },
    });
    setUnverifiedAccount({ username, email, password });
  };

  /**
   * confirm account using code
   * @param confirmCode
   * @returns {Promise<any>}
   */
  const confirmAccount = async ({ confirmCode }) => {
    await Auth.confirmSignUp(unverifiedAccount?.username, confirmCode);
    await signIn({
      username: unverifiedAccount?.username,
      password: unverifiedAccount?.password,
    });
  };

  /**
   * resend confirmation code
   * @returns {Promise<any>}
   */
  const resendConfirmCode = async () =>
    Auth.resendSignUp(unverifiedAccount?.email);

  /**
   * logout user
   */
  const signOut = async () => Auth.signOut();

  /**
   * send forgot password confirmation code to email
   * @param email
   * @returns {Promise<any>}
   */
  const sendPasswordResetMail = async ({ username }) => {
    await Auth.forgotPassword(username);
    setResetPasswordAccount({
      username: username,
    });
  };

  /**
   * change user password
   * @param username
   * @param code
   * @param newPassword
   * @returns {Promise<string>}
   */
  const resetPassword = async ({ username, code, newPassword }) =>
    Auth.forgotPasswordSubmit(username, code, newPassword);

  const changePassword = async ({ oldPassword, newPassword }) => {
    const user = await Auth.currentAuthenticatedUser();
    return Auth.changePassword(user, oldPassword, newPassword);
  };

  const value = {
    user,
    unverifiedAccount,
    resetPasswordAccount,
    userLoading,
    signIn,
    signOut,
    signUp,
    confirmAccount,
    sendPasswordResetMail,
    resendConfirmCode,
    resetPassword,
    changePassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
