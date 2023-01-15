
/**
 * Prioritize array by property.
 * 
 * @param {Array} arr 
 * @param {String} property 
 * @returns {Array}
 */
export const prioritizeByValue = (arr: any, property:string) => {
    if(!arr.length) {
        return [];
    }
    
    arr.unshift(arr.splice(arr.findIndex((item:any) => item[property]), 1)[0])

    return arr;
} 