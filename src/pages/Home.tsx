import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

import { toast } from 'react-toastify';

import { fetchNurses, updateRoundingManager } from '../services/nurseService';

import { Nurse } from '../interfaces/nurse';

function Home() {
  const [nurses,setNurses] = useState<Nurse[]>([]);

  const getLink = (nurse: Nurse): string => {
    return `/nurses/${nurse.id}`;
  }

  useEffect(() => {
    fetchAndSetNurses();
  },[]);

  const fetchAndSetNurses = () => {
    fetchNurses()
    .then(data=> {
      const result = [...data];
      result.unshift(result.splice(result.findIndex(e => e.is_rounding_manager), 1)[0])
        setNurses(result);
    })
  }

  const handleChange = (nurse:any) => {
    updateRoundingManager(nurse.id).then(data => {
      toast.success("Successfully set the Rounding Manager", {
        position: toast.POSITION.BOTTOM_RIGHT
      })
      fetchAndSetNurses();
    })
  }

  return ( 
      <div className="container">
        <div className="row">
          <table className="table table-condensed">
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Working Days</th>
                <th>Address</th>
                <th>Rounding Manager</th>
              </tr>
            </thead>
            <tbody>
              {nurses.map((nurse, index) => {
                return (
                  <tr key={index}>
                    <td><span><Link to={getLink(nurse)}>{nurse.full_name}</Link></span></td>
                    <td>{nurse.contact}</td>
                    <td>{nurse.email}</td>
                    <td>{nurse.start_time || '-'}</td>
                    <td>{nurse.end_time || '-'}</td>
                    <td>{nurse.working_days || '-'}</td>
                    <td>{nurse.address || '-'}</td>
                    <td><input className="form-check-input" type="checkbox" value="" readOnly={nurse.is_rounding_manager} checked={nurse.is_rounding_manager} onChange={() =>handleChange(nurse)}/></td>
                  </tr>
                )
              })
            }
            </tbody>
          </table>
        </div>
       
      </div>
    )
}

export default Home;