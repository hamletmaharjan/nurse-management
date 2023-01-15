import {useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { toast } from 'react-toastify';

import {updateNurse, createNurse, fetchNurse} from '../../services/nurseService';

interface Nurse { 
  full_name?:string, 
  contact?:string, 
  working_days?: string,
  start_time?: string,
  end_time?: string, 
  address?: string,
  image?: string,
  email?: string,
  user_id?: number,
  id?:number,
}

function AddEditNurseForm() {
  let navigate = useNavigate();

  const [image, setImage] = useState<any>(null);
  const [inputs, setInputs] = useState<Nurse>({});

  let { id }:any = useParams(); 

  let isEditMode = id? true: false;

  useEffect(() => {
    if(!id) {
      console.log('create mode');
      return;
    }else{
      console.log('editmode')
    }
    fetchNurse(id)
    .then(data=> {
        setInputs(data.data);
    })
  },[id]);

  const handleChange = (event:any) => {
    const name = event.target.name;
    const value = event.target.value;
    if(name==="image") {
      setImage(event.target.files[0]);
      return;
    }
    setInputs(values => ({...values, [name]: value}))
  }

	const handleSubmit = (e:any)=> {
		e.preventDefault();

    const formData = new FormData();
    formData.append('full_name', inputs.full_name || '');
    formData.append('email', inputs.email || '');
    formData.append('contact', inputs.contact || '');
    formData.append('working_days', inputs.working_days|| '');
    formData.append('start_time', inputs.start_time || '');
    formData.append('end_time', inputs.end_time || '');
    formData.append('address' , inputs.address || '');
    if(image!=null) {
      formData.append('image', image, image.name);
    }


    if(!isEditMode){
      createNurse(formData)
      .then(function (response:any) {
        toast.success("Successfully add the Nurse", {
          position: toast.POSITION.BOTTOM_RIGHT
        })
        navigate('/');
      })
      .catch(function (error:any) {
        toast.error("Error while creating nurse", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      });

      return;
    }

    updateNurse(id,formData)
    .then(function (response:any) {
      toast.success("Successfully updated the Nurse", {
        position: toast.POSITION.BOTTOM_RIGHT
      })
      navigate('/');
    })
    .catch(function (error:any) {
      toast.error("Error while updating nurse", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    });
	} 


  return (
    <div className="container">
      <form  onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" name="full_name" value={inputs.full_name} placeholder="Name" onChange={handleChange} required/>
        </div>
      
        <div className="form-group">
          <label>Contact</label>
          <input type="text" className="form-control" name="contact" placeholder="Contact" value={inputs.contact} onChange={handleChange} required/>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" name="email" placeholder="Email" value={inputs.email} onChange={handleChange} required/>
        </div>

        <div className="form-group">
          <label>Start Time</label>
          <input type="text" className="form-control" name="start_time" value={inputs.start_time} placeholder="Start Time" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>End Time</label>
          <input type="text" className="form-control" name="end_time" value={inputs.end_time} placeholder="End Time" onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label>Working Days</label>
          <input type="text" className="form-control" name="working_days" value={inputs.working_days} placeholder="Working Days" onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label>Address</label>
          <input type="text" className="form-control" name="address" value={inputs.address} placeholder="Address" onChange={handleChange} />
        </div>

        <div className="form-group custom-file">
          <label className="custom-file-label">Choose Image</label>
          <input type="file" className="custom-file-input" name="image" onChange={handleChange} />
          
        </div>
        <input type="submit" style={{marginTop: 15}} className="btn btn-primary" value={isEditMode? 'Update': 'Create'} />
      </form>
     
    </div>
  )
}

export default AddEditNurseForm;
