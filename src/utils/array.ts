

export const prioritizeByValue = (arr: any, property:string) => {
    if(!arr.length) {
        return [];
    }
    
    arr.unshift(arr.splice(arr.findIndex((item:any) => item[property]), 1)[0])

    return arr;
} 