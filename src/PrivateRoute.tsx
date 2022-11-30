import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ children }: any) => {
    let token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to='/login' />;
  }

  return children;
};

export default PrivateRoute;