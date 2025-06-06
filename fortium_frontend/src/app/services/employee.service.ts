import { Injectable, signal } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList = signal<Employee[]>([]);

  add(employee: Employee) {
    this.employeeList.set([...this.employeeList(), employee]);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`http://localhost:8080/employee/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`http://localhost:8080/employee/update/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/employee/delete/${id}`);
  }

  constructor(private http: HttpClient) { }
}
