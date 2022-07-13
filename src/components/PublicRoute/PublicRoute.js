import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { getCalories } from '../../redux/auth/authSelectors';

export default function PublicRoute({
  children,
  restricted = false,
  navigateTo,
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const calories = useSelector(getCalories);

  navigateTo = calories ? '/diary' : '/calculator';

  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={navigateTo} /> : children;
}
