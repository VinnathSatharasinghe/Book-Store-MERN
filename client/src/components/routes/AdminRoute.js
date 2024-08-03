import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../Auth/AuthContext';

const AdminRoute = ({ element }) => {
  const { isAdmin } = useContext(AuthContext);
  return isAdmin ? element : <Navigate to="/login" />;
};

AdminRoute.propTypes = {
  element: PropTypes.node.isRequired,
};

export default AdminRoute;
