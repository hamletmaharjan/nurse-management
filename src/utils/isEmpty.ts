/**
 * Checks if given array or object is empty
 * 
 * @param {Array|Object}value 
 * @returns {Boolean}
 */
export const isEmpty = (
  value: Array<any> | Object | null | undefined | String
): boolean => {
  return (
    value == null || // value == null will check for null and undefined
    (typeof value === "object" && Object.keys(value).length === 0) || // typeof value === 'object' will check for object and array
    (typeof value === "string" && value.trim().length === 0)
  );
};