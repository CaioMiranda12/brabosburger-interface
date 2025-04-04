import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { Header } from '../components';

function PrivateRoute({ children }) {
  const user = localStorage.getItem('devburger:userData');

  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};
