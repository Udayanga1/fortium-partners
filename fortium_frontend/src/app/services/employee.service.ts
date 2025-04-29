import { Injectable, signal } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList = signal<Employee[]>([]);

  add(employee: Employee) {
    this.employeeList.set([...this.employeeList(), employee]);
  }

  remove(id: number) {
    this.employeeList.set(this.employeeList().filter((e) => e.id !== id));
  }

  constructor() { }
}
