import React, { useEffect, useState } from "react";

import {Link} from 'react-router-dom';

import {fetchNurses} from '../services/nurseService';
interface Nurse { 
  full_name:string, 
  contact:string, 
  working_days?: string,
  start_time?: string,
  end_time?: string, 
  address?: string,
  image?: string,
  email: string,
  user_id?: number,
  id?:number,
}

function Home() {
  const [nurses,setNurses] = useState<Nurse[]>([]);

  const getLink = (nurse: Nurse): string => {
    return `/nurses/${nurse.id}`;
  }

  useEffect(() => {
    fetchNurses()
    .then(data=> {
        setNurses(data);
    })
  },[]);
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