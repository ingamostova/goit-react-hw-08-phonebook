// import { useAuth } from 'hooks';
// import { Route, Redirect } from 'react-router-dom';

// export const PrivateRoute = ({ children, ...routeProps }) => {
//   const { isLoggedIn } = useAuth();

//   return (
//     <Route {...routeProps}>
//       {isLoggedIn ? children : <Redirect to="/login" />}
//     </Route>
//   );
// };

import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  //   const shouldRedirect = !isLoggedIn && !isRefreshing;
  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
