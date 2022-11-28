import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import {fetchNurse, deleteNurse} from '../../services/nurseService';
import {getUserInfo} from '../../services/authService';

function NurseDetail() {   
  let { id } = useParams(); 
  let navigate = useNavigate();

  const [nurse, setNurse] = useState<any>({});

  let user = getUserInfo();
  let editLink = '/nurses/' + nurse.id + '/edit';
  const imgLink = nurse.image;

  useEffect(() => {
    fetchNurse(id|| '')
    .then(data=> {
        setNurse(data.data);
    })
  },[id]);

  const handleDelete = (e:any)=> {
    deleteNurse(id || '')
    .then(function (response) {
      navigate('/');
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  if(nurse){
    return (
      <div>
        <div className="container">
            test
          <div className="col-sm-2">
          </div>
          <div className="col-sm-8">
            <div className="row">
              <h1>{nurse.name}</h1>
              <img src={imgLink} className="main-img" alt="nurse"/>
              <p className="fs-2 mt-4 fw-bold">{nurse.description}</p>
            </div>
            <div className="row">
            {nurse.user_id === user.id &&
              <div className="mt-4">
                <Link to={editLink} className="btn btn-secondary">Edit</Link>
                <button className="btn btn-danger" style={{marginLeft: 15}} onClick={handleDelete}>Delete</button>
              </div>
            }
            </div>
          </div>
          <div className="col-sm-2">
          </div>
        </div>
      </div> 
    )
  }
  return <div>not found</div>
}


export default NurseDetail;
