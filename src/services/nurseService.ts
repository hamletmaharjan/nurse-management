import * as http from "../utils/http";

export const createNurse = (formData:object) => {
  return http.post('/nurses', 
  {
    body: formData
  });
};

export const fetchNurses = () => {
  return http.get('/nurses');
};

export const fetchNurse = (id:string) => {
  if (!id.length) {
    throw new Error("Id must not be empty");
  }
  return http.get('/nurses/' + id);
};

export const updateNurse = (id:string, formData:object) => {
  return http.put('/nurses/' + id, 
  {
    body: formData
  });
};

export const deleteNurse = (id:string) => {
  return http.remove('/nurses/' + id);
};

export const updateRoundingManager = (id: string) => {
    return http.patch('nurses/'+ id+'/set-rounding-manager');
}