
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoute from './PrivateRoute'
import SignUp from './pages/SignUp';
import NurseDetail from './pages/nurses/NurseDetail';
import EditNurseForm from './pages/nurses/EditNurseForm';
import CreateNurseForm from './pages/nurses/CreateNurseForm'
import './public';

function App() {
  let token = localStorage.getItem('token');
  return (
    <BrowserRouter>
      {/* {token &&
        <Header />} */}
      <Routes>
        <Route path='/' element={<PrivateRoute>
            <Header />
          </PrivateRoute>}>
          <Route index element={<Home />} />
          <Route path="/nurses/:id" element={<NurseDetail/>} />
          <Route path="/nurses/create" element={<CreateNurseForm/>} />
          <Route path="/nurses/:id/edit" element={<EditNurseForm/>} />
        </Route>

        {/* <Route element={<PrivateRoute/>}>
          <Route index element={<Home />} />
          <Route path="/nurses/:id" element={<NurseDetail/>} />
          <Route path="/nurses/create" element={<CreateNurseForm/>} />
        </Route>
         */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
