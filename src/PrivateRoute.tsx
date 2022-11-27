// import {
//     Navigate,
//     redirect,
//   } from "react-router-dom";
  
//   const PrivateRoute = ( { children }:any ) => {
//     let token = localStorage.getItem('token');
//     console.log('topken', token)
//     // return <Route {...rest} render={(props:any) => (
//     //   token ? <Component {...props} /> : redirect("/login")
//     // )} />

//     if (!token) {
//         // not logged in so redirect to login page with the return url
//         return <Navigate to='/login' />;
//     }

//     // authorized so return child components
//     return children;
//   }
  
//   export default PrivateRoute;



// import { Navigate, Outlet } from 'react-router-dom'
// const PrivateRoute = () => {
//     let token = localStorage.getItem('token');
//     return (
//     token ? <Outlet/> : <Navigate to='/login'/>
//   )
// }

//   export default PrivateRoute;


import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ children }: any) => {
    let token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to='/login' />;
  }

  return children;
};

export default PrivateRoute;