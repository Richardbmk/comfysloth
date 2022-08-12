import useAuth from '../../hooks/useAuth';
import { useEffect } from 'react';
import LoadingSpinner from '../LoadingSpinner';
import { useNavigate } from 'react-router-dom';

const PrivateLayout = ({ children }) => {
  const navigate = useNavigate();

  const { user, userLoading } = useAuth();

  // listen for auth changes
  useEffect(() => {
    if (user === null && !userLoading) {
      navigate('/login', { replace: true });
    }
  }, [user, userLoading]);

  return <>{user ? children : <LoadingSpinner />}</>;
};

export default PrivateLayout;
