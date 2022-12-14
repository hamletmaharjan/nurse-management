import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

import { connect } from 'react-redux';

import { toast } from 'react-toastify';

import { login as loginAction } from '../actions/authAction';

import {login} from '../services/userService';
import {setAccessToken} from '../services/authService';

function Login (props:any){
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

	const handleChange = (event:any) => {
		let name = event.target.name;
    let val = event.target.value;
		switch(name) {
			case 'email':
				setEmail(val);
				break;
			case 'password':
				setPassword(val);
				break;
			default:
				break;
		}
	}

	const handleSubmit = (e:any)=> {
		e.preventDefault();
		login({email: email, password: password})
		.then((response) => {
      setAccessToken(response.token);
			let userInfo = {
				id: response.id,
				email: response.email
			}
			localStorage.setItem('user', JSON.stringify(userInfo));

      props.loginAction(response);
			navigate('/');
		})
		.catch(function (error) {
			if (error.response) {
        if(error.response.data){
          setMessage(error.response.data.message);
        }
        if(error.response.status === 500) {
          toast.error("Internal Server Error", {
            position: toast.POSITION.BOTTOM_RIGHT
          });
        }
      } else if (error.request) {
        toast.error("Server Error", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      } else {
        console.log('Error', error.message);
      }
		});

	} 

	return (
    <div className="row">
      <div className="col-sm-3">
      </div>
      <div className="col-sm-6 mt-4">
        <form  onSubmit={handleSubmit} className="py-4 px-4 cool">
          <div className="text-danger mt-2 mb-3">
            {message}
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleChange} required/>
          </div>
          <input type="submit" className="btn btn-primary" value="Login" />
          <Link className="btn btn-success" style={{marginLeft: 15}} to="/signup">Signup</Link>  
        </form>
        
      </div>
      <div className="col-sm-3">
      </div>
   
    </div>
     
	)
}


const mapStateToProps = (state:any) => {
	return {
	  authState: state
	}
}
  
const mapDispatchToProps = (dispatch:any) => {
  return {
    loginAction: (auth:any) => dispatch(loginAction(auth))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
