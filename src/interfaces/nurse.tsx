export interface Nurse { 
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
  is_rounding_manager?: boolean
}