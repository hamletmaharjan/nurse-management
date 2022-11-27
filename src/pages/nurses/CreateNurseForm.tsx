import {useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {createNurse} from '../../services/nurseService';

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

function CreateArticle() {
  let navigate = useNavigate();
  // const [name, setTitle] = useState('');
  // const [contact, setContact] = useState('');
	// const [email, setEmail] = useState('');
  // const [startTime, setStartTime] = useState('');
  // const [endTime, setEndTime] = useState('');
  // const [workingDays, setWorkingDays] = useState('');
  // const [address, setAddress] = useState('');
  const [image, setImage] = useState<any>(null);
  const [inputs, setInputs] = useState<Nurse>({});

  const handleChange = (event:any) => {
    const name = event.target.name;
    const value = event.target.value;
    if(name==="image") {
      setImage(event.target.files[0]);
      return;
    }
    setInputs(values => ({...values, [name]: value}))
  }

	// const handleChange = (event:any) => {
	// 	let name = event.target.name;
  //   let val = event.target.value;
	// 	switch(name) {
	// 		case 'name':
	// 			setTitle(val);
	// 			break;
	// 		case 'email':
	// 			setEmail(val);
	// 			break;
  //     case 'image':
  //       setImage(event.target.files[0]);
  //       break;
	// 		default:
	// 			console.log('invalid');
	// 			break;
	// 	}
	// }

	const handleSubmit = (e:any)=> {
		e.preventDefault();

    console.log('data', inputs, image);
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

    createNurse(formData)
    .then(function (response:any) {
      console.log('res', response);
      navigate('/');
    })
    .catch(function (error:any) {
      console.log(error);
    });
	} 


  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" name="full_name" placeholder="Name" onChange={handleChange} required/>
        </div>
      
        <div className="form-group">
          <label>Contact</label>
          <input type="text" className="form-control" name="contact" placeholder="Email" onChange={handleChange} required/>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" name="email" placeholder="Email" onChange={handleChange} required/>
        </div>

        <div className="form-group">
          <label>Start Time</label>
          <input type="text" className="form-control" name="start_time" placeholder="Start Time" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>End Time</label>
          <input type="text" className="form-control" name="end_time" placeholder="End Time" onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label>Working Days</label>
          <input type="text" className="form-control" name="working_days" placeholder="Working Days" onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label>Address</label>
          <input type="text" className="form-control" name="address" placeholder="Address" onChange={handleChange} />
        </div>

        <div className="form-group custom-file">
          <label className="custom-file-label">Choose Image</label>
          <input type="file" className="custom-file-input" name="image" onChange={handleChange} />
          
        </div>
        <input type="submit" style={{marginTop: 15}} className="btn btn-primary" value="Submit" />
      </form>
    </div>
  )
}

export default CreateArticle;
