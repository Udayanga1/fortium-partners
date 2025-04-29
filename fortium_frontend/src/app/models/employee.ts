export interface Employee {
    id?: number;            
    name: string;            
    email: string;           
    department: 'HR' | 'IT' | 'Finance' | 'Operations';  
    createdAt?: Date;         
    updatedAt?: Date;          
  }