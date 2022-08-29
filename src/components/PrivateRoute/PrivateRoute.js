import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';

export default function PrivateRoute({ children, navigateTo = '/signin' }) {
  const location = useLocation();
  const isLoggedIn = useSelector(getIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to={navigateTo} state={{ from: location }} replace />;
  }

  return children;
}
