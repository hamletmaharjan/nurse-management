
import './App.css';

import {  useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { connect } from 'react-redux';

import { ToastContainer } from 'react-toastify';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import PrivateRoute from './PrivateRoute';
import NurseDetail from './pages/nurses/NurseDetail';
import EditNurseForm from './pages/nurses/EditNurseForm';
import CreateNurseForm from './pages/nurses/CreateNurseForm'

import { login, logout } from './actions/authAction';

import * as authService from './services/authService';
// import * as userService from './services/userService';

import './public';

function App(props:any) {
  useEffect(() => {
    let token = authService.getAccessToken();
    let userInfo = authService.getUserInfo();
    if(token && userInfo){
      props.login({...userInfo,token});
    }
    else{
      props.logout();
    }
    
  },[]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PrivateRoute>
            <Header />
          </PrivateRoute>}>
          <Route index element={<Home />} />
          <Route path="/nurses/:id" element={<NurseDetail/>} />
          <Route path="/nurses/create" element={<CreateNurseForm/>} />
          <Route path="/nurses/:id/edit" element={<EditNurseForm/>} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
  </BrowserRouter>
  );
}

const mapStateToProps = (state:any) => {
  return {
    authState: state
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    login: (auth:any) => dispatch(login(auth)),
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
