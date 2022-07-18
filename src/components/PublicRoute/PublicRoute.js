import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';

export default function PublicRoute({
  children,
  restricted = false,
  // navigateTo,
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const location = useLocation();
  const from = location.state?.from || '/diary';
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={from} /> : children;
}
