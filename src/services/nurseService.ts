import * as http from "../utils/http";

/**
 * Create a new nurse.
 * 
 * @param formData 
 * @returns {Promise}
 */
export const createNurse = (formData:object) => {
  return http.post('/nurses', 
  {
    body: formData
  });
};

/**
 * Fetch all the nurses.
 * 
 * @returns {Promise}
 */
export const fetchNurses = () => {
  return http.get('/nurses');
};

/**
 * Fetch single nurse.
 * 
 * @param id 
 * @returns {Promise}
 */
export const fetchNurse = (id:string) => {
  if (!id.length) {
    throw new Error("Id must not be empty");
  }
  return http.get('/nurses/' + id);
};

/**
 * Update nurse by id.
 * 
 * @param id 
 * @param formData 
 * @returns {Promise}
 */
export const updateNurse = (id:string, formData:object) => {
  return http.put('/nurses/' + id, 
  {
    body: formData
  });
};

/**
 * Delete nurse by id.
 * 
 * @param id 
 * @returns {Promise}
 */
export const deleteNurse = (id:string) => {
  return http.remove('/nurses/' + id);
};

/**
 * Update rounding manager.
 * 
 * @param id 
 * @returns {Promise}
 */
export const updateRoundingManager = (id: string) => {
    return http.patch('nurses/'+ id+'/set-rounding-manager');
}