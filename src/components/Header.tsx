import { Link, NavLink , useNavigate} from "react-router-dom";
import { Outlet } from "react-router-dom"

import userImg from '../assets/images/user.png';

function Header(props:any) {
  const navigate = useNavigate();

  const handleLogout = (e:any)=> {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  }


  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#">Nurse Management</a>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
            <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <div>
            <div className="dropdown">
              <span className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src={userImg} height="30px" width="30px" alt="user"/>
              </span>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" onClick={handleLogout}>Logout</a>
              </div>
            </div>
            
          </div>
          <Link className="btn btn-primary" to="/nurses/create">Create Nurse</Link>
      </form>
    </div>
  </nav>
      
      <div className="page-wrapper">
        <Outlet/>
      </div>
    </div>
  )
}
  
export default Header;
