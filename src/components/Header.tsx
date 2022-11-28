import { Link, NavLink , useNavigate} from "react-router-dom";
import { Outlet } from "react-router-dom"
// import { connect } from 'react-redux';

import userImg from '../assets/images/user.png';
// import { logout } from '../actions/authAction';

function Header(props:any) {
  const navigate = useNavigate();

  const handleLogout = (e:any)=> {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // props.logout();
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
          <Link className="nav-link dropdown-toggle" to="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src={userImg} height="30px" width="30px" alt="user"/>
              </Link>
              
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <button className="dropdown-item" onClick={handleLogout} >Logout</button>
              </div>
          </div>
          <Link className="btn btn-primary" to="/nurses/create">Create Nurse</Link>
      </form>
    </div>
  </nav>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">MyApp</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
            </ul>

            <div className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src={userImg} height="30px" width="30px" alt="user"/>
              </Link>
              
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <button className="dropdown-item" onClick={handleLogout} >Logout</button>
              </div>
            </div>
          <Link className="btn btn-primary" to="/articles/create">Create Article</Link>
        </div>
      </nav> */}
      <div className="page-wrapper">
        <Outlet/>
      </div>
    </div>
  )
}

// const mapStateToProps = (state) => {
// 	return {
// 	  authState: state
// 	}
// }
  
// const mapDispatchToProps = (dispatch) => {
//   return {
//     logout: () => dispatch(logout())
//   }
// }
  
export default Header;
